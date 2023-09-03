import React, { useState } from 'react'
import Select from 'react-select';
import './Navbar.css'
const Navbar = ({selectedOption,changeSelectHandler}) => {
    const options = [
        { value: 'All', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'NotCompleted', label: 'NotCompleted' },
      ];

     


  return (
    <div className='navbar'>

        <Select
        defaultValue={selectedOption}
        onChange={changeSelectHandler}
        options={options}
      />
    </div>
  )
}

export default Navbar