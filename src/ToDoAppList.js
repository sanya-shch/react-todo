import React, { Component } from 'react';

export default class ToDoAppList extends Component {

    constructor(props){
        super();
    }

    render() {
        var items=this.props.tasks.map((task, i) => {
            return <li key={i}>{task}</li>;
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
