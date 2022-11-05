import { db } from "../../../infrastructure/firebase"
import { UserQuery } from "../../../infrastructure/query/userQuery"
import { UserRepository } from "../../../infrastructure/repository/userRepository"

export type UpdateArgs = {
  name?: string | null
  icon?: string | null
}
export const userUpdater = async (userAddress: string, args: UpdateArgs) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  if (!user) throw new Error()
  // 更新
  user.changeName(args?.name ?? null)
  user.changeIcon(args?.icon ?? null)
  const userRepo = new UserRepository(db)
  await userRepo.save(user)
}
