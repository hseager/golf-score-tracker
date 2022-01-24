import React, { useState, useEffect } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'
import { saveCurrentScoreCard } from '../utils/localStorageManager'

type ScoreProps = {
  scoreCard: Array<Score>
  dispatch: Function
}

const ScoreCard = ({ scoreCard, dispatch }: ScoreProps) => {
  const [totalScore, setTotalScore] = useState(0)

  useEffect(() => {
    saveCurrentScoreCard(scoreCard)
    setTotalScore(scoreCard.reduce((c, n) => c + n.score, 0))
  }, [scoreCard])

  return (
    <div className="my-4 px-4 max-w-2xl mx-auto">
      <div className="flex justify-between text-center text-sm border-b-2 border-slate-200 pb-2 pl-2">
        <h4>Hole</h4>
        <h4 className="flex-grow">Par</h4>
        <h4 className="flex-grow">Score</h4>
      </div>
      <div>
        {scoreCard.map((score) => (
          <ScoreRow
            key={score.hole}
            hole={score.hole}
            par={score.par}
            score={score.score}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <div className="bg-white my-3 p-2 border-b border-slate-300 rounded-md w-1/2 flex justify-between items-center">
          Total Score:
          <span className="py-1 px-3 rounded-md font-semibold">
            {totalScore}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
