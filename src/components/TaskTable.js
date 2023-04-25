import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const tastkTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table
      className={
        !showCompleted
          ? "table table-dark table-striped table-bordered border=secondary"
          : "table table-primary table-striped table-bordered border=secondary"
      }
    >
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{tastkTableRows(showCompleted)}</tbody>
    </table>
  );
};
