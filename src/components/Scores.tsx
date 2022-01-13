import React from 'react'
import ScoreRow from './ScoreRow'

type ScoreProps = {
  holes: number
}

const Scores = ({ holes }: ScoreProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Hole</th>
          <th>Par</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(holes)].map((hole, i) => (
          <ScoreRow key={i} hole={i + 1} />
        ))}
      </tbody>
    </table>
  )
}

export default Scores
