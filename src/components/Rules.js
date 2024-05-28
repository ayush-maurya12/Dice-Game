import React from 'react';
import './rules.css';

const Rules = () => {
  return (
    <div className='Howtoplay'>
        <h2>How to paly dice game</h2>
        <div className='text'>
          <ul>
            <li>Select any number</li>
            <li>Click on Dice image</li>
            <li>After click on dice if selected number is equal to dice number you will get same point as dice{""}</li>
            <li>if you get wrong then 2 point will be deduted</li>
            </ul>
        </div>
    </div>
  )
}

export default Rules