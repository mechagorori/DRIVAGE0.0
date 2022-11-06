import { useCallback } from "react"
import { carCreator } from "domain/service/car/creator"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"

export const usePurchaseUseCase = () => {
  const { account, refetch } = useLoginUseCase()
  const { ethereum } = window as any
  const { onChange } = useLoadingUseCase()

  const execute = useCallback(async () => {
    onChange(true)
    if (!account || !ethereum) {
      onChange(false)
      throw new Error()
    }
    const address = account.getAddress()
    await carCreator(address, ethereum).catch((e) => {
      onChange(false)
      throw e
    })
    await refetch()
    onChange(false)
  }, [account, ethereum])

  return {
    execute,
  }
}
