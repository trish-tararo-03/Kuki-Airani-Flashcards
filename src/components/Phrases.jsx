import React, { useState } from 'react'
import Flashcard from './Flashcard'

const Phrases = ({ sections }) => {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (section, card) => {
    setFlippedCards((prevFlippedCards) => {
      const sectionFlippedCards = { ...(prevFlippedCards[section.id] || {}) }
      const isFlipped = sectionFlippedCards[card.question]
      sectionFlippedCards[card.question] = !isFlipped
      return { ...prevFlippedCards, [section.id]: sectionFlippedCards }
    })
  }

  const section = sections.find((section) => section.id === 5) //
  const cards = section.cards
  const sectionFlippedCards = flippedCards[section.id] || {}

  return (
    <div>
      <div className="border border-gray-200 p-4 bg-gray-200 bg-opacity-50 ">
        <h2 className="text-center text-2xl font-bold mb-4">
          {section.english}
        </h2>
        <h2 className="text-2xl text-center font-bold mb-4">{section.teReo}</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center p-4 mx-4">
          {cards.map((card) => (
            <Flashcard
              key={card.question}
              question={card.question}
              answer={card.answer}
              isFlipped={sectionFlippedCards[card.question] || false}
              toggleFlip={() => toggleFlip(section, card)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Phrases
