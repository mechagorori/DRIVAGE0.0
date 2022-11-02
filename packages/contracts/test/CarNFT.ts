import { ethers } from "hardhat";
import { token } from "../typechain-types/@openzeppelin/contracts";
const { expect } = require("chai");

describe("Car NFT Factory", function () {
  it("The contract owner should mint an NFT", async function () {
    const [owner] = await ethers.getSigners();

    const CarNFTFactory = await ethers.getContractFactory("CarNFT");

    const carNFTFactory = await CarNFTFactory.deploy();

    await carNFTFactory.deployed();
    console.log("Contract deployed to:", carNFTFactory.address);
    const url = "aaa.json"
    const txn = await carNFTFactory.safeMint(owner.address, url, { value: ethers.utils.parseEther("0.01") });
    // Minting が仮想マイナーにより、承認されるのを待つ。
    await txn.wait();
    const tokenId = 0;

    expect(await carNFTFactory.ownerOf(tokenId)).to.equal(owner.address);
    expect(await carNFTFactory.tokenURI(tokenId)).to.equal(url);
  });
});