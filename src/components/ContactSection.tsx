import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Video,
  Instagram,
  Facebook,
  CheckCircle2,
  Clock,
  Send,
  Globe,
} from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const { contact } = ABOUT_DATA;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('Career & D10 Chart');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleCall = () => {
    window.location.href = 'tel:+917300004325';
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Acharya Ganesh Ji,\nName: ${name || 'Seeker'}\nPhone: ${phone || ''}\nConcern: ${query || 'Need guidance on career/life'}`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF6EE] border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            Get In Touch
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16263B]">
            {contact.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-sans-clean">
            {contact.subtext}
          </p>

          {/* Prompt CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-md bg-[#16263B] hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              Book a consultation
            </button>
            <button
              onClick={handleCall}
              className="px-5 py-2.5 rounded-md border border-slate-300 bg-white hover:bg-[#F2ECE0] text-slate-900 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              Call +91 73000-04325
            </button>
          </div>
        </div>

        {/* 2-Column Layout: Direct Form (Left) & Contact Details + Cities (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Instant Clarity Request Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-7 sm:p-9 rounded-2xl border border-[#E5DAC8] shadow-xs">
            <div className="mb-6">
              <h3 className="font-serif-vedic text-2xl font-bold text-[#16263B]">
                Send a Direct Consultation Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans-clean">
                Our team responds to all inquiries, usually within an hour.
              </p>
            </div>

            {isSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif-vedic text-xl font-bold text-slate-900">
                  Inquiry Received
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-sans-clean">
                  Thank you, <span className="font-semibold">{name}</span>. An astrologer coordinator will call or message your number ({phone}) shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-4 py-2 bg-[#25D366] text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-md inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Ping On WhatsApp Too
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765-43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Area of Guidance
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                  >
                    <option value="Career & D10 Chart">Career & Job Switch (D10 Dashamsha)</option>
                    <option value="Marriage & Matchmaking">Marriage & Relationship Compatibility</option>
                    <option value="Wealth & Business Timing">Wealth, Finance & Startup Timing</option>
                    <option value="Astro-Vastu Guidance">Home / Office Astro-Vastu Guidance</option>
                    <option value="Remedies & Pujas">Spiritual Remedies, Mantras & Pujas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    What Decision Are You Facing?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you need clarity on..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-800" />
                    Callback within 1 hour
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#16263B] hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    Submit Details
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Address, Contacts, Socials & Cities Served (6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Contact Details Card */}
            <div className="bg-[#FDFBF7] p-7 rounded-2xl border border-[#E5DAC8] shadow-xs space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Consultation Office & Desk
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-slate-800">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Head Office:</span>
                  <span className="text-slate-600 font-sans-clean leading-relaxed">
                    {contact.address}
                  </span>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start gap-3 text-sm text-slate-800">
                <Phone className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Direct Telephone:</span>
                  <div className="flex flex-wrap items-center gap-3 text-slate-700 font-medium mt-0.5">
                    <a href="tel:+917300004325" className="hover:text-amber-800 underline underline-offset-2">
                      {contact.phones[0]}
                    </a>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <a href="tel:+917300004326" className="hover:text-amber-800 underline underline-offset-2">
                      {contact.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-sm text-slate-800">
                <Mail className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Email Address:</span>
                  <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-amber-800 underline underline-offset-2">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Social Channels matching prompt:
                  Social: WhatsApp · YouTube · Instagram · Facebook */}
              <div className="pt-4 border-t border-[#EAE0D0]">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Official Channels:
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
                  <a
                    href="https://wa.me/917300004325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-700 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    WhatsApp
                  </a>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <a
                    href="https://youtube.com/@AcharyaGanesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-700 flex items-center gap-1"
                  >
                    <Video className="w-3.5 h-3.5 text-red-600" />
                    YouTube (158K+)
                  </a>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <a
                    href="https://instagram.com/acharyaganeshofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-700 flex items-center gap-1"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Instagram
                  </a>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <a
                    href="https://facebook.com/acharyaganeshofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 flex items-center gap-1"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Cities Served Strip matching prompt:
                Cities served: Delhi, Noida, Ghaziabad, Gurgaon, Jaipur, Bangalore, Mumbai, Hyderabad, Chennai, Kolkata and 40+ more, plus clients worldwide. */}
            <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-[#E7DFD3] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Globe className="w-4 h-4 text-amber-800" />
                Cities & Regions Served:
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans-clean">
                Delhi, Noida, Ghaziabad, Gurgaon, Jaipur, Bangalore, Mumbai, Hyderabad, Chennai, Kolkata and 40+ more, plus clients worldwide across the USA, UK, UAE, Canada, and Singapore.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
