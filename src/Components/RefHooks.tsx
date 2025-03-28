import React, { useRef } from "react";

const RefHooks = () => {
  let inputRef = useRef(null);

  function handleInput() {
    // inputRef.current.value ='10000'
    console.warn("function test");
    // inputRef.current.focus()
  }
  return (
    <div>
      <h1>useRef Hooks</h1>

      <input className="bg-white m-4" type="text" ref={inputRef}></input>
      <button onClick={handleInput}>handle Input</button>
    </div>
  );
};

export default RefHooks;
