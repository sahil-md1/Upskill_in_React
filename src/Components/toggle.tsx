import React, { useState } from 'react'

const toggle = () => {

    const [showtext, setShowText] = useState(true)

  return (
    <div>
      {showtext ? <h1>hi sir</h1> : <h1>byy sir</h1>}

      <button onClick={()=> {setShowText(!showtext)}} >Click me</button>
    </div>
  )
}

export default toggle
