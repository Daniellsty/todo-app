import React from "react";
import style from  './TodoList.css'
const TodoList = ({ todo ,deleteHandler ,completeHandler}) => {
  console.log(todo);
  return (
    <div>
     
     {todo.map((item)=>{
        return (
            <div key={item.id}>
                <p  style={{color: item.isCompleted ? 'gray' :'red' ,textDecoration:item.isCompleted ?  'none' :'line-through' }}>{item.value}</p>
                <button onClick={(e)=> completeHandler(item.id)  } >complete</button>
                <button onClick={(e)=> deleteHandler(item.id) } >delete</button>
                <button>edit</button>


                {console.log(item.isCompleted)}
            </div>
        )
     })}
    
    </div>
  );
};

export default TodoList;
