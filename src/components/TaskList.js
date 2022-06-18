import { useState } from "react";
import Task from "./Task";

export default function TasksList() {
  const [taskItemsList, setTaskItemsList] = useState([
    "Sleep Early",
    "Eat healthy meals",
    "Exercise later",
  ]);

  const [taskValue, setTaskValue] = useState();

  const inputChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  const addTaskHandler = () => {
    setTaskItemsList([taskValue, ...taskItemsList]);
  };

  return (
    <div>
      <input
        className="task-input"
        type="text"
        placeholder="Type your task here"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
      />

      <ul>
        {taskItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />;
        })}
      </ul>
    </div>
  );
}