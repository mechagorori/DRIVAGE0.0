import { IContract } from ".."
import drivageFactory from "./DrivageFactory.json"

export class DrivageFactory implements IContract {
  readonly address: string
  readonly abi: any
  constructor() {
    this.address = "0xed1740eDd7BAb6e380A1CE469960F3d4D4cE0482"
    this.abi = drivageFactory.abi
  }
}
