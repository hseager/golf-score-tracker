import React, { useState, useReducer } from 'react'
import { reducer, initialState } from '../reducers/appReducer'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [course, setCourse] = useState(
    state.courses.length === 0 ? '' : state.courses[0]
  )

  return (
    <main>
      <Controls
        setCourse={setCourse}
        courses={state.courses}
        holes={state.holes}
        dispatch={dispatch}
      />
      <Scores
        courses={state.courses}
        scores={state.scores}
        dispatch={dispatch}
      />
    </main>
  )
}

export default App
