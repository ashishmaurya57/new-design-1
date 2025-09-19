import React from 'react';

function InsuranceBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 luxury-heading">
          We Accept Most Insurance Plans
        </h2>
        <p className="text-xl text-white mb-6">
          Maximize your benefits with our insurance-friendly practice
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
          Verify Your Insurance
        </button>
      </div>
    </section>
  );
}

export default InsuranceBanner;