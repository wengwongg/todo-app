import { useState } from "react";

import "./App.css";
import Separator from "./components/Separator";
import Main from "./components/Main";
import DoneSection from "./components/DoneSection";
import { initialData } from "./assets/initialData.js";
import { DataContext, SetDataContext } from "./DataContext.js";

function App() {
  const [data, setData] = useState(initialData);

  return (
    <>
      <h1>get after it!</h1>
      <DataContext.Provider value={data}>
        <SetDataContext.Provider value={setData}>
          <Main />
          <Separator />
          <DoneSection />
        </SetDataContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
