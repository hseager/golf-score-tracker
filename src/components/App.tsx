import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers/appReducer'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main className="bg-emerald-500 p-4 rounded-lg shadow-md shadow-gray-300">
      <Controls
        courses={state.courses}
        holes={state.holes}
        dispatch={dispatch}
      />
      <Scores scores={state.scores} />
    </main>
  )
}

export default App
