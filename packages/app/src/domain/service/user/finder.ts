import { db } from "../../../infrastructure/firebase"
import { UserQuery } from "../../../infrastructure/query/userQuery"

export type UpdateArgs = {
  name?: string | null
  icon?: string | null
}
export const userFinder = async (userAddress: string) => {
  // データ検索
  const userQuery = new UserQuery(db)
  const user = await userQuery.find(userAddress)
  return user
}
