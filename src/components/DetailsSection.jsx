import React from 'react';

function DetailsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/33841601/pexels-photo-33841601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="modern dental equipment showcase photo"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 luxury-heading text-gray-900">
              Advanced Dental Technology
            </h2>
            <p className="text-lg text-gray-700 mb-8 luxury-body">
              We invest in the latest dental technology to ensure precise diagnoses and comfortable treatments for all our patients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Digital X-rays with 90% less radiation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Intraoral cameras for detailed examination</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Laser dentistry for painless procedures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">CAD/CAM technology for same-day crowns</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">3D imaging for precise implant placement</span>
              </li>
            </ul>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Discover Our Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;