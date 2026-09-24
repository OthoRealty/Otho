'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export function HeroAtmosphere() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-900">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/hero-skyline.jpg"
          alt="Hyderabad Skyline"
          fill
          priority
          className="object-cover origin-center animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 to-navy-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-mono text-[13px] md:text-[14px] uppercase tracking-widest text-gold-500 mb-8">
          Hyderabad's Premier Advisory
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight tracking-[-0.02em]">
          Private Capital.<br />
          Sovereign Architecture.<br />
          Uncompromised Advisory.
        </h1>
        <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto font-light">
          Real Estate. With a clearer perspective.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-pulse">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
      
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
