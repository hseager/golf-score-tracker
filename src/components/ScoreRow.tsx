import React from 'react'
import Score from '../types/Score'

const ScoreRow = ({ hole, par, score }: Score) => {
  return (
    <tr>
      <td className="text-center border-2 border-zinc-700">{hole}</td>
      <td className="text-center border-2 border-zinc-700">
        <input
          type="number"
          className="w-full text-center"
          value={par}
          min={1}
          onChange={() => {}}
        />
      </td>
      <td className="text-center border-2 border-zinc-700">
        <input
          type="number"
          className="w-full text-center"
          value={score}
          min={0}
          onChange={() => {}}
        />
      </td>
    </tr>
  )
}

export default ScoreRow
