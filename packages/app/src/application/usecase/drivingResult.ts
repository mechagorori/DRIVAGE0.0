import { useCallback } from "react"
import { Value, anznCreator } from "domain/service/anzn/creator"
import { useLoginUseCase } from "application/usecase/login"

export const useDrivingResultUseCase = () => {
  const { account } = useLoginUseCase()
  const execute = useCallback(
    async (value: Value) => {
      if (!account) throw new Error()
      const address = account.getAddress()
      await anznCreator(address, value)
    },
    [account]
  )

  return {
    execute,
  }
}
