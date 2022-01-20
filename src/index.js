import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p>The most simple and amazing todo-list React app.</p>
            </header>
        </div>
    )  
}

ReactDOM.render(<App/>, document.getElementById("root"))