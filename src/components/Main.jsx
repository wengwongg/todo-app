import "./Main.css";

import { useState } from "react";

import AddTask from "./AddTask";
import FilterTag from "./FilterTag";
import Tasks from "./Tasks";

import { useDataContext } from "../DataContext.js";
import {
  DisplayedDataContext,
  SetDisplayedDataContext,
  FilterContext,
  SetFilterContext,
} from "../DisplayContext.js";

export default function Main() {
  const data = useDataContext();
  const [displayedData, setDisplayedData] = useState(data);
  const [filterTag, setFilterTag] = useState("");

  return (
    <div className="main">
      <DisplayedDataContext.Provider value={displayedData}>
        <SetDisplayedDataContext.Provider value={setDisplayedData}>
          <FilterContext.Provider value={filterTag}>
            <SetFilterContext.Provider value={setFilterTag}>
              <div className="add_and_filter_wrapper">
                <AddTask />
                <FilterTag />
              </div>
              <Tasks tasks={displayedData.filter((task) => !task.done)} />
            </SetFilterContext.Provider>
          </FilterContext.Provider>
        </SetDisplayedDataContext.Provider>
      </DisplayedDataContext.Provider>
    </div>
  );
}
