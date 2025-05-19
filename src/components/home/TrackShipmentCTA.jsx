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
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 flex items-center">
            <FaBoxOpen className="mr-3 text-blue-600" />
            Track Your Shipment
          </h2>
          <p className="text-blue-800 text-lg max-w-lg">
            Enter your tracking number to get real-time updates on your shipment status. Fast, easy, and secure.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-xl">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Track Now
          </button>
        </form>
      </div>
    </section>
  );
}
