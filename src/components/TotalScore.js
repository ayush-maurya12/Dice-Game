import React from 'react'
import './totalScore.css';

const TotalScore = ({score}) => {
  return (
    <div class="total_score">
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}

export default TotalScore
