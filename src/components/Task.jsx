import "./Task.css";

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
      <li className="task">
        <p className="task_description">
          <s>{task.description}</s>
        </p>
      </li>
    );
  } else {
    return (
      <li className="task">
        <div className="task_left_wrapper">
          <p className="task_description">{task.description}</p>
        </div>
        <div className="task_right_wrapper">
          <p className="task_tag">{task.tag}</p>
          <button className="delete_button" onClick={deleteTask}>
            ✗
          </button>
          <button className="done_button" onClick={markTaskDone}>
            ✓
          </button>
        </div>
      </li>
    );
  }
}
