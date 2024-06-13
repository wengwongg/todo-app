import "./App.css";
import AddTask from "./components/AddTask";
import FilterTag from "./components/FilterTag";
import Task from "./components/Task";
import Separator from "./components/Separator";

function App() {
  return (
    <>
      <h1>get after it!</h1>
      <AddTask />
      <FilterTag />
      <Task />
      <Separator />
      <Task done={true} />
    </>
  );
}

export default App;
