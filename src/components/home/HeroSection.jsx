import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-transpoto-700 to-transpoto-800 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEAMLESS SHIPPING. WORLDWIDE</h1>
          <p className="text-xl mb-8">Your trusted logistics partner in Kenya with global reach</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="bg-white text-transpoto-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center block"
              >
                Get a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/domestic-logistics" 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-transpoto-700 transition-colors text-center block"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
