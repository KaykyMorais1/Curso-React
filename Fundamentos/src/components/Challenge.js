import React from 'react'

const Challenge = () => {

    const n1 = 10;
    const n2 = 20;

  return (
    <div>
        <h1>Number 1: {n1}</h1>
        <h1>Number 2: {n2}</h1>
        <button onClick={() => console.log( n1 + n2 )}>Click here to sum!</button>
    </div>
  )
}

export default Challenge