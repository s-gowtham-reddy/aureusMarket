import React from 'react'
import Navbar from '../components/navigation/Navbar'

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-aureus-navy to-blue-900">
        {/* Rest of your existing code stays the same */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">
              Welcome to <span className="text-aureus-gold">Aureus Market</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Where stock market knowledge becomes gold
            </p>
            <div className="space-x-4">
              <button className="bg-aureus-gold text-aureus-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-aureus-navy transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-aureus-gold mb-4">Expert Insights</h3>
              <p className="text-gray-300">Learn from market professionals and experienced traders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-aureus-gold mb-4">Community Driven</h3>
              <p className="text-gray-300">Connect with investors at all experience levels</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-aureus-gold mb-4">Real-time Discussion</h3>
              <p className="text-gray-300">Stay updated with market trends and breaking news</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
