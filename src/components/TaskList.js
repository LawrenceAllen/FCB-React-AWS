import Task from "./Task";

export default function TasksList(event) {
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