import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

export const VisionMissionSection: React.FC = () => {
  const { visionMission } = ABOUT_DATA;

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6EE] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Guiding Philosophy
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            {visionMission.heading}
          </h2>
        </div>

        {/* 2 Equal Columns: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Mission Card */}
          <div className="bg-[#FDFBF7] p-8 sm:p-10 rounded-2xl border border-[#E7DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE0] border border-[#E3D6C1] flex items-center justify-center text-amber-800 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
                Our Core Mission
              </div>
              <h3 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-[#16263B] leading-snug mb-4">
                To make authentic Vedic astrology simple, honest and useful.
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-sans-clean">
                {visionMission.mission.statement}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE0D0] space-y-3">
              {visionMission.mission.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#FDFBF7] p-8 sm:p-10 rounded-2xl border border-[#E7DFD3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F5EDE0] border border-[#E3D6C1] flex items-center justify-center text-amber-800 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 mb-2">
                Our Long-Term Vision
              </div>
              <h3 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-[#16263B] leading-snug mb-4">
                Clarity and preparation, never fear or dependence.
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-sans-clean">
                {visionMission.vision.statement}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE0D0] space-y-3">
              {visionMission.vision.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
