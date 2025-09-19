import React from 'react';

function Promotions() {
  return (
    <section className="py-20" style={{ background: 'var(--luxury-gradient)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="relative rounded-lg overflow-hidden h-64">
            <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental service icons set" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/80 to-yellow-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="luxury-heading text-3xl mb-2">TEETH WHITENING SPECIAL</h3>
                <p className="text-xl mb-4">Get a brighter smile with our professional whitening treatment</p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-800 px-6 py-2 rounded-lg uppercase tracking-wide transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64">
            <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dental service icons set" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/80 to-yellow-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="luxury-heading text-3xl mb-2">NEW PATIENT OFFER</h3>
                <p className="text-xl mb-4">Complete dental examination at special introductory price</p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-800 px-6 py-2 rounded-lg uppercase tracking-wide transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotions;