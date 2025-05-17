import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-transpoto-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We take pride in delivering exceptional logistics services that meet and exceed our clients' expectations
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-transpoto-400 -mt-6 -ml-6 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-transpoto-400 -mb-6 -mr-6 opacity-30"></div>
          
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8 md:p-12">
            <FaQuoteLeft className="text-5xl text-transpoto-100 absolute top-8 left-8 opacity-40" />
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-md border-4 border-white">
                        <img 
                          src={testimonials[currentTestimonial].image} 
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`text-xl ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-transpoto-600">{testimonials[currentTestimonial].position}</p>
                      <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button 
                onClick={prevTestimonial}
                className="bg-white/80 hover:bg-white text-transpoto-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 -ml-5 pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white/80 hover:bg-white text-transpoto-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 -mr-5 pointer-events-auto"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-transpoto-600 w-6' : 'bg-gray-300 hover:bg-transpoto-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Client logos */}
        <motion.div 
          className="mt-20 pt-10 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center text-gray-500 mb-8 text-lg">Trusted by businesses worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div 
                key={num}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Client {num}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
