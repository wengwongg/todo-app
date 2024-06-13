import { useDataContext } from "../DataContext.js";
import Tasks from "./Tasks";

export default function DoneSection() {
  // show all data marked with done.
  const data = useDataContext();

  return (
    <div className="done_section">
      <Tasks tasks={data.filter((t) => t.done)} />
    </div>
  );
}
