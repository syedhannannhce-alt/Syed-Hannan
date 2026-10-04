import React from 'react';
import { EVENT_GROUPS } from '../data/portfolioData';
import { Globe, MapPin, Calendar } from 'lucide-react';

export const EventMarketingSection: React.FC = () => {
  return (
    <section id="events" className="py-24 px-6 sm:px-10 max-w-4xl mx-auto border-t border-[#1C1C1C]">
      {/* Section title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#D8B4FE] mb-3">
          <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
          <span>Industry Presence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-4">
          Event Marketing
        </h2>
        {/* Paragraph */}
        <p className="text-base sm:text-lg text-[#D7E2EA] font-light leading-relaxed max-w-2xl mx-auto">
          I've worked on national and international shows, including NADA (USA), GITEX (Middle East) and LEAP. In India, I've worked on NASSCOM Future Forge, the Passenger Vehicle Forum, FADA events and ET Auto events.
        </p>
      </div>

      {/* Two groups: International & India */}
      <div className="space-y-6 pt-4">
        {/* International */}
        <div className="rounded-2xl bg-[#141416] border border-[#24242A] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#383848] transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A855F7]">
            <Globe className="w-4 h-4 text-[#A855F7]" />
            <span>International</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {EVENT_GROUPS.international.map((event) => (
              <span
                key={event}
                className="px-3.5 py-1.5 rounded-full bg-[#18181E] border border-[#262630] text-xs sm:text-sm text-[#D7E2EA]"
              >
                {event}
              </span>
            ))}
          </div>
        </div>

        {/* India */}
        <div className="rounded-2xl bg-[#141416] border border-[#24242A] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#383848] transition-colors">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6366F1]">
            <MapPin className="w-4 h-4 text-[#6366F1]" />
            <span>India</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {EVENT_GROUPS.india.map((event) => (
              <span
                key={event}
                className="px-3.5 py-1.5 rounded-full bg-[#18181E] border border-[#262630] text-xs sm:text-sm text-[#D7E2EA]"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
