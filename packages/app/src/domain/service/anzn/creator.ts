import { ulid } from "ulid"
import { db } from "../../../infrastructure/firebase"
import { Anzn, AnznArgs } from "../../model/anzn"
import { UserQuery } from "../../../infrastructure/query/userQuery"
import { UserRepository } from "../../../infrastructure/repository/userRepository"

export type Value = Omit<AnznArgs, "address">
export const anznCreator = async (userAddress: string, value: Value) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  if (!user) throw Error()
  //　Anzen追加
  // TODO スマコン書き込み後、アドレス取得
  const address = ulid()
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
