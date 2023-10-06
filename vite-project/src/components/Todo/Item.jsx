import { Button, Checkbox } from "antd"
import Typography from "antd/es/typography/Typography"
import { useContext } from "react"
import { todoContext } from "../../App"


const Item = ({item}) => {
  const {id,name,status}=item
  const {todo}=useContext(todoContext)
  const {setTodo}=useContext(todoContext)

  const handleCheck=(id)=>{
    let temp=todo
    temp[id].status=!temp[id].status
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

  return (
    <div className="item">
       <div className="item-left">
       <Checkbox onClick={()=>handleCheck(id-1)} checked={status}/>
        <Typography>{id}.{name}</Typography>
       </div>
       <div className="item-right">
        <Button onClick={()=>handleDel(id-1)}>del</Button>
        <Button onClick={()=>handleEdit(id-1)}>edit</Button>
       </div>
    </div>
  )
}

export default Item