import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';

import TrackShipmentCTA from '../components/home/TrackShipmentCTA';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrackShipmentCTA />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
