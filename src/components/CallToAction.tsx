import React from 'react';
import { ArrowUpRight, MessageSquareText } from 'lucide-react';

interface CallToActionProps {
  onTalkToOtho: () => void;
  onSubmitEnquiry: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onTalkToOtho, onSubmitEnquiry }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-[#F7F5F0] border-b border-white/10 relative overflow-hidden">
      {/* Decorative hairline architectural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#DDD9D0]/20 flex justify-between">
          <div className="w-1/2 border-r border-[#DDD9D0]/10" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        {/* Section Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 border border-[#B08D57]/40 bg-[#111111] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
          <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
            START A DIALOGUE
          </span>
        </div>

        {/* Closing Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
          LET’S FIND THE<br />
          <span className="text-[#B08D57]">RIGHT OPPORTUNITY.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          Whether you are evaluating an asset, launching a project or looking for your next real-estate opportunity, let’s start the conversation.
        </p>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button
            onClick={onTalkToOtho}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 bg-[#B08D57] text-[#111111] hover:bg-white transition-all duration-300 shadow-elevated"
          >
            <span>TALK TO OTHO</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onSubmitEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 border border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <MessageSquareText className="w-4 h-4 text-[#B08D57]" />
            <span>SUBMIT AN ENQUIRY</span>
          </button>
        </div>
      </div>
    </section>
  );
};
