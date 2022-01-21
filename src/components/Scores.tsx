import React, { useState } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'

type ScoreProps = {
  courses: Array<String>
  scores: Array<Score>
  dispatch: Function
}

const courseErrorMessage = 'Please select a course'

const Scores = ({ courses, scores, dispatch }: ScoreProps) => {
  const [error, setError] = useState('')

  const saveScore = () => {
    if (courses.length === 0) {
      setError(courseErrorMessage)
    } else {
      setError('')
    }
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
        {error && (
          <div className="my-4 bg-orange-200 py-2 px-4 rounded-md text-orange-900 border border-orange-300">
            <p>{error}</p>
          </div>
        )}
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
