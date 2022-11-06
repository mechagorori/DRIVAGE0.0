import { db } from "../../../infrastructure/firebase"
import { Anzn, AnznArgs } from "../../model/anzn"
import { UserQuery } from "../../../infrastructure/query/userQuery"
import { UserRepository } from "../../../infrastructure/repository/userRepository"
import { Provider } from "../../../infrastructure/web3/provider"
import {
  ContractFactory,
  Anzn as AnznContract,
  Dcoin as DcoinContract,
  DrivageFactory as DrivageFactoryContract,
} from "../../../infrastructure/web3/contract"

export type Value = Omit<AnznArgs, "address">
export const anznCreator = async (
  userAddress: string,
  value: Value,
  ethereum: any
) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  if (!user) throw Error()
  //　Anzen追加
  const amount = Anzn.calcTotalPoint(value.details)
  // TODO スマコン書き込み後、アドレス取得
  const provider = await Provider.build(ethereum).catch((e) => {
    console.log(`build: ${e}`)
    throw e
  })
  if (!provider) throw new Error()
  // const signer = provider.getSigner()
  // const contract = ContractFactory.build(new AnznContract(), signer)
  // const anznTxn = await contract.addAnzn(amount)
  // await anznTxn.wait()
  // const address = anznTxn.hash
  // const dcoinContract = ContractFactory.build(new DcoinContract(), signer)
  // const dcoinTxn = await dcoinContract.mint(await signer.getAddress(), amount)
  // await dcoinTxn.wait()
  const signer = provider.getSigner()
  const contract = ContractFactory.build(new DrivageFactoryContract(), signer)
  const drivageFactory = await contract.updateBalances(amount)
  await drivageFactory.wait()
  const address = drivageFactory.hash
  user.addAnzn(
    new Anzn({
      address,
      ...value,
    })
  )
  //  データ保存
  const userRepo = new UserRepository(db)
  await userRepo.save(user)
}
