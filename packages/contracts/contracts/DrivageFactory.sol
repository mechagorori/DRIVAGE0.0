// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./IDcoin.sol";

/**
 * @dev ANZN works as SBTs
 * - earend and owned by individual users
 * - cannot be transferred to anyone else
 */
contract ANZNScore is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _anznWalletCounter;

    // a mapping to keep the (total) amount of ANZN score of each user
    mapping(uint256 => uint256) anznWallet;
    // a mapping to check if a user has a wallet already
    mapping(address => uint256) anznWalletIdOf;

    constructor () ERC721("ANZNScore", "ANZN") {}

    modifier onlyAnznWalletOwner(address user) {
        require(balanceOf(user) > 0, "You do not have an ANZN wallet yet. Mint one first.");
        _;
    }

    function createAnznWalletWithZeroAmount() internal {
        require(balanceOf(msg.sender) < 1, "You already have your ANZN wallet!");
        // mintToWithAmount(msg.sender, 0);
        uint256 newWalletId = _anznWalletCounter.current();

        _mint(msg.sender, newWalletId);
        anznWalletIdOf[msg.sender] = newWalletId;
        anznWallet[newWalletId] = 0;

        _anznWalletCounter.increment();
    }

    function addAnzn(uint256 amount) internal {
        if (balanceOf(msg.sender) < 1) {
            createAnznWalletWithZeroAmount();
        }
        anznWallet[anznWalletIdOf[msg.sender]] += amount;
    }

    function addAnznTo(address to, uint256 amount) internal onlyAnznWalletOwner(to) {
        anznWallet[anznWalletIdOf[to]] += amount;
    }

    function getAnznBalanceOf(address user) public view returns (uint256) {
        return anznWallet[anznWalletIdOf[user]];
    }

    // Every token cannot be transferred, as ANZN is SBT
    function _beforeTokenTransfer (
        address from,
        address to,
        uint256 tokenId
    ) internal pure override {
        require(from == address(0), "You cannot transfer any ANZN token!");
    }
    
}

/**
 * @dev A smart contract that interacts with the Drivage app
 * - A Dcoin contract must be deployed beforehand, 
 *   whose address is required to the constructor here.
 */

contract DrivageFactory is ANZNScore {

    IDcoin public Dcoin;
    uint256 MAX_ANZN_PER_PLAY = 5;

    constructor (address _dcoinAddress) {
        setDcoinAddrress(_dcoinAddress);
    }

    function setDcoinAddrress (address _dcoinAddrress) public onlyOwner {
        Dcoin = IDcoin(_dcoinAddrress);
    }

    // Initialization by each player, creating an ANZN-token wallet
    function initializeUser () public {
        createAnznWalletWithZeroAmount();
    }

    function updateBalances (uint256 driveScore) public {
        require(
            driveScore <= MAX_ANZN_PER_PLAY, 
            "The submitted score is invalid, exceeding the highest score."
        );

        // As of the hackathon, players earn Dcoin and ANZN, 
        // both equivalently to the score itself
        uint256 rewardAnzn = driveScore;
        uint256 rewardDcoin = rewardAnzn;

        addAnzn(rewardAnzn);
        Dcoin.mint(msg.sender, rewardDcoin);
    }

    function getDcoinBalanceOf (address user) public view returns (uint256) {
        return Dcoin.balanceOf(user);
    }

    function consumeDcoin (uint256 amount) public {
        Dcoin.burn(amount);
    }

    function changeMaxAnznPerPlay (uint256 newMax) public onlyOwner {
        MAX_ANZN_PER_PLAY = newMax;
    }
}

