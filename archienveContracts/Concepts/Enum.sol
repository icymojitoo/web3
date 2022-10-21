// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Enum representing shipping status
enum Status{
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}

contract Enum {
    // Default value is the first element listed in the enum
    Status public status;

    // Returns uint value of enum
    function get() public view returns (Status) {
        return status;
    }

    // update status by passing uint value
    function set(Status _status) public {
        status = _status;
    }

    // update to specific value
    function cancel() public {
        status = Status.Canceled;
    }

    function reset() public {
        delete status;
    }
}