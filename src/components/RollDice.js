import React, { useState } from 'react'
import './rollDice.css';
const RollDice = ({CurrDice,rollDice}) => {
  
  return (
    <div className='dice'>
      <div className='dice_img' onClick={rollDice}>
        <img src={`/photos/dice_${CurrDice}.png`} alt='dice_1'/>
      </div>
      <p className='clik_dice'>Click on Dice to roll</p>
    </div>
  )
}

export default RollDice