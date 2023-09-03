import React, { useEffect, useRef, useState } from "react";
import style from  './TodoList.css'

const TodoForm = ({submitHandler,values}) => {
  
    
  const [input, setInput] = useState(values.value);

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = () => {
    submitHandler(input)

  };

  return (
    <div>
      <div className="todolist-container">
        <input type="text" ref={textInput} value={input} onChange={(e) => changeHandler(e)} />
        <div className="buttons">
        <button onClick={updateTodo}> Update </button>

        </div>
      </div>
    </div>
  );
};

export default TodoForm;
