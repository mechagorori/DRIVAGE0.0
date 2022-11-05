import { User } from "../../model/user"
import { db } from "../../../infrastructure/firebase"
import { UserQuery } from "../../../infrastructure/query/userQuery"
import { UserRepository } from "../../../infrastructure/repository/userRepository"

export const login = async (userAddress: string) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  // なければ作成、あればデータを返す
  if (!user) {
    const model = new User({
      address: userAddress,
      name: null,
      icon: null,
      cars: [],
      seasons: [],
      anzns: [],
    })
    const userRepo = new UserRepository(db)
    await userRepo.save(model)
  } else {
    return user
  }
}
