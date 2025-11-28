import React, { useState } from 'react'
import Navbar from '../components/navigation/Navbar'

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('Hot')
  
  // Sample posts data
  const [posts] = useState([
    {
      id: 1,
      author: 'MarketGuru',
      title: 'Tesla stock analysis - Q4 2025 outlook',
      content: 'Tesla is showing strong momentum with record deliveries. The stock could reach $350 by year-end based on current fundamentals...',
      tags: ['TSLA', 'Analysis', 'EV'],
      upvotes: 145,
      comments: 23,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'StockExpert',
      title: 'Is now the time to buy tech stocks?',
      content: 'With recent market corrections, many tech giants are trading at attractive valuations. Apple, Microsoft, and Google show strong fundamentals...',
      tags: ['Tech', 'Buying Opportunity'],
      upvotes: 89,
      comments: 15,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      author: 'IndianInvestor',
      title: 'Top 5 Indian stocks for long-term growth',
      content: 'Looking at the Indian market, here are my top picks for 2026: Reliance, TCS, HDFC Bank, Infosys, and Asian Paints...',
      tags: ['India', 'Long-term', 'Growth'],
      upvotes: 67,
      comments: 31,
      timestamp: '1 day ago'
    },
    {
      id: 4,
      author: 'CryptoTrader',
      title: 'Bitcoin crosses $95k - What this means for stocks',
      content: 'Bitcoin surge indicates risk-on sentiment. This could benefit tech stocks and growth companies...',
      tags: ['Bitcoin', 'Crypto', 'Market'],
      upvotes: 112,
      comments: 45,
      timestamp: '3 hours ago'
    }
  ])

  const trendingTopics = [
    { name: 'Tesla', count: '2.3K posts' },
    { name: 'Indian Market', count: '1.8K posts' },
    { name: 'AI Stocks', count: '1.5K posts' },
    { name: 'Bitcoin', count: '1.2K posts' },
    { name: 'Banking Sector', count: '980 posts' }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* LEFT SIDEBAR - Filters & Trending */}
            <div className="w-64 flex-shrink-0">
              {/* Filter Menu */}
              <div className="bg-black border border-gray-800 rounded-lg p-4 mb-6 sticky top-20">
                <h3 className="font-bold text-lg text-white mb-4">Feed</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveFilter('Hot')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeFilter === 'Hot'
                        ? 'bg-aureus-gold text-black font-semibold'
                        : 'text-white hover:bg-gray-900'
                    }`}
                  >
                    🔥 Hot
                  </button>
                  <button
                    onClick={() => setActiveFilter('New')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeFilter === 'New'
                        ? 'bg-aureus-gold text-black font-semibold'
                        : 'text-white hover:bg-gray-900'
                    }`}
                  >
                    ✨ New
                  </button>
                  <button
                    onClick={() => setActiveFilter('Top')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeFilter === 'Top'
                        ? 'bg-aureus-gold text-black font-semibold'
                        : 'text-white hover:bg-gray-900'
                    }`}
                  >
                    ⬆️ Top
                  </button>
                  <button
                    onClick={() => setActiveFilter('Trending')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeFilter === 'Trending'
                        ? 'bg-aureus-gold text-black font-semibold'
                        : 'text-white hover:bg-gray-900'
                    }`}
                  >
                    📈 Trending
                  </button>
                </div>

                {/* Create Post Button */}
                <button className="w-full mt-6 bg-aureus-gold text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                  + Create Post
                </button>
              </div>

              {/* Trending Topics */}
              <div className="bg-black border border-gray-800 rounded-lg p-4 sticky top-96">
                <h3 className="font-bold text-lg text-white mb-4">🔥 Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="cursor-pointer hover:bg-gray-900 p-2 rounded transition">
                      <p className="font-semibold text-white">{topic.name}</p>
                      <p className="text-sm text-gray-500">{topic.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MAIN FEED - Posts */}
            <div className="flex-1 max-w-3xl">
              {/* Current Filter Display */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {activeFilter} Posts
                </h2>
              </div>

              {/* Posts Feed */}
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post.id} className="bg-black border border-gray-800 rounded-lg p-6 hover:bg-gray-900 transition cursor-pointer">
                    {/* Post Header */}
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-aureus-gold rounded-full flex items-center justify-center text-black font-bold">
                        {post.author[0]}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-white">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.timestamp}</p>
                      </div>
                    </div>

                    {/* Post Content */}
                    <h2 className="text-xl font-bold text-white mb-2 hover:text-aureus-gold">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-900 text-aureus-gold border border-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-800 cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center space-x-6 text-gray-500 border-t border-gray-800 pt-3">
                      <button className="flex items-center space-x-2 hover:text-aureus-gold transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="font-semibold">{post.upvotes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-aureus-gold transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="font-semibold">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-aureus-gold transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-80 hidden xl:block">
              <div className="bg-black border border-gray-800 rounded-lg p-4 sticky top-20">
                <h3 className="font-bold text-lg text-white mb-4">About Aureus Market</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Join thousands of investors sharing insights, analysis, and discussions about stock markets worldwide.
                </p>
                <button className="w-full bg-aureus-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
