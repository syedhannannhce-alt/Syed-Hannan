import React from 'react';
import { Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-10 max-w-4xl mx-auto text-center">
      {/* Small subtle badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#D8B4FE] mb-6">
        <Compass className="w-3.5 h-3.5 text-[#A855F7]" />
        <span>About Me</span>
      </div>

      {/* Section title */}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-8">
        A little about me
      </h2>

      {/* Main Intro Paragraph - Completely Uniform Typography */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161622] via-[#141418] to-[#101014] border border-[#2A2638] shadow-2xl relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute -top-12 -right-12 w-60 h-60 bg-[#A855F7]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-[#6366F1]/10 blur-3xl rounded-full pointer-events-none" />

        <p className="relative z-10 text-base sm:text-lg md:text-xl text-[#F0F4F8] font-normal leading-relaxed max-w-2xl mx-auto">
          I work in brand, content marketing and GTM, across tech, B2B and consumer brands. I write, make videos, look after social and help bring products to market.
        </p>

        <p className="relative z-10 text-base sm:text-lg md:text-xl text-[#F0F4F8] font-normal leading-relaxed max-w-2xl mx-auto mt-6">
          The part I enjoy most is taking a product that's hard to explain and finding a clear way to say it.
        </p>
      </div>
    </section>
  );
};
