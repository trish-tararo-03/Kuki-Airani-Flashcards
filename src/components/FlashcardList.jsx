import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import flashcardData from '../data/flashcardData'
import MonthsOfYear from './MonthsOfYear'
import DaysOfWeek from './DaysOfWeek'
import Navigation from './Navigation'
import BodyParts from './BodyParts'
import MeetAndGreet from './MeetAndGreet'
import Phrases from './Phrases'
import Home from './Home'

const FlashcardList = () => {
  return (
    <Router>
      <nav>
        <Navigation />
      </nav>

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
        <Route
          path="/body-parts"
          element={<BodyParts sections={flashcardData.sections} />}
        />

        <Route
          path="/meet-and-greet"
          element={<MeetAndGreet sections={flashcardData.sections} />}
        />

        <Route
          path="/phrases"
          element={<Phrases sections={flashcardData.sections} />}
        />
      </Routes>
    </Router>
  )
}

export default FlashcardList
