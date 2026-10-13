import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';
import portraitImg from '../assets/images/acharya_ganesh_portrait_1791887314203.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const { hero } = ABOUT_DATA;

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      'Namaste Acharya Ganesh Ji, I would like to enquire about booking a 1-on-1 Vedic Kundli / Astro-Vastu consultation.'
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section id="about" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-sacred-mesh border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Information & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Hindi Line */}
            <div className="flex items-center gap-3">
              <span className="font-serif-vedic text-xl sm:text-2xl font-bold tracking-widest text-[#B45309] select-none">
                {hero.hindiLine}
              </span>
              <span className="w-12 h-px bg-[#D9C4A9]"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans-clean">
                Classical Vedic Tradition
              </span>
            </div>

            {/* H1 Main Heading */}
            <div className="space-y-2">
              <h1 className="font-serif-vedic text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16263B] leading-[1.1] text-balance">
                {hero.name}
              </h1>
              <p className="font-serif-vedic text-xl sm:text-2xl text-amber-900/90 font-medium tracking-normal italic">
                {hero.subheading}
              </p>
            </div>

            {/* Intro (2-3 lines) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-sans-clean">
              {hero.intro}
            </p>

            {/* Trust Chips: Clean unboxed metadata with typographic separators (anti-slop rule) */}
            <div className="pt-2 pb-1 border-y border-[#E9E0D2]">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  {hero.trustChips[0]}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{hero.trustChips[1]}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{hero.trustChips[2]}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-amber-800 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {hero.trustChips[3]}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#16263B] hover:bg-amber-800 rounded-md transition-all shadow-sm flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#0B4D26] bg-[#E8F8EE] hover:bg-[#D7F3E0] border border-[#A7E2BE] rounded-md transition-all flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <MessageCircle className="w-4 h-4 text-[#15803D]" />
                Chat on WhatsApp
              </button>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Direct desk inquiries: <a href="tel:+917300004325" className="font-medium text-slate-800 hover:text-amber-800 underline underline-offset-2">{hero.phoneDisplay}</a> · Response usually within 1 hour</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle ambient border frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E3D6C1] shadow-xl bg-stone-900 group">
                <img
                  src={portraitImg}
                  alt="Acharya Ganesh (Hanish Bagga) studying authentic Vedic Kundli birth chart"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Elegant subtle scrim caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                  <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                    Personalized Kundli Reading
                  </div>
                  <div className="text-sm font-medium text-slate-100 mt-0.5">
                    1-on-1 Consultations with Acharya Ganesh · No software templates
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-amber-600/40 rounded-tr-xl pointer-events-none hidden sm:block"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-amber-600/40 rounded-bl-xl pointer-events-none hidden sm:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
