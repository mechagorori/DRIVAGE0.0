import { useCallback, useEffect, useState } from "react"
import { dcoinGetter } from "domain/service/dcoin/getter"
import { useLoginUseCase } from "application/usecase/login"
import { useToast } from "application/usecase/toast"
import { useEthereumUseCase } from "./ethereum"

export const useDcoinUseCase = () => {
  const [dcoin, setDcoin] = useState(0)
  const { account } = useLoginUseCase()
  const { ethereum } = useEthereumUseCase()

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
    const _dcoin = await dcoinGetter(address, ethereum).catch((e) => {
      custom(e)
      throw e
    })
    setDcoin(_dcoin)
    return _dcoin
  }, [account, ethereum, notInstallMetaMask, invalidArgument, custom])

  useEffect(() => {
    account && execute()
  }, [account, execute])

  return { dcoin, execute }
}
