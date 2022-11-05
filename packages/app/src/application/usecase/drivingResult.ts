import { useCallback } from "react"
import { Value, anznCreator } from "domain/service/anzn/creator"
import { useLoginUseCase } from "application/usecase/login"

export const useDrivingResultUseCase = () => {
  const { account } = useLoginUseCase()
  const { ethereum } = window as any

  const execute = useCallback(
    async (value: Value) => {
      if (!account || !ethereum) throw new Error()
      const address = account.getAddress()
      await anznCreator(address, value, ethereum)
    },
    [account]
  )

  return {
    execute,
  }
}
