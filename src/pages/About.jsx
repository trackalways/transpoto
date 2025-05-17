import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div className="page-root">
      <Navbar />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-transpoto-700 mb-6">About Transpoto Freight Ltd.</h1>
          <div className="prose max-w-3xl">
            <p>Transpoto Freight Ltd is a dynamic and reliable logistics company headquartered in Nairobi, Kenya, with a global reach and a strong local presence. We specialize in providing end-to-end freight forwarding and logistics solutions through air freight, sea shipping, and domestic transportation services within Kenya.</p>
            <p>We are committed to excellence, offering personalized service and ensuring every shipment arrives safely, on time, and cost-effectively — wherever in the world it needs to go.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-transpoto-700">Our Vision</h2>
            <p>To be Africa's most trusted logistics and freight solutions provider with a world-class global network.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-transpoto-700">Our Mission</h2>
            <p>To simplify logistics for businesses and individuals through reliable, affordable, and innovative freight services across Kenya and the world.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
