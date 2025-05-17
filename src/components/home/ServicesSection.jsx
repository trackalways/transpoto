import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaPlane, FaShip, FaWarehouse, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    title: 'Domestic Logistics',
    description: 'Comprehensive transportation and warehousing solutions across Kenya with real-time tracking.',
    icon: <FaTruck className="text-4xl text-transpoto-600" />,
    link: '/domestic-logistics',
    features: [
      'Nationwide coverage',
      'Temperature-controlled transport',
      'Last-mile delivery',
      'Warehousing solutions'
    ]
  },
  {
    title: 'Air Freight',
    description: 'Fast and secure global air cargo solutions with customs clearance.',
    icon: <FaPlane className="text-4xl text-transpoto-600" />,
    link: '/air-freight',
    features: [
      'Express shipping',
      'Dangerous goods handling',
      'Perishables transport',
      'Airport-to-door'
    ]
  },
  {
    title: 'Sea Freight',
    description: 'Cost-effective ocean freight with full container and LCL options.',
    icon: <FaShip className="text-4xl text-transpoto-600" />,
    link: '/sea-freight',
    features: [
      'FCL & LCL shipping',
      'Port handling',
      'Cargo insurance',
      'Global network'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <div className="w-20 h-1 bg-transpoto-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored logistics solutions for businesses of all sizes across multiple industries
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaShieldAlt className="text-transpoto-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link} 
                className="text-transpoto-600 font-medium inline-flex items-center hover:text-transpoto-700"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
