import React, { useState } from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'
import {RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo ({todos, removeTodo, completeTodo}){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return todos.map((todo, index)=>(

    <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      
      <div key={todo.id} onClick={() => {completeTodo(todo.id)}}>
        {todo.text}
      </div>
    
    
      <div className="icons">
        <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(todo.id)}/>
        <TiEdit className='edit-icon' onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </div>
    </div>
    
  ));
}  
 
export default Todo;