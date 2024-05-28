import { useState } from 'react';
import './App.css';
import { StartGame } from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isstart,setIsstart]=useState(false);
  
  const Gameplay=()=>{
    setIsstart((prev)=>!prev);
  };
  return (
    <>
      {
        isstart?<GamePlay/>:<StartGame toggle={Gameplay}/>
      }
      {/* <StartGame/> */}
    </>
  );
}

export default App;
