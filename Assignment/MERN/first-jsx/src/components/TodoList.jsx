import React from 'react';
import { Component } from 'react';

class ToDoList extends Component {
    render() {
        return (
            <>
                <h2>Things I need to do :</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </>
        );
    }
}

export default ToDoList;