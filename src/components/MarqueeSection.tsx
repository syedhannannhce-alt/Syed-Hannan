import React from 'react';
import { MARQUEE_TEAMS } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const marqueeItems = [...MARQUEE_TEAMS, ...MARQUEE_TEAMS, ...MARQUEE_TEAMS];

  return (
    <section className="py-14 border-y border-[#1C1C1C] bg-[#0E0E0E] relative overflow-hidden select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Small label above */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-4 text-center">
        <span className="text-xs uppercase tracking-wider text-[#8E98A0] font-light">
          Teams I've worked with
        </span>
      </div>

      {/* Slow, infinite scroll, text only */}
      <div className="flex overflow-hidden group">
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 animate-marqueeSlow py-2 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((team, idx) => (
            <div key={`${team}-${idx}`} className="flex items-center gap-10 sm:gap-14 shrink-0">
              <span className="text-base sm:text-lg font-medium text-[#D7E2EA] hover:text-white transition-colors cursor-default">
                {team}
              </span>
              <span className="text-[#383838]" aria-hidden="true">
                •
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marqueeSlow {
          animation: marqueeSlow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
