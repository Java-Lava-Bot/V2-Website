'use client';

import FAQSection from './components/FAQSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PremiumCTA from './components/PremiumCTA';
import StatsSection from './components/StatsSection';
import StatusScript from './components/StatusScript';
import TestimonialsSection from './components/TestimonialsSection';
import UpdatesSection from './components/UpdatesSection';
import ScamAlert from './components/ScamAlert';

export default function HomePage() {
  return (
    <>
      <StatusScript />
      <ScamAlert />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <UpdatesSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <PremiumCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
