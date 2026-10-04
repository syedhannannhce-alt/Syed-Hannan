import React from 'react';
import { UGC_META_ADS, PROOF_LINKEDIN_POSTS } from '../data/portfolioData';
import { Instagram, Linkedin, ExternalLink, Play, Megaphone } from 'lucide-react';

export const SocialCampaignsSection: React.FC = () => {
  return (
    <section id="social" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1624] border border-[#3A2244] text-xs font-medium text-[#EC4899] mb-3">
          <Megaphone className="w-3.5 h-3.5" />
          <span>Social Campaigns & UGC Meta Ads</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Viral Social Formats & Ad Creative
        </h2>
        <p className="text-base text-[#8E98A0] font-light max-w-2xl mx-auto">
          Split-grid highlighting viral social formats and direct-to-consumer ad creative.
        </p>
      </div>

      {/* PART A: HIGH-CONVERTING UGC META ADS */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#202020]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-md">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F0F4F8]">
                Part A: High-Converting UGC Meta Ads
              </h3>
              <p className="text-xs text-[#8E98A0]">
                Interactive ad preview cards linking directly to Instagram Reels / Meta Ads
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/autongage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#EC4899] hover:underline hidden sm:inline-flex items-center gap-1"
          >
            <span>Explore AutoNgage Brand Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 3 Dedicated Interactive Ad Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UGC_META_ADS.map((ad, idx) => (
            <a
              key={ad.id}
              href={ad.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-[#141418] border border-[#2B283A] hover:border-[#EC4899]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(236,72,153,0.18)]"
            >
              {/* Phone-styled Media Mockup */}
              <div className="relative aspect-[9/10] rounded-xl bg-gradient-to-br from-[#1C1628] via-[#161220] to-[#1F1222] border border-[#342A46] overflow-hidden p-4 flex flex-col justify-between mb-6 group-hover:border-[#EC4899]/40 transition-colors">
                {/* Instagram top bar mock */}
                <div className="flex items-center justify-between text-[11px] text-[#A89CB8]">
                  <span className="flex items-center gap-1.5 font-medium text-[#F0F4F8]">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white text-[9px] font-bold">
                      H
                    </span>
                    Reels
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] text-[#EC4899] border border-[#EC4899]/30">
                    Sponsored
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="mx-auto w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#F58529] group-hover:to-[#DD2A7B] transition-all duration-300 shadow-xl">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>

                {/* Bottom Hook Callout inside phone */}
                <div className="p-2.5 rounded-lg bg-black/55 backdrop-blur-sm border border-white/10 text-[11px] text-[#D7E2EA] font-light">
                  <p className="line-clamp-2">{ad.hookDescription}</p>
                </div>
              </div>

              {/* Information Body */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#F0F4F8] text-base group-hover:text-[#EC4899] transition-colors">
                    {ad.title}
                  </span>
                  <span className="text-[11px] font-mono text-[#8E98A0]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Format & Channel with distinct colorful badges */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-[#D7E2EA] font-light leading-relaxed">
                    <span className="font-semibold text-[#A855F7]">Format:</span>{' '}
                    {ad.format}
                  </div>
                  <div className="text-xs text-[#8E98A0]">
                    <span className="font-semibold text-[#6366F1]">Channel:</span>{' '}
                    <span className="inline-block px-2 py-0.5 rounded bg-[#201930] text-[#D7C2F0] border border-[#352554] text-[11px]">
                      {ad.channel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Clickable CTA footer */}
              <div className="pt-4 border-t border-[#221F2E] flex items-center justify-between text-xs font-semibold text-[#EC4899] group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>View on Instagram</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* PART B: LINKEDIN LAUNCH POSTS */}
      <div>
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#202020]">
          <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shadow-md">
            <Linkedin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#F0F4F8]">
              Part B: LinkedIn Launch Posts & Organic Distribution
            </h3>
            <p className="text-xs text-[#8E98A0]">
              Seven high-reach founder and product launch articles on LinkedIn (Post 01 to 07)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROOF_LINKEDIN_POSTS.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#141418] border border-[#232636] p-5 flex flex-col justify-between hover:border-[#0A66C2]/60 hover:bg-[#161A26] transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#0A66C2] font-mono mb-2">
                  <span className="font-semibold">{post.source}</span>
                  <span className="text-[#8E98A0]">Launch</span>
                </div>
                <h4 className="text-base font-bold text-[#F0F4F8] group-hover:text-white mb-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-[#8E98A0] font-light leading-relaxed">
                  Organic audience engagement & tech positioning breakdown.
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#1F2230] flex items-center justify-between text-xs text-[#8E98A0] group-hover:text-[#D7E2EA]">
                <span>Read Discussion</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0A66C2]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
