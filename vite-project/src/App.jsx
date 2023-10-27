import { createContext, useState } from 'react'
import './App.css'
import Form from './components/Form/form'
import Item from './components/Todo/item'
import Remove from './components/Todo/Remove'




export const todoContext=createContext(null)

function App() {
  const [todo,setTodo]=useState([])
  

  const handleAdd=(newTodo)=>{
    setTodo([...todo,newTodo])
  }

  const handleRemove=()=>{
    setTodo([])
  }

  const handleCheck=(id)=>{
    let temp=todo
    temp[id].status=!temp[id].status
    console.log(temp)
    setTodo(temp)
    console.log(todo)
  }

  const handleDel=(id)=>{
    let temp=todo
    temp.splice(id,1)
    setTodo(temp)
    console.log(todo)
  }

  const handleEdit=(id)=>{
    let temp=todo
    temp[id].name=prompt("input new name")
    setTodo(temp)
    console.log(todo)
  }


  const screen=todo.map((item)=><Item key={item.id} item={item}/>)

  return (
      <todoContext.Provider value={{
        todo,handleAdd,handleRemove,setTodo,handleDel,handleCheck,handleEdit
      }}>
        <div className='container'>
        <h1>TODO LIST</h1>
          <Form/>
          <div className='todo-container'>
          {screen}
          </div>
          <div className="todo-bot">
          <Remove/>
          </div>
        </div>
      </todoContext.Provider>
  )
}

export default App