import { useCallback, useEffect, useState } from "react"
import { dcoinGetter } from "domain/service/dcoin/getter"
import { useLoginUseCase } from "application/usecase/login"

export const useDcoinUseCase = () => {
  const [dcoin, setDcoin] = useState(0)
  const { account } = useLoginUseCase()
  const { ethereum } = window as any
  const execute = useCallback(async () => {
    if (!account || !ethereum) {
      throw new Error()
    }
    const address = account.getAddress()
    const _dcoin = await dcoinGetter(address, ethereum).catch((e) => {
      throw e
    })
    setDcoin(_dcoin)
    return _dcoin
  }, [account])

  useEffect(() => {
    execute()
  }, [])

  return { dcoin, execute }
}
