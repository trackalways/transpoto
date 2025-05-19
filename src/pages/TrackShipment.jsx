import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaTruck, FaPlane, FaShip } from 'react-icons/fa';

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      const result = {
        status: 'In Transit',
        origin: 'Nairobi',
        destination: 'Mombasa',
        trackingNumber: trackingNumber,
        lastUpdated: new Date().toISOString(),
        checkpoints: [
          { 
            location: 'Nairobi', 
            timestamp: '2025-05-18T12:00:00', 
            status: 'Collected',
            icon: <FaTruck /> 
          },
          { 
            location: 'Athi River', 
            timestamp: '2025-05-18T14:30:00', 
            status: 'In Transit',
            icon: <FaTruck /> 
          },
          { 
            location: 'Mombasa', 
            timestamp: '2025-05-18T18:00:00', 
            status: 'Delivered',
            icon: <FaMapMarkerAlt /> 
          }
        ]
      };
      setTrackingResult(result);
    } catch (err) {
      setError('Unable to track shipment. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
          <span className="block text-blue-200 text-base md:text-lg font-semibold mb-2 tracking-widest">SEAMLESS SHIPPING. WORLDWIDE</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Track Your Shipment</h1>
          <span className="block text-xl font-semibold mb-2">Transpoto Freight Ltd</span>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            Transpoto Freight Ltd is your trusted logistics partner in Kenya and worldwide. Enter your tracking number below to get real-time updates on your shipment's status. For any assistance, our team is ready to help.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-blue-200 text-sm">
            <span>Sample: <span className="font-mono bg-blue-900/40 px-2 py-1 rounded">ABC123456</span></span>
            <span className="hidden md:inline">|</span>
            <span>No tracking number? <a href="/contact" className="underline hover:text-white">Contact our team</a></span>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg mb-10">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g. ABC123456)"
                className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Tracking...' : 'Track Shipment'}
            </button>
          </form>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
            >
              {error}
            </motion.div>
          )}
        </div>

        {trackingResult && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Status:</span>
                <span className={`px-3 py-1 rounded-full ${
                  trackingResult.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                  trackingResult.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>{trackingResult.status}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Tracking Number:</span>
                <span>{trackingResult.trackingNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Origin:</span>
                <span>{trackingResult.origin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Destination:</span>
                <span>{trackingResult.destination}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Last Updated:</span>
                <span>{new Date(trackingResult.lastUpdated).toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Shipment History</h3>
              <div className="space-y-4">
                {trackingResult.checkpoints.map((checkpoint, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {checkpoint.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{checkpoint.location}</div>
                      <div className="text-sm text-gray-600">{checkpoint.status}</div>
                      <div className="text-xs text-gray-500">{new Date(checkpoint.timestamp).toLocaleString()}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
    <Footer />
  </div>
  );
};

export default TrackShipment;
