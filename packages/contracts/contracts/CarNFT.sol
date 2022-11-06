// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";



contract CarNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    // the price of the NFT
    uint256 private mintPrice = 0.01 ether;

    constructor() ERC721("CarNFT", "CAR") {}

    /**
     * @dev
     * Mint a car NFT, with its tokenURI provided by app
     */
    function safeMint(string memory uri) public payable {
        require(msg.value >= mintPrice, "Payment is not enough!");
        address to = msg.sender;
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
    /**
     * @dev
     * Mint a car NFT for free, with its tokenURI provided by app 
     * (Just for test, to be removed)
     */
    function safeFreeMint(string memory uri) public {
        address to = msg.sender;
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    /**
     * @dev 
     * The contract owner can change the price of an NFT
     */
    function changePrice(uint256 newMintPrice) public onlyOwner {
        mintPrice = newMintPrice;
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}