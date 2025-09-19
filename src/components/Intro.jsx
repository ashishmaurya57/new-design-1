import React from 'react';

function Intro() {
  return (
    <section className="py-20" style={{ background: 'var(--luxury-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-4xl md:text-5xl mb-6" style={{ color: 'var(--luxury-text-primary)' }}>
            Welcome to Luxury Dental Care
          </h2>
          <p className="luxury-subheading text-xl text-gray-600 max-w-3xl mx-auto">
            At Jhandulal Dental Hospital, we combine state-of-the-art technology with personalized care 
            to deliver exceptional dental experiences in a luxurious environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--luxury-secondary)' }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="luxury-subheading text-2xl mb-2" style={{ color: 'var(--luxury-text-primary)' }}>Expert Care</h3>
            <p className="text-gray-600">Highly skilled dental professionals with years of experience</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--luxury-secondary)' }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="luxury-subheading text-2xl mb-2" style={{ color: 'var(--luxury-text-primary)' }}>Advanced Technology</h3>
            <p className="text-gray-600">Latest dental equipment and techniques for optimal results</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--luxury-secondary)' }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="luxury-subheading text-2xl mb-2" style={{ color: 'var(--luxury-text-primary)' }}>Luxury Experience</h3>
            <p className="text-gray-600">Comfortable, spa-like environment for your relaxation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental staff team grayscale photos" className="w-full h-32 object-cover rounded-lg grayscale"/>
          <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental staff team grayscale photos" className="w-full h-32 object-cover rounded-lg grayscale"/>
          <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental staff team grayscale photos" className="w-full h-32 object-cover rounded-lg grayscale"/>
          <img src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental staff team grayscale photos" className="w-full h-32 object-cover rounded-lg grayscale"/>
        </div>
      </div>
    </section>
  );
}

export default Intro;