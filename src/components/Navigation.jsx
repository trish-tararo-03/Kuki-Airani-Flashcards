import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Kuki Cards
            </Link>
          </div>
          <div className="flex space-x-1 flex-wrap">
            <Link
              to="/months"
              className="text-secondary hover:bg-green px-3 py-2 rounded-md text-sm font-medium"
            >
              Months
            </Link>
            <Link
              to="/days-of-week"
              className=" text-secondary hover:bg-green px-3 py-2 rounded-md text-sm font-medium"
            >
              Days of the Week
            </Link>

            <Link
              to="/body-parts"
              className="text-secondary hover:bg-green px-3 py-2 rounded-md text-sm font-medium"
            >
              Body Parts
            </Link>

            <Link
              to="/meet-and-greet"
              className="text-secondary hover:bg-green px-3 py-2 rounded-md text-sm font-medium"
            >
              Greetings
            </Link>
            {/* Add more navigation links as needed */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
