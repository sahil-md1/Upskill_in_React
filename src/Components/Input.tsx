import React, { useState } from "react";

function Input() {
const [newData, setnewDate] = useState(null)
    function getData(val) {
        setnewDate(val.target.value)
console.log(val.target.value, 'value');
console.log(newData, 'value2');


    }
    return (
        <div className="bg-auto" >
            <input type = 'text' onChange={getData} ></input>
            <button onClick={getData}></button>
        </div>
    )
}
export default Input;