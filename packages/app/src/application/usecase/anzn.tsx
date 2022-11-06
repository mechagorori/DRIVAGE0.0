import { useCallback, useEffect, useState } from "react"
import { anznGetter } from "domain/service/anzn/getter"
import { useLoginUseCase } from "application/usecase/login"
import { useToast } from "application/usecase/toast"

export const useAnznUseCase = () => {
  const [anzn, setAnzn] = useState(0)
  const { account } = useLoginUseCase()
  const { ethereum } = window as any
  const { notInstallMetaMask, invalidArgument, custom } = useToast()
  const execute = useCallback(async () => {
    if (!ethereum) {
      notInstallMetaMask()
      throw new Error()
    }
    if (!account) {
      invalidArgument()
      throw new Error()
    }
    const address = account.getAddress()
    const _dcoin = await anznGetter(address, ethereum).catch((e) => {
      custom(e)
      throw e
    })
    setAnzn(_dcoin)
    return _dcoin
  }, [account, ethereum, notInstallMetaMask, invalidArgument, custom])

  useEffect(() => {
    account && execute()
  }, [account, execute])

  return { anzn, execute }
}
