import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-transpoto-700">
          Transpoto Freight Ltd.
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-transpoto-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-transpoto-600">About</Link>
          <Link to="/domestic-logistics" className="text-gray-600 hover:text-transpoto-600">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-transpoto-600">Contact</Link>
        </nav>
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
