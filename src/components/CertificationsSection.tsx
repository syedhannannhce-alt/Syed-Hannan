import React from 'react';
import { PROOF_CERTIFICATIONS, PROOF_AWARDS_RESEARCH } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink, ShieldCheck, FileCheck, Trophy } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#1C1C1C]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F59E0B]/15 to-[#A855F7]/15 border border-[#F59E0B]/30 text-xs font-medium text-[#FBBF24] mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Accreditation & Industry Honors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0F4F8] mb-3">
          Certifications & Awards
        </h2>
        <p className="text-base text-[#8E98A0] font-light max-w-2xl mx-auto">
          Verified professional credentials in search optimization, content strategy, design thinking, and engineering research.
        </p>
      </div>

      {/* Awards & Research Spotlight (2 Top Cards) */}
      <div className="mb-12">
        <h3 className="text-xs uppercase font-mono tracking-wider text-[#A855F7] mb-4 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#FBBF24]" />
          <span>Awards & Published Research</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROOF_AWARDS_RESEARCH.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-gradient-to-br from-[#1A1822] via-[#14141A] to-[#141416] border border-[#3A2E4E] hover:border-[#A855F7]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(168,85,247,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#2A1E3C] text-[#D8B4FE] border border-[#4C2882] font-medium text-[11px]">
                    {item.type}
                  </span>
                  <span className="text-[#8E98A0] text-xs font-mono">{item.issuer}</span>
                </div>
                <h4 className="text-lg font-bold text-[#F0F4F8] group-hover:text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8E98A0] font-light leading-relaxed">
                  Verified formal recognition in deep-tech mobility and published scientific inquiry.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#262035] flex items-center justify-between text-xs font-semibold text-[#D8B4FE] group-hover:text-white">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Verified Document</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Certifications Grid (6 Cards) */}
      <div>
        <h3 className="text-xs uppercase font-mono tracking-wider text-[#6366F1] mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#6366F1]" />
          <span>Professional Certifications</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROOF_CERTIFICATIONS.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#141418] border border-[#252332] hover:border-[#6366F1]/50 hover:bg-[#181622] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8E98A0] mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#A5B4FC] font-medium">
                    <FileCheck className="w-3 h-3 text-[#6366F1]" />
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#6C7680]">Certified</span>
                </div>
                <h4 className="text-base font-bold text-[#F0F4F8] group-hover:text-white mb-2 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-[#8E98A0] font-light leading-relaxed">
                  Specialized curriculum mastery and practical evaluation.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1F1E2A] flex items-center justify-between text-xs font-medium text-[#C7D2FE] group-hover:text-white">
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6366F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
