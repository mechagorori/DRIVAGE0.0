import Connector from "@walletconnect/client";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

export class Provider {
  static build = async (connector: Connector) => {
    if (!connector.connected) await connector.connect();
    // ethers.getDefaultProvider();
    //  new ethers.providers.JsonRpcProvider(
    //   "https://polygon-mumbai.g.alchemy.com/v2/NVhuGx8EMj_IMqi8VhunFQQ23ElK0Gaa"
    // );
    const provider = new WalletConnectProvider({
      rpc: {
        // 1: "https://mainnet.mycustomnode.com",
        // 5: "http://172.31.99.154:8546",
        // 137: "https://ropsten.mycustomnode.com",
        80001: "https://rpc-mumbai.maticvigil.com",
      },
      chainId: 80001,
      connector,
    });
    const web3Provider = new ethers.providers.Web3Provider(provider);
    // const web3Provider = new ethers.providers.JsonRpcProvider(
    //   "https://rpc-mumbai.maticvigil.com"
    // );
    return web3Provider;
  };
}
