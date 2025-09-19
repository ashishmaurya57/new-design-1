import React from 'react';

function OfficeSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 luxury-heading">
              Visit Our Office
            </h2>
            <p className="text-lg mb-8 luxury-body">
              Conveniently located with state-of-the-art facilities to serve all your dental needs.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">📍</span>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">123 Dental Avenue, Medical District</p>
                  <p className="text-gray-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">📞</span>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-4 text-xl">🕐</span>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mb-8">
              <img 
                src="https://images.pexels.com/photos/8875613/pexels-photo-8875613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="dental certification badge icons"
                className="h-12 w-auto object-contain"
              />
              <img 
                src="https://images.pexels.com/photos/8875613/pexels-photo-8875613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="accreditation medical certification badges icons for footer"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <div>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959472827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeSection;