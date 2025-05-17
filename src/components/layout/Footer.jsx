import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaShip, FaPlane, FaTruck, FaClock, FaArrowRight } from 'react-icons/fa';

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-8 border-transpoto-500"></div>
        <div className="absolute top-40 left-10 w-40 h-40 rounded-full border-4 border-blue-400"></div>
        <div className="absolute bottom-20 right-40 w-60 h-60 rounded-full border-4 border-blue-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with newsletter */}
        <div className="bg-gradient-to-r from-transpoto-700 to-transpoto-800 p-8 rounded-xl shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-transpoto-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center relative">
            <div className="md:col-span-3">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Stay Updated with Logistics Trends
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Subscribe to our newsletter for the latest industry news, updates and exclusive offers
              </motion.p>
            </div>
            <div className="md:col-span-2">
              <motion.div 
                className="flex flex-col sm:flex-row gap-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-transpoto-500 bg-white/90 text-gray-800 w-full"
                />
                <motion.button 
                  className="px-5 py-3 bg-transpoto-600 hover:bg-transpoto-700 transition-colors rounded-md font-medium whitespace-nowrap flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <FaArrowRight className="ml-2" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-white">Transpoto</span>
                <span className="text-blue-400 font-light"> Freight</span>
              </h3>
              <div className="w-12 h-1 bg-transpoto-500 mb-4"></div>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted logistics partner in Kenya with global reach. We provide comprehensive freight solutions for businesses of all sizes.  
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-gray-300 hover:text-white hover:bg-transpoto-600 p-2 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              <span className="border-b-2 border-transpoto-500 pb-1">Our Services</span>
            </h4>
            <ul className="space-y-3">
              {[
                { icon: <FaTruck />, name: 'Domestic Logistics', path: '/domestic-logistics' },
                { icon: <FaPlane />, name: 'Air Freight', path: '/air-freight' },
                { icon: <FaShip />, name: 'Sea Freight', path: '/sea-freight' },
                { icon: <FaClock />, name: 'Express Delivery', path: '/domestic-logistics' },
                { icon: <FaGlobe />, name: 'International Shipping', path: '/sea-freight' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <span className="mr-2 text-transpoto-500 group-hover:text-transpoto-400">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              <span className="border-b-2 border-transpoto-500 pb-1">Quick Links</span>
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Request Quote', path: '/contact' },
                { name: 'Track Shipment', path: '/contact' },
                { name: 'Terms & Conditions', path: '/about' },
                { name: 'Privacy Policy', path: '/about' },
              ].map((item, i) => (
                <Link 
                  key={i}
                  to={item.path} 
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              <span className="border-b-2 border-transpoto-500 pb-1">Contact Us</span>
            </h4>
            <address className="text-gray-400 not-italic space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-transpoto-500 mt-1 mr-3 flex-shrink-0" />
                <p>5th floor, Kalson Towers, Crescent Road, Parklands, Nairobi</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-transpoto-500 mr-3 flex-shrink-0" />
                <p>+254 794564808</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-transpoto-500 mr-3 flex-shrink-0" />
                <p>sales@transpotofreight.com</p>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-transpoto-500 mr-3 flex-shrink-0" />
                <p>www.transpotofreight.com</p>
              </div>
              
              <div className="pt-4">
                <motion.button 
                  className="bg-transpoto-600 hover:bg-transpoto-700 text-white px-5 py-2 rounded-md transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone className="mr-2" /> Call Us Now
                </motion.button>
              </div>
            </address>
          </motion.div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="mb-4 md:mb-0">© {currentYear} Transpoto Freight Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="hover:text-transpoto-400 transition-colors">Terms of Service</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/about" className="hover:text-transpoto-400 transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/contact" className="hover:text-transpoto-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <motion.button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 bg-transpoto-600 hover:bg-transpoto-700 text-white p-3 rounded-full shadow-lg transition-colors"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </footer>
  );
}
