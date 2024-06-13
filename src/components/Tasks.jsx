import Task from "./Task";

export default function Tasks({ tasks }) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => {
          return (
            <Task key={task.id} description={task.description} tag={task.tag} />
          );
        })}
      </ul>
    </div>
  );
}
