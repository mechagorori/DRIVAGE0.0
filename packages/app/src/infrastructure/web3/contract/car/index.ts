import { IContract } from "..";
import standardCar from "./CarNFT.json";

export class StandardCar implements IContract {
  readonly address: string;
  readonly abi: any;
  constructor() {
    this.address = "0xc3c4f43b61822ffcf3cfc88691a18182aee9028e";
    this.abi = standardCar.abi;
  }
}
