import React, { useEffect, useState } from 'react'
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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return
    }
    setTodos(prev => prev.map(item => item.id === todoId ? newValue : item ))
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }
  
  const completeTodo = id => {
    let updatedTodos = todos.map(todo =>  {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  return (
    <>
      <h1>What will you be doing today?</h1>
      <Todoform onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} updateTodo={updateTodo}/>
    </>
  )
}

export default Todolist