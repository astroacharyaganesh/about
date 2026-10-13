import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Single brand text) - Zone 2 (4-5 nav links) - Zone 3 (1 primary action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-baseline gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/50 rounded-sm"
          >
            <span className="font-serif-vedic text-2xl sm:text-3xl font-bold tracking-tight text-[#16263B] group-hover:text-amber-800 transition-colors">
              Acharya Ganesh
            </span>
            <span className="font-serif-vedic text-sm text-amber-800 font-medium tracking-wider hidden sm:inline">
              आचार्य गणेश
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#about"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About
            </a>
            <a
              href="#journey"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Journey
            </a>
            <a
              href="#expertise"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Expertise
            </a>
            <a
              href="#stories"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Client Stories
            </a>
            <a
              href="#faqs"
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#16263B] hover:bg-amber-800 rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              Book a Consultation
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-amber-800 hover:bg-[#F2ECE1] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7DFD3] bg-[#FAF6EE] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              About
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              Journey
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              Expertise
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              Client Stories
            </a>
            <a
              href="#why-trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              Why Trust Him
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 rounded-md hover:bg-[#EFE7D8] transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#16263B] rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5"
            >
              Book a Consultation
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
