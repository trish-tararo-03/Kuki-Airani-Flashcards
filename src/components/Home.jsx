import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Kuki Cards</h1>
      <p> Created these simple flashcards to learn Te Reō Maori Kuki Airani</p>
      <p>Choose a topic to get started below</p>
      <div className="flex flex-row gap-4 p-2 items-center">
        <Link to="/months">
          <button className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded">
            Months of the Year
          </button>
        </Link>
        <Link to="/days-of-week">
          <button className="bg-primary hover:bg-green text-secondary font-bold py-2 px-4 rounded">
            Days of the Week
          </button>
        </Link>
      </div>
    </div>
  )
}
