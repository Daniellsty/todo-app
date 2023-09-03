import React, { useState } from 'react'
import Select from 'react-select';
import './Navbar.css'
const Navbar = ({selectedOption,changeSelectHandler,item}) => {
    const options = [
        { value: 'All', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'NotCompleted', label: 'NotCompleted' },
      ];

   
     const numbers = item.filter((item)=> {
        return item.isCompleted === false
     })
   


  return (
    <div className='navbar'>

        <p className='title-todo'>{numbers.length > 0 ? <p > <span className='num-of-todo'>{numbers.length}</span> are not completed </p> : <p>all todo completed</p> }</p>
        <Select
        defaultValue={selectedOption}
        onChange={changeSelectHandler}
        options={options}
      />
    </div>
  )
}

export default Navbar