import React from 'react'

type ScoreRowProps = {
  hole: number
}

const ScoreRow = ({ hole }: ScoreRowProps) => {
  return (
    <tr>
      <td>{hole}</td>
      <td>
        <input type="number" value="3" min="3" onChange={() => {}} />
      </td>
      <td>
        <input type="number" value="0" min="0" onChange={() => {}} />
      </td>
    </tr>
  )
}

export default ScoreRow
