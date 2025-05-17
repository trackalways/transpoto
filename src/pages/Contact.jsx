import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return (
    <div className="page-root">
      <Navbar />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-transpoto-700 mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-md"></textarea>
                </div>
                <button type="submit" className="bg-transpoto-600 text-white px-6 py-2 rounded-md hover:bg-transpoto-700">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Offices</h2>
              <address className="not-italic space-y-2">
                <p className="font-medium">Headquarters</p>
                <p>123 Logistics Plaza</p>
                <p>Nairobi, Kenya</p>
                <p>Phone: +254 700 000000</p>
                <p>Email: info@transpoto.com</p>
              </address>
              <div className="mt-6 h-64 bg-gray-200 rounded-md">
                {/* Map placeholder */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
