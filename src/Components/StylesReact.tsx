import React from 'react'
// import style from './custome.module.css'

const StylesReact = () => {
  return (
    <div>
      <h1 className='c-container'>Stylw type 1 in React</h1>
      {/* inline css in react */}
      <h1 style={{color: 'red'}}>Stylw type 2 in React</h1> 

      {/* Modular css  */}
      <h1 className=''>Stylw type 3 in React</h1>

    </div>
  )
}

export default StylesReact
