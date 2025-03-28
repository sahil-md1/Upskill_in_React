import React, { useMemo, useState } from "react";

const Statelifting = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(10);

  const MultiUpdateMemo = useMemo(
    function multiItem() {
      return count * 5;
    },
    [count]
  );
  return (
    <div>
      <h1>Use Memo hooks</h1>
      <h2>Count: {count}</h2>
      <h2>Items: {items}</h2>
      <h2>{MultiUpdateMemo}</h2>
      <button
        className="m-4"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update count
      </button>

      <button
        className="m-4"
        onClick={() => {
          setItems(items * 10);
        }}
      >
        Update items
      </button>
    </div>
  );
};

export default Statelifting;
