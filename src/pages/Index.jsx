import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import TrustedCompaniesSection from '../components/home/TrustedCompaniesSection';
import ServicesSection from '../components/home/ServicesSection';
import TrackShipmentCTA from '../components/home/TrackShipmentCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustedCompaniesSection />
        <TrackShipmentCTA />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
