import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaMapMarkerAlt, FaTruck, FaPlane, FaShip } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const aboutContent = {
    title: 'About Transpoto Kenya',
    subtitle: 'Leading Logistics Provider in Kenya',
    history: [
      {
        year: '1995',
        event: 'Established in Nairobi',
        description: 'Founded as a small courier service in Nairobi'
      },
      {
        year: '2000',
        event: 'National Expansion',
        description: 'Expanded to cover major cities across Kenya'
      },
      {
        year: '2010',
        event: 'International Operations',
        description: 'Launched international air and sea freight services'
      },
      {
        year: '2025',
        event: 'Digital Transformation',
        description: 'Implemented advanced tracking and logistics systems'
      }
    ],
    values: [
      {
        icon: <FaMapMarkerAlt className="text-4xl text-transpoto-600" />,
        title: 'Local Expertise',
        description: 'Deep understanding of Kenya\'s logistics landscape and customs regulations'
      },
      {
        icon: <FaTruck className="text-4xl text-transpoto-600" />,
        title: 'Nationwide Network',
        description: 'Extensive coverage across all major cities and towns in Kenya'
      },
      {
        icon: <FaPlane className="text-4xl text-transpoto-600" />,
        title: 'Global Reach',
        description: 'Direct operations from Nairobi\'s Jomo Kenyatta International Airport'
      },
      {
        icon: <FaShip className="text-4xl text-transpoto-600" />,
        title: 'Port Excellence',
        description: 'Specialized services for Mombasa Port operations'
      }
    ]
  };

  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <main className="py-12 pt-28 flex-grow">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{aboutContent.title}</h1>
              <p className="text-xl text-gray-600">{aboutContent.subtitle}</p>
            </div>

            {/* Company History */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
              <div className="space-y-8">
                {aboutContent.history.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutContent.values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
