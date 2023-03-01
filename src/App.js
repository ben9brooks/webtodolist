import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuid} from "uuid"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) // <=

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name == '') return 
    todoNameRef.current.value = null
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
  }
  

  return (
    <>
      <TodoList todos = {todos}/> 
      <input ref={todoNameRef} type="text"/>
      <button onClick= {handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
