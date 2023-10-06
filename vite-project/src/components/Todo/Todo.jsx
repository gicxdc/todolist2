import { useContext } from "react"
import Progess from "./Progess"
import Remove from "./Remove"
import "./Todo.css"
import Item from "./item"
import { todoContext } from "../../App"

const Todo = () => {
  const {todo} =useContext(todoContext)
  return (
    <div className="todo-container">
      {todo.map((item)=><Item key={item.id} item={item}/>)}
      <div className="todo-bot">
      <Progess/>
      <Remove/>
      </div>
    </div>

  )
}

export default Todo