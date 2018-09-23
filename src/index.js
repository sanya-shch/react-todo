import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var taskList = ["task", "tas231"];

ReactDOM.render(
    <App tasks={taskList}/>,
    document.getElementById('root')
);

