'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      objective: formData.get('objective') as string,
      location: formData.get('corridor') as string,
      message: formData.get('notes') as string,
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error('Lead submission network error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Column - Context */}
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
            Advisory Desk
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-8">
            Initiate a Dialogue
          </h1>
          <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed mb-16 max-w-md">
            Engage with our advisory team to discuss your real estate objectives. We maintain strict confidentiality regarding all client mandates and asset portfolios.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Direct Communication</h3>
              <a href="https://wa.me/919949041919" target="_blank" rel="noopener noreferrer" className="block font-serif text-2xl text-foreground hover:text-accent transition-colors mb-2">
                +91 99490 41919
              </a>
              <a href="mailto:contact@otho.co.in" className="block font-sans text-lg text-muted-foreground hover:text-foreground transition-colors">
                contact@otho.co.in
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">The Headquarters</h3>
              <address className="not-italic font-sans text-base text-muted-foreground font-light leading-relaxed">
                OTHO Advisory & Consultancy<br />
                E5, Tapasya Apartments, behind ICICI Bank<br />
                opp. Rockwell International School<br />
                Kokapet, Hyderabad, Telangana 500075
              </address>
              <a 
                href="https://www.google.com/maps/place/Otho+Realty+Pvt+Ltd/data=!4m2!3m1!1s0x0:0x2bc83106c33c7eb9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors border-b border-foreground/30 pb-1"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-card border border-border p-8 lg:p-12 rounded-lg">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-foreground mb-4">Request Received</h2>
              <p className="font-sans text-muted-foreground font-light">
                Our advisory desk will review your mandate and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="font-mono text-xs uppercase tracking-widest text-foreground block">
                  Primary Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Trophy Residence', 'Investment', 'Land Acquisition', 'Commercial Asset'].map((obj) => (
                    <label key={obj} className="flex items-center p-4 border border-border rounded cursor-pointer hover:border-accent/50 transition-colors bg-background/50">
                      <input type="radio" name="objective" value={obj} required className="text-accent focus:ring-accent bg-transparent border-border" />
                      <span className="ml-3 font-sans text-sm text-foreground">{obj}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-foreground block">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-background border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-foreground block">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    className="w-full bg-background border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-foreground block">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="w-full bg-background border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="font-mono text-xs uppercase tracking-widest text-foreground block">
                  Corridor of Interest
                </label>
                <select 
                  id="interest" 
                  name="corridor"
                  defaultValue=""
                  className="w-full bg-background border-b border-border py-3 font-sans text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select an area...</option>
                  <option value="neopolis">Neopolis</option>
                  <option value="kokapet">Kokapet</option>
                  <option value="financial-district">Financial District</option>
                  <option value="hitech-city">HITEC City</option>
                  <option value="gachibowli">Gachibowli</option>
                  <option value="narsingi">Narsingi</option>
                  <option value="airport-corridor">Airport Corridor</option>
                  <option value="other">Other / Undecided</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-foreground block">
                  Mandate Details
                </label>
                <textarea 
                  id="message" 
                  name="notes"
                  rows={4} 
                  required 
                  placeholder="Please provide initial context regarding your requirements..."
                  className="w-full bg-background border border-border rounded p-4 font-sans text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-4 font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
