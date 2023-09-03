import React, { useEffect, useRef, useState } from "react";

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
      <div>
        <input type="text" ref={textInput} value={input} onChange={(e) => changeHandler(e)} />
        <button onClick={updateTodo}> update </button>
      </div>
    </div>
  );
};

export default TodoForm;
