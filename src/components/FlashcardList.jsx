import React, { useState } from 'react'
import Flashcard from './Flashcard'
import flashcardData from '../data/flashcardData'

const FlashcardList = () => {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (sectionId, cardId) => {
    setFlippedCards((prevFlippedCards) => {
      const sectionFlippedCards = { ...(prevFlippedCards[sectionId] || {}) }
      const isFlipped = sectionFlippedCards[cardId]
      sectionFlippedCards[cardId] = !isFlipped
      return { ...prevFlippedCards, [sectionId]: sectionFlippedCards }
    })
  }

  const renderSections = () =>
    flashcardData.sections.map((section) => {
      const sectionId = section.id
      const cards = section.cards
      const sectionFlippedCards = flippedCards[sectionId] || {}

      return (
        <div key={sectionId}>
          <h2 className="text-center text-xl font-bold mb-4">
            {section.english}
          </h2>
          <h2 className="text-xl text-center font-bold mb-4">
            {section.teReo}
          </h2>
          <div>
            {cards.map((card) => (
              <Flashcard
                key={card.question}
                question={card.question}
                answer={card.answer}
                isFlipped={sectionFlippedCards[card.question] || false}
                toggleFlip={() => toggleFlip(sectionId, card.question)}
              />
            ))}
          </div>
        </div>
      )
    })

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Kuki Cards</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {renderSections()}
      </div>
    </div>
  )
}

export default FlashcardList
