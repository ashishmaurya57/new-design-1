import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="professional dental office interior hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 luxury-heading">
          Premium Dental Care
        </h1>
        <p className="text-xl md:text-2xl mb-8 luxury-subheading">
          Experience luxury dental care with our expert team at Jhandulal Dental Hospital
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Schedule Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;