import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelcoter from './NumberSelcoter'
import './gamePlay.css';
import RollDice from './RollDice';
import Rules from './Rules';

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNum,setSelectedNum]=useState();
  const [CurrDice,setcurrDice]=useState(1);
  const [error,setError]=useState();
  const [visible,setVisible]=useState(false);

  const showRules=()=>{
    setVisible((prev)=>!prev);
  }
  const resetScore=()=>{
    setScore(0);
    setcurrDice(1);
    setError("");
  }
  const genRateNum=(min,max)=>{
    // console.log(Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min); 
  }
  const rollDice=()=>{
    const RandomNum=genRateNum(1,7);
    console.log(RandomNum);
    setcurrDice(RandomNum);
    if(!selectedNum){
      setError("You have not selected any Number")
      return;
    }else{
      // setError("");
    }
    if(selectedNum===RandomNum){
      setScore((prev)=>prev+RandomNum)
    }else{
      setScore((prev)=>prev-2) 
    }
    setSelectedNum(undefined);
  }
  return (
    <main>
      <div className='game_section'>
      <TotalScore score={score}/>
      <NumberSelcoter 
      setError={setError}
      error={error}
      selectedNum={selectedNum} 
      setSelectedNum={setSelectedNum}/>
      </div>
      <RollDice CurrDice={CurrDice} rollDice={rollDice}/>
      <div className='buttons'>
        <button className='reset_game' onClick={resetScore}>Reset</button>
        <button className='show_rules' onClick={showRules}>{visible?"Hide rules":'show rules'}</button>
      </div>
      {visible && <Rules/>}
    </main>
  )
}

export default GamePlay