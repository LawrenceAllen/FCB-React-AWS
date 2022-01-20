import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function TasksList() {
    return (
        <ul>
            <li className="tasks-item">Sleep early</li>
            <li className="tasks-item">Eat healthy meals</li>
            <li className="tasks-item">Exercise every once in a while</li>
        </ul>
    )
}

function App() {
    const pStyle = {
        "margin-bottom" : "15px"
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={pStyle} >The most simple and amazing todo-list React app.</p>
                <TasksList/>
            </header>
        </div>
    )  
}

ReactDOM.render(<App/>, document.getElementById("root"))