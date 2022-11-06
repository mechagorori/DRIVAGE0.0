import { useCallback } from "react"
import { Value, anznCreator } from "domain/service/anzn/creator"
import { useLoginUseCase } from "application/usecase/login"
import { useLoadingUseCase } from "application/usecase/loading"

export const useDrivingResultUseCase = () => {
  const { account } = useLoginUseCase()
  const { ethereum } = window as any
  const { onChange } = useLoadingUseCase()

  const execute = useCallback(
    async (value: Value) => {
      onChange(true)
      if (!account || !ethereum) {
        onChange(false)
        throw new Error()
      }
      const address = account.getAddress()
      await anznCreator(address, value, ethereum).catch((e) => {
        onChange(false)
        throw e
      })
      onChange(false)
    },
    [account]
  )

  return {
    execute,
  }
}
