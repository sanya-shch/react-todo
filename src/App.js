import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';

class App extends Component {

    constructor(props){
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text){
        var updateTasks = this.state.tasks;
        updateTasks.unshift(text);
        this.setState({tasks: updateTasks});
        this.updateLocalStorage(updateTasks);
    }

    removeTask(text){
        var updateTasks = this.state.tasks;
        updateTasks.splice(updateTasks.indexOf(text), 1);
        this.setState({tasks: updateTasks});
        this.updateLocalStorage(updateTasks);
    }

    updateLocalStorage(updateTasks){
        localStorage.setItem('storedTasks', JSON.stringify(updateTasks));
    }

    render() {
        return (
            <div>
                <h1>ToDoApp</h1>
                <AddNewTask updateList = {this.updateList}/>
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}

export default App;
