import React, { useState } from 'react'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [holes, setHoles] = useState(9)

  return (
    <>
      <Controls holes={holes} setHoles={setHoles} />
      <Scores holes={holes} />
    </>
  )
}

export default App
