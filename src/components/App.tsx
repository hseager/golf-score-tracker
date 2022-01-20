import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/appReducer'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main>
      <Controls
        courses={state.courses}
        holes={state.holes}
        dispatch={dispatch}
      />
      <Scores scores={state.scores} dispatch={dispatch} />
    </main>
  )
}

export default App
