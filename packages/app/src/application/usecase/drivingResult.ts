import { useCallback } from "react"
import { Value, anznCreator } from "domain/service/anzn/creator"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"
import { useToast } from "application/usecase/toast"
import { useEthereumUseCase } from "./ethereum"

export const useDrivingResultUseCase = () => {
  const { account, refetch } = useLoginUseCase()
  const { ethereum } = useEthereumUseCase()
  const { onChange } = useLoadingUseCase()
  const { notInstallMetaMask, invalidArgument, custom } = useToast()

  const execute = useCallback(
    async (value: Value) => {
      onChange(true)
      if (!ethereum) {
        onChange(false)
        notInstallMetaMask()
        throw new Error()
      }
      if (!account) {
        onChange(false)
        invalidArgument()
        throw new Error()
      }
      const address = account.getAddress()
      await anznCreator(address, value, ethereum).catch((e) => {
        onChange(false)
        custom(e)
        throw e
      })
      await refetch()
      onChange(false)
    },
    [
      account,
      ethereum,
      onChange,
      notInstallMetaMask,
      invalidArgument,
      custom,
      refetch,
    ]
  )

  return {
    execute,
  }
}
