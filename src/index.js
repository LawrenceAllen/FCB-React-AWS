import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import TasksList from "./components/TaskList";

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