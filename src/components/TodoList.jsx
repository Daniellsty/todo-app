import React, { useState } from "react";
import style from  './TodoList.css'
import TodoForm from "./TodoForm";
const TodoList = ({ todo ,deleteHandler ,completeHandler,onEditHandler,values}) => {
  
    const [edit,setEdit] = useState({id:null,input:'',isCompleted:false})

    const submitHandler=(text)=>{
        onEditHandler(edit.id,text)

        setEdit({id:null,input:''})
    }

    
    const  renderTodoList=()=>{

        return (
          <div>
           
           {todo.map((item)=>{
              return (
                  <div key={item.id}>
                      <p style={{color: item.isCompleted ? 'gray' :'red' ,textDecoration:item.isCompleted ?  'none' :'line-through' }}>{item.value}</p>
                      <button onClick={(e)=> completeHandler(item.id)  } >complete</button>
                      <button onClick={(e)=> deleteHandler(item.id) } >delete</button>
                      <button onClick={()=> setEdit(item) }>edit</button>
                     
                  </div>
              )
           })}
      
      
      
          
          </div>
        );
    }


return(
     <div>{edit.id ? <TodoForm values={edit} submitHandler={submitHandler}/>  :  renderTodoList() } </div>
)
};

export default TodoList;
