// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Loop {
    function loop() public {
        // for loop
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // skip to next iteration with continue
                continue;
            }
            if (i == 5) {
                // exit loop with break
                break;
            }
        }
        
        // while loop
        uint j = 0;
        while (j < 10) {
            j++;
        }
    }
}
