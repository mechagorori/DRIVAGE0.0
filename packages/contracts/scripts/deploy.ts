import { ethers } from "hardhat";

async function main() {
  const CarNFT = await ethers.getContractFactory("CarNFT");
  const carNFT = await CarNFT.deploy();

  await carNFT.deployed();

  console.log("CarNFT contract deployed to:", carNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});