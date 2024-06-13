import Task from "./Task";

export default function Tasks({ tasks }) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
}
