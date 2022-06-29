import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa nueva tarea"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <button>Save Task</button>
      </form>
    </div>
  );
};
