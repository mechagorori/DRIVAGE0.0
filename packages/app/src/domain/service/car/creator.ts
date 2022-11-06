import { ulid } from "ulid"
import { StandardCar } from "../../../const/car"
import { Car } from "../../model/car"
import { db, storage } from "../../../infrastructure/firebase"
import { UserQuery } from "../../../infrastructure/query/userQuery"
import { UserRepository } from "../../../infrastructure/repository/userRepository"
import { Provider } from "../../../infrastructure/web3/provider"
import {
  ContractFactory,
  StandardCar as StandardCarContract,
} from "../../../infrastructure/web3/contract"
import { CarStorage } from "../../../infrastructure/storage/car"
import { ethers } from "ethers"

export const carCreator = async (userAddress: string, ethereum: any) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  if (!user) throw Error()
  // metaデータ作成
  const fileName = `${ulid()}.json`
  const storageHandler = new CarStorage(storage)
  const url = await storageHandler.save(
    JSON.stringify(StandardCar.meta),
    fileName
  )
  // TODO 車NFTをmint
  const provider = await Provider.build(ethereum).catch((e) => {
    console.log(`build: ${e}`)
    throw e
  })
  if (!provider) throw new Error()
  const signer = provider.getSigner()
  const contract = ContractFactory.build(new StandardCarContract(), signer)
  const nftTxn = await contract.safeMint(url, {
    value: ethers.utils.parseEther("0.01"),
  })
  // const nftTxn = await contract.safeFreeMint(url);
  await nftTxn.wait()
  const address = nftTxn.hash
  console.log(address)
  //　車追加
  user.addCar(new Car({ address, meta: url }))
  //  データ保存
  const userRepo = new UserRepository(db)
  await userRepo.save(user)
}
