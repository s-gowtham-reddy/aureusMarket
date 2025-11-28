import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav className="bg-black border-b border-black sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Both parts WHITE */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Aureus</span>
            <span className="text-2xl font-bold text-white">Market</span>
          </Link>

          {/* Search Bar - Center */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search stocks, topics, insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-aureus-gold border border-gray-800"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-aureus-gold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-aureus-gold transition">
              Feed
            </Link>
            <Link to="/about" className="text-white hover:text-aureus-gold transition">
              About
            </Link>
            <Link to="/pricing" className="text-white hover:text-aureus-gold transition">
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4 ml-6">
            <Link 
              to="/login" 
              className="text-white hover:text-aureus-gold transition font-semibold px-4 py-2"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-aureus-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
