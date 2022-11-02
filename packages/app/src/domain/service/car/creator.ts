import { ulid } from "ulid";
import { StandardCar } from "../../../const/car";
import { Car } from "../../model/car";
import { db, storage } from "../../../infrastructure/firebase";
import { UserQuery } from "../../../infrastructure/query/userQuery";
import { UserRepository } from "../../../infrastructure/repository/userRepository";
import { CarStorage } from "../../../infrastructure/storage/car";

export const carCreator = async (userAddress: string) => {
  // データ検索
  const userQuery = new UserQuery(db);
  const user = await userQuery.find(userAddress);
  if (!user) throw Error();
  // metaデータ作成
  const url = `${ulid()}.json`;
  const storageHandler = new CarStorage(storage);
  storageHandler.save(JSON.stringify(StandardCar), url);
  // TODO 車NFTをmint
  const address = "";
  //　車追加
  user.addCar(new Car({ address, meta: url }));
  //  データ保存
  const userRepo = new UserRepository(db);
  await userRepo.save(user);
};