import { useCallback } from "react"
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil"
import { login as loginService } from "domain/service/user/login"
import { userFinder } from "domain/service/user/finder"
import { User } from "domain/model/user"
import { useToast } from "application/usecase/toast"
import { useEthereumUseCase } from "./ethereum"

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
  const { notInstallMetaMask, invalidArgument, custom } = useToast()
  const onChange = useCallback(
    (data?: User | null) => {
      handler({ ...value, ...{ account: data ?? null } })
    },
    [handler, value]
  )
  const { ethereum } = useEthereumUseCase()

  const login = useCallback(async () => {
    if (!ethereum) {
      notInstallMetaMask()
      throw new Error()
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    })
    if (!accounts.length) {
      invalidArgument()
      throw new Error()
    }
    return await loginService(accounts[0])
      .then((res) => {
        onChange(res ?? null)
        return res
      })
      .catch((e) => {
        custom(e)
        throw e
      })
  }, [ethereum, onChange, notInstallMetaMask, invalidArgument, custom])

  const refetch = useCallback(async () => {
    if (!value.account) return await login()
    return await userFinder(value.account.getAddress()).then((res) => {
      onChange(res ?? null)
      return res
    })
  }, [value.account, login, onChange])

  return {
    account: value.account,
    login,
    refetch,
  }
}
