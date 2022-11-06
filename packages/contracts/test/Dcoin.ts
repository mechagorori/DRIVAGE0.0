import { ethers } from "hardhat";
import { BigNumber } from "ethers";
const { expect } = require("chai");

describe("Dcoin", function () {
  xit("The owner deploys a Dcoin contract", async function () {
    const [owner, aotherAccount] = await ethers.getSigners();

    const DcoinContractFactory = await ethers.getContractFactory("Dcoin");

    const initialSupply = "100000000000000000000";

    const dcoinContractFactory = await DcoinContractFactory.connect(owner).deploy();

    await dcoinContractFactory.deployed();
    console.log("Contract deployed to:", dcoinContractFactory.address);

    const ownerBalance: BigNumber = await dcoinContractFactory.balanceOf(owner.address);
    const anotherAccountBalance: BigNumber = await dcoinContractFactory.balanceOf(aotherAccount.address);
    const totalSupply: BigNumber = await dcoinContractFactory.totalSupply();

    expect(totalSupply.eq(BigNumber.from(initialSupply))).to.equal(true);
    expect(anotherAccountBalance.isZero()).to.equal(true);
  });
  it("The contract should be able to send some Dcoin to an account", async function () {
    const [owner, anotherAccount] = await ethers.getSigners();
    const DcoinContractFactory = await ethers.getContractFactory("Dcoin");
    const initialSupply = "100000000000000000000";
    const dcoinContractFactory = await DcoinContractFactory.connect(owner).deploy();

    await dcoinContractFactory.deployed();
    console.log("Contract deployed to:", dcoinContractFactory.address);

    let ownerBalance: BigNumber = await dcoinContractFactory.balanceOf(owner.address);
    const totalSupply: BigNumber = await dcoinContractFactory.totalSupply();
    let anotherAccountBalance: BigNumber = await dcoinContractFactory.balanceOf(anotherAccount.address);
    
    expect(totalSupply.eq(BigNumber.from(initialSupply))).to.equal(true);
    expect(anotherAccountBalance.isZero()).to.equal(true);
    
    const sendAmount: Number = 1000;
    anotherAccountBalance = await dcoinContractFactory.balanceOf(anotherAccount.address);
    await dcoinContractFactory.connect(owner).transfer(anotherAccount.address, sendAmount);
    expect(anotherAccountBalance.eq(BigNumber.from("1000"))).to.equal(true);
    
  });
});