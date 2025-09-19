import React, { useState, useMemo } from 'react'

const BlogPage = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Smile Design',
      excerpt: 'Discover how modern cosmetic dentistry creates perfect smiles that enhance your natural beauty and boost confidence.',
      content: 'Full article content about smile design...',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267e7?w=800&h=400&fit=crop',
      category: 'Cosmetic Dentistry',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Dental Implants: A Permanent Solution',
      excerpt: 'Learn about the benefits of dental implants for missing teeth and why they are the gold standard in tooth replacement.',
      content: 'Full article content about dental implants...',
      image: 'https://images.unsplash.com/photo-1609840114035-3c3a1a7b4d9c?w=800&h=400&fit=crop',
      category: 'Restorative Dentistry',
      date: 'March 10, 2024',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Maintaining Oral Health at Home',
      excerpt: 'Essential tips for keeping your smile healthy between dental visits with proper home care routines.',
      content: 'Full article content about oral health...',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop',
      category: 'Preventive Care',
      date: 'March 5, 2024',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Teeth Whitening: Safe and Effective Methods',
      excerpt: 'Explore professional teeth whitening options and learn which method is right for you.',
      content: 'Full article content about teeth whitening...',
      image: 'https://images.unsplash.com/photo-1609840114035-3c3a1a7b4d9c?w=800&h=400&fit=crop',
      category: 'Cosmetic Dentistry',
      date: 'February 28, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Understanding Root Canal Therapy',
      excerpt: 'Demystifying root canal treatment and explaining when this procedure is necessary.',
      content: 'Full article content about root canals...',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop',
      category: 'Restorative Dentistry',
      date: 'February 20, 2024',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Pediatric Dental Care Guidelines',
      excerpt: 'Important information about children dental care and when to start dental visits.',
      content: 'Full article content about pediatric dentistry...',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267e7?w=800&h=400&fit=crop',
      category: 'Pediatric Dentistry',
      date: 'February 15, 2024',
      readTime: '5 min read',
      featured: false
    }
  ]

  const categories = ['All', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Preventive Care', 'Pediatric Dentistry']

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267e7?w=1920&h=400&fit=crop" 
          alt="Dental Blog" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Dental Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Expert advice, latest trends, and tips for optimal oral health
          </p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Featured Posts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map(post => (
                    <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <span className="text-yellow-500 text-sm font-semibold">{post.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 text-white">{post.title}</h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-white">All Posts</h2>
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img src={post.image} alt={post.title} className="w-full h-48 md:h-full object-cover" />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <span className="text-yellow-500 text-sm font-semibold">{post.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 text-white">{post.title}</h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Posts */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="text-sm font-semibold text-white mb-2">{post.title}</h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-black">Stay Updated</h3>
              <p className="text-black text-sm mb-4">Get the latest dental tips and news delivered to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded border border-gray-300 text-black"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage