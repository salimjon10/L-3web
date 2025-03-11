import CreateTask from "./CreateTask.jsx";
import TaskList from "./TastList.jsx";
import store from "../../scripts/store.js";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [alert, setAlert] = useState();

  return (
    <>
      <Provider store={store}>
        {alert}
        <CreateTask />
        <DndProvider backend={HTML5Backend}>
          <TaskList setAlert={setAlert} />
        </DndProvider>
      </Provider>
    </>
  );
}

export default App;
