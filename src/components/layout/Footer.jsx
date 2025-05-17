import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Transpoto Freight Ltd.</h3>
            <p className="text-gray-400">SEAMLESS SHIPPING. WORLDWIDE</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/domestic-logistics" className="text-gray-400 hover:text-white">Domestic Logistics</Link></li>
              <li><Link to="/air-freight" className="text-gray-400 hover:text-white">Air Freight</Link></li>
              <li><Link to="/sea-freight" className="text-gray-400 hover:text-white">Sea Freight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>5th floor, Kalson Towers, Crescent Road, Parklands, Nairobi</p>
              <p>Phone: +254 794564808</p>
              <p>Email: sales@transpotofreight.com</p>
              <p>Website: www.transpotofreight.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p> {new Date().getFullYear()} Transpoto Freight Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
