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
          <div className="flex space-x-4">
            <Link
              to="/months"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Months
            </Link>
            <Link
              to="/days-of-week"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Days of the Week
            </Link>
            {/* Add more navigation links as needed */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
