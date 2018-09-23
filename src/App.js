import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';

class App extends Component {

    constructor(props){
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
    }

    updateList(text){
        var updateTasks = this.state.tasks;
        updateTasks.push(text);
        this.setState({tasks: updateTasks});
    }

    render() {
        return (
            <div>
                <h1>ToDoApp</h1>
                <AddNewTask updateList = {this.updateList}/>
                <ToDoAppList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
