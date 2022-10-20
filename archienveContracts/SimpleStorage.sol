// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
    // State variables to store a number
    uint public num;

    // You need to send a transaction to write to a state variable
    function set(uint _num) public {
        num = _num;
    }

    function get() public view returns (uint) {
        return num;
    }
}
