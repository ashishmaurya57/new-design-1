import React from 'react';

function Reviews() {
  return (
    <section className="py-20" style={{ background: 'var(--luxury-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="luxury-heading text-4xl text-center mb-12" style={{ color: 'var(--luxury-text-primary)' }}>
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              "The most luxurious dental experience I've ever had. The staff is incredibly professional 
              and the facility is absolutely beautiful."
            </p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/800x600/cccccc/666666?text=smiling+patient+headshot+for+testimonial+card+on+dental+website+1" alt="smiling patient headshot for testimonial card" className="w-12 h-12 rounded-full object-cover mr-3"/>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              "Dr. Jhandulal transformed my smile completely. The attention to detail and 
              personalized care exceeded all my expectations."
            </p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/800x600/cccccc/666666?text=smiling+patient+headshot+photo+for+testimonial+1+1" alt="smiling patient headshot photo for testimonial 1" className="w-12 h-12 rounded-full object-cover mr-3"/>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4">
              "From the moment I walked in, I felt like royalty. The luxury environment 
              combined with exceptional dental care is unmatched."
            </p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/800x600/cccccc/666666?text=smiling+patient+headshot+photo+for+testimonial+2+1" alt="smiling patient headshot photo for testimonial 2" className="w-12 h-12 rounded-full object-cover mr-3"/>
              <div>
                <p className="font-semibold">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;