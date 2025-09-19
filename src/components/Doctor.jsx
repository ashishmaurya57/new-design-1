import React from 'react';

function Doctor() {
  return (
    <section className="py-20" style={{ background: 'var(--luxury-gradient-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.pexels.com/photos/33883600/pexels-photo-33883600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="professional dentist portrait photo" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="luxury-heading text-4xl mb-6" style={{ color: 'var(--luxury-text-primary)' }}>
              Meet Our Expert Dentist
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in luxury dental care, Dr. Jhandulal leads our team 
              with passion for excellence and patient comfort. Our state-of-the-art facility combines 
              advanced technology with personalized care to deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that everyone deserves a beautiful, healthy smile. Our comprehensive 
              approach to dental care ensures that each patient receives customized treatment 
              plans tailored to their unique needs and goals.
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg uppercase tracking-wide transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;