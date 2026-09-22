import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
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
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'HYDERABAD FOCUS', href: '#hyderabad-focus' },
    { label: 'OPPORTUNITIES', href: '#opportunities' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'PROCESS', href: '#process' },
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
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DDD9D0] py-4 shadow-fine'
            : 'bg-transparent py-6 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="OTHO Realty Home"
          >
            <div className="w-8 h-8 rounded-none border border-[#B08D57] flex items-center justify-center bg-[#111111] transition-transform duration-300 group-hover:scale-105">
              <span className="font-display font-light text-xs tracking-wider text-[#F7F5F0]">O</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg tracking-[0.22em] font-semibold transition-colors duration-200 ${
                  isScrolled ? 'text-[#111111]' : 'text-white'
                }`}
              >
                OTHO<span className="text-[#B08D57] font-normal ml-1">REALTY</span>
              </span>
              <span
                className={`text-[9px] tracking-[0.28em] uppercase transition-colors duration-200 ${
                  isScrolled ? 'text-[#555555]' : 'text-white/70'
                }`}
              >
                Advisory & Capital
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-medium tracking-[0.16em] uppercase transition-all duration-200 relative py-1 hover:text-[#B08D57] ${
                  isScrolled ? 'text-[#111111]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenContact()}
              className={`hidden sm:inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase px-5 py-2.5 transition-all duration-200 border ${
                isScrolled
                  ? 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F7F5F0]'
                  : 'border-white text-white hover:bg-white hover:text-[#111111]'
              }`}
            >
              <span>TALK TO OTHO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#111111]' : 'text-white'
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
        className={`fixed inset-0 z-40 bg-[#111111]/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#F7F5F0] border-l border-[#DDD9D0] p-8 flex flex-col justify-between transform transition-transform duration-300 ease-out shadow-elevated ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#DDD9D0]">
              <div className="flex flex-col">
                <span className="font-display text-base tracking-[0.2em] font-semibold text-[#111111]">
                  OTHO<span className="text-[#B08D57] font-normal ml-1">REALTY</span>
                </span>
                <span className="text-[9px] tracking-[0.24em] text-[#555555] uppercase">
                  Hyderabad Advisory
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-[#111111] hover:text-[#B08D57]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold tracking-[0.16em] uppercase text-[#111111] hover:text-[#B08D57] transition-colors py-1 border-b border-[#DDD9D0]/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#DDD9D0] space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.18em] uppercase py-3.5 bg-[#111111] text-[#F7F5F0] hover:bg-[#B08D57] transition-colors"
            >
              <span>TALK TO OTHO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#555555] text-center tracking-wider">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
