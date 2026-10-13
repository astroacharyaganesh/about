import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

export const Footer: React.FC = () => {
  const { contact } = ABOUT_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121E2F] text-slate-300 border-t border-[#0C1521] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif-vedic text-2xl font-bold tracking-tight text-white">
                Acharya Ganesh
              </span>
              <span className="font-serif-vedic text-sm text-amber-300 font-medium tracking-wider">
                आचार्य गणेश
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-sans-clean">
              Hanish Bagga · Vedic Astrologer & Astro-Vastu Expert. Guiding seekers with research-backed D1 & D10 kundli analysis for 17+ years.
            </p>
            <div className="text-xs text-slate-400 pt-1">
              Office: Indirapuram, Ghaziabad, UP 201014
            </div>
          </div>

          {/* Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Spiritual Journey
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Vedic & Astro-Vastu Expertise
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Client Case Stories
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Standards & Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Direct Inquiries
            </div>
            <div className="text-xs text-slate-300 space-y-1 font-sans-clean">
              <div>Phone: +91 73000-04325 / +91 73000-04326</div>
              <div>Email: info@acharyaganesh.com</div>
              <div>Response Time: Callback usually within 1 hour</div>
            </div>
            <div className="text-xs text-slate-400 pt-2">
              Private 1-on-1 consultations conducted over secure video calls worldwide and at the Indirapuram study desk.
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer from Prompt */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10 text-xs text-slate-400 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Ethical Disclaimer: </strong>
              {contact.disclaimer}
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Acharya Ganesh (Hanish Bagga). All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
