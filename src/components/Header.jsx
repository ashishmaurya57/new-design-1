import React from 'react';

function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white luxury-heading">Jhandulal</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium uppercase tracking-wide">Home</a>
              <a href="#about" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium uppercase tracking-wide">About</a>
              <a href="#services" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium uppercase tracking-wide">Services</a>
              <a href="#contact" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium uppercase tracking-wide">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;