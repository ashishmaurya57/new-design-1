import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The team at Jhandulal Dental Hospital transformed my smile! The care and attention to detail was exceptional.",
      image: "https://via.placeholder.com/800x600/cccccc/666666?text=patient+testimonial+headshots+for+dental+website+1"
    },
    {
      name: "Michael Chen",
      text: "I was nervous about dental procedures, but the staff made me feel completely comfortable. Highly recommend!",
      image: "https://via.placeholder.com/800x600/cccccc/666666?text=smiling+patient+headshot+for+testimonial+card+on+dental+website+1"
    },
    {
      name: "Emily Rodriguez",
      text: "Professional, friendly, and state-of-the-art facility. Best dental experience I've ever had!",
      image: "https://via.placeholder.com/800x600/cccccc/666666?text=smiling+patient+headshot+photo+for+testimonial+1+1"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 luxury-heading">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-300 luxury-body">
            Real experiences from our valued patients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 text-center">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-white italic mb-6">
                "{testimonial.text}"
              </p>
              <h4 className="text-blue-400 font-semibold">{testimonial.name}</h4>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;