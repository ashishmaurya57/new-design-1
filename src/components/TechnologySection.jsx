import React from 'react';

function TechnologySection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 luxury-heading">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 luxury-body">
            Experience the future of dentistry with our advanced equipment and techniques
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/33841601/pexels-photo-33841601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="modern dental equipment showcase photo"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Digital X-Rays</h3>
                <p className="text-sm">90% less radiation</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/33916728/pexels-photo-33916728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="tooth whitening procedure photo for dental service card"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Laser Dentistry</h3>
                <p className="text-sm">Painless procedures</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="dental service icons set for healthcare website"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">CAD/CAM Technology</h3>
                <p className="text-sm">Same-day crowns</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.pexels.com/photos/8875613/pexels-photo-8875613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="award badge icons row for medical practice landing page"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">3D Imaging</h3>
                <p className="text-sm">Precise diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;