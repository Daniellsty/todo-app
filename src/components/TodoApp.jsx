import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import Navbar from './Navbar'
import './TodoApp.css'
const TodoApp = () => {

    const [todo,setTodo] = useState([])
    const [input,setInput] =useState('')

    const [filterData,setFilterData] = useState([])

    const [selectedOption,setSelectedOption] = useState('all')


    useEffect(()=>{
        handleFilterTodos(selectedOption.value)
    },[todo,selectedOption] )

    const values ={ 
        id:Math.floor(Math.random() *1000 )  , 
        isCompleted:false ,
        value:input 
    }

    
    const  changeHandler=(e)=>{

       
        setInput(e.target.value)
   
    }

    const submitHandler=()=>{
       
        if (values.value === '') return
        setTodo([...todo,values])

        setInput('')


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


    const onEditHandler=(id,text)=>{


        

        const index = todo.findIndex((item)=>{
            return item.id === id
        })
        
        
        const updatedTodo= {...todo[index]  }

        updatedTodo.value = text

        const todos =[...todo]

        todos[index] = updatedTodo

        setTodo(todos)

    }


    const handleFilterTodos=(value)=>{


        switch (value) {
            case 'Completed':{

                const compeltedTodos = todo.filter((item)=>{
                    return item.isCompleted === true
                })

                setFilterData(compeltedTodos)

            }
                
                break;

                case 'NotCompleted' :{

                    const notCompletedTodos = todo.filter((item)=>{
                        return item.isCompleted === false
                    })

                    setFilterData(notCompletedTodos)
                }
                break;
        
            default:
                return setFilterData(todo)
                break;
        }
    }

    
    const changeSelectHandler=(e)=>{
      
        setSelectedOption(e)
        handleFilterTodos(e.value)
    }


  return (
    <div>

    <Navbar item={todo} selectedOption={selectedOption} changeSelectHandler={changeSelectHandler} />

        <div className='todo-container'>

        <input type="text" placeholder='add todos...' value={input} onChange={(e)=> changeHandler(e)} />
        <button onClick={ submitHandler}> Add </button>

        </div>

     <TodoList todo={ filterData} deleteHandler={deleteHandler} completeHandler={completeHandler} onEditHandler={onEditHandler} />
    </div>
  )
}

export default TodoApp