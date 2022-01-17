import React from 'react'
import Score from '../types/Score'

const ScoreRow = ({ hole, par, score }: Score) => {
  return (
    <tr>
      <td>{hole}</td>
      <td>
        <input type="number" value={par} min={1} onChange={() => {}} />
      </td>
      <td>
        <input type="number" value={score} min={0} onChange={() => {}} />
      </td>
    </tr>
  )
}

export default ScoreRow
