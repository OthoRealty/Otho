'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

type Objective = 'Trophy Residence' | 'Investment' | 'Land Acquisition' | 'Commercial Asset';

const OBJECTIVES: Objective[] = [
  'Trophy Residence',
  'Investment',
  'Land Acquisition',
  'Commercial Asset'
];

export function PrivateGateway() {
  const [selectedObjective, setSelectedObjective] = useState<Objective>('Investment');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: contact.includes('@') ? null : contact,
          email: contact.includes('@') ? contact : null,
          objective: selectedObjective,
          message: `Inquiry submitted via Homepage Private Gateway for ${selectedObjective}.`,
        }),
      });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-navy-900 text-bone-50 py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        {/* Decorative Line */}
        <div className="w-16 h-px bg-gold-500 mx-auto mb-12" />
        
        <h2 className="font-serif text-4xl lg:text-5xl text-bone-50 mb-4 tracking-[-0.02em]">
          Begin a Private Advisory
        </h2>
        <p className="font-sans text-base text-bone-100/60 mb-12 max-w-xl mx-auto leading-relaxed">
          Share your objective. A senior advisory principal will respond within 24 hours.
        </p>

        {isSubmitted ? (
          <div className="max-w-md mx-auto p-8 rounded-xl bg-gold-500/10 border border-gold-500/30 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-bone-50 mb-2">Mandate Received</h3>
            <p className="font-sans text-sm text-bone-100/70 font-light">
              Thank you, {name}. A senior research principal at OTHO will review your objective ({selectedObjective}) and reach out directly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {/* Objective Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {OBJECTIVES.map((obj) => (
                <button
                  key={obj}
                  type="button"
                  onClick={() => setSelectedObjective(obj)}
                  className={`px-5 py-3 border rounded-lg text-sm font-sans cursor-pointer transition-all duration-200 ${
                    selectedObjective === obj
                      ? 'border-gold-500 bg-gold-500/10 text-gold-400'
                      : 'border-bone-100/20 text-bone-100/60 hover:border-bone-100/40 hover:text-bone-100'
                  }`}
                >
                  {obj}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="bg-transparent border-b border-bone-100/20 py-3 text-bone-50 placeholder:text-bone-100/30 focus:border-gold-500 outline-none transition-colors font-sans w-full"
              />
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Phone or WhatsApp Number"
                className="bg-transparent border-b border-bone-100/20 py-3 text-bone-50 placeholder:text-bone-100/30 focus:border-gold-500 outline-none transition-colors font-sans w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-navy-900 font-mono text-[13px] uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300 font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'REQUEST ADVISORY'}
            </button>
          </form>
        )}

        {/* WhatsApp Link */}
        <Link 
          href="https://wa.me/919949041919" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-sm text-bone-100/50 hover:text-gold-400 transition-colors font-sans"
        >
          <MessageCircle className="w-4 h-4" />
          Or connect directly via WhatsApp
        </Link>
      </div>
    </section>
  );
}
