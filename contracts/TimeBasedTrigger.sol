// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.0;

contract TimeBasedTrigger {  
    uint256 public counter;

    function count() public {  
        counter += 1;  
    }  
}