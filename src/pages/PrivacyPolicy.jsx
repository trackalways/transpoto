import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Transpoto Freight Ltd</title>
        <meta name="description" content="Privacy policy for Transpoto Freight Ltd's services" />
      </Helmet>
      <Navbar />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
                <ul className="list-disc pl-6 mt-2">
                  <li>Name and contact information</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information</li>
                  <li>Shipping preferences and history</li>
                </ul>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Process and deliver your shipments</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
                <ul className="list-disc pl-6 mt-2">
                  <li>Shipping partners and carriers</li>
                  <li>Payment processors</li>
                  <li>Legal authorities when required</li>
                </ul>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
                <ul className="list-disc pl-6 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy policy, please contact us at privacy@transpoto.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
