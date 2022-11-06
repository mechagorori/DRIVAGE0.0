import { useEffect } from "react"
import MetaMaskSDK from "@metamask/sdk"

// 擬似シングルトン
class Ethereum {
  private handler: any = null
  onChange = (handler: any) => (this.handler = handler)
  getHandler = () => this.handler
}

const _ethereum = new Ethereum()

export const useEthereumUseCase = () => {
  const init = () => {
    const { ethereum } = window as any
    if (ethereum) return ethereum
    const MMSDK = new MetaMaskSDK({
      dappMetadata: {
        name: "DRIVAGE",
        url: process.env.REACT_APP_URL as string,
      },
    })
    return MMSDK.getProvider()
  }

  useEffect(() => {
    !_ethereum?.getHandler() && _ethereum.onChange(init())
  }, [])

  return { ethereum: _ethereum?.getHandler() }
}
