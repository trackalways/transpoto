import React, { useState, useEffect } from 'react';
import logoImage from '/transpoto-logo-dark.png'; // Direct import
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars, FaChevronDown, FaShip, FaPlane, FaTruck, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

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
        { name: 'Air Freight', path: '/air-freight', icon: <FaPlane className="mr-2" /> },
        { name: 'Sea Freight', path: '/sea-freight', icon: <FaShip className="mr-2" /> },
        { name: 'Domestic Logistics', path: '/domestic-logistics', icon: <FaTruck className="mr-2" /> },
        { name: 'Parcel & Document Shipping', path: '/parcel-document-shipping', icon: <FaEnvelope className="mr-2" /> }
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
    <header className="w-full fixed top-0 left-0 z-[1000] transition-all duration-300 bg-white shadow-md py-4 font-sans">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div style={{ width: '350px', display: 'flex', alignItems: 'center', overflow: 'visible' }}>
          <Link to="/">
            <div style={{ 
              width: '350px', 
              height: '70px', 
              backgroundImage: 'url(/transpoto-logo-dark.png)', 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'left center',
              transform: 'scale(3.5)',
              transformOrigin: 'left center',
              marginRight: '50px'
            }}></div>
          </Link>
        </div>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center px-4 py-2 rounded-md text-lg ${link.subLinks.some(sub => location.pathname === sub.path) ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 hover:bg-blue-50 transition-colors`}
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
                              className={`flex items-center px-4 py-3 text-base ${location.pathname === subLink.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-600 transition-colors w-full text-left`}
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
                  className={`px-4 py-2 rounded-md text-lg ${location.pathname === link.path ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-blue-600 hover:bg-blue-50 transition-colors block`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <Link 
            to="/contact"
            className="ml-4 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors text-lg font-medium shadow-md font-display"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-3 rounded-md hover:bg-gray-100"
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
                          className={`flex items-center justify-between w-full px-3 py-3 ${link.subLinks.some(sub => location.pathname === sub.path) ? 'text-transpoto-600 font-medium' : 'text-gray-700'} hover:bg-gray-50 rounded-md text-lg`}
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
                                  className={`flex items-center px-3 py-3 ${location.pathname === subLink.path ? 'text-transpoto-600 font-medium' : 'text-gray-600'} hover:bg-gray-50 rounded-md text-base`}
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
                        className={`block px-3 py-3 ${location.pathname === link.path ? 'text-transpoto-600 font-medium' : 'text-gray-700'} hover:bg-gray-50 rounded-md text-lg`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link 
                  to="/contact"
                  className="px-4 py-3 bg-transpoto-600 text-white rounded-md text-center mt-3 text-lg font-medium shadow-md block"
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
