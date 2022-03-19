import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScoreCardPage from '../pages/ScoreCardPage'
import GamesPage from '../pages/GamesPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScoreCardPage />} />
        <Route path="games" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
