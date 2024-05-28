import React from 'react'
import './startGame.css';
export const StartGame = ({toggle}) => {
  return (
   <div class='container'>
    <div>
       <img src="/photos/dice_all.png"></img>
       </div>
    <div>
      <h1 className='dice'>Dice Game</h1>
      <button className="play" onClick={toggle}>Play Now</button>
   </div>
   </div>
  )
}