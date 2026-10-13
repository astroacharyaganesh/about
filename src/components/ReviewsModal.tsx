import React, { useState } from 'react';
import { X, Star, CheckCircle, Video, MessageSquare } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'google' | 'students';
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'google',
}) => {
  const [activeTab, setActiveTab] = useState<'google' | 'students'>(initialTab);

  if (!isOpen) return null;

  const verifiedReviews = [
    {
      name: 'Dr. Amitav Sen',
      title: 'Senior Oncologist, New Delhi',
      date: '2 months ago',
      rating: 5,
      content:
        'Acharya Ganesh ji gives readings with absolute dignity and mathematical precision. Unlike other astrologers who terrify you with Kaal Sarp dosha or expensive gemstones, he explained the D10 chart with clarity and suggested simple remedies that brought immense mental peace.',
    },
    {
      name: 'Meenakshi Iyer',
      title: 'Head of Product, Bengaluru',
      date: '3 months ago',
      rating: 5,
      content:
        'Consulted him before a major international relocation. The Vimshottari dasha analysis was spot-on regarding the timing. His Astro-Vastu recommendations for my home workstation also unlocked massive focus. True Vedic scholar.',
    },
    {
      name: 'Rohan Mehra',
      title: 'Co-Founder, SaaS Enterprise, Gurgaon',
      date: '4 months ago',
      rating: 5,
      content:
        'Clear, research-based, and zero fear tactics. He compared my 10th and 11th houses with running transits to advise whether I should raise funding or bootstrap. The advice saved us months of missteps.',
    },
    {
      name: 'Sunita Aggarwal',
      title: 'Educator, Jaipur',
      date: '5 months ago',
      rating: 5,
      content:
        'Got my daughter’s marriage matchmaking done. He did not look at sun signs or generic scores; he studied the Navamsha (D9) and longevity in detail. Everything took place with calm assurance.',
    },
  ];

  const studentVideoReviews = [
    {
      name: 'Vikas Sharma',
      course: 'Predictive Dasha & Divisional Mastery Graduate',
      duration: '4:20 min interview',
      feedback:
        '“The way Acharya ji explains the 25,000+ rules using real charts without memorization gives students genuine diagnostic confidence. Highly recommended.”',
    },
    {
      name: 'Ananya Deshmukh',
      course: 'Building Blocks of Vedic Astrology',
      duration: '3:15 min interview',
      feedback:
        '“From zero understanding of Sanskrit astrological terms to accurately identifying planetary strengths. The ethics taught by him are gold standard.”',
    },
    {
      name: 'Capt. R. K. Nair',
      course: 'Astro-Vastu Spatial Synchronization',
      duration: '5:10 min interview',
      feedback:
        '“He shows how physical directional zones directly mirror your natal horoscope houses. Practical, logical, and without superstitious fear.”',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] border border-[#E5DAC8] rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16263B] text-white">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="font-serif-vedic text-xl font-bold tracking-tight text-white">
              Verified Client & Student Reviews
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-[#E7DFD3] bg-[#F7F2E9]">
          <button
            onClick={() => setActiveTab('google')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'google'
                ? 'border-amber-800 text-amber-950'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Google Reviews (5.0 ★ · 5,000+ Reviews)
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'students'
                ? 'border-amber-800 text-amber-950'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Video className="w-4 h-4" />
            Student Reviews & Academy Stories
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {activeTab === 'google' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#F3ECE0] border border-[#E4D7C2] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                    <span className="ml-2 font-bold text-slate-900 text-sm">5.0 / 5.0</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Over 5,000+ verified client testimonials on Google Reviews
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    100% Verified
                  </span>
                </div>
              </div>

              {verifiedReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-[#E9DFD2] space-y-2 shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                      </div>
                      <div className="text-xs text-slate-500">{rev.title}</div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.content}"
                  </p>
                  <div className="text-[11px] text-slate-400">{rev.date} · Verified Consultation</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#F3ECE0] border border-[#E4D7C2]">
                <div className="text-xs font-semibold text-amber-950 uppercase tracking-wider">
                  Vedic Astrology Academy Students
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Watch genuine video feedback from students enrolled in Acharya Ganesh's foundation and advanced predictive courses.
                </div>
              </div>

              {studentVideoReviews.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-[#E9DFD2] space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Video className="w-3 h-3 text-amber-800" />
                      {item.duration}
                    </span>
                  </div>
                  <div className="text-xs text-amber-900 font-medium">{item.course}</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F6EFE5] border-t border-[#E7DFD3] flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Readings are strictly 1-on-1 and private.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#16263B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
