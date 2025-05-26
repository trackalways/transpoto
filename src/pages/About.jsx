import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaMapMarkerAlt, FaTruck, FaPlane, FaShip, FaGlobe, FaUsers, FaLaptop, FaMoneyBillWave, FaShieldAlt, FaQuoteLeft, FaStar, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const aboutContent = {
    title: 'About Transpoto',
    subtitle: 'Trusted Logistics Backed by Decades of Excellence',
    values: [
      {
        icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />,
        title: 'Local Expertise',
        description: 'Deep understanding of Kenya\'s logistics landscape and customs regulations'
      },
      {
        icon: <FaTruck className="text-4xl text-blue-600" />,
        title: 'Nationwide Network',
        description: 'Extensive coverage across all major cities and towns in Kenya'
      },
      {
        icon: <FaPlane className="text-4xl text-blue-600" />,
        title: 'Global Reach',
        description: 'Direct operations from Nairobi\'s Jomo Kenyatta International Airport'
      },
      {
        icon: <FaShip className="text-4xl text-blue-600" />,
        title: 'Port Excellence',
        description: 'Specialized services for Mombasa Port operations'
      }
    ],
    benefits: [
      {
        title: 'Experienced Team',
        description: 'Our team brings decades of combined experience in logistics and freight forwarding.',
        icon: <FaTruck />
      },
      {
        title: 'Global Network',
        description: 'We maintain strong partnerships with carriers and agents worldwide for seamless service.',
        icon: <FaGlobe />
      },
      {
        title: 'Customer-Centric',
        description: 'We prioritize your needs with personalized solutions and responsive support.',
        icon: <FaUsers />
      },
      {
        title: 'Advanced Technology',
        description: 'Our digital platforms provide real-time tracking and streamlined communication.',
        icon: <FaLaptop />
      },
      {
        title: 'Competitive Pricing',
        description: 'We offer transparent, competitive rates without compromising on service quality.',
        icon: <FaMoneyBillWave />
      },
      {
        title: 'Compliance Expertise',
        description: 'We ensure all shipments meet regulatory requirements across borders.',
        icon: <FaShieldAlt />
      }
    ]
  };

  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 pt-28 pb-24 text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10"
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
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-orange-500 opacity-10"
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern bg-repeat opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">{aboutContent.title}</h1>
              <p className="text-xl text-blue-100 mb-6 font-sans">{aboutContent.subtitle}</p>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            </motion.div>
            
            {/* Added tagline with typing animation effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="bg-white/10 backdrop-blur-sm py-4 px-6 rounded-lg max-w-2xl mx-auto mb-8 border border-white/20"
            >
              <p className="text-lg text-blue-50 italic font-sans">
                "Connecting businesses across borders with reliable, efficient, and innovative logistics solutions since 2005."
              </p>
            </motion.div>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "1000+", label: "Happy Clients" },
                { number: "100+", label: "Countries Served" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.2), duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-300 font-display">{stat.number}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Full-width intro section */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-4xl font-bold text-brand-black-900 mb-6 font-display">Our Story</h2>
                  <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                  <p className="text-gray-700 text-lg mb-6 font-sans leading-relaxed">
                    At Transpoto, we've built our reputation on reliability, efficiency, and exceptional customer service. Our journey began with a simple mission: to make global logistics accessible and hassle-free for businesses of all sizes.
                  </p>
                  <p className="text-gray-700 text-lg font-sans leading-relaxed">
                    Today, we're proud to be one of Africa's fastest-growing logistics providers, connecting businesses across continents and helping them thrive in the global marketplace.
                  </p>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-brand-black-900 mb-4 font-display">Our Legacy</h3>
                    <p className="text-gray-700 mb-4 font-sans">
                      Transpoto Freight Ltd is proud to be a sister company of <a href="https://www.airstatecourier.in/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 transition-colors">Airstate Courier</a>, a name synonymous with speed, reliability, and professionalism in the logistics industry for over 20 years.
                    </p>
                    <div className="flex flex-wrap mt-6">
                      {[
                        { number: "20+", label: "Years Experience" },
                        { number: "1000+", label: "Happy Clients" },
                        { number: "100+", label: "Countries Served" }
                      ].map((stat, index) => (
                        <div key={index} className="mr-10 mb-4">
                          <div className="text-2xl font-bold text-blue-600 font-display">{stat.number}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section - Full Width */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-brand-black-900 mb-4 font-display">Vision & Mission</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto font-sans">
                  Guiding principles that drive our commitment to excellence
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg border-t-4 border-orange-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-600 font-display">Our Vision</h2>
                  </div>
                  <p className="text-gray-800 text-lg font-sans leading-relaxed">
                    To be the leading provider of innovative and reliable logistics solutions across Africa and beyond, setting new standards for efficiency, trust, and customer satisfaction.
                  </p>
                  <div className="mt-6 flex justify-end">
                    <div className="w-16 h-1 bg-orange-500"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg border-t-4 border-blue-600 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-orange-500 font-display">Our Mission</h2>
                  </div>
                  <p className="text-gray-800 text-lg font-sans leading-relaxed">
                    To deliver exceptional logistics and freight forwarding services by leveraging technology, fostering a culture of excellence, and building lasting partnerships with our clients and communities.
                  </p>
                  <div className="mt-6 flex justify-end">
                    <div className="w-16 h-1 bg-blue-600"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section - Full Width with Background */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-brand-black-900 mb-4 font-display">Our Core Values</h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto font-sans mb-8">
                  The principles that guide our operations and relationships
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {aboutContent.values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white p-8 rounded-xl shadow-md text-center transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                      <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-display text-brand-black-900">{value.title}</h3>
                    <p className="text-gray-600 font-sans">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-blue-50 px-8 py-4 rounded-full border border-blue-100 text-gray-700 font-sans">
                <span className="text-blue-600 font-semibold">Our Promise:</span> Every service we provide is guided by these core values
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section - Full Width with Skewed Background */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-blue-50 opacity-50 -skew-y-3 transform -z-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-brand-black-900 mb-4 font-display">Why Choose Transpoto</h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto font-sans mb-8">
                  Discover the advantages that set us apart from the competition
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aboutContent.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full -mr-12 -mt-12 opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ring-4 ring-blue-50 bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-blue-500 to-blue-600'}`}>
                        <div className="text-white text-3xl">{benefit.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-display text-brand-black-900">{benefit.title}</h3>
                    <p className="text-gray-600 font-sans">{benefit.description}</p>
                    <div className="mt-6 w-12 h-1 bg-orange-500 group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg font-display group">
                <span>Get in Touch Today</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Full Width */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-brand-black-900 mb-4 font-display">What Our Clients Say</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto font-sans mb-8">
                  Hear from businesses who trust Transpoto with their logistics needs
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "David Kimani",
                  company: "Nairobi Exports Ltd",
                  quote: "Transpoto has transformed our international shipping process. Their attention to detail and proactive communication has saved us countless hours and reduced our logistics costs by 15%.",
                  stars: 5
                },
                {
                  name: "Sarah Ochieng",
                  company: "Green Valley Produce",
                  quote: "As a perishable goods exporter, we need reliable, time-sensitive logistics. Transpoto consistently delivers, ensuring our products reach international markets in perfect condition.",
                  stars: 5
                },
                {
                  name: "James Mwangi",
                  company: "Savannah Textiles",
                  quote: "We've worked with several freight forwarders over the years, but Transpoto stands out for their personalized service and ability to handle complex customs requirements seamlessly.",
                  stars: 4
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute top-6 left-6 text-blue-100 opacity-20">
                    <FaQuoteLeft className="text-6xl" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="text-orange-400 mr-1" />
                      ))}
                      {[...Array(5-testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="text-gray-200 mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 font-sans italic">"{testimonial.quote}"</p>
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-lg font-semibold text-brand-black-900 font-display">{testimonial.name}</h4>
                      <p className="text-blue-600 font-sans">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-blue-50 to-orange-50 px-8 py-4 rounded-lg border border-blue-100 text-gray-700 font-sans">
                <span className="text-blue-600 font-semibold">Join our satisfied clients</span> — Experience the Transpoto difference today
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Full Width with Background */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl font-bold mb-4 font-display">Ready to Optimize Your Logistics?</h2>
                  <p className="text-blue-100 text-lg font-sans">
                    Partner with Transpoto for seamless, efficient, and reliable freight solutions tailored to your business needs.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg font-display group">
                  <span>Contact Us Today</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
