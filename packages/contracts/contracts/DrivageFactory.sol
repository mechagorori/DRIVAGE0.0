// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "./Dcoin.sol";
import "./ANZNScore.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DrivageFactory is Ownable {

    uint256 MAX_ANZN_PER_PLAY = 5;
    constructor () {}

    // Initialization by each player, creating an ANZN-token wallet
    function initializeUserInfo () public {
        ANZNScore.mint();
    }

    function updateBalances (uint256 driveScore) public {
        require(driveScore <= MAX_ANZN_PER_PLAY, "The submitted score is invalid, exceeding the highest score.");

        // As of the hackathon, players earn Dcoin and ANZN, both equivalently to the score itself
        uint256 rewardAnzn = driveScore;
        uint256 rewardDcoin = rewardAnzn;
        Dcoin.mint(msg.sender, rewardDcoin);
        ANZNScore.addAnzn(rewardAnzn);
    }

    function consumeDcoin (uint256 amount) public {
        Dcoin.burn(amount);
    }

    function changeMaxAnznPerPlay (uint256 newMax) public onlyOwner {
        MAX_ANZN_PER_PLAY = newMax;
    }
}

