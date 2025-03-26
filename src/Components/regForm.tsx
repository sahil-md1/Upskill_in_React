import React, { useState } from "react";

const regForm = () => {
  const [name, setName] = useState("");
  const [gendar, setGendar] = useState("");
  const [terms, setTerms] = useState(false);

  function getFormData(e) {
    console.warn(name, gendar, terms);
    e.preventDefault();
  }

  return (
    <div className="m-4 ">
      <div>
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          ></input>

          <select
            className="bg-black p-2   justify-items-end"
            onChange={(e) => setGendar(e.target.value)}
          >
            <option>Select options</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <div className="flex justify-center mt-4">
            <input
              type="checkbox"
              onChange={(e) => setTerms(e.target.checked)}
            ></input>
            <span className="ml-2">Accept Terms and conditons</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default regForm;
