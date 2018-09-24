import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var taskList = ["task", "tas231"];

var tasks = localStorage.getItem('storedTasks');

if (tasks){
    taskList = JSON.parse(tasks);
}

ReactDOM.render(
    <App tasks={taskList}/>,
    document.getElementById('root')
);

