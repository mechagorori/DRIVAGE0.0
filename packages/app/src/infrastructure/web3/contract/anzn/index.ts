import { IContract } from ".."
import anzn from "./ANZNScore.json"

export class Anzn implements IContract {
  readonly address: string
  readonly abi: any
  constructor() {
    this.address = "0xad09f92243313c92fc0993d36088e71d68c89cd1"
    this.abi = anzn.abi
  }
}
