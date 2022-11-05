import { useCallback } from "react"
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil"
import { login as loginService } from "../../domain/service/user/login"
import { User } from "../../domain/model/user"

const initialValue: { account: User | null } = { account: null }

const accountState = atom({
  key: "account",
  default: initialValue,
})

export const accountSelecter = selector({
  key: "account_handler",
  get: ({ get }) => get(accountState),
})

export const useLoginUseCase = () => {
  const value = useRecoilValue(accountSelecter)
  const handler = useSetRecoilState(accountState)
  const onChange = useCallback(
    (data?: User | null) => {
      handler({ ...value, ...{ account: data ?? null } })
    },
    [handler, value]
  )
  const { ethereum } = window as any

  const login = useCallback(async () => {
    if (!ethereum) return
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    })
    if (!accounts.length) return
    return await loginService(accounts[0]).then((res) => {
      onChange(res ?? null)
      return res
    })
  }, [ethereum, onChange])

  return {
    account: value.account,
    login,
  }
}
