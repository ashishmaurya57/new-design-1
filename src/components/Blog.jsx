import React from 'react'

const Blog = ({ setCurrentPage }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Smile Design',
      excerpt: 'Discover how modern cosmetic dentistry creates perfect smiles.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267e7?w=400&h=250&fit=crop',
      category: 'Cosmetic Dentistry',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Dental Implants: A Permanent Solution',
      excerpt: 'Learn about the benefits of dental implants for missing teeth.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c3c1a7b4d9c?w=400&h=250&fit=crop',
      category: 'Restorative Dentistry',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'Maintaining Oral Health at Home',
      excerpt: 'Essential tips for keeping your smile healthy between visits.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop',
      category: 'Preventive Care',
      date: 'March 5, 2024'
    }
  ]

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay informed with our latest dental insights and tips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-yellow-500 text-sm font-semibold">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-white">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('blog')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog