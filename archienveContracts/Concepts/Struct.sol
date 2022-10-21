// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

struct Todo {
    string text;
    bool completed;
}

contract Todos {
    // Array of "Todo" structs
    Todo[] public todos;

    function create(string calldata _text) public {
        // 3 ways to initialize a struct
        // - Calling it like a function
        todos.push(Todo(_text, false));

        // - Key-value mapping
        todos.push(Todo({text: _text, completed: false}));

        // - Initialize an empty struct and then update it
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialized to false

        todos.push(todo);
    }

    // Solidity automatically created a getter for public state variables
    // So we don't need to create one for "todos"
    function get(uint _index) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // Update text
    function update(uint _index, string calldata _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    // Update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}