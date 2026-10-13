import React from 'react';
import { ABOUT_DATA } from '../data/aboutData';

export const AchievementsSection: React.FC = () => {
  const { achievements } = ABOUT_DATA;

  return (
    <section className="py-16 sm:py-20 bg-[#16263B] text-white border-b border-[#0F1B2A] relative overflow-hidden bg-dark-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            Track Record & Impact
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {achievements.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-sans-clean">
            {achievements.intro}
          </p>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {achievements.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <div className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-300 tabular-nums tracking-tight">
                {stat.number}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 font-sans-clean">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet footnote banner */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Trusted by founders, senior tech architects, healthcare practitioners, and families across Delhi NCR, pan-India, and internationally.
          </p>
        </div>

      </div>
    </section>
  );
};
