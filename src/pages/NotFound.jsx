import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-root">
      <Navbar />
      <main className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transpoto-700 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="bg-transpoto-600 text-white px-6 py-3 rounded-md hover:bg-transpoto-700 inline-block">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
