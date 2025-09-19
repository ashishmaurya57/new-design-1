import React from 'react';

function TeamIntro() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-3 gap-4">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="dental team group photo in clinic for healthcare website"
              className="col-span-3 w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/33883600/pexels-photo-33883600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="professional dentist portrait photo for about section"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/33829559/pexels-photo-33829559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="professional dentist portrait for about section on healthcare website"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 luxury-heading text-blue-400">
              Meet Our Expert Team
            </h2>
            <p className="text-lg mb-6 luxury-body">
              At Jhandulal Dental Hospital, our team of experienced dental professionals is dedicated to providing you with the highest quality care in a comfortable and welcoming environment.
            </p>
            <p className="text-gray-300 mb-8">
              With years of combined experience and continuous education in the latest dental techniques, we ensure that every patient receives personalized treatment tailored to their unique needs.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamIntro;