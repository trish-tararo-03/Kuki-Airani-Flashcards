import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="flex items-center justify-center m-10">
      <div className="border border-gray-200 rounded-lg p-8  bg-gray-200 bg-opacity-50 w-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to Kuki Cards
        </h1>
        <p className="text-lg text-center mb-2">
          Using simple flashcards to learn Te Reō Maori Kūki 'Airani
        </p>
        <p className="text-lg text-center mb-2">
          Choose a topic to get started below!
        </p>

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
    </section>
  )
}
