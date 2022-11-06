import { useCallback } from "react"
import { carCreator } from "domain/service/car/creator"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"
import { useToast } from "application/usecase/toast"
import { useEthereumUseCase } from "./ethereum"

export const usePurchaseUseCase = () => {
  const { account, refetch } = useLoginUseCase()
  const { ethereum } = useEthereumUseCase()
  const { onChange } = useLoadingUseCase()
  const { notInstallMetaMask, invalidArgument, custom } = useToast()

  const execute = useCallback(async () => {
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
    await carCreator(address, ethereum).catch((e) => {
      onChange(false)
      custom(e)
      throw e
    })
    await refetch()
    onChange(false)
  }, [
    account,
    ethereum,
    onChange,
    refetch,
    notInstallMetaMask,
    invalidArgument,
    custom,
  ])

  return {
    execute,
  }
}
