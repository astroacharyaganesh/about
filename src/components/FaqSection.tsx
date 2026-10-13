import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const { faqs } = ABOUT_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Clear Answers
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-700 font-sans-clean">
            Everything you need to know about consultation format, methodology, and bookings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-xl border border-[#E7DFD3] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-vedic text-lg sm:text-xl font-bold text-[#16263B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F0E6D5] flex items-center justify-center shrink-0 text-amber-900 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-800 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed font-sans-clean border-t border-[#EDE4D6]/60">
                    <p>{faq.answer}</p>
                    {idx === 4 && (
                      <div className="mt-4 pt-3 flex flex-wrap items-center gap-3">
                        <button
                          onClick={onOpenBooking}
                          className="px-3.5 py-2 rounded-md bg-[#16263B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-800 transition-colors"
                        >
                          Open Booking Form
                        </button>
                        <a
                          href="https://wa.me/917300004325"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-md border border-emerald-600/40 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          Message on WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center text-xs text-slate-500 font-sans-clean">
          Have a question not listed here? Call our team at{' '}
          <a href="tel:+917300004325" className="font-semibold text-slate-800 hover:text-amber-800 underline">
            +91 73000-04325
          </a>{' '}
          or email{' '}
          <a href="mailto:info@acharyaganesh.com" className="font-semibold text-slate-800 hover:text-amber-800 underline">
            info@acharyaganesh.com
          </a>
        </div>

      </div>
    </section>
  );
};
