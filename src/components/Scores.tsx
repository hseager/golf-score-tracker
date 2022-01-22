import React, { useState } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'

type ScoreProps = {
  scores: Array<Score>
  dispatch: Function
}

const Scores = ({ scores, dispatch }: ScoreProps) => {
  return (
    <div className="m-4">
      <div className="flex justify-between text-center text-sm border-b-2 border-slate-200 pb-2 pl-2">
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
    </div>
  )
}

export default Scores
