import { IContract } from ".."
import dcoin from "./Dcoin.json"

export class Dcoin implements IContract {
  readonly address: string
  readonly abi: any
  constructor() {
    this.address = "0x8146756d8baed424cbc10ee3add4d2a85daeea11"
    this.abi = dcoin.abi
  }
}
