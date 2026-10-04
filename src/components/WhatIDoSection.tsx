import React from 'react';
import { WHAT_I_DO_CARDS } from '../data/portfolioData';
import { Target, Feather, Film, TrendingUp } from 'lucide-react';

export const WhatIDoSection: React.FC = () => {
  const getCardIcon = (num: string) => {
    switch (num) {
      case '01':
        return Feather;
      case '02':
        return Film;
      default:
        return TrendingUp;
    }
  };

  return (
    <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#D8B4FE] mb-3">
          <Target className="w-3.5 h-3.5 text-[#A855F7]" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          What I enjoy doing
        </h2>
        <p className="text-base text-[#8E98A0] font-light">
          Three things I keep coming back to.
        </p>
      </div>

      {/* 3 cards with distinct color accents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WHAT_I_DO_CARDS.map((card) => {
          const Icon = getCardIcon(card.number);
          return (
            <div
              key={card.number}
              className={`rounded-3xl bg-gradient-to-b from-[#161622] via-[#141418] to-[#101014] border ${card.borderColor} p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.colorAccent} border ${card.borderColor} flex items-center justify-center text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8E98A0] px-2.5 py-1 rounded-md bg-[#181820]">
                    Card {card.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F0F4F8] group-hover:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#D7E2EA] font-light leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#201F2C] flex flex-wrap gap-2 text-xs">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-[#181820] text-[#D7E2EA] border border-[#282636] text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
