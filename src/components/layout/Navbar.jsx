import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars, FaChevronDown, FaShip, FaPlane, FaTruck, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Track Shipment', 
      path: '/track-shipment',
      icon: <FaMapMarkerAlt className="mr-2" />
    },
    { 
      name: 'Services', 
      path: '#',
      dropdown: true,
      subLinks: [
        { name: 'Domestic Logistics', path: '/domestic-logistics', icon: <FaTruck className="mr-2" /> },
        { name: 'Air Freight', path: '/air-freight', icon: <FaPlane className="mr-2" /> },
        { name: 'Sea Freight', path: '/sea-freight', icon: <FaShip className="mr-2" /> }
      ]
    },
    { name: 'Contact', path: '/contact', icon: <FaPhone className="mr-2" /> }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigation occurs
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);
  

  return (
    <header className={`w-full fixed top-0 left-0 z-[1000] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-transpoto-700">Transpoto</span>
            <span className="text-2xl font-light text-transpoto-600"> Freight</span>
          </motion.div>
        </Link>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center px-4 py-2 rounded-md ${link.subLinks.some(sub => location.pathname === sub.path) ? 'text-transpoto-600 font-medium' : 'text-gray-600'} hover:text-transpoto-600 hover:bg-gray-50 transition-colors`}
                  >
                    {link.name}
                    <FaChevronDown className={`ml-1 text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-56 z-50"
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <motion.div 
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                          >
                            <Link 
                              to={subLink.path}
                              className={`flex items-center px-4 py-2 ${location.pathname === subLink.path ? 'bg-transpoto-50 text-transpoto-600' : 'text-gray-700'} hover:bg-transpoto-50 hover:text-transpoto-600 transition-colors w-full text-left`}
                            >
                              {subLink.icon}
                              {subLink.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  to={link.path}
                  className={`px-4 py-2 rounded-md ${location.pathname === link.path ? 'text-transpoto-600 font-medium' : 'text-gray-600'} hover:text-transpoto-600 hover:bg-gray-50 transition-colors block`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <Link 
            to="/contact"
            className="ml-2 bg-transpoto-600 text-white px-4 py-2 rounded-md hover:bg-transpoto-700 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <div>
                        <button 
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center justify-between w-full px-3 py-2 ${link.subLinks.some(sub => location.pathname === sub.path) ? 'text-transpoto-600 font-medium' : 'text-gray-700'} hover:bg-gray-50 rounded-md`}
                        >
                          {link.name}
                          <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-1 border-l-2 border-transpoto-100 ml-3 space-y-1"
                            >
                              {link.subLinks.map((subLink, subIndex) => (
                                <Link 
                                  key={subIndex}
                                  to={subLink.path} 
                                  className={`flex items-center px-3 py-2 ${location.pathname === subLink.path ? 'text-transpoto-600 font-medium' : 'text-gray-600'} hover:bg-gray-50 rounded-md`}
                                >
                                  {subLink.icon}
                                  {subLink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={link.path}
                        className={`block px-3 py-2 ${location.pathname === link.path ? 'text-transpoto-600 font-medium' : 'text-gray-700'} hover:bg-gray-50 rounded-md`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link 
                  to="/contact"
                  className="px-3 py-2 bg-transpoto-600 text-white rounded-md text-center mt-2"
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top progress bar when scrolled */}
      {isScrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-transpoto-500 to-blue-400 absolute bottom-0 left-0 w-full origin-left"
        />
      )}
    </header>
  );
}
