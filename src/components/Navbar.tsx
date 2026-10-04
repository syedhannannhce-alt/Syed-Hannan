import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Social & Ads', href: '#social' },
    { label: 'Videos', href: '#videos' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Writing', href: '#writing' },
    { label: 'Events', href: '#events' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#242424] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Portfolio */}
        <a
          href="#"
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F0F4F8] hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#A855F7] via-[#6366F1] to-[#EC4899] shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span>portfolio</span>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm font-normal text-[#8E98A0] hover:text-[#F0F4F8] hover:text-[#A855F7] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#8E98A0] hover:text-[#F0F4F8] p-1.5 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141418] border-b border-[#242424] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-[#D7E2EA] hover:text-[#A855F7] py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
