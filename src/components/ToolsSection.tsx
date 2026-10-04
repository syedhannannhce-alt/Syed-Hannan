import React from 'react';
import { TOOL_TRAYS } from '../data/portfolioData';
import { Palette, Film, TrendingUp, Cpu, Wrench } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Content & Design':
        return Palette;
      case 'Video & Motion':
        return Film;
      case 'Marketing & Analytics':
        return TrendingUp;
      case 'Workflow & Productivity':
        return Cpu;
      default:
        return Wrench;
    }
  };

  return (
    <section id="tools" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#D8B4FE] mb-3">
          <Wrench className="w-3.5 h-3.5 text-[#A855F7]" />
          <span>Toolkit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Tools I use
        </h2>
        <p className="text-base text-[#8E98A0] font-light">
          The everyday kit for content, production, and marketing operations.
        </p>
      </div>

      {/* Trays layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOL_TRAYS.map((tray) => {
          const Icon = getCategoryIcon(tray.category);
          return (
            <div
              key={tray.category}
              className="rounded-2xl bg-[#141416] border border-[#24242A] p-7 flex flex-col justify-between hover:border-[#383848] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#1F1F24]">
                  <div className="w-8 h-8 rounded-lg bg-[#1E1E26] border border-[#2D2D38] flex items-center justify-center text-[#A855F7]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F0F4F8]">
                    {tray.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tray.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-[#18181E] border border-[#262632] text-xs sm:text-sm text-[#D7E2EA] font-light hover:border-[#A855F7]/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
