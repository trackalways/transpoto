import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Using public directory for static images
const ctaImage = '/images/cta/cta-bg.jpg';
const defaultImage = '/images/cta/default.jpg';
import { FaArrowRight, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-90"></div>
        <img 
          src={ctaImage}
          alt="CTA Background"
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
      </div>
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-10"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent-500 opacity-10"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full transform translate-x-32 -translate-y-32 z-0"></div>
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black-900 mb-6 font-display">Ready to Optimize Your <span className="text-orange-500">Global Logistics</span>?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Contact our team of experts today to discuss your transportation needs and discover how we can help your business grow with tailored logistics solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <FaClock />, text: "Fast response within 24 hours" },
                    { icon: <FaPhone />, text: "Free consultation call" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      <div className="text-blue-600 mr-3">{item.icon}</div>
                      <p>{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    className="bg-orange-500 text-white px-8 py-4 rounded-md font-medium hover:bg-orange-600 transition-all duration-300 inline-flex items-center font-display"
                  >
                    Get Started Now
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
                    <div className="flex items-center">
                      <FaPhone className="text-blue-600 mr-3" />
                      <span className="font-medium">Call Us</span>
                    </div>
                    <span>+254 794564808</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
                    <div className="flex items-center">
                      <FaEnvelope className="text-blue-600 mr-3" />
                      <span className="font-medium">Email</span>
                    </div>
                    <span>sales@transpotofreight.com</span>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-center"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to="/contact" 
                      className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                    >
                      View all contact options
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}