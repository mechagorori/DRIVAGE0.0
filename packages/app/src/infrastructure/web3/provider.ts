import Connector from "@walletconnect/client";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

export class Provider {
  static build = async () => {
    const web3Provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com"
    );
    return web3Provider;
  };
}
