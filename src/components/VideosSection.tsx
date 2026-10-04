import React, { useState, useEffect } from 'react';
import { FEATURED_VIDEOS } from '../data/portfolioData';
import { FeaturedVideoItem } from '../types/portfolio';
import { Play, ExternalLink, X } from 'lucide-react';

export const VideosSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<FeaturedVideoItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="videos" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Videos I've worked on
        </h2>
        <p className="text-base text-[#8E98A0] font-light">
          Small team, lots of takes.
        </p>
      </div>

      {/* 3 cards with thumbnail */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl bg-[#141414] border border-[#242424] overflow-hidden flex flex-col justify-between hover:border-[#383838] transition-all duration-200 group"
          >
            {/* Thumbnail */}
            <div
              onClick={() => setActiveVideo(video)}
              className="relative aspect-video w-full bg-[#181818] overflow-hidden cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              {/* Perfectly centered play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#A855F7] group-hover:border-[#A855F7] group-hover:scale-110 transition-all duration-200 shadow-xl">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F0F4F8] mb-2 leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E98A0] font-light">
                  My part: {video.myPart}
                </p>
              </div>

              {/* Small "Watch on YouTube" link with normal URL */}
              <div className="pt-4 mt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                <button
                  onClick={() => setActiveVideo(video)}
                  className="text-xs text-[#D7E2EA] hover:text-[#A855F7] transition-colors flex items-center gap-1"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play video</span>
                </button>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8E98A0] hover:text-[#F0F4F8] transition-colors inline-flex items-center gap-1"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
          <div className="relative w-full max-w-3xl bg-[#141414] border border-[#2B2B36] rounded-2xl overflow-hidden z-10 shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#242424] bg-[#161616]">
              <div>
                <h4 className="text-base font-bold text-[#F0F4F8]">{activeVideo.title}</h4>
                <p className="text-xs text-[#8E98A0]">My part: {activeVideo.myPart}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-lg bg-[#202020] text-[#8E98A0] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video embed frame */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal footer */}
            <div className="px-6 py-3 border-t border-[#242424] flex items-center justify-between">
              <span className="text-xs text-[#8E98A0]">YouTube player</span>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#A855F7] hover:underline"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
