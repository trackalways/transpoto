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
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="block text-blue-200 text-base md:text-lg font-semibold mb-2 tracking-widest">SEAMLESS SHIPPING. WORLDWIDE</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <span className="block text-xl font-semibold mb-2">Transpoto Freight Ltd</span>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transpoto Freight Ltd is headquartered in Nairobi, Kenya, and serves clients worldwide. Reach out to us for all your freight, shipping, and logistics needs. Our team is dedicated to providing prompt and reliable support.
            </p>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Additional Contact Info */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our customer support team is available 24/7 to help you with any inquiries or urgent matters.<br />
                <strong>Phone:</strong> <a href="tel:+254794564808" className="text-blue-700 hover:underline">+254 794564808</a><br />
                <strong>Email:</strong> <a href="mailto:sales@transpotofreight.com" className="text-blue-700 hover:underline">sales@transpotofreight.com</a><br />
                <strong>Address:</strong> 5th floor, Kalson Towers, Crescent Road, Parklands, Nairobi
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="tel:+254700123456" 
                  className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2 text-blue-600 font-medium"
                >
                  <span>Call Us Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </a>
                <a 
                  href="mailto:sales@transpotofreight.com" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
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
