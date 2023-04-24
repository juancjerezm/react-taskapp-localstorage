import { useEffect, useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import "./App.css";
import Visibilitycontrol from "./components/Visibilitycontrol";
import { Container } from "./components/Container";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompletes, setShowCompletes] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    setTaskItems(taskItems.filter((t) => !t.done));
    setShowCompletes(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <Visibilitycontrol
          isChecked={showCompletes}
          setShowCompletes={(checked) => setShowCompletes(checked)}
          cleanTask={cleanTask}
        />
        {showCompletes === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompletes}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
