import React, { useState } from 'react'



function Todoform(props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
    
  }


  return (
    <>
    <form action="" onSubmit={handleSubmit} className="todo-form">
        <input 
          onChange={handleChange}
          type="text" 
          className="todo-input"
          placeholder='Add a todo'
          value={input}

          
        
        />
        <button type="submit"className="todo-button">Add todo</button>
      </form>
    </>
  )
}

export default Todoform