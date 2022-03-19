import React, { useReducer, useState } from 'react'
import ScoreCard from '../components/ScoreCard'
import Controls from '../components/Controls'
import SaveScore from '../components/SaveScore'
import { reducer, initialState } from '../reducers/appReducer'

const ScoreCardPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [course, setCourse] = useState(
    state.courses.length === 0 ? '' : state.courses[0]
  )

  return (
    <main>
      <Controls
        course={course}
        setCourse={setCourse}
        courses={state.courses}
        holes={state.holes}
        dispatch={dispatch}
      />
      <ScoreCard scoreCard={state.scoreCard} dispatch={dispatch} />
      <SaveScore
        scoreCard={state.scoreCard}
        course={course}
        dispatch={dispatch}
      />
    </main>
  )
}

export default ScoreCardPage
