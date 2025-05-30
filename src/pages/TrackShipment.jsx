import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaPlane, 
  FaShip, 
  FaBoxOpen,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaInfoCircle,
  FaChevronRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaAngleDown,
  FaHeadset,
  FaUserClock,
  FaHistory,
  FaCalendarAlt
} from 'react-icons/fa';
import { BsBoxSeam, BsTruck, BsClockHistory, BsArrowRight } from 'react-icons/bs';

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const resultRef = useRef(null);
  
  // Helper to format dates nicely
  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Simulate real-time updates
  useEffect(() => {
    if (!trackingResult) return;
    
    const interval = setInterval(() => {
      setTrackingResult(prev => ({
        ...prev,
        lastUpdated: new Date().toISOString()
      }));
    }, 60000);
    
    return () => clearInterval(interval);
  }, [trackingResult]);
  
  // Scroll to results when they're available
  useEffect(() => {
    if (trackingResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [trackingResult]);
  
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'in transit':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'out for delivery':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'collected':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'exception':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'scheduled':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };
  
  const getStatusIcon = (status) => {
    switch(status?.toLowerCase()) {
      case 'delivered':
        return <FaCheckCircle className="text-green-500" />;
      case 'in transit':
        return <BsTruck className="text-blue-600" />;
      case 'out for delivery':
        return <FaTruck className="text-orange-500" />;
      case 'collected':
        return <FaBoxOpen className="text-blue-600" />;
      case 'processing':
        return <FaUserClock className="text-yellow-500" />;
      case 'exception':
        return <FaTimesCircle className="text-red-500" />;
      case 'scheduled':
        return <FaClock className="text-gray-500" />;
      default:
        return <BsClockHistory className="text-gray-500" />;
    }
  };
  
  // Calculate remaining days for delivery
  const calculateRemainingTime = (deliveryDate) => {
    const now = new Date();
    const delivery = new Date(deliveryDate);
    const diffTime = delivery - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Delivered';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call
      setTimeout(() => {
        // Simple validation for demo purposes
        if (!trackingNumber || trackingNumber.length < 6) {
          setError('Please enter a valid tracking number (minimum 6 characters)');
          setIsLoading(false);
          return;
        }

        const result = {
          status: 'In Transit',
          origin: 'Nairobi',
          destination: 'Mombasa',
          trackingNumber: trackingNumber,
          lastUpdated: new Date().toISOString(),
          carrier: 'Transpoto Express',
          service: 'Premium Freight',
          weight: '48.5 kg',
          packageType: 'Pallet',
          totalDistance: '480 km',
          estimatedDelivery: '2025-05-28T18:00:00',
          senderName: 'Kenyan Manufacturers Ltd',
          recipientName: 'Coastal Distributors Co.',
          currentLocation: 'Voi Transit Hub',
          progress: 65, // percentage of journey completed
          checkpoints: [
            { 
              location: 'Nairobi Distribution Center', 
              timestamp: '2025-05-25T08:30:00', 
              status: 'Collected',
              details: 'Package received and processed',
              icon: <FaBoxOpen /> 
            },
            { 
              location: 'Nairobi Sorting Facility', 
              timestamp: '2025-05-25T10:15:00', 
              status: 'Processing',
              details: 'Package sorted for outbound delivery',
              icon: <FaUserClock /> 
            },
            { 
              location: 'Athi River Checkpoint', 
              timestamp: '2025-05-25T12:30:00', 
              status: 'In Transit',
              details: 'Package en route to Mombasa',
              icon: <FaTruck /> 
            },
            { 
              location: 'Voi Transit Hub', 
              timestamp: '2025-05-25T16:45:00', 
              status: 'In Transit',
              details: 'Package arrived at transit hub',
              icon: <FaTruck /> 
            },
            { 
              location: 'Mombasa (Estimated)', 
              timestamp: '2025-05-26T10:00:00', 
              status: 'Scheduled',
              details: 'Expected arrival at Mombasa distribution center',
              icon: <FaMapMarkerAlt /> 
            },
            { 
              location: 'Recipient Address (Estimated)', 
              timestamp: '2025-05-26T14:00:00', 
              status: 'Scheduled',
              details: 'Expected final delivery',
              icon: <FaMapMarkerAlt /> 
            }
          ]
        };
        setTrackingResult(result);
        setIsLoading(false);
      }, 1500); // Simulate network delay
    } catch (err) {
      setError('Unable to track shipment. Please try again later.');
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-blue-700 text-white pt-24 pb-16 overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-pattern bg-repeat opacity-10"></div>
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left lg:pr-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block bg-blue-600/30 text-blue-100 px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wider font-sans">REAL-TIME SHIPMENT TRACKER</span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">
                    Know exactly where your <span className="text-orange-400">package is</span>, at all times
                  </h1>
                  <p className="text-base md:text-lg text-blue-100 mb-8 font-sans leading-relaxed max-w-xl">
                    Transpoto provides comprehensive tracking for all your shipments. From pickup to delivery, stay informed with real-time updates and estimated arrival times.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8 items-center">
                    <div className="flex items-center gap-2 bg-blue-900/40 px-3 py-2 rounded-lg">
                      <FaCheckCircle className="text-green-400" />
                      <span className="text-sm font-medium">Real-time Updates</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/40 px-3 py-2 rounded-lg">
                      <FaCheckCircle className="text-green-400" />
                      <span className="text-sm font-medium">Accurate ETAs</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-900/40 px-3 py-2 rounded-lg">
                      <FaCheckCircle className="text-green-400" />
                      <span className="text-sm font-medium">Complete History</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-4 font-display text-center">Track Your Shipment</h2>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-3.5 text-blue-300" />
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter tracking number (e.g. ABC123456)"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all font-sans"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 text-white py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 font-display shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Tracking...</span>
                      </>
                    ) : (
                      <>
                        <span>Track Shipment</span>
                        <BsArrowRight className="text-lg" />
                      </>
                    )}
                  </button>
                  
                  <div className="pt-3 border-t border-white/20 mt-4">
                    <div className="flex flex-col space-y-2 text-sm">
                      <p className="text-blue-100 text-center">Sample tracking numbers for testing:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <button 
                          type="button" 
                          onClick={() => setTrackingNumber('ABC123456')} 
                          className="font-mono bg-blue-900/40 hover:bg-blue-800/60 px-2 py-1 rounded text-xs transition-colors"
                        >
                          ABC123456
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setTrackingNumber('TPT789012')} 
                          className="font-mono bg-blue-900/40 hover:bg-blue-800/60 px-2 py-1 rounded text-xs transition-colors"
                        >
                          TPT789012
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
          
          <svg className="absolute bottom-0 left-0 w-full text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </section>

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg flex items-start gap-3 shadow-md"
              >
                <FaTimesCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium font-display">Tracking Error</h3>
                  <p className="text-sm mt-1 font-sans">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tracking Results */}
          <AnimatePresence>
            {trackingResult && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                ref={resultRef}
              >
                {/* Shipment Status Header */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/4 opacity-20"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(trackingResult.status)}`}>
                          {getStatusIcon(trackingResult.status)}
                          {trackingResult.status}
                        </span>
                        <span className="text-xs text-blue-100 bg-blue-800/40 px-2 py-0.5 rounded">Last updated: {formatDate(trackingResult.lastUpdated)}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display mb-1">Tracking #{trackingResult.trackingNumber}</h2>
                      <p className="text-blue-100 font-sans">
                        <span className="font-medium">{trackingResult.carrier}</span> · {trackingResult.service}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg">
                        <p className="text-sm font-medium mb-1">Estimated Delivery</p>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-orange-300" />
                          <span className="text-lg font-bold font-display">{formatDate(trackingResult.estimatedDelivery)}</span>
                        </div>
                        <p className="text-xs mt-1 text-blue-100">{calculateRemainingTime(trackingResult.estimatedDelivery)} remaining</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-8 relative">
                    <div className="h-2 w-full bg-blue-900/40 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${trackingResult.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-orange-500 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-blue-200">
                      <span>Origin</span>
                      <span>In Transit</span>
                      <span>Destination</span>
                    </div>
                  </div>
                </div>
                
                {/* Main Content with Tabs */}
                <div className="p-6">
                  <div className="border-b border-gray-200 mb-6">
                    <div className="flex space-x-6">
                      <button
                        onClick={() => setActiveTab('details')}
                        className={`pb-3 font-medium font-display text-sm transition-colors ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Shipment Details
                      </button>
                      <button
                        onClick={() => setActiveTab('history')}
                        className={`pb-3 font-medium font-display text-sm transition-colors ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Tracking History
                      </button>
                    </div>
                  </div>
                  
                  {/* Shipment Details Tab Content */}
                  {activeTab === 'details' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      {/* Shipping Route Card */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="text-lg font-semibold font-display mb-4 text-gray-800">Shipping Route</h3>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                          <div className="text-center">
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-full inline-block mb-2">
                              <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <h4 className="font-medium text-sm mb-1">Origin</h4>
                            <p className="text-base font-bold font-display">{trackingResult.origin}</p>
                          </div>
                          
                          <div className="hidden md:block w-full max-w-xs">
                            <div className="h-0.5 w-full bg-blue-200 relative">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-blue-400 flex items-center justify-center">
                                <FaTruck className="text-blue-600" />
                              </div>
                            </div>
                            <p className="text-center text-sm mt-2 text-gray-500">{trackingResult.totalDistance}</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="p-3 bg-orange-100 text-orange-700 rounded-full inline-block mb-2">
                              <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <h4 className="font-medium text-sm mb-1">Destination</h4>
                            <p className="text-base font-bold font-display">{trackingResult.destination}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Shipment Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Package Details */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                          <h3 className="text-lg font-semibold font-display mb-4 text-gray-800 flex items-center gap-2">
                            <FaBoxOpen className="text-blue-600" />
                            Package Details
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex justify-between">
                              <span className="text-gray-600">Package Type:</span>
                              <span className="font-medium">{trackingResult.packageType}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Weight:</span>
                              <span className="font-medium">{trackingResult.weight}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Current Location:</span>
                              <span className="font-medium">{trackingResult.currentLocation}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Service Type:</span>
                              <span className="font-medium">{trackingResult.service}</span>
                            </li>
                          </ul>
                        </div>
                        
                        {/* Sender & Recipient */}
                        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                          <h3 className="text-lg font-semibold font-display mb-4 text-gray-800 flex items-center gap-2">
                            <FaEnvelope className="text-blue-600" />
                            Sender & Recipient
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-600 mb-1">Sender:</h4>
                              <p className="font-bold">{trackingResult.senderName}</p>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="h-0.5 w-16 bg-gray-200"></div>
                              <div className="mx-2">
                                <FaChevronRight className="text-gray-400" />
                              </div>
                              <div className="h-0.5 w-16 bg-gray-200"></div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-600 mb-1">Recipient:</h4>
                              <p className="font-bold">{trackingResult.recipientName}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Need Help Box */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 flex items-start gap-4">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                          <FaHeadset className="text-xl" />
                        </div>
                        <div>
                          <h3 className="font-medium font-display mb-1">Need assistance with your shipment?</h3>
                          <p className="text-sm text-gray-600 mb-3">Our customer service team is ready to help you with any questions about your delivery.</p>
                          <Link to="/contact" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                            Contact Support <FaChevronRight className="ml-1 text-xs" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Tracking History Tab Content */}
                  {activeTab === 'history' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm text-blue-800 font-sans">
                          <FaInfoCircle className="inline-block mr-2" />
                          Showing tracking updates for your shipment. All times are in local time zone.
                        </p>
                      </div>
                      
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 ml-0.5"></div>
                        
                        {/* Timeline events */}
                        <div className="space-y-8">
                          {trackingResult.checkpoints.map((checkpoint, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="relative flex gap-4"
                            >
                              <div className="flex-shrink-0 z-10">
                                <div className={`w-11 h-11 flex items-center justify-center rounded-full ${index === 0 ? 'bg-blue-100 text-blue-700' : index === trackingResult.checkpoints.length - 1 ? 'bg-gray-100 text-gray-500 border border-dashed border-gray-300' : 'bg-white shadow-md border border-gray-200 text-gray-700'}`}>
                                  {checkpoint.icon}
                                </div>
                              </div>
                              <div className={`flex-grow p-4 rounded-lg ${index === 0 ? 'bg-blue-50 border border-blue-100' : index === trackingResult.checkpoints.length - 1 ? 'bg-gray-50 border border-dashed border-gray-200' : 'bg-white border border-gray-100 shadow-sm'}`}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                  <h4 className="font-bold font-display text-gray-900">{checkpoint.location}</h4>
                                  <span className="text-sm text-gray-500">{formatDate(checkpoint.timestamp)}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(checkpoint.status)}`}>
                                    {checkpoint.status}
                                  </span>
                                </div>
                                <p className="text-gray-700 text-sm">{checkpoint.details}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-8">
                        <button 
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                          onClick={() => window.print()}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          Print Tracking Details
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* FAQ Section - Show when no tracking result and no error */}
          {!trackingResult && !error && (
            <div className="mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 font-display text-center text-gray-800">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={() => setActiveQuestion(activeQuestion === 1 ? null : 1)}
                    >
                      <span className="font-display">How can I track my shipment?</span>
                      <FaAngleDown className={`transition-transform ${activeQuestion === 1 ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeQuestion === 1 && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-gray-600 text-sm">
                            You can track your shipment by entering your tracking number in the form above. The tracking number is provided to you when you place an order or in your shipping confirmation email.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={() => setActiveQuestion(activeQuestion === 2 ? null : 2)}
                    >
                      <span className="font-display">What does "In Transit" status mean?</span>
                      <FaAngleDown className={`transition-transform ${activeQuestion === 2 ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeQuestion === 2 && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-gray-600 text-sm">
                            "In Transit" means your package is on its way to the destination. It has been processed and is moving through our transportation network.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <button 
                      className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={() => setActiveQuestion(activeQuestion === 3 ? null : 3)}
                    >
                      <span className="font-display">What if my package is delayed?</span>
                      <FaAngleDown className={`transition-transform ${activeQuestion === 3 ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeQuestion === 3 && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-gray-600 text-sm">
                            If your package is delayed, the tracking information will be updated with the new estimated delivery date. For significant delays, our team will reach out to you directly. You can always contact our customer support for more information.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackShipment;
