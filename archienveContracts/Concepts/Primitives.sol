// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Primitives {
    bool public boo = true;

    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123;

    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123;

    //min max of int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    bytes1 a = 0xb5;
    bytes1 b = 0x01;

    // default values
    bool public defaultBool; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddress; // 0x0000000000000000000000000000000000000000

}