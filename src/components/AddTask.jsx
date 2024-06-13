import { useState } from "react";

const initialTags = ["Home", "School", "Hobby"];

export default function AddTask() {
  const [tags, setTags] = useState(initialTags);

  return (
    <form className="add_task_form">
      <input
        type="text"
        id="add_task_textbox"
        name="add_task_textbox"
        placeholder="what do you have to do?"
      ></input>
      <input
        type="text"
        id="tag_textbox"
        name="tag_textbox"
        placeholder="enter a tag..."
      ></input>
      <input type="submit" value="add to list" />
    </form>
  );
}
