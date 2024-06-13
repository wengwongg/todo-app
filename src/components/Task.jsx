import { useDataContext, useSetDataContext } from "../DataContext.js";
import {
  useSetDisplayedDataContext,
  useDisplayedDataContext,
} from "../DisplayContext.js";

export default function Task({ task }) {
  const data = useDataContext();
  const setData = useSetDataContext();
  const displayedData = useDisplayedDataContext();
  const setDisplayedData = useSetDisplayedDataContext();

  const deleteTask = function () {
    setData(data.filter((t) => t.id !== task.id));
    setDisplayedData(displayedData.filter((t) => t.id !== task.id));
  };

  const markTaskDone = function () {
    const newTask = { ...task, done: true };
    setData(
      data.map((t) => {
        if (t.id === task.id) {
          return newTask;
        } else {
          return t;
        }
      })
    );
    setDisplayedData(
      displayedData.map((t) => {
        if (t.id === task.id) {
          return newTask;
        } else {
          return t;
        }
      })
    );
  };

  if (task.done) {
    return (
      <li>
        <p>
          <s>{task.description}</s>
        </p>
      </li>
    );
  } else {
    return (
      <li>
        <p>{task.description}</p>
        <p>{task.tag}</p>
        <button onClick={deleteTask}>✗</button>
        <button onClick={markTaskDone}>✓</button>
      </li>
    );
  }
}
