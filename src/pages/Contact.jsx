import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/home/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | Transpoto Freight Ltd - Seamless Shipping. Worldwide</title>
        <meta 
          name="description" 
          content="Get in touch with Transpoto Freight Ltd for seamless shipping and logistics solutions. Our team in Nairobi, Kenya, is ready to assist you with air, sea, and domestic freight needs. Call +254 700 123 456 or email sales@transpotofreight.com." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-pattern bg-repeat opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="block text-blue-200 text-base md:text-lg font-semibold mb-2 tracking-widest font-sans">SEAMLESS SHIPPING. WORLDWIDE</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Contact Us</h1>
            <span className="block text-xl font-semibold mb-2 font-display">Transpoto Freight Ltd</span>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-sans">
              Transpoto Freight Ltd is headquartered in Nairobi, Kenya, and serves clients worldwide. Reach out to us for all your freight, shipping, and logistics needs. Our team is dedicated to providing prompt and reliable support.
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>
          <svg className="absolute bottom-0 left-0 w-full text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Additional Contact Info */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-black-900 mb-6 font-display">Need Immediate Assistance?</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 font-sans">
                Our customer support team is available 24/7 to help you with any inquiries or urgent matters.<br />
                <strong>Phone:</strong> <a href="tel:+254794564808" className="text-blue-600 hover:text-blue-800 transition-colors">+254 794564808</a><br />
                <strong>Email:</strong> <a href="mailto:sales@transpotofreight.com" className="text-blue-600 hover:text-blue-800 transition-colors">sales@transpotofreight.com</a><br />
                <strong>Address:</strong> 5th floor, Kalson Towers, Crescent Road, Parklands, Nairobi
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="tel:+254794564808" 
                  className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-blue-600 font-medium border border-blue-100 hover:-translate-y-1 font-display"
                >
                  <span>Call Us Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </a>
                <a 
                  href="mailto:sales@transpotofreight.com" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:-translate-y-1 font-display"
                >
                  <span>Email Support</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
