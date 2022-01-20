import React from 'react'
import { ActionTypes } from '../types/ActionTypes'

type ScoreRowProps = {
  hole: number
  par: number
  score: number
  dispatch: Function
}

const ScoreRow = ({ hole, par, score, dispatch }: ScoreRowProps) => {
  const inputClass =
    'w-full text-center bg-white outline-none py-2 rounded-md border-2 border-slate-200'

  const handleParChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.UpdatePar,
      payload: {
        key: hole,
        value: parseInt(event.target.value),
      },
    })
  }

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.UpdateScore,
      payload: {
        key: hole,
        value: parseInt(event.target.value),
      },
    })
  }

  return (
    <div className="flex bg-white my-4 items-stretch">
      <div className="bg-green-400 px-2 py-4 rounded-l-md w-20 text-center text-md border-b border-green-600">
        {hole}
      </div>
      <div className="w-full p-2 border-b border-slate-300">
        <input
          type="number"
          className={inputClass}
          value={par}
          min={1}
          max={20}
          onChange={handleParChange}
        />
      </div>
      <div className="w-full p-2 border-b border-slate-300">
        <input
          type="number"
          className={inputClass}
          value={score}
          min={0}
          onChange={handleScoreChange}
        />
      </div>
    </div>
  )
}

export default ScoreRow
