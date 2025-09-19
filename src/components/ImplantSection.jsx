import React from 'react';

function ImplantSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 luxury-heading text-gray-900">
              Dental Implant Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 luxury-body">
              Restore your smile with our state-of-the-art dental implant solutions. Our experienced implant specialists use advanced techniques to ensure optimal results.
            </p>
            <p className="text-gray-600 mb-8">
              From single tooth replacement to full-mouth restoration, we provide comprehensive implant services tailored to your specific needs and budget.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Permanent tooth replacement solution</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Natural-looking and feeling results</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Prevents bone loss and facial collapse</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">✓</span>
                <span className="text-gray-700">Long-term investment in your oral health</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Learn About Implants
            </button>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="dental implant procedure photo for healthcare website"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImplantSection;