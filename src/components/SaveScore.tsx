import React, { useState } from 'react'
import { ActionTypes } from '../types/ActionTypes'
import Score from '../types/Score'
import { saveGame } from '../utils/localStorageManager'

type SaveScoreProps = {
  course: string
  scoreCard: Array<Score>
  dispatch: Function
}

const courseErrorMessage = 'Please select a course'

const SaveScore = ({ course, scoreCard, dispatch }: SaveScoreProps) => {
  const [error, setError] = useState('')

  const saveScoreCard = () => {
    if (course) {
      setError('')
      saveGame(course, scoreCard)
    } else {
      setError(courseErrorMessage)
    }
  }

  const resetScoreCard = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset all of your scores?'
    )
    if (confirmReset) {
      dispatch({
        type: ActionTypes.ResetScoreCard,
      })
    }
  }

  return (
    <div className="m-4 flex justify-between max-w-2xl mx-auto px-4">
      {error && (
        <div className="mb-4 bg-orange-200 py-2 px-4 rounded-md text-orange-900 border border-orange-300">
          <p>{error}</p>
        </div>
      )}
      <button
        className="px-6 py-2 bg-green-400 rounded-md border-b border-green-600 active:border-t active:border-b-0"
        onClick={saveScoreCard}
      >
        Save
      </button>
      <button
        className="px-6 py-2 bg-slate-300 rounded-md border-b border-slate-400 active:border-t active:border-b-0"
        onClick={resetScoreCard}
      >
        Reset
      </button>
    </div>
  )
}

export default SaveScore
