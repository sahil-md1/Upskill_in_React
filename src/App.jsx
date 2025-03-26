import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import User from "./Components/User";
import "./App.css";
import State from "./Components/state";
import ClassCompt from "./Components/ClassCompt";
import Input from "./Components/Input";
import Toggle from "./Components/toggle";


function App() {
  return (
    <div className="p-4 bg-neutral-500">
      React
      <User />
      {/* <State/> */}
      {/* <ClassCompt name = {'sahil'} age= {43} email ={"getComputedStyle"}/> */}
      {/* <Input/> */}
      {/* <Toggle/> */}
    </div>
  );
}

export default App;
