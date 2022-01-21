import React, { useState, useReducer } from 'react'
import { reducer, initialState } from '../reducers/appReducer'
import Scores from './Scores'
import Controls from './Controls'
import SaveScore from './SaveScore'

const App = () => {
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
      <Scores scores={state.scores} dispatch={dispatch} />
      <SaveScore course={course} />
    </main>
  )
}

export default App
