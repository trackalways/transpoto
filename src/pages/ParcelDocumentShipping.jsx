import React from 'react';
import { FaEnvelope, FaClock, FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FaClock className="text-blue-600 text-2xl mb-2" />,
    title: 'Express Delivery',
    desc: 'Same-day and next-day delivery options for urgent documents and parcels.'
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-2xl mb-2" />,
    title: 'Nationwide & Global Reach',
    desc: 'We deliver across Kenya and to international destinations.'
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-2xl mb-2" />,
    title: 'Secure & Reliable',
    desc: 'Sensitive documents are handled with care and delivered securely.'
  }
];

export default function ParcelDocumentShipping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Icon and Title */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <div className="bg-blue-100 p-6 rounded-full shadow-lg mb-4">
            <FaEnvelope className="text-5xl text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 text-center md:text-left">
            Parcel & Document Shipping
          </h1>
          <p className="text-lg text-blue-700 mb-4 text-center md:text-left">
            Send your important documents and small parcels anywhere in Kenya or worldwide with Transpoto’s secure, fast, and affordable service. Enjoy real-time tracking, proof of delivery, and peace of mind.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all mt-2">
            Get a Quote
          </Link>
        </div>
        {/* Right: Features */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 shadow-md">
              {feature.icon}
              <div>
                <div className="font-bold text-blue-900 text-lg">{feature.title}</div>
                <div className="text-blue-700">{feature.desc}</div>
              </div>
            </div>
          ))}
          <div className="mt-6 text-blue-800 text-base">
            <strong>Why choose Transpoto?</strong> Our dedicated team ensures your parcels and documents are delivered safely, on time, and with full transparency. We offer door-to-door pickup, real-time tracking, and customer support every step of the way.
          </div>
        </div>
      </div>
    </div>
  );
}
