import React, { useState } from 'react';
import { WORK_ITEMS } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Instagram, Briefcase, TrendingUp } from 'lucide-react';

interface WorkSectionProps {
  onNavigateToProofTab: (tabId: 'articles' | 'decks' | 'social' | 'awards' | 'podcasts' | 'youtube') => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onNavigateToProofTab }) => {
  const [activeTabId, setActiveTabId] = useState<string>(WORK_ITEMS[0].id);

  const activeWork = WORK_ITEMS.find((w) => w.id === activeTabId) || WORK_ITEMS[0];

  const handleButtonClick = (targetProofTab: 'articles' | 'decks' | 'social' | 'awards' | 'podcasts' | 'youtube') => {
    onNavigateToProofTab(targetProofTab);
    const proofElement = document.getElementById('proof');
    if (proofElement) {
      proofElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#A5B4FC] mb-3">
          <Briefcase className="w-3.5 h-3.5 text-[#6366F1]" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Where I've worked
        </h2>
        <p className="text-base text-[#8E98A0] font-light">
          Here's what I did at each place. Click a name to read more.
        </p>
      </div>

      {/* Tabs / Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {WORK_ITEMS.map((item) => {
          const isActive = item.id === activeTabId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTabId(item.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#A855F7] via-[#6366F1] to-[#EC4899] text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-105'
                  : 'bg-[#141418] text-[#8E98A0] border border-[#24242E] hover:text-[#F0F4F8] hover:border-[#383848] hover:bg-[#1A1A22]'
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* ONE Card displayed with rich color accents */}
      <div className="rounded-3xl bg-gradient-to-b from-[#161622] via-[#141418] to-[#101014] border border-[#2B273A] p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A855F7]/10 to-transparent blur-3xl pointer-events-none" />

        {/* Top header row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#232030] gap-2 mb-6 relative z-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8]">{activeWork.name}</h3>
            <p className="text-sm font-semibold bg-gradient-to-r from-[#A855F7] to-[#EC4899] bg-clip-text text-transparent mt-1">
              {activeWork.role}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1C1A28] border border-[#322A44] text-[#C084FC]">
            {activeWork.dates}
          </span>
        </div>

        {/* What I did */}
        <div className="mb-8 relative z-10">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5B4FC] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            What I did:
          </h4>
          <ul className="space-y-3.5">
            {activeWork.whatIDid.map((line, idx) => {
              // Highlight numbers in lines (35+, 60+)
              const parts = line.split(/(35\+|60\+)/g);
              return (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA] font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] mt-2 shrink-0" />
                  <span>
                    {parts.map((p, pIdx) =>
                      p === '35+' || p === '60+' ? (
                        <span key={pIdx} className="text-emerald-400 font-bold">
                          {p}
                        </span>
                      ) : (
                        p
                      )
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* What came of it (if present) - Highlighted with Emerald & Violet */}
        {activeWork.whatCameOfIt && (
          <div className="mb-8 p-5 rounded-2xl bg-[#121A1A] border border-[#1E3A32] relative z-10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              What came of it:
            </h4>
            <p className="text-sm sm:text-base text-[#D7E2EA] font-light leading-relaxed">
              Organic traffic grew about{' '}
              <span className="text-emerald-400 font-bold text-base">3.4x</span>{' '}
              over nine months, and{' '}
              <span className="text-emerald-400 font-bold text-base">12 inbound leads</span>{' '}
              came in through content. A team effort, and I'm glad I got to be part of it.
            </p>
          </div>
        )}

        {/* Links and Buttons (if any) */}
        {(activeWork.link || activeWork.button) && (
          <div className="pt-6 border-t border-[#232030] flex flex-wrap items-center gap-4 relative z-10">
            {activeWork.link && (
              <a
                href={activeWork.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 border border-[#DD2A7B]/40 hover:border-[#DD2A7B] text-xs sm:text-sm font-semibold text-[#F472B6] hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4 text-[#EC4899]" />
                <span>{activeWork.link.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {activeWork.button && (
              <button
                onClick={() => handleButtonClick(activeWork.button!.targetProofTab)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#221C30] hover:bg-[#2B233D] border border-[#443660] text-xs sm:text-sm font-medium text-[#D8B4FE] hover:text-white transition-all"
              >
                <span>{activeWork.button.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EC4899]" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
