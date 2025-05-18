import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Shipment</h1>
          <p className="text-xl text-gray-600">Enter your tracking number to check the status of your shipment</p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="relative">
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
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </motion.div>
    </div>
  );
};

export default TrackShipment;
