import { ulid } from "ulid";
import Connector from "@walletconnect/client";
import { StandardCar } from "../../../const/car";
import { Car } from "../../model/car";
import { db, storage } from "../../../infrastructure/firebase";
import { UserQuery } from "../../../infrastructure/query/userQuery";
import { UserRepository } from "../../../infrastructure/repository/userRepository";
import { Provider } from "../../../infrastructure/web3/provider";
import {
  ContractFactory,
  StandardCar as StandardCarContract,
} from "../../../infrastructure/web3/contract";
import { ethers } from "ethers";
import { CarStorage } from "../../../infrastructure/storage/car";

export const carCreator = async (userAddress: string) => {
  // データ検索
  const userQuery = new UserQuery(db);
  const user = await userQuery.find(userAddress);
  if (!user) throw Error();
  // metaデータ作成
  const fileName = `${ulid()}.json`;
  const storageHandler = new CarStorage(storage);
  const url = await storageHandler.save(
    JSON.stringify(StandardCar.meta),
    fileName
  );
  // TODO 車NFTをmint
  const provider = await Provider.build().catch((e) => {
    console.log(`build: ${e}`);
    throw e;
  });
  const signer = provider.getSigner(userAddress);
  const contract = ContractFactory.build(new StandardCarContract(), signer);
  console.log("Signer: ", contract.signer);
  // const address = await contract.safeMint(url, {
  //   value: ethers.utils.parseEther("0.01"),
  // });
  const nftTxn = await contract.safeFreeMint(url);
  await nftTxn.wait();
  const address = nftTxn.hash;
  console.log(address);
  //　車追加
  user.addCar(new Car({ address, meta: url }));
  //  データ保存
  const userRepo = new UserRepository(db);
  await userRepo.save(user);
};
