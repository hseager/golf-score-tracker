import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/appReducer'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Controls
        courses={state.courses}
        holes={state.holes}
        dispatch={dispatch}
      />
      <Scores scores={state.scores} />
    </>
  )
}

export default App
