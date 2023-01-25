import React from 'react'

const TemplateExpression = () => {

    const data = {
        name: 'Kayky',
        age: 19
    }

  return (
    <div>
        <h2>My name is {data.name}, im {data.age} years old!</h2>
    </div>
  )
}

export default TemplateExpression