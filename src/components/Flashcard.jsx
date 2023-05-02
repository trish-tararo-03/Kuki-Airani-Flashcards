import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

const Flashcard = ({ id, question, answer, isFlipped, toggleFlip }) => {
  return (
    <Flipper flipKey={id}>
      <div
        className={`bg-primary w-72 h-auto p-4 rounded-lg mb-4 sm:mb-2 md:mb-4  cursor-pointer hover:text-green hover:scale-105 transition-all duration-300 ${
          isFlipped ? 'bg-blue-800 transform-rotate-180' : ''
        }`}
        onClick={toggleFlip}
      >
        <Flipped flipId="question">
          <div className={`${isFlipped ? 'hidden' : ''}`}>
            <h3 className="text-center text-lg font-semibold mb-2">
              {question}
            </h3>
          </div>
        </Flipped>
        <Flipped flipId="answer">
          <div className={`${isFlipped ? '' : 'hidden'}`}>
            <h3 className="text-center text-xl font-semibold mb-2">{answer}</h3>
          </div>
        </Flipped>
      </div>
    </Flipper>
  )
}

export default Flashcard
