import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

const Flashcard = ({ id, question, answer, isFlipped, toggleFlip }) => {
  return (
    <Flipper flipKey={id}>
      <div
        className="bg-blue-600 w-72 h-auto p-4 rounded-lg mb-4 sm:mb-2 md:mb-4 cursor-pointer "
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
