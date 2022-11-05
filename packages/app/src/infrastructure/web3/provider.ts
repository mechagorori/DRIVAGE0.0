import { ethers } from "ethers"

export class Provider {
  static build = async (ethereum: any) => {
    if (!ethereum) return null
    return new ethers.providers.Web3Provider(ethereum)
  }
}
