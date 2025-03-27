// export default function User() {
//   return <div>User Check</div>;
// }
// export default User;

import React from "react";

let data = "Dive in React";

const User = () => {
  function apple() {
    alert("function called");
  }
  return (
    <div className="">
      <h1>{data}</h1>
      {/* <div className="mt-3">
        <button onClick={() => apple()}> Click me</button>
      </div> */}
    </div>
  );
};

export default User;
