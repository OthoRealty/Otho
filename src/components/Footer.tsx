import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F7F5F0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3.5">
              <img
                src="/assets/otho-crest-logo.jpg"
                alt="OTHO Crest"
                className="w-10 h-10 object-contain rounded-full border border-[#C5A25D]/60 shadow-md"
              />
              <span className="font-display text-2xl tracking-[0.2em] font-bold text-white">
                OTHO<span className="text-[#C5A25D] font-normal text-sm ml-1.5 tracking-[0.25em]">REALTY</span>
              </span>
            </div>

            <p className="font-display text-lg text-white/90 font-light italic">
              “Real Estate. With a clearer perspective.”
            </p>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-light">
              Hyderabad’s independent real-estate intelligence and institutional advisory. Fiduciary RERA audits, loading factor analysis, and high-value mandate representation across Telangana.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A25D] font-semibold block">
                Primary Market
              </span>
              <span className="text-xs text-white/80">
                Hyderabad Metropolitan Region &bull; Western Growth Corridors &bull; Telangana
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A25D] block mb-5">
              PLATFORM INDEX
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-white/70">
              <li>
                <a href="#about" className="hover:text-[#C5A25D] transition-colors">
                  About OTHO
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C5A25D] transition-colors">
                  Verified Project Reviews
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C5A25D] transition-colors">
                  Loading Factor Calculator
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#C5A25D] transition-colors">
                  Advisory Capabilities
                </a>
              </li>
              <li>
                <a href="#hyderabad-focus" className="hover:text-[#C5A25D] transition-colors">
                  Corridor Radar & Status
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#C5A25D] transition-colors">
                  Market Intelligence
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C5A25D] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A25D] transition-colors">
                  Contact Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Growth Corridors Monitored */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A25D] block mb-5">
              GROWTH VECTORS
            </span>
            <ul className="space-y-2 text-xs text-white/60">
              <li>Neopolis</li>
              <li>Financial District</li>
              <li>Kokapet</li>
              <li>HITECH City</li>
              <li>Gachibowli</li>
              <li>Narsingi</li>
              <li>Airport Corridor</li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A25D] block mb-5">
              CONNECT
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-white/70">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A25D] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A25D] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A25D] transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#C5A25D]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} OTHO Realty. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#C5A25D] transition-colors"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#C5A25D] transition-colors"
            >
              Terms of Advisory
            </button>
            <span>&bull;</span>
            <span className="text-white/40">
              RERA Compliant Practice
            </span>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#F7F5F0] text-[#111111] border border-[#DDD9D0] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 shadow-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD9D0] mb-6">
              <h3 className="font-display text-xl font-bold uppercase">
                {legalModal === 'privacy' ? 'PRIVACY & DATA GOVERNANCE' : 'TERMS OF ADVISORY'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 border border-[#DDD9D0] text-[#111111] hover:text-[#B08D57]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#555555] leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    OTHO Realty respects and protects the confidentiality of all client data, asset evaluations, and commercial communications.
                  </p>
                  <p>
                    Information submitted via this portal is collected strictly to facilitate direct advisory consultation, due diligence, and mandate evaluation. We do not sell, license, or disclose proprietary contact details to third-party marketing brokers.
                  </p>
                  <p>
                    Non-disclosure agreements (NDAs) govern all sensitive commercial mandates and confidential investor placements.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All project opportunities, land parcels, and market briefs presented on this website are for strategic advisory orientation and informational review.
                  </p>
                  <p>
                    Specific terms, commercial arrangements, and property details are subject to definitive agreements, title verifications, and regulatory clearances under applicable Real Estate (Regulation and Development) Act (RERA) provisions.
                  </p>
                  <p>
                    OTHO Realty advises independent technical and legal audit of all property assets prior to capital deployment.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDD9D0] text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#111111] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#B08D57]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
