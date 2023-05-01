import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import flashcardData from '../data/flashcardData'
import MonthsOfYear from './MonthsOfYear'
import DaysOfWeek from './DaysOfWeek'
import Navigation from './Navigation'
import Home from './Home'

const FlashcardList = () => {
  return (
    <Router>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Kuki Cards</h2>
      </div>

      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/months"
          element={<MonthsOfYear sections={flashcardData.sections} />}
        />

        <Route
          path="/days-of-week"
          element={<DaysOfWeek sections={flashcardData.sections} />}
        />
      </Routes>
    </Router>
  )
}

export default FlashcardList
