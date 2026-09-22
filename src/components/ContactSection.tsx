import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  prefilledInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledInterest }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    interest: prefilledInterest || 'Advisory',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});

  const interestOptions = [
    'Buying',
    'Selling',
    'Investing',
    'Project Marketing',
    'Land',
    'Commercial',
    'Advisory',
    'Other'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) errs.phone = 'Please provide your contact number.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details of your requirement.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // In production, send data to CRM / API backend
    }
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello OTHO Realty, I would like to consult with your team regarding: ${formData.interest}. My Name is ${formData.name || '[Your Name]'}.`
    );
    // WhatsApp direct link with structured text placeholder
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B08D57]" />
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
              ENGAGEMENT & CONSULTATION
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
            INITIATE AN ADVISORY<br />
            <span className="text-[#B08D57]">CONVERSATION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Connect with our advisory leadership to evaluate an asset, discuss project mandates, or explore high-value property opportunities across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Premium Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#DDD9D0] p-8 sm:p-10 shadow-fine">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#B08D57]/15 border border-[#B08D57] flex items-center justify-center mx-auto text-[#B08D57]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#111111]">
                  ENQUIRY RECEIVED
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you for connecting with OTHO Realty. An advisory principal will review your submission and connect within 1 business day under strict confidentiality.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interest: 'Advisory',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold tracking-wider uppercase text-[#B08D57] underline hover:text-[#111111]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Varma"
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#111111] placeholder-[#777777] focus:outline-none focus:border-[#B08D57] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-[#DDD9D0]'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#111111] placeholder-[#777777] focus:outline-none focus:border-[#B08D57] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#DDD9D0]'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@enterprise.com"
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#111111] placeholder-[#777777] focus:outline-none focus:border-[#B08D57] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#DDD9D0]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-2">
                    I’M INTERESTED IN *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#DDD9D0] text-sm text-[#111111] focus:outline-none focus:border-[#B08D57] transition-colors"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111] mb-2">
                    MESSAGE / MANDATE SCOPE *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the asset, corridor, investment criteria, or project marketing scope..."
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#111111] placeholder-[#777777] focus:outline-none focus:border-[#B08D57] transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#DDD9D0]'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button & Privacy note */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.18em] uppercase py-4 bg-[#111111] text-[#F7F5F0] hover:bg-[#B08D57] transition-colors duration-200 shadow-elevated"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>START A CONVERSATION</span>
                  </button>
                  <div className="mt-3 flex items-center justify-center space-x-2 text-[11px] text-[#555555]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>All client discussions are held in strict institutional confidence.</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Verified Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Connect Card */}
            <div className="p-8 bg-[#111111] text-[#F7F5F0] border border-[#DDD9D0]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08D57]">
                    DIRECT ADVISORY CHANNEL
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    CONNECT VIA WHATSAPP
                  </h4>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                Prefer immediate messaging? Connect directly with our advisory desk for rapid corridor inquiries and scheduling consultation calls.
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase py-3.5 bg-[#25D366] text-[#111111] hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>

            {/* Corporate Address & Contact Details (Strict placeholders) */}
            <div className="p-8 bg-white border border-[#DDD9D0]">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#B08D57] block mb-5">
                HYDERABAD HEADQUARTERS
              </span>

              <div className="space-y-6 text-xs text-[#555555]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] uppercase tracking-wider block mb-1">
                      Advisory Office [Verified Placeholder]
                    </span>
                    <p className="leading-relaxed">
                      Financial District / Neopolis Corridor<br />
                      Hyderabad, Telangana 500032, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] uppercase tracking-wider block mb-1">
                      General & Mandate Inquiries
                    </span>
                    <p className="font-mono text-[11px] text-[#111111]">
                      contact@othorealty.com [Placeholder]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] uppercase tracking-wider block mb-1">
                      Advisory Desk Phone
                    </span>
                    <p className="font-mono text-[11px] text-[#111111]">
                      +91 (040) OTHO-DESK [Placeholder]
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#DDD9D0] text-[11px] text-[#777777]">
                Notice: All physical consultations and project reviews are scheduled strictly by prior appointment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
