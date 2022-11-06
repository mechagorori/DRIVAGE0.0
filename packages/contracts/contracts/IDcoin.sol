// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IDcoin is IERC20 {
    function mint(address to, uint256 amount) external;
    function pause() external;
    function unpause() external;
    function burn(uint256 amount) external;
}