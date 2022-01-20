import React, { useState, useEffect } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'

type ScoreProps = {
  scores: Array<Score>
  dispatch: Function
}

const Scores = ({ scores, dispatch }: ScoreProps) => {
  const saveScore = () => {
    console.log(1)
  }
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between text-center text-sm border-b-2 border-slate-200 py-2 pl-2">
          <h4>Hole</h4>
          <h4 className="flex-grow">Par</h4>
          <h4 className="flex-grow">Score</h4>
        </div>
        <div>
          {scores.map((score) => (
            <ScoreRow
              key={score.hole}
              hole={score.hole}
              par={score.par}
              score={score.score}
              dispatch={dispatch}
            />
          ))}
        </div>
        <button
          className="px-6 py-2 bg-green-400 rounded-md border-b border-green-600 active:border-t active:border-b-0"
          onClick={saveScore}
        >
          Save
        </button>
      </div>
    </>
  )
}

export default Scores
