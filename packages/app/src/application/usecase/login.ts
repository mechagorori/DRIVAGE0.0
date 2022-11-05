import { useCallback, useState } from "react"
import { login as loginService } from "../../domain/service/user/login"
import { User } from "../../domain/model/user"

export const useLoginUseCase = () => {
  const [account, setAccount] = useState<User | null>(null)
  const { ethereum } = window as any

  const login = useCallback(async () => {
    console.log("Into")
    if (!ethereum) return
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    })
    if (!accounts.length) return
    return await loginService(accounts[0]).then((res) => {
      setAccount(res ?? null)
      return res
    })
  }, [ethereum])

  return {
    account,
    login,
  }
}
