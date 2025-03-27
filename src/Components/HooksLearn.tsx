import React, { useEffect, useState } from "react";

const hooksLearn = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      hi {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        UP
      </button>
    </div>
  );
};

export default hooksLearn;
