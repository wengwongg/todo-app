import "./AddTask.css";

import { useState } from "react";
import { useDataContext, useSetDataContext } from "../DataContext.js";
import {
  useFilterContext,
  useDisplayedDataContext,
  useSetDisplayedDataContext,
} from "../DisplayContext.js";

export default function AddTask() {
  const setData = useSetDataContext();
  const data = useDataContext();

  const filter = useFilterContext();
  const displayedData = useDisplayedDataContext();
  const setDisplayedData = useSetDisplayedDataContext();

  const [taskInput, setTaskInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleSubmitTask = function (e) {
    e.preventDefault();
    if (taskInput && tagInput) {
      const newTask = {
        id: data.length + 1,
        description: taskInput,
        tag: tagInput,
        done: false,
      };

      // Add to dataset.
      setData([...data, newTask]);

      // Need to add to displayed tasks if its tag aligns with current filter or there is no filter at all.
      console.log(filter === "" || filter === tagInput);
      console.log(filter, tagInput);
      if (filter === "" || filter === tagInput) {
        setDisplayedData([...displayedData, newTask]);
      }
    } else {
      alert("You have to fill in both fields when adding a task!");
    }
  };

  return (
    <form className="add_task_form" onSubmit={handleSubmitTask}>
      <input
        type="text"
        id="add_task_textbox"
        name="add_task_textbox"
        placeholder="what do you have to do?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      ></input>
      <input
        type="text"
        id="tag_textbox"
        name="tag_textbox"
        placeholder="enter a tag..."
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
      ></input>
      <input id="add_to_list_button" type="submit" value="add to list" />
    </form>
  );
}
