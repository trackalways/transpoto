import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="page-root">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
