import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'James Robertson',
    position: 'Operations Director',
    company: 'Global Trade Ltd',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'Transpoto has transformed our logistics operations. Their attention to detail and commitment to timely delivery has been instrumental to our business growth.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Supply Chain Manager',
    company: 'TechInnovate Inc',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'Working with Transpoto has simplified our international shipping processes. Their real-time tracking and customer service are exceptional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Omondi',
    position: 'Logistics Coordinator',
    company: 'Kenya Exports Association',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: "We've been relying on Transpoto for our freight needs for over 5 years. Their team consistently delivers our cargo safely and on time even with challenging routes.",
    rating: 4,
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-blue-600 text-sm">{testimonial.position}</p>
        <p className="text-gray-500 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i}
          className={`text-yellow-400 ${i < testimonial.rating ? 'opacity-100' : 'opacity-30'}`}
        />
      ))}
    </div>
    <div className="relative flex-grow">
      <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2" />
      <p className="text-gray-600 relative z-10">{testimonial.quote}</p>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-center text-gray-500 mb-8">Trusted by leading companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center px-4">
            {['Code Crumble', 'Encrypted Bug', 'TrackAlways', 'Ola', 'Coco-Cola'].map((company, idx) => (
              <div 
                key={company}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="h-12 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
