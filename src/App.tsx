import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ProjectsExplorer } from './components/ProjectsExplorer';
import { LoadingCalculator } from './components/LoadingCalculator';
import { Expertise } from './components/Expertise';
import { HyderabadFocus } from './components/HyderabadFocus';
import { Opportunities } from './components/Opportunities';
import { MarketIntelligence } from './components/MarketIntelligence';
import { Process } from './components/Process';
import { About } from './components/About';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectComparator } from './components/ProjectComparator';
import { PROJECTS } from './data/projects';
import { ProjectReview } from './types';

export const App: React.FC = () => {
  const [contactInterest, setContactInterest] = useState<string>('Advisory');
  const [compareList, setCompareList] = useState<ProjectReview[]>([]);
  const [isComparatorOpen, setIsComparatorOpen] = useState<boolean>(false);
  const [activeComparatorPair, setActiveComparatorPair] = useState<[ProjectReview, ProjectReview]>([
    PROJECTS[0],
    PROJECTS[1],
  ]);

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
        behavior: 'smooth',
      });
    }
  };

  const scrollToOpportunities = () => {
    const oppElem = document.getElementById('projects') || document.getElementById('opportunities');
    if (oppElem) {
      const navOffset = 80;
      const elementPosition = oppElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleToggleCompare = (project: ProjectReview) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === project.id);
      if (exists) {
        return prev.filter((p) => p.id !== project.id);
      }
      if (prev.length >= 2) {
        // Replace second project if already at max 2
        return [prev[0], project];
      }
      return [...prev, project];
    });
  };

  const handleOpenSideBySide = (p1: ProjectReview, p2: ProjectReview) => {
    setActiveComparatorPair([p1, p2]);
    setIsComparatorOpen(true);
  };

  const handleOpenCompareModal = () => {
    if (compareList.length >= 2) {
      setActiveComparatorPair([compareList[0], compareList[1]]);
    } else if (compareList.length === 1) {
      // Find a project from same or different locality to compare against
      const partner = PROJECTS.find((p) => p.id !== compareList[0].id) || PROJECTS[1];
      setActiveComparatorPair([compareList[0], partner]);
    }
    setIsComparatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#0C1017] selection:bg-[#C5A25D] selection:text-white flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenContact={() => scrollToContact('Advisory Consultation')}
        compareCount={compareList.length}
        onOpenCompare={handleOpenCompareModal}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 1: Fullscreen Cinematic Hero */}
        <Hero
          onExploreOpportunities={scrollToOpportunities}
          onOpenContact={() => scrollToContact('Advisory Consultation')}
        />

        {/* Section 2: Introduction (Editorial 2-Column + 3 Fiduciary Commitments) */}
        <Introduction />

        {/* Section 3: 20-Project Verified Explorer (True Loading, Carpet, RERA, Negatives) */}
        <ProjectsExplorer
          onCompare={handleOpenSideBySide}
          onInquire={(projectName) => scrollToContact(`Project Inquiry: ${projectName}`)}
          compareList={compareList}
          onToggleCompare={handleToggleCompare}
        />

        {/* Section 4: Live Super Built-up Area & Loading Factor Calculator */}
        <LoadingCalculator />

        {/* Section 5: Institutional Expertise (6 Advisory Practices) */}
        <Expertise
          onSelectService={(serviceTitle) => scrollToContact(`Expertise: ${serviceTitle}`)}
        />

        {/* Section 6: Hyderabad Focus (Interactive Corridor Radar & Infrastructure Audit) */}
        <HyderabadFocus
          onInquireCorridor={(corridorName) => scrollToContact(`Corridor: ${corridorName}`)}
        />

        {/* Section 7: Selected Marquee Opportunities */}
        <Opportunities
          onInquire={(projectName) => scrollToContact(`Opportunity: ${projectName}`)}
        />

        {/* Section 8: Market Intelligence (Editorial Briefs on Overhang & Capital Allocations) */}
        <MarketIntelligence
          onConsultInsight={(topic) => scrollToContact(`Market Intelligence: ${topic}`)}
        />

        {/* Section 9: How We Work (5-Stage Advisory Process) */}
        <Process />

        {/* Section 10: About OTHO ("Built Around Clarity & Fiduciary Mandate") */}
        <About />

        {/* Section 11: High-Impact Closing CTA */}
        <CallToAction
          onTalkToOtho={() => scrollToContact('Advisory Consultation')}
          onSubmitEnquiry={() => scrollToContact('Mandate Evaluation')}
        />

        {/* Section 12: Corporate Enquiry Desk & Direct Channels */}
        <ContactSection prefilledInterest={contactInterest} />
      </main>

      {/* Section 13: Comprehensive Footer */}
      <Footer />

      {/* Modal: Side-by-Side Project Comparator */}
      {isComparatorOpen && (
        <ProjectComparator
          projectA={activeComparatorPair[0]}
          projectB={activeComparatorPair[1]}
          allProjects={PROJECTS}
          onSelectProjectA={(proj) => setActiveComparatorPair([proj, activeComparatorPair[1]])}
          onSelectProjectB={(proj) => setActiveComparatorPair([activeComparatorPair[0], proj])}
          onClose={() => setIsComparatorOpen(false)}
          onInquire={(projectName) => {
            setIsComparatorOpen(false);
            scrollToContact(`Comparison Inquiry: ${projectName}`);
          }}
        />
      )}
    </div>
  );
};

export default App;
