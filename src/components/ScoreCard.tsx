import React, { useEffect } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'
import { saveCurrentScoreCard } from '../utils/localStorageManager'

type ScoreProps = {
  scoreCard: Array<Score>
  dispatch: Function
}

const ScoreCard = ({ scoreCard, dispatch }: ScoreProps) => {
  useEffect(() => {
    saveCurrentScoreCard(scoreCard)
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
    </div>
  )
}

export default ScoreCard
