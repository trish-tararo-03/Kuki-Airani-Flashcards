import { useState } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'

import flashcardData from '../data/flashcardData'
export default function DaysOfWeek() {
  // console.log('HERE', flashcardData)

  const [isFlipped, setIsFlipped] = useState(false)
  const [flippedCards, setFlippedCards] = useState([])

  const toggleFlip = (id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter((cardId) => cardId !== id))
    } else {
      setFlippedCards([...flippedCards, id])
    }
    // console.log('Clicked')
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-md mx-auto p-4 bg-red-100 rounded-lg shadow-lg">
          {flashcardData.daysOfWeek.map((item, index) => {
            const { section } = item
            return (
              <div key={index} className="mb-8">
                <h2 className="text-center text-xl font-bold mb-4">
                  {section.english}
                </h2>
                <h2 className="text-xl text-center font-bold mb-4">
                  {section.teReo}
                </h2>
                <div>
                  <Flipper flipKey={flippedCards.join('')}>
                    {item.section.cards.map((card) => {
                      const { id, question, answer } = card
                      return (
                        <div
                          key={id}
                          className="bg-blue-600 p-4 rounded-lg mb-4 sm:mb-2 md:mb-4 cursor-pointer"
                          onClick={() => toggleFlip(id)}
                        >
                          <Flipped flipId={`question-${id}`}>
                            <div
                              className={`${
                                flippedCards.includes(id) ? 'hidden' : ''
                              }`}
                            >
                              <h3
                                className={
                                  'text-center text-lg font-semibold mb-2'
                                }
                              >
                                {question}
                              </h3>
                            </div>
                          </Flipped>

                          <Flipped flipId={`answer-${id}`}>
                            <div
                              className={`${
                                flippedCards.includes(id) ? '' : 'hidden'
                              }`}
                            >
                              <h3 className=" text-center text-xl font-semibold mb-2">
                                {answer}
                              </h3>
                            </div>
                          </Flipped>
                        </div>
                      )
                    })}
                  </Flipper>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
