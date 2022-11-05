import { ethers } from "hardhat";

async function main() {
//   const CarNFT = await ethers.getContractFactory("CarNFT");
//   const carNFT = await CarNFT.deploy();

//   await carNFT.deployed();

//   console.log("CarNFT contract deployed to:", carNFT.address);

  const ANZNScore = await ethers.getContractFactory("ANZNScore");
  const anznScore = await ANZNScore.deploy();

  await anznScore.deployed();

  console.log("ANZN contract deployed to:", anznScore.address);

  const Dcoin = await ethers.getContractFactory("Dcoin");
  const dcoin = await Dcoin.deploy();

  await dcoin.deployed();

  console.log("Dcoin contract deployed to:", dcoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});