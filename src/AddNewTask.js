import React, { Component } from 'react';

export default class AddNewTask extends Component {

    constructor(){
        super();
        this.submited = this.submited.bind(this);
    }

    submited(event){
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render() {
        return (
            <form onSubmit={this.submited}>
                <input type="text"/>
            </form>
        );
    }
}

