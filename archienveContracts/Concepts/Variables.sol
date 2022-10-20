// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // State variables are stored on the blockchain
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local varianbles are not saved to the blockchain
        uint i = 456;

        // some global variables
        uint timestamp = block.timestamp; // current block timestamp
        address sender = msg.sender; // address of the caller
    }
}