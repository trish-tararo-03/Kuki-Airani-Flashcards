import React from 'react'
import flashcardData from '../data/flashcardData'

export default function DaysOfWeek() {
  // console.log('HERE', flashcardData)
  return (
    <>
      <div>
        {flashcardData.daysOfWeek.map((item, index) => {
          const { section } = item
          return (
            <div key={index}>
              <h2>{section.english}</h2>
              <h2>{section.teReo}</h2>
              <div>
                <h3>
                  {item.section.cards.map((card, cardIndex) => (
                    <div key={cardIndex}>
                      <h3>{card.question}</h3>
                      <h3>{card.answer}</h3>
                    </div>
                  ))}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
