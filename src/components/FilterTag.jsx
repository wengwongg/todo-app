import { useState } from "react";

import { useDataContext } from "../DataContext.js";
import {
  useSetDisplayedDataContext,
  useSetFilterContext,
} from "../DisplayContext.js";

export default function FilterTag() {
  const data = useDataContext();
  const setDisplayedData = useSetDisplayedDataContext();
  const setFilter = useSetFilterContext();

  const [filterInput, setFilterInput] = useState("");

  const handleFilterSubmit = function (e) {
    e.preventDefault();
    if (filterInput !== "") {
      setFilter(filterInput);
      setDisplayedData(
        data.filter(
          (task) => task.tag.toLowerCase() === filterInput.toLowerCase()
        )
      );
    } else {
      setDisplayedData(data);
    }
  };

  return (
    <form className="filter_tag_form" onSubmit={handleFilterSubmit}>
      <input
        type="text"
        id="tag_textbox"
        name="tag_textbox"
        placeholder="enter a tag..."
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      ></input>
      <input type="submit" value="reset/filter" />
    </form>
  );
}
