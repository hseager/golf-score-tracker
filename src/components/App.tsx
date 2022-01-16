import React, { useState } from 'react'
import Scores from './Scores'
import Controls from './Controls'

const App = () => {
  const [courses, setCourses] = useState(['Dunston', 'Wensum Valley'])
  const [holes, setHoles] = useState(18)

  return (
    <>
      <Controls
        courses={courses}
        setCourses={setCourses}
        holes={holes}
        setHoles={setHoles}
      />
      <Scores holes={holes} />
    </>
  )
}

export default App
