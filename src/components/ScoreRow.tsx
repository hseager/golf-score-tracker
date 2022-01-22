import React from 'react'
import { ActionTypes } from '../types/ActionTypes'

type ScoreRowProps = {
  hole: number
  par: number
  score: number
  dispatch: Function
}

const minPar = 0
const maxPar = 20
const minScore = 0

const ScoreRow = ({ hole, par, score, dispatch }: ScoreRowProps) => {
  const inputClass =
    'w-full text-center bg-white outline-none py-2 rounded-md border border-slate-200'

  const handleParChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let par = parseInt(event.target.value)
    if (par < minPar || !par) par = minPar
    if (par > maxPar) par = maxPar
    dispatch({
      type: ActionTypes.UpdatePar,
      payload: {
        key: hole,
        value: par,
      },
    })
  }

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let score = parseInt(event.target.value)
    if (score < minScore || !score) score = minScore
    dispatch({
      type: ActionTypes.UpdateScore,
      payload: {
        key: hole,
        value: score,
      },
    })
  }

  return (
    <div className="flex bg-white my-3 items-stretch">
      <div className="bg-green-400 px-2 py-4 rounded-l-md w-20 text-center text-md border-b border-green-600">
        {hole}
      </div>
      <div className="w-full p-2 border-b border-slate-300">
        <input
          type="number"
          className={inputClass}
          value={par.toString()}
          min={minPar}
          max={maxPar}
          onChange={handleParChange}
        />
      </div>
      <div className="w-full p-2 border-b border-slate-300">
        <input
          type="number"
          className={inputClass}
          value={score.toString()}
          min={minScore}
          onChange={handleScoreChange}
        />
      </div>
    </div>
  )
}

export default ScoreRow
