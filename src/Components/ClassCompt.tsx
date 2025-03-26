// import React, { Component } from "react";

// class ClassCompt extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "anil",
//     };
//   }
//   render() {
//     return <div>
//         <h1>{this.state.message}</h1>
//     </div>;
//   }
// }

// export default ClassCompt;


import React from 'react'

const ClassCompt = ( props) => {
console.log(props, 'sahil');

  return (
    <div>
      <h2> hi {props.name}</h2>
      <h2> hi {props.age}</h2>
      <h2> hi {props.email}</h2>
    </div>
  )
}

export default ClassCompt

