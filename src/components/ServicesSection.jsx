import React from 'react';

function ServicesSection() {
  const services = [
    {
      title: "Teeth Cleaning",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of toothbrush for cleaning service card"
    },
    {
      title: "Orthodontics",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of braces for orthodontics service card"
    },
    {
      title: "Teeth Whitening",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of teeth whitening for service card"
    },
    {
      title: "Smile Makeover",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of smile makeover for cosmetic dentistry card"
    },
    {
      title: "Root Canal",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of root canal tool for endodontics card"
    },
    {
      title: "Dental Implants",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "line icon of dental implant for service card"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 luxury-heading">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 luxury-body">
            Comprehensive dental care for your entire family
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <button className="text-blue-300 hover:text-blue-200 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;