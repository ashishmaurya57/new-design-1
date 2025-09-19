import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamIntro from './components/TeamIntro';
import DetailsSection from './components/DetailsSection';
import InsuranceBanner from './components/InsuranceBanner';
import ImplantSection from './components/ImplantSection';
import TechnologySection from './components/TechnologySection';
import ServicesSection from './components/ServicesSection';
import OfficeSection from './components/OfficeSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TeamIntro />
      <DetailsSection />
      <InsuranceBanner />
      <ImplantSection />
      <TechnologySection />
      <ServicesSection />
      <OfficeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;