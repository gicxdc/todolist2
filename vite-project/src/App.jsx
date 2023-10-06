import { createContext, useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Todo from './components/Todo/Todo'

export const todoContext=createContext(null)

function App() {
  const [todo,setTodo]=useState([])

  const handleAdd=(newTodo)=>{
    setTodo([...todo,newTodo])
  }

  const handleRemove=()=>{
    setTodo([])
  }

  console.log(todo)
  return (
      <todoContext.Provider value={{
        todo,handleAdd,handleRemove,setTodo
      }}>
        <div className='container'>
        <h1>TODO LIST</h1>
          <Form/>
          <Todo/>      
        </div>
      </todoContext.Provider>
  )
}

export default App
