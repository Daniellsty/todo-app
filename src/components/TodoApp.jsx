import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoApp = () => {

    const [todo,setTodo] = useState([])
    const [input,setInput] =useState('')

    
    const  changeHandler=(e)=>{

       
        setInput(e.target.value)
   
    }

    const submitHandler=()=>{
        const values ={id:Math.floor(Math.random() *1000 )  ,isCompleted:false ,value:input }
       
        setTodo([...todo,values])
        console.log(todo);


    }


    const deleteHandler=(id)=>{
        const filteredTodo=todo.filter((item)=>{
            return item.id !== id
        })

        setTodo(filteredTodo)
    }

    const completeHandler=(id)=>{

        const index = todo.findIndex((item)=>{
            return item.id === id
        })
        
        
        const updatedTodo= {...todo[index]  }

        updatedTodo.isCompleted = !updatedTodo.isCompleted

        const todos =[...todo]

        todos[index] = updatedTodo

        setTodo(todos)


      


    }


  return (
    <div>

        <div>

        <input type="text" value={input} onChange={(e)=> changeHandler(e)} />
        <button onClick={ submitHandler}> Add </button>

        </div>
    <TodoList todo={ todo} deleteHandler={deleteHandler} completeHandler={completeHandler} />
    </div>
  )
}

export default TodoApp