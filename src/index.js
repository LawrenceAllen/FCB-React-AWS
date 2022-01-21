import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Task(props) {

    return (
        <li className="tasks-item">{props.taskName}</li>
    )
}

function TasksList(event) {
    const taskItemsList = [
        "Sleep Early",
        "Eat healthy meals",
        "Exercise later"
    ];

    return (
        <div>
            <input className ="task-input" type="text" placeholder="Type your task here"></input>
            <ul>
                {taskItemsList.map((task, index) => {
                    

                    return (
                    <Task key = {index} taskName={task} />
                    )
                }
                    
                )}
            </ul>
        </div>
        
    )
}

function App() {
    const pStyle = {
        "marginBottom" : "15px"
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