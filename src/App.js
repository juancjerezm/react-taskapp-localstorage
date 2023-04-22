import { useState } from "react";
import "./App.css";

function App() {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("task", newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        ></input>
        <button type="submit">Save Task </button>
      </form>
    </div>
  );
}

export default App;
