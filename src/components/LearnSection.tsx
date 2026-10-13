import React, { useState } from 'react';
import { BookOpen, Video, ArrowRight, Check, Play, ExternalLink } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

export const LearnSection: React.FC = () => {
  const { learn } = ABOUT_DATA;
  const [showCourseModal, setShowCourseModal] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Vedic Astrology Academy
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            {learn.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            {learn.subtext}
          </p>
        </div>

        {/* 3 Course Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
          {learn.courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] rounded-xl border border-[#E5DAC8] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-amber-800/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-amber-800 bg-[#F5EDE0] px-2.5 py-1 rounded-sm">
                    {course.level}
                  </span>
                  {course.free && (
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Free Access
                    </span>
                  )}
                </div>

                <h3 className="font-serif-vedic text-xl sm:text-2xl font-bold text-[#16263B] mb-3">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans-clean">
                  {course.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE0D0]">
                <button
                  onClick={() => setShowCourseModal(true)}
                  className="text-xs font-semibold uppercase tracking-wider text-amber-900 hover:text-amber-700 flex items-center gap-1 group cursor-pointer"
                >
                  View Curriculum Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs matching prompt: [Explore courses] [YouTube channel] */}
        <div className="bg-[#16263B] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Community & Free Learning
            </div>
            <h3 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-white">
              Join 158K+ Learners on YouTube
            </h3>
            <p className="text-sm text-slate-300 max-w-xl font-sans-clean">
              Over 800+ comprehensive video lessons explaining Vimshottari Dashas, planetary transits, and Astro-Vastu in plain spoken language.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setShowCourseModal(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-md bg-[#FAF6EE] text-[#16263B] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Explore courses
            </button>
            <a
              href="https://youtube.com/@AcharyaGanesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-md bg-[#EF4444] text-white hover:bg-[#DC2626] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              YouTube channel
            </a>
          </div>
        </div>

      </div>

      {/* Curriculum Modal */}
      {showCourseModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div className="bg-[#FDFBF7] border border-[#E5DAC8] rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3">
              <h3 className="font-serif-vedic text-2xl font-bold text-slate-900">
                Vedic Astrology Curriculum
              </h3>
              <button
                onClick={() => setShowCourseModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Designed by Acharya Ganesh (Hanish Bagga) based on his working command of 25,000+ classical rules.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-800">
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DAC8]">
                <strong className="block text-amber-900 font-semibold mb-1">1. Building Blocks (Free):</strong>
                Foundations of 12 Houses, 9 Grahas, Rashis, Aspects, and basic horoscope calculations.
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DAC8]">
                <strong className="block text-amber-900 font-semibold mb-1">2. Predictive Dasha Mastery:</strong>
                Vimshottari Dasha, sub-periods (Antardasha), and timing career breakthroughs with D10.
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E5DAC8]">
                <strong className="block text-amber-900 font-semibold mb-1">3. Astro-Vastu Certification:</strong>
                Diagnosing structural and energy imbalances in residential and commercial spaces.
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setShowCourseModal(false)}
                className="px-4 py-2 rounded-md bg-[#16263B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
