import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { STAGING_ALCHEMY_KEY, PRIVATE_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {    
    hardhat: {
      accounts: {
        count: 5
      }
    },
    mumbai: {
      url: STAGING_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY]
    },
  }
};

export default config;
