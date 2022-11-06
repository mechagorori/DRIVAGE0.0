import {
  ContractFactory,
  DrivageFactory as DrivageFactoryContract,
} from "../../../infrastructure/web3/contract"
import { Provider } from "../../../infrastructure/web3/provider"
import { BigNumber } from "ethers"

export const anznGetter = async (userAddress: string, ethereum: any) => {
  const provider = await Provider.build(ethereum).catch((e) => {
    console.log(`build: ${e}`)
    throw e
  })
  if (!provider) throw new Error()
  const signer = provider.getSigner()
  const anznContract = ContractFactory.build(
    new DrivageFactoryContract(),
    signer
  )
  const anznTxn: BigNumber = await anznContract.getAnznBalanceOf(userAddress)
  return anznTxn.toNumber() ?? 0
}
