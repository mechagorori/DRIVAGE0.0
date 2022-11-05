import { IContract } from ".."
import standardCar from "./CarNFT.json"

export class StandardCar implements IContract {
  readonly address: string
  readonly abi: any
  constructor() {
    this.address = "0x76ea92cfd6b6cb0971a7b8e2135506a598d073c9"
    this.abi = standardCar.abi
  }
}
