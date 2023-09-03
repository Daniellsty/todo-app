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
                  <div key={item.id} className="todolist-container">
                      <p style={{color: item.isCompleted ? 'gray' :'red' ,textDecoration:item.isCompleted ?  'none' :'line-through' }}>{item.value}</p>
                      <div className="buttons">
                      <button onClick={(e)=> completeHandler(item.id)  } >Complete</button>
                      <button onClick={(e)=> deleteHandler(item.id) } >Delete</button>
                      <button onClick={()=> setEdit(item) }>Edit</button>

                      </div>
                     
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
