import React, { useState, useEffect } from "react";

const StateHooks = () => {
  const [data, setData] = useState(10);

  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log("useeffect");
  }, []);
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update Data
      </button>
    </div>
  );
};

export default StateHooks;
