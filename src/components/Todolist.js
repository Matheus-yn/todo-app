import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'

function Todolist() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text) {
      return
    }
    
    setTodos([todo, ...todos])
    
    
    console.log(...todos)


  }
  


  return (
    <>
      <h1>What will you be doing today?</h1>
      <Todoform onSubmit={addTodo} />
    </>
  )
}

export default Todolist