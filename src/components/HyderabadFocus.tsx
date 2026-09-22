import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { GROWTH_CORRIDORS } from '../data/corridors';

interface HyderabadFocusProps {
  onInquireCorridor: (corridorName: string) => void;
}

export const HyderabadFocus: React.FC<HyderabadFocusProps> = ({ onInquireCorridor }) => {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('neopolis');

  const selectedCorridor = GROWTH_CORRIDORS.find((c) => c.id === selectedCorridorId) || GROWTH_CORRIDORS[0];

  return (
    <section id="hyderabad-focus" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B08D57]" />
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
              TERRITORY & CORRIDOR INTELLIGENCE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-[#111111]">
            HYDERABAD IS MOVING.<br />
            <span className="text-[#B08D57]">WE TRACK WHERE.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#555555] font-light leading-relaxed">
            Hyderabad’s transformation is propelled by distinct micro-market corridors with unique regulatory frameworks, infrastructure catalysts, and institutional capital inflows. We maintain active advisory presence across the western and southern growth vectors.
          </p>
        </div>

        {/* Corridor Selector Tabs (Horizontally scrollable on mobile) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-[#DDD9D0] no-scrollbar">
          {GROWTH_CORRIDORS.map((corridor) => {
            const isSelected = corridor.id === selectedCorridorId;
            return (
              <button
                key={corridor.id}
                onClick={() => setSelectedCorridorId(corridor.id)}
                className={`whitespace-nowrap px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#111111] text-[#F7F5F0] border-[#111111]'
                    : 'bg-white text-[#555555] border-[#DDD9D0] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {corridor.name}
              </button>
            );
          })}
        </div>

        {/* Master Interactive Corridor Visualization & Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Architectural Map Canvas (SVG) */}
          <div className="lg:col-span-6 bg-[#111111] p-6 sm:p-8 flex flex-col justify-between border border-[#DDD9D0] text-[#F7F5F0] relative overflow-hidden min-h-[460px]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#DDD9D0_1px,transparent_1px),linear-gradient(to_bottom,#DDD9D0_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Header of Map Card */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/15">
              <div className="flex items-center space-x-2.5">
                <Compass className="w-4 h-4 text-[#B08D57]" />
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/90">
                  WESTERN GROWTH VECTOR MAP
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-white/50 uppercase">
                HYDERABAD METROPOLITAN REGION
              </span>
            </div>

            {/* SVG Corridor Schematic */}
            <div className="relative z-10 my-6 flex-1 flex items-center justify-center">
              <svg viewBox="0 0 500 400" className="w-full h-full max-h-[320px] select-none">
                {/* Outer Ring Road (ORR) Arterial Arc */}
                <path
                  d="M 50,350 C 120,240 180,140 340,90 C 420,65 480,80 480,80"
                  fill="none"
                  stroke="#B08D57"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                  className="opacity-70"
                />

                {/* Secondary Arterial Connectors */}
                <path d="M 200,210 L 320,160" fill="none" stroke="#DDD9D0" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                <path d="M 200,210 L 250,290" fill="none" stroke="#DDD9D0" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                <path d="M 320,160 L 380,120" fill="none" stroke="#DDD9D0" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                <path d="M 250,290 L 390,360" fill="none" stroke="#DDD9D0" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />

                {/* Corridor Nodes */}
                {GROWTH_CORRIDORS.map((corridor) => {
                  const isNodeActive = corridor.id === selectedCorridorId;
                  // Map relative coordinates to SVG 500x400
                  const cx = (corridor.mapCoordinates.x / 100) * 440 + 30;
                  const cy = (corridor.mapCoordinates.y / 100) * 320 + 40;

                  return (
                    <g
                      key={corridor.id}
                      onClick={() => setSelectedCorridorId(corridor.id)}
                      className="cursor-pointer group"
                    >
                      {/* Pulsing ring for active node */}
                      {isNodeActive && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="18"
                          fill="none"
                          stroke="#B08D57"
                          strokeWidth="1.5"
                          className="animate-ping opacity-50"
                        />
                      )}

                      {/* Outer target ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isNodeActive ? "10" : "7"}
                        fill={isNodeActive ? "#111111" : "#1A1A1A"}
                        stroke={isNodeActive ? "#B08D57" : "#DDD9D0"}
                        strokeWidth={isNodeActive ? "2.5" : "1.5"}
                        className="transition-all duration-300"
                      />

                      {/* Center dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isNodeActive ? "4" : "2.5"}
                        fill={isNodeActive ? "#B08D57" : "#F7F5F0"}
                      />

                      {/* Corridor Label */}
                      <text
                        x={cx + 12}
                        y={cy + 4}
                        fill={isNodeActive ? "#B08D57" : "#DDD9D0"}
                        fontSize={isNodeActive ? "11" : "9"}
                        fontWeight={isNodeActive ? "bold" : "normal"}
                        letterSpacing="1"
                        className="transition-all duration-200 select-none group-hover:fill-white font-sans"
                      >
                        {corridor.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-[1.5px] bg-[#B08D57]" />
                <span>Outer Ring Road Arterial Arc</span>
              </div>
              <span className="text-[#B08D57] font-mono text-[10px]">CLICK NODES TO INSPECT</span>
            </div>
          </div>

          {/* Right: Selected Corridor Intelligence Briefing */}
          <div className="lg:col-span-6 bg-white border border-[#DDD9D0] p-8 flex flex-col justify-between shadow-fine">
            <div>
              {/* Badge & Corridor Title */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#DDD9D0]">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B08D57] block">
                    ACTIVE CORRIDOR BRIEF
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#111111] mt-1">
                    {selectedCorridor.name}
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 bg-[#F7F5F0] border border-[#DDD9D0] text-[#111111] font-medium tracking-wide">
                  {selectedCorridor.badge}
                </span>
              </div>

              {/* Subtext and Description */}
              <p className="mt-5 text-sm sm:text-base text-[#111111] font-medium leading-relaxed">
                {selectedCorridor.subtext}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                {selectedCorridor.description}
              </p>

              {/* Key Infrastructure Catalysts */}
              <div className="mt-6 pt-6 border-t border-[#DDD9D0]">
                <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#111111] mb-3">
                  INFRASTRUCTURE & GROWTH DRIVERS
                </h4>
                <div className="space-y-2">
                  {selectedCorridor.keyDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#555555]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dominant Asset Classes */}
              <div className="mt-6 pt-6 border-t border-[#DDD9D0]">
                <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#111111] mb-3">
                  KEY ASSET CLASSES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCorridor.assetClasses.map((ac, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-[#F7F5F0] border border-[#DDD9D0] text-[#111111]"
                    >
                      {ac}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-6 border-t border-[#DDD9D0] flex items-center justify-between">
              <span className="text-xs text-[#555555]">
                Evaluating an asset in {selectedCorridor.name}?
              </span>
              <button
                onClick={() => onInquireCorridor(selectedCorridor.name)}
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase px-5 py-2.5 bg-[#111111] text-[#F7F5F0] hover:bg-[#B08D57] transition-colors"
              >
                <span>CONSULT ON CORRIDOR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
