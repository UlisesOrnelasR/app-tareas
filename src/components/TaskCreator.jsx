import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (event) => {
    if (newTaskName.trim() === "") {
      alert("Please enter a task name");
      return;
    }

    event.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            className="form-control"
            type="text"
            placeholder="Ingresa nueva tarea"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success btn-sm">Save Task</button>
        </div>
      </form>
    </div>
  );
};
