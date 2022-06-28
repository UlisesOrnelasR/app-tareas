import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator.jsx";

export function App() {
  const [taskItems, setTaskItems] = useState([
    {
      name: "mi primer tarea",
      done: false,
    },
    {
      name: "mi segunda tarea",
      done: false,
    },
    {
      name: "mi tercer tarea",
      done: false,
    },
  ]);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
