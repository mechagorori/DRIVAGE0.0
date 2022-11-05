// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @dev 
 * ANZN works as SBTs
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

    function mint() public {
        require(balanceOf(msg.sender) < 1, "You already have your ANZN wallet!");
        mintToWithAmount(msg.sender, 0);
    }

    function mintToWithAmount(address to, uint256 amount) public {
        require(balanceOf(to) < 1, "You already have your ANZN wallet!");
        
        uint256 newWalletId = _anznWalletCounter.current();

        _mint(to, newWalletId);
        anznWalletIdOf[to] = newWalletId;
        anznWallet[newWalletId] = amount;

        _anznWalletCounter.increment();
    }

    function addAnzn(uint256 amount) public onlyAnznWalletOwner(msg.sender) {
        anznWallet[anznWalletIdOf[msg.sender]] += amount;
    }

    function addAnznTo(address to, uint256 amount) public onlyAnznWalletOwner(to) {
        anznWallet[anznWalletIdOf[to]] += amount;
    }

    function getAnznBalanceOf(address user) public view returns (uint256) {
        return anznWallet[anznWalletIdOf[user]];
    }

    // Every token cannot be transferred
    function _beforeTokenTransfer (
        address from,
        address to,
        uint256 tokenId
    ) internal pure override {
        require(from == address(0), "You cannot transfer any token!");
    }
    
}