import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaPlane, FaShip, FaWarehouse, FaGlobe, FaShieldAlt, FaArrowRight, FaClock, FaBox, FaMapMarkedAlt, FaRoute } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Using reliable image URLs for services
const truckImage = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const planeImage = 'https://images.unsplash.com/photo-1568332343886-366cc6ce8e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const shipImage = 'https://images.unsplash.com/photo-1566466880166-c78fad4a2b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
const defaultImage = 'https://images.unsplash.com/photo-1566153580922-19f62a3dcdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

const serviceItems = [
  {
    title: 'Kenya Express',
    description: 'Fast and reliable delivery service connecting major cities across Kenya',
    icon: <FaTruck className="text-4xl text-transpoto-600" />,
    link: '/kenya-express',
    bgImage: truckImage,
    features: [
      'Same-day delivery in Nairobi',
      '24/7 service availability',
      'Real-time tracking',
      'Priority handling'
    ]
  },
  {
    title: 'International Air',
    description: 'Global air freight solutions with direct flights from Nairobi',
    icon: <FaPlane className="text-4xl text-transpoto-600" />,
    link: '/international-air',
    bgImage: planeImage,
    features: [
      'Direct flights from Jomo Kenyatta',
      'Customs clearance',
      'Perishables',
      'Dangerous goods'
    ]
  },
  {
    title: 'Sea Port Solutions',
    description: 'Mombasa Port operations and container management',
    icon: <FaShip className="text-4xl text-transpoto-600" />,
    link: '/sea-port',
    bgImage: shipImage,
    features: [
      'Mombasa Port handling',
      'Container management',
      'Customs brokerage',
      'Warehouse services'
    ]
  }
];

const whyChooseUsItems = [
  {
    title: 'Global Network',
    description: 'Connected to major shipping routes and logistics hubs worldwide',
    icon: <FaGlobe className="text-3xl text-transpoto-600" />
  },
  {
    title: 'Expert Team',
    description: 'Logistics professionals with decades of industry experience',
    icon: <FaRoute className="text-3xl text-transpoto-600" />
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor your shipments in real-time with our advanced tracking system',
    icon: <FaMapMarkedAlt className="text-3xl text-transpoto-600" />
  },
  {
    title: 'Time Efficiency',
    description: 'Optimized routes and processes ensure your cargo arrives on schedule',
    icon: <FaClock className="text-3xl text-transpoto-600" />
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

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

export default function ServicesSection() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
            <div className="w-24 h-1 bg-transpoto-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Tailored logistics solutions for businesses of all sizes across multiple industries. From local deliveries to global shipping, we've got you covered.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviceItems.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-700 transform group-hover:scale-110"
                    onError={(e) => {
                      console.log(`Failed to load image for ${service.title}, using default`);
                      e.currentTarget.src = defaultImage;
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transpoto-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="p-3 bg-transpoto-600 rounded-full inline-block mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-5">{service.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FaShieldAlt className="text-transpoto-500 mt-1 mr-2 flex-shrink-0" />
                        </motion.div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={service.link} 
                      className="text-transpoto-600 font-medium inline-flex items-center hover:text-transpoto-700 transition-all duration-300 group"
                    >
                      Learn more
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Transpoto</h2>
            <div className="w-24 h-1 bg-transpoto-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our commitment to excellence and customer satisfaction sets us apart in the logistics industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}
