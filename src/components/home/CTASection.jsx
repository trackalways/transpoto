import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-16 bg-transpoto-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to streamline your logistics?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your transportation needs and discover how we can help your business grow.
        </p>
        <Link 
          to="/contact" 
          className="bg-transpoto-600 text-white px-8 py-3 rounded-md font-medium hover:bg-transpoto-700 transition-colors inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
