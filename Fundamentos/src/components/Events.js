import React from 'react'

const Events = () => {

    function test() {
        console.log("Button Action")
    }

    const render = (x) => {
        if(x) {
            return <h1>Render this if true</h1>
        } else {
            return <h1>Render this if false</h1>
        }
    }

  return (
    <div>
        <button onClick={test}>Click here!</button>
        {render(true)}
        {render(false)}
    </div>
  )
}

export default Events