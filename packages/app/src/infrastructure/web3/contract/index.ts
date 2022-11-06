import { ethers } from "ethers"

export abstract class IContract {
  abstract readonly address: string
  abstract readonly abi: any
}

export class ContractFactory {
  static build = (contract: IContract, provider: any) => {
    return new ethers.Contract(contract.address, contract.abi, provider)
  }
}

export * from "./car"
export * from "./anzn"
export * from "./dcoin"
