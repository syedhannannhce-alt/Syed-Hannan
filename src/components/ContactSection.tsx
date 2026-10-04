import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 sm:px-10 border-t border-[#1C1C1C] bg-[#0A0A0E] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-t from-[#A855F7]/10 via-[#6366F1]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Want to work together, or just say hi?
        </h2>

        {/* Subline */}
        <p className="text-base sm:text-lg text-[#8E98A0] font-light mb-10">
          I'd love to hear from you.
        </p>

        {/* Buttons with rich colors */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {/* Email */}
          <a
            href="mailto:syedhannan9545@gmail.com"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#161520] hover:bg-[#201D30] border border-[#3A2D50] hover:border-[#A855F7] text-xs sm:text-sm font-medium text-[#F0F4F8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(168,85,247,0.25)]"
          >
            <Mail className="w-4 h-4 text-[#A855F7]" />
            <span>syedhannan9545@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+918095418861"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#141624] hover:bg-[#1A1F36] border border-[#283254] hover:border-[#6366F1] text-xs sm:text-sm font-medium text-[#F0F4F8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(99,102,241,0.25)]"
          >
            <Phone className="w-4 h-4 text-[#6366F1]" />
            <span>+91 80954 18861</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/syed-hannan-209731262/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#121824] hover:bg-[#182338] border border-[#1E3354] hover:border-[#0A66C2] text-xs sm:text-sm font-medium text-[#F0F4F8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(10,102,194,0.25)]"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-[#8E98A0] font-light pt-8 border-t border-[#1C1C1C]">
          © 2026 Syed Hannan. Thanks for scrolling all the way down.
        </p>
      </div>
    </footer>
  );
};
