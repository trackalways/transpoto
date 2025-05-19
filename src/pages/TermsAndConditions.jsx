import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Transpoto Freight Ltd</title>
        <meta name="description" content="Terms and conditions for using Transpoto Freight Ltd's services" />
      </Helmet>
      <Navbar />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Transpoto Freight Ltd's services, you accept and agree to be bound by the terms and conditions outlined here.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Transpoto Freight Ltd provides logistics and transportation services including but not limited to road freight, air freight, and sea freight solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Shipping and Delivery</h2>
              <p className="text-gray-600 mb-4">
                3.1. Delivery times are estimates and not guaranteed.<br />
                3.2. We are not responsible for delays caused by customs, weather, or other factors beyond our control.<br />
                3.3. All shipments must comply with local and international shipping regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Liability</h2>
              <p className="text-gray-600 mb-4">
                4.1. Our liability is limited to the declared value of the shipment.<br />
                4.2. We are not liable for indirect or consequential losses.<br />
                4.3. Claims must be filed within 7 days of delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Items</h2>
              <p className="text-gray-600 mb-4">
                Certain items are prohibited from shipping. These include but are not limited to:<br />
                - Illegal substances<br />
                - Dangerous goods without proper documentation<br />
                - Perishable items without proper packaging
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
