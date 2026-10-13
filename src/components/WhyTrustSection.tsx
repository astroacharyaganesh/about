import React from 'react';
import { Shield, UserCheck, BookOpenCheck, Clock } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

export const WhyTrustSection: React.FC = () => {
  const { whyTrust } = ABOUT_DATA;

  const icons = [
    <Shield className="w-6 h-6 text-amber-800" key="ethical" />,
    <UserCheck className="w-6 h-6 text-amber-800" key="personal" />,
    <BookOpenCheck className="w-6 h-6 text-amber-800" key="research" />,
    <Clock className="w-6 h-6 text-amber-800" key="client-first" />,
  ];

  return (
    <section id="why-trust" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Ethics & Standards
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            {whyTrust.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            Vedic astrology practiced with scholarly restraint, transparent diagnosis, and absolute confidentiality.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 or 4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyTrust.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] p-6 sm:p-7 rounded-xl border border-[#E5DAC8] shadow-2xs flex flex-col justify-between hover:border-amber-800/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F5EFE4] border border-[#E6DBCA] flex items-center justify-center mb-5">
                  {icons[idx]}
                </div>
                <h3 className="font-serif-vedic text-xl sm:text-2xl font-bold text-[#16263B] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-sans-clean">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE0D0] text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                <span>{pillar.bullet}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-fear guarantee callout banner */}
        <div className="mt-12 bg-[#F3ECE0] border border-[#E3D5BE] p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-vedic text-xl font-bold text-slate-900">
              The Anti-Exploitation Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl font-sans-clean">
              Acharya Ganesh never sells generic gemstone rings or demands exorbitant rituals based on manufactured fear. Consultations are focused on empowering your decision-making.
            </p>
          </div>
          <div className="shrink-0 text-xs font-semibold text-amber-950 bg-white/80 border border-[#D8C7AF] px-4 py-2.5 rounded-md">
            100% Transparent Consultation
          </div>
        </div>

      </div>
    </section>
  );
};
