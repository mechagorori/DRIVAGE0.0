import {
  ContractFactory,
  DrivageFactory as DrivageFactoryContract,
} from "../../../infrastructure/web3/contract"
import { Provider } from "../../../infrastructure/web3/provider"
import { BigNumber } from "ethers"

export const dcoinGetter = async (userAddress: string, ethereum: any) => {
  const provider = await Provider.build(ethereum).catch((e) => {
    console.log(`build: ${e}`)
    throw e
  })
  if (!provider) throw new Error()
  const signer = provider.getSigner()
  const dcoinContract = ContractFactory.build(
    new DrivageFactoryContract(),
    signer
  )
  const dcoinTxn: BigNumber = await dcoinContract.getDcoinBalanceOf(userAddress)
  return dcoinTxn.toNumber() ?? 0
}
