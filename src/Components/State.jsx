import React, { useState } from "react";

const State = () => {
  const [update, setUpdate] = useState("Old Data");

  function updatedata() {
    setUpdate("New Data");
  }
  return (
    <div>
      <h1> {update}</h1>
      <button
        onClick={() => {
          updatedata();
        }}
      >
        Update Data
      </button>
    </div>
  );
};

export default State;
