import React from 'react';
import { HeroPhotoCard } from './HeroPhotoCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] pt-20">
      {/* Giant Background Heading (No clipping) */}
      <div className="w-full flex justify-center items-center select-none pointer-events-none mt-4 md:mt-8 z-0">
        <h1 className="hero-heading text-[11.5vw] font-black uppercase tracking-tight leading-none whitespace-nowrap text-center">
          HI, I&apos;M HANNAN
        </h1>
      </div>

      {/* 3D Avatar (Centered & Anchored to the bottom floor) */}
      <HeroPhotoCard />

      {/* Bottom Bar: Action */}
      <div className="relative z-20 w-full flex justify-end items-end pb-8 px-6 md:px-12 pointer-events-auto">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="btn-primary cursor-pointer"
        >
          <span>Get in Touch ↓</span>
        </a>
      </div>
    </section>
  );
};
