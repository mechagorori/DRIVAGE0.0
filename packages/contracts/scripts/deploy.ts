import { ethers } from "hardhat";

async function main() {
//   const CarNFT = await ethers.getContractFactory("CarNFT");
//   const carNFT = await CarNFT.deploy();

//   await carNFT.deployed();

//   console.log("CarNFT contract deployed to:", carNFT.address);

  const Dcoin = await ethers.getContractFactory("Dcoin");
  const dcoin = await Dcoin.deploy();
  await dcoin.deployed();
  console.log("Dcoin contract deployed to:", dcoin.address);

  const DrivageFactory = await ethers.getContractFactory("DrivageFactory");
  const drivageFactory = await DrivageFactory.deploy(dcoin.address);
  await drivageFactory.deployed();
  console.log("DrivageFactory contract deployed to:", drivageFactory.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});