import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaMapMarkerAlt, FaTruck, FaPlane, FaShip } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const aboutContent = {
    title: 'About Transpoto Freight Ltd',
    subtitle: 'Trusted Logistics Backed by Decades of Excellence',
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

            {/* Group Legacy & About Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Legacy</h2>
              <div className="bg-white p-8 rounded-lg shadow-md text-lg text-gray-800 max-w-3xl mx-auto">
                <p className="mb-4">
                  Transpoto Freight Ltd is proud to be a sister company of <a href="https://www.airstatecourier.in/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">Airstate Courier</a>, a name synonymous with speed, reliability, and professionalism in the logistics industry for over 20 years. Our group has built a reputation for delivering seamless, secure, and efficient logistics solutions to clients across borders.
                </p>
                <p className="mb-4">
                  Backed by the legacy and expertise of Airstate Courier, Transpoto Freight is not a newcomer—our foundation is rooted in decades of hands-on experience and a deep understanding of the challenges and demands of global logistics. We are committed to upholding the same high standards, innovative spirit, and customer-first values that have earned our group the trust of thousands of businesses worldwide.
                </p>
                <p>
                  Whether you are shipping locally or internationally, you can count on Transpoto Freight for personalized service, advanced tracking, and a dedicated team that puts your needs first. Our partnership with Airstate Courier ensures you benefit from a broad network, proven systems, and a relentless focus on your satisfaction.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
                <p className="text-gray-800 text-lg">To be the leading provider of innovative and reliable logistics solutions across Africa and beyond, setting new standards for efficiency, trust, and customer satisfaction.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
                <p className="text-gray-800 text-lg">To deliver exceptional logistics and freight forwarding services by leveraging technology, fostering a culture of excellence, and building lasting partnerships with our clients and communities.</p>
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
