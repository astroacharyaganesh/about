import React from 'react';
import { BookOpen, Award, Users, Video, GraduationCap, Quote } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';
import chartStudyImg from '../assets/images/vedic_chart_study_1791887315131.jpg';

export const JourneySection: React.FC = () => {
  const { journey } = ABOUT_DATA;

  const milestoneIcons = [
    <BookOpen className="w-5 h-5 text-amber-800" key="calling" />,
    <Award className="w-5 h-5 text-amber-800" key="study" />,
    <Users className="w-5 h-5 text-amber-800" key="consultations" />,
    <Video className="w-5 h-5 text-amber-800" key="media" />,
    <GraduationCap className="w-5 h-5 text-amber-800" key="teaching" />,
  ];

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Evolution of the Practice
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B] leading-[1.2] text-balance">
            {journey.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            {journey.intro}
          </p>
        </div>

        {/* 2-Column Layout: Visual Storytelling on Left, Milestone Path on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Vedic Chart Study Visual + Pull-Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#E3D6C1] shadow-lg bg-stone-900 group">
              <img
                src={chartStudyImg}
                alt="Hand-drawn Vedic birth chart Kundli manuscript and astrological brass instruments"
                className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FAF5EC] border-t border-[#E3D6C1] text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Research Discipline:</span> Classical Sanskrit scriptures verified against 50,000+ real horoscopes.
              </div>
            </div>

            {/* Editorial Pull-Quote Block */}
            <div className="relative p-7 sm:p-8 rounded-2xl bg-[#16263B] text-white shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 text-amber-500/20">
                <Quote className="w-16 h-16" />
              </div>
              <blockquote className="relative z-10 font-serif-vedic text-xl sm:text-2xl italic leading-relaxed text-amber-100">
                {journey.pullQuote}
              </blockquote>
              <div className="relative z-10 mt-4 pt-4 border-t border-white/10 text-xs font-semibold tracking-wider uppercase text-amber-300">
                — {journey.pullQuoteAuthor}
              </div>
            </div>
          </div>

          {/* Right Column: 5 Milestone Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {journey.milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative pl-8 sm:pl-10 before:absolute before:left-3.5 before:top-8 before:bottom-[-24px] before:w-px before:bg-[#E3D5C0] last:before:hidden"
              >
                {/* Node icon */}
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#F5EFE4] border-2 border-amber-800 flex items-center justify-center text-xs font-bold text-amber-900">
                  {idx + 1}
                </div>

                <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-[#E7DFD3] hover:border-amber-800/40 transition-colors shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif-vedic text-xl sm:text-2xl font-bold text-[#16263B]">
                      {milestone.title}
                    </h3>
                    {milestone.highlight && (
                      <span className="text-xs font-semibold text-amber-800 bg-[#F2E7D5] px-2.5 py-0.5 rounded-sm">
                        {milestone.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans-clean">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
