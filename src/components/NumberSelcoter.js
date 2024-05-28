//import React, { useState } from 'react'
import './numberSelector.css'
const NumberSelcoter = ({setError,error,selectedNum,setSelectedNum}) => {
    const array=[1,2,3,4,5,6];
    console.log(selectedNum);
    const ErrorHandler=(value)=>{
      setSelectedNum(value);
      setError("");
    }
  return (
    <div className='NumberContainer'>
      <p className='err'>{error}</p>
    <div className='numbers'>
        {
            array.map((value,i)=>(
                <div key={i} className={value === selectedNum ? 'selected' : 'selector'} 
                onClick={()=>ErrorHandler(value)}>{value}</div>   
            ))
        }
    </div>
    <p className='sel_num'>Selected Number</p>
    </div>
  )
}

export default NumberSelcoter


