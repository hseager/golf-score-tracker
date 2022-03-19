import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScoreCardPage from '../pages/ScoreCardPage'
import GamesPage from '../pages/GamesPage'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ScoreCardPage />} />
        <Route path="games" element={<GamesPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
