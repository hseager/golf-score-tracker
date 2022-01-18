import React, { useState, useEffect } from 'react'
import ScoreRow from './ScoreRow'
import Score from '../types/Score'

type ScoreProps = {
  scores: Array<Score>
}

const Scores = ({ scores }: ScoreProps) => {
  return (
    <table className="w-full border-collapse" cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          <th>Hole</th>
          <th>Par</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score) => (
          <ScoreRow
            key={score.hole}
            hole={score.hole}
            par={score.par}
            score={score.score}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Scores
