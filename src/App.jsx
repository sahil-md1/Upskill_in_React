import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";
function App() {
  return (
    <div className="p-4 bg-blue-500">
      React
      <User />
    </div>
  );
}

export default App;
