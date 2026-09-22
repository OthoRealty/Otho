import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Expertise } from './components/Expertise';
import { HyderabadFocus } from './components/HyderabadFocus';
import { Opportunities } from './components/Opportunities';
import { MarketIntelligence } from './components/MarketIntelligence';
import { Process } from './components/Process';
import { About } from './components/About';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [contactInterest, setContactInterest] = useState<string>('Advisory');

  const scrollToContact = (interestType?: string) => {
    if (interestType) {
      setContactInterest(interestType);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToOpportunities = () => {
    const oppElem = document.getElementById('opportunities');
    if (oppElem) {
      const navOffset = 80;
      const elementPosition = oppElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#111111] selection:bg-[#B08D57] selection:text-white flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenContact={() => scrollToContact('Advisory')} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 4: Fullscreen Cinematic Hero */}
        <Hero
          onExploreOpportunities={scrollToOpportunities}
          onOpenContact={() => scrollToContact('Advisory')}
        />

        {/* Section 5: Introduction (Editorial 2-Column) */}
        <Introduction />

        {/* Section 6: Our Expertise (6 Numbered Services + Live Interactive Preview) */}
        <Expertise
          onSelectService={(serviceTitle) => scrollToContact(`Expertise: ${serviceTitle}`)}
        />

        {/* Section 7: Hyderabad Focus (Interactive Corridor Radar & Dynamics) */}
        <HyderabadFocus
          onInquireCorridor={(corridorName) => scrollToContact(`Corridor: ${corridorName}`)}
        />

        {/* Section 8: Selected Opportunities (Editorial Cards & Modal Inspection) */}
        <Opportunities
          onInquire={(projectName) => scrollToContact(`Opportunity: ${projectName}`)}
        />

        {/* Section 9: Market Intelligence (Editorial Analysis Briefs) */}
        <MarketIntelligence
          onConsultInsight={(topic) => scrollToContact(`Market Intelligence: ${topic}`)}
        />

        {/* Section 10: How We Work (5-Stage Advisory Process) */}
        <Process />

        {/* Section 11: About OTHO ("Built Around Clarity") */}
        <About />

        {/* Section 12: High-Impact Closing CTA */}
        <CallToAction
          onTalkToOtho={() => scrollToContact('Advisory')}
          onSubmitEnquiry={() => scrollToContact('General Inquiry')}
        />

        {/* Section 13: Corporate Enquiry Form & Direct Channels */}
        <ContactSection prefilledInterest={contactInterest} />
      </main>

      {/* Section 14: Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default App;
