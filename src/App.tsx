import React from "react";
import "./components/Global/Global.scss";
import Menubar from "./components/Menubar";
import RouterPage from "./routes";

function App() {
  return (
    <div className="App">
      <Menubar />
      <RouterPage />
    </div>
  );
}

export default App;
