import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Kuki Cards</h1>
      <p> Created these simple flashcards to learn Te Reō Maori Kuki Airani</p>
      <p>Choose a topic to get started below</p>
      <div className="flex flex-row gap-4 p-2 items-center">
        <Link
          to="/months"
          className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded"
        >
          Months of the year
        </Link>
        <Link
          to="/days-of-week"
          className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded"
        >
          Days of the Week
        </Link>
        <Link
          to="/body-parts"
          className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded"
        >
          Parts of the Body
        </Link>
        <Link
          to="/meet-and-greet"
          className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded"
        >
          Greetings
        </Link>
        <Link
          to="/phrases"
          className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded"
        >
          Helpful Phrases
        </Link>
      </div>
    </div>
  )
}
