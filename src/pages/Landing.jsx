import React from 'react';
import HeroSection from '../components/HeroSection';
import InterviewRoadmap from '../components/InterviewRoadmap';
import CognitiveSanctuary from '../components/CognitiveSanctuary';
import PrecisionIntelligence from '../components/PrecisionIntelligence';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <>
      <main>
        <HeroSection />
        <InterviewRoadmap />
        <CognitiveSanctuary />
        <PrecisionIntelligence />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
