import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultInterest?: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, compareCount, onOpenCompare }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ADVISORY', href: '#expertise' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CALCULATOR', href: '#calculator' },
    { label: 'CORRIDORS', href: '#hyderabad-focus' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#DDD9D0] py-3.5 shadow-fine'
            : 'bg-transparent py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo with Official Royal Crest */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="OTHO Realty Home"
          >
            {/* Crest Emblem Image */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C5A25D] overflow-hidden bg-[#0C1017] flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/otho-crest-logo.jpg"
                alt="OTHO Realty Royal Crest"
                className="w-full h-full object-cover scale-[1.35] translate-y-[-1px]"
              />
            </div>

            {/* Classical Roman Wordmark */}
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl tracking-[0.16em] font-normal transition-colors duration-200 leading-none ${
                  isScrolled ? 'text-[#0C1017]' : 'text-white'
                }`}
              >
                OTHO<span className="text-[#C5A25D] ml-1 font-serif text-sm tracking-[0.24em] uppercase">REALTY</span>
              </span>
              <span
                className={`text-[8.5px] tracking-[0.26em] uppercase transition-colors duration-200 mt-1 font-sans ${
                  isScrolled ? 'text-[#4A5565]' : 'text-white/70'
                }`}
              >
                Advisory &bull; Intelligence &bull; Capital
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 relative py-1 hover:text-[#C5A25D] ${
                  isScrolled ? 'text-[#0C1017]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick Compare Button if items are queued */}
            {compareCount > 0 && (
              <button
                onClick={onOpenCompare}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#C5A25D] text-[#0C1017] shadow-sm animate-pulse-subtle"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare ({compareCount})</span>
              </button>
            )}

            <button
              onClick={() => onOpenContact()}
              className={`hidden sm:inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase px-5 py-2.5 transition-all duration-200 border ${
                isScrolled
                  ? 'border-[#0C1017] text-[#0C1017] hover:bg-[#0C1017] hover:text-[#FBF9F5]'
                  : 'border-white text-white hover:bg-white hover:text-[#0C1017]'
              }`}
            >
              <span>TALK TO OTHO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#0C1017]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#0C1017]/70 backdrop-blur-sm xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FBF9F5] border-l border-[#DDD9D0] p-8 flex flex-col justify-between transform transition-transform duration-300 ease-out shadow-elevated ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#DDD9D0]">
              <div className="flex items-center space-x-2.5">
                <img
                  src="/assets/otho-crest-logo.jpg"
                  alt="OTHO Logo"
                  className="w-8 h-8 rounded-full border border-[#C5A25D] object-cover"
                />
                <span className="font-serif text-lg tracking-[0.16em] font-normal text-[#0C1017]">
                  OTHO<span className="text-[#C5A25D] text-xs font-sans ml-1">REALTY</span>
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-[#0C1017] hover:text-[#C5A25D]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-bold tracking-[0.16em] uppercase text-[#0C1017] hover:text-[#C5A25D] transition-colors py-2 border-b border-[#DDD9D0]/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#DDD9D0] space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.18em] uppercase py-3.5 bg-[#0C1017] text-[#FBF9F5] hover:bg-[#C5A25D] transition-colors"
            >
              <span>TALK TO OTHO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#4A5565] text-center tracking-wider">
              Hyderabad Metropolitan Region, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
