import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBoxOpen } from 'react-icons/fa';

export default function TrackShipmentCTA() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally pass tracking number as query param
    navigate(`/track-shipment${trackingNumber ? `?tracking=${trackingNumber}` : ''}`);
  };

  return (
    <section className="bg-blue-50 pt-10 pb-10" style={{ marginBottom: 0 }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center max-w-4xl">
        <div className="w-full md:w-5/12 mb-6 md:mb-0 md:text-left md:mr-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-black-900 mb-4 flex items-center md:justify-start justify-center font-display">
            <FaBoxOpen className="mr-3 text-blue-600 text-2xl md:text-3xl" />
            Track Your Shipment
          </h2>
          <p className="text-blue-800 text-base sm:text-lg mb-0 leading-relaxed">
            Enter your tracking number to get <span className="font-semibold">real-time updates</span> on your shipment status. Fast, easy, and secure.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow-xl w-full md:w-7/12">
          <div className="relative w-full flex-grow">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full px-10 py-3.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 font-medium shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105 font-display"
          >
            Track Now
          </button>
        </form>
      </div>
    </section>
  );
}
