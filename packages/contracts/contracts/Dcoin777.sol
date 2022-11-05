// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

/**
 * @dev Contract defining Dcoin, the FT used in the game
 * - Users can earn Dcoin by achieving some safe-driving goals
 */

contract Dcoin777 is ERC777 {

    /**
     * @dev Need to set the amount of initial supply
     */
    uint256 _initialSupply = 100 * 10 ** decimals();

    /**
     * @dev
     * @param 
     * - defaultOperators: special accounts (usually other smart contracts) 
     * that will be able to transfer tokens on behalf of their holders
     *
     */
    constructor(address[] memory defaultOperators)
        public
        ERC777("Dcoin", "DCOIN", defaultOperators)
    {
        _mint(msg.sender, _initialSupply, "", "");
    }

}