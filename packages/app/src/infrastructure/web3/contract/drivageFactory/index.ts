import { IContract } from ".."
import drivageFactory from "./DrivageFactory.json"

export class DrivageFactory implements IContract {
  readonly address: string
  readonly abi: any
  constructor() {
    this.address = "0x7a46480e3e34404a6b8d4c4e8a7c4013584207df"
    this.abi = drivageFactory.abi
  }
}
