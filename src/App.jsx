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
    ,
    {
      name: "mi tercer tarea",
      done: false,
    },
  ]);

  return (
    <div className="App">
      <TaskCreator />

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
