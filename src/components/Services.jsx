import React from 'react';

function Services() {
  return (
    <section className="py-20" style={{ background: 'var(--luxury-gradient-mixed)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="luxury-heading text-4xl text-center mb-12" style={{ color: 'var(--luxury-text-primary)' }}>
          Our Luxury Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental service icons set" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"/>
            <h3 className="luxury-subheading text-2xl mb-3" style={{ color: 'var(--luxury-text-primary)' }}>Cosmetic Dentistry</h3>
            <p className="text-gray-600 mb-4">Transform your smile with our premium cosmetic treatments including veneers, whitening, and complete smile makeovers.</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg uppercase tracking-wide transition-colors text-sm">
              Learn More
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental service icons set" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"/>
            <h3 className="luxury-subheading text-2xl mb-3" style={{ color: 'var(--luxury-text-primary)' }}>Dental Implants</h3>
            <p className="text-gray-600 mb-4">Premium dental implant solutions for natural-looking, permanent tooth replacement with luxury care.</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg uppercase tracking-wide transition-colors text-sm">
              Learn More
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental service icons set" className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"/>
            <h3 className="luxury-subheading text-2xl mb-3" style={{ color: 'var(--luxury-text-primary)' }}>Orthodontics</h3>
            <p className="text-gray-600 mb-4">Luxury orthodontic treatments including invisible aligners and traditional braces for perfect alignment.</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg uppercase tracking-wide transition-colors text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;