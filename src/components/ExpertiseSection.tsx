import React, { useState } from 'react';
import { Sparkles, Home, Flame, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';
import astroVastuImg from '../assets/images/astro_vastu_space_1791887314755.jpg';

interface ExpertiseSectionProps {
  onOpenBooking: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onOpenBooking }) => {
  const { experienceExpertise } = ABOUT_DATA;
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const [featuredCard, vastuCard, spiritualCard] = experienceExpertise.disciplines;

  return (
    <section id="expertise" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Disciplines & Methodology
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B] leading-[1.2]">
            {experienceExpertise.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            {experienceExpertise.intro}
          </p>
        </div>

        {/* Bento Grid: Featured Card (Full width or 8 cols) + 2 Sub-disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Featured Vedic Astrology Card (Full 12 cols or 7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF6EE] rounded-2xl border-2 border-[#E2D5C0] p-7 sm:p-9 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-800 text-white flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Core Specialisation
                    </span>
                    <h3 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-[#16263B]">
                      {featuredCard.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  D1 · D10 · Dashas
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-sans-clean">
                {featuredCard.description}
              </p>

              {/* Divisional Chart Breakdown */}
              <div className="space-y-2.5 bg-[#F2EAE0] p-4 sm:p-5 rounded-xl border border-[#DFD1BD]">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Four Pillars of Each One-on-One Reading:
                </div>
                {featuredCard.details?.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Tags: Clean, unboxed text or interactive category selector */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  Key Question Areas Addressed:
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-700">
                  {featuredCard.tags?.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <button
                        onClick={() => setSelectedTopic(selectedTopic === tag ? null : tag)}
                        className={`hover:text-amber-800 transition-colors cursor-pointer py-0.5 text-left ${
                          selectedTopic === tag
                            ? 'font-bold text-amber-900 underline underline-offset-4'
                            : 'font-medium text-slate-800'
                        }`}
                      >
                        {tag}
                      </button>
                      {idx < (featuredCard.tags?.length || 0) - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4D7C3] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Line-by-line chart analysis · Remedy summary included
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#16263B] hover:bg-amber-800 rounded-md transition-colors flex items-center gap-1.5"
              >
                Book Kundli Reading
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Vastu & Spiritual Guidance Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: Vastu & Astro-Vastu with image */}
            <div className="bg-[#FAF6EE] rounded-2xl border border-[#E7DFD3] overflow-hidden flex flex-col flex-1 shadow-xs group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={astroVastuImg}
                  alt="Harmonious architectural space designed with Astro-Vastu"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                      Spatial Alignment
                    </span>
                    <h3 className="font-serif-vedic text-xl font-bold text-white">
                      {vastuCard.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed font-sans-clean">
                  {vastuCard.description}
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-[#E8DECة] border-[#E8DFD0]">
                  {vastuCard.details?.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Spiritual Guidance */}
            <div className="bg-[#FAF6EE] rounded-2xl border border-[#E7DFD3] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-[#F2E7D5] text-amber-800 flex items-center justify-center">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Vedic Remedies & Pujas
                    </span>
                    <h3 className="font-serif-vedic text-xl font-bold text-[#16263B]">
                      {spiritualCard.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-sans-clean">
                  {spiritualCard.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-700 pt-2">
                  {spiritualCard.tags?.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span className="font-medium text-slate-800">{tag}</span>
                      {i < (spiritualCard.tags?.length || 0) - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DFD0] flex items-center justify-between text-xs text-slate-500">
                <span>Prescribed strictly on chart lordships</span>
                <span className="font-medium text-amber-900">Zero fear tactics</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
