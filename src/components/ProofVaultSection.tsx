import React from 'react';
import {
  PROOF_ARTICLES,
  PROOF_DECKS,
  PROOF_UGC_ADS,
  PROOF_LINKEDIN_POSTS,
  PROOF_AWARDS_RESEARCH,
  PROOF_CERTIFICATIONS,
  PROOF_PODCASTS,
  PROOF_YOUTUBE_VIDEOS,
  PROOF_YOUTUBE_SHORTS,
} from '../data/portfolioData';
import { ExternalLink, Play, Archive, Instagram, Linkedin } from 'lucide-react';

export type ProofTabKey =
  | 'articles'
  | 'decks'
  | 'social'
  | 'awards'
  | 'podcasts'
  | 'youtube';

interface ProofVaultSectionProps {
  activeTab: ProofTabKey;
  onTabChange: (tab: ProofTabKey) => void;
}

export const ProofVaultSection: React.FC<ProofVaultSectionProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: { key: ProofTabKey; label: string }[] = [
    { key: 'articles', label: 'Articles' },
    { key: 'decks', label: 'Decks' },
    { key: 'social', label: 'Social' },
    { key: 'awards', label: 'Awards & Certifications' },
    { key: 'podcasts', label: 'Podcasts' },
    { key: 'youtube', label: 'YouTube' },
  ];

  return (
    <section id="writing" className="relative py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      <div id="proof" className="absolute -top-24 pointer-events-none" />
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#2B273A] text-xs font-medium text-[#D8B4FE] mb-3">
          <Archive className="w-3.5 h-3.5 text-[#A855F7]" />
          <span>Verifiable Artifacts</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          The proof
        </h2>
        <p className="text-base text-[#8E98A0] font-light">
          Real work, real links. Pick a tab and have a look.
        </p>
      </div>

      {/* Tabs in exact order: Articles, Decks, Social, Awards & Certifications, Podcasts, YouTube */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#A855F7] via-[#6366F1] to-[#EC4899] text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-105'
                  : 'bg-[#141418] text-[#8E98A0] border border-[#24242E] hover:text-[#F0F4F8] hover:border-[#383848] hover:bg-[#1A1A22]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab: Articles (source label: Emitrr) */}
      {activeTab === 'articles' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROOF_ARTICLES.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-b from-[#14141C] to-[#101014] border border-[#242436] hover:border-[#10B981]/50 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-[#1F1F2C]">
                <span className="px-2 py-0.5 rounded bg-[#102B20] text-[#34D399] border border-[#10B981]/30 font-medium">
                  {item.source}
                </span>
                <span className="flex items-center gap-1 text-[#8E98A0] group-hover:text-[#34D399] transition-colors">
                  <span>Read article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Tab: Decks (source label: Google Slides) */}
      {activeTab === 'decks' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PROOF_DECKS.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-b from-[#16151A] to-[#101014] border border-[#2E2822] hover:border-[#F59E0B]/50 p-6 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-5 leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-[#26201A]">
                <span className="px-2 py-0.5 rounded bg-[#2B2012] text-[#FBBF24] border border-[#F59E0B]/30 font-medium">
                  {item.source}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#FBBF24] transition-colors" />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Tab: Social */}
      {activeTab === 'social' && (
        <div className="space-y-10">
          {/* UGC Meta Ads */}
          <div>
            <h3 className="text-sm font-semibold text-[#EC4899] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>UGC Meta Ads</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROOF_UGC_ADS.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-b from-[#18141F] to-[#121016] border border-[#302038] hover:border-[#EC4899]/60 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#271A30]">
                    <span className="px-2 py-0.5 rounded bg-gradient-to-r from-[#F58529]/20 to-[#DD2A7B]/20 text-[#F472B6] border border-[#DD2A7B]/30 font-medium">
                      {item.source || 'Instagram'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#F472B6] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* LinkedIn Launch Posts */}
          <div>
            <h3 className="text-sm font-semibold text-[#0A66C2] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Launch Posts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {PROOF_LINKEDIN_POSTS.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-b from-[#141620] to-[#101116] border border-[#202538] hover:border-[#0A66C2]/60 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#1B2233]">
                    <span className="px-2 py-0.5 rounded bg-[#102036] text-[#60A5FA] border border-[#0A66C2]/30 font-medium">
                      {item.source}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#60A5FA] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Awards & Certifications */}
      {activeTab === 'awards' && (
        <div className="space-y-10">
          {/* Awards & research */}
          <div>
            <h3 className="text-sm font-semibold text-[#A855F7] uppercase tracking-wider mb-4">
              Awards & research
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROOF_AWARDS_RESEARCH.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-b from-[#181622] to-[#121016] border border-[#35284B] hover:border-[#A855F7]/60 p-6 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#261E34]">
                    <span className="text-[#C084FC] text-xs">Official Recognition</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#C084FC] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PROOF_CERTIFICATIONS.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-gradient-to-b from-[#141522] to-[#101016] border border-[#25283E] hover:border-[#6366F1]/60 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[#1C2033]">
                    <span className="text-[#A5B4FC] text-xs font-mono">{item.issuer}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#A5B4FC] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Podcasts (source label: Joveo) */}
      {activeTab === 'podcasts' && (
        <div>
          {/* Short line at top of tab */}
          <p className="text-sm text-[#D7E2EA] font-light mb-6 p-4 rounded-xl bg-[#141624] border border-[#242A44]">
            Recruiting Realities by Joveo. I turned these episodes into social content.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PROOF_PODCASTS.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-b from-[#141620] to-[#101116] border border-[#222A3E] hover:border-[#38BDF8]/60 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white mb-4 leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-[#1E2536]">
                  <span className="px-2 py-0.5 rounded bg-[#102434] text-[#38BDF8] border border-[#38BDF8]/30 font-medium">
                    {item.source}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#38BDF8] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tab: YouTube */}
      {activeTab === 'youtube' && (
        <div className="space-y-10">
          {/* Videos (16:9 cards) */}
          <div>
            <h3 className="text-sm font-semibold text-[#EF4444] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              <span>Videos</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PROOF_YOUTUBE_VIDEOS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#141414] border border-[#2E2428] hover:border-[#EF4444]/60 overflow-hidden flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full bg-[#181818] overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    {/* Centered play button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#EF4444] group-hover:border-[#EF4444] group-hover:scale-110 transition-all duration-200 shadow-lg">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <h4 className="text-base font-semibold text-[#F0F4F8] group-hover:text-white">
                      {item.title}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8E98A0] group-hover:text-[#EF4444] shrink-0 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Shorts (9:16 vertical cards) */}
          <div>
            <h3 className="text-sm font-semibold text-[#EF4444] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              <span>Shorts</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PROOF_YOUTUBE_SHORTS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#141414] border border-[#2E2428] hover:border-[#EF4444]/60 overflow-hidden flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[9/16] w-full bg-[#181818] overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    {/* Centered play button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#EF4444] group-hover:border-[#EF4444] group-hover:scale-110 transition-all duration-200 shadow-lg">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-[#F0F4F8] group-hover:text-white truncate">
                      {item.title}
                    </h4>
                    <ExternalLink className="w-3 h-3 text-[#8E98A0] group-hover:text-[#EF4444] shrink-0 ml-1.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
