import React from 'react';
import { Star, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

interface ClientStoriesSectionProps {
  onOpenReviews: (tab: 'google' | 'students') => void;
  onOpenBooking: () => void;
}

export const ClientStoriesSection: React.FC<ClientStoriesSectionProps> = ({
  onOpenReviews,
  onOpenBooking,
}) => {
  const { testimonials } = ABOUT_DATA;

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Real Cases · Real Decisions
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            {testimonials.intro}
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#FAF7F2] rounded-2xl border border-[#E7DFD3] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-amber-800/40 transition-colors"
            >
              <div className="space-y-5">
                {/* Clean unboxed category kicker */}
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {story.category}
                </div>

                {/* Client Profile */}
                <div>
                  <h3 className="font-serif-vedic text-2xl font-bold text-[#16263B]">
                    {story.clientName}
                  </h3>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {story.designation} · {story.location}
                  </div>
                </div>

                {/* The Situation / Challenge */}
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Background & Chart Study:
                  </div>
                  <p>{story.situation}</p>
                </div>

                {/* The Vedic Chart Analysis */}
                <div className="bg-[#F2EAE0] p-3.5 rounded-lg border border-[#E3D4C0] text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Vedic Insight: </span>
                  {story.analysis}
                </div>
              </div>

              {/* Verified Outcome */}
              <div className="mt-6 pt-5 border-t border-[#E5DAC8] space-y-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50/80 p-3 rounded-lg border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    Outcome: <span className="font-medium text-slate-800">{story.outcome.replace('Outcome: ', '')}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Rating Line Bar matching prompt:
            Rating line: ★ 5.0 on Google · Read verified reviews · Watch student video reviews */}
        <div className="mt-12 bg-[#FAF5EB] border border-[#E4D7C3] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-800 text-center sm:text-left">
            <span className="flex items-center gap-1 text-amber-700 font-bold">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              ★ 5.0 on Google
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onOpenReviews('google')}
              className="text-amber-900 hover:text-amber-700 underline underline-offset-4 font-semibold cursor-pointer inline-flex items-center gap-1"
            >
              Read verified reviews
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => onOpenReviews('students')}
              className="text-amber-900 hover:text-amber-700 underline underline-offset-4 font-semibold cursor-pointer inline-flex items-center gap-1"
            >
              Watch student video reviews
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#16263B] hover:bg-amber-800 rounded-md transition-colors shrink-0 flex items-center gap-1.5"
          >
            Get Clarity On Your Chart
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
