import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./Components/User";
import State from "./Components/state";
import ClassCompt from "./Components/ClassCompt";
function App() {
  return (
    <div className="p-4 bg-blue-500">
      React
      <User />
      <State/>
      <ClassCompt/>
    </div>
  );
}

export default App;
