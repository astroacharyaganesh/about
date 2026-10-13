import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Calendar, Clock, MapPin, Sparkles, Send } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Career & D10 Dashamsha',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: defaultTopic,
    dob: '',
    tob: '',
    pob: '',
    mode: 'Online (Video/Phone)',
    question: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Namaste Acharya Ganesh Ji,\nI would like to book a 1-on-1 consultation for ${formData.topic}.\nName: ${formData.name || 'Seeker'}\nPhone: ${formData.phone || ''}\nDOB: ${formData.dob || 'To provide'}\nQuery: ${formData.question || 'Career/Life guidance'}`
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] border border-[#E5DAC8] rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16263B] text-white">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300 font-medium">
              1-on-1 Private Consultation
            </div>
            <h3 className="font-serif-vedic text-xl sm:text-2xl font-bold tracking-tight text-white">
              Schedule Your Chart Reading
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h4 className="font-serif-vedic text-2xl font-bold text-slate-900">
                Consultation Request Received
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our desk has logged your birth details for <span className="font-medium text-amber-900">{formData.topic}</span>.
              </p>
              <div className="mt-4 inline-block bg-[#F5EDE0] border border-[#E7D6C0] px-4 py-2 rounded-md text-xs text-amber-950 font-medium">
                ⏱ Callback Guarantee: Usually within 1 hour · Slots available 7 days a week
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#EAE0D0]">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] text-slate-950 hover:bg-[#20BD5A] font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Confirm on WhatsApp Now
              </button>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-[#F2ECE0] text-xs font-semibold tracking-wide uppercase transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="text-xs text-slate-600 bg-[#F5EFE4] p-3 rounded-lg border border-[#E6DBCA] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>100% Confidential & Bespoke:</strong> Every session studies your natal D1, D10 Dashamsha, and running Vimshottari dasha. No generic software reports.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765-43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Consultation Focus *
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                >
                  <option value="Career & D10 Dashamsha">Career & D10 Dashamsha (Job switch / Growth)</option>
                  <option value="Love & Kundli Matchmaking">Love & Matchmaking (Guna Milan & Longevity)</option>
                  <option value="Business, Wealth & Investments">Business & Startups (Timing & Financial Houses)</option>
                  <option value="Astro-Vastu Home & Office">Astro-Vastu (Residential / Commercial Space)</option>
                  <option value="Health, Litigation & Remedies">Health, Litigation & Specific Remedies</option>
                  <option value="Comprehensive Kundli Full Reading">Comprehensive Kundli Reading (All Life Spheres)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Mode *
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
                >
                  <option value="Online (Video/Phone)">Online (Video / Phone Call - Global)</option>
                  <option value="In-Person (Indirapuram Office)">In-Person (Office in Indirapuram, Ghaziabad)</option>
                </select>
              </div>
            </div>

            {/* Birth Details Box */}
            <div className="p-4 bg-[#F8F4EC] rounded-lg border border-[#E3D5C0] space-y-3">
              <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-800" />
                Birth Chart Details (Kundli Coordinates)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9CDBA] bg-white text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Time of Birth (Exact/Approx)</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g., 04:35 PM"
                      value={formData.tob}
                      onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[#D9CDBA] bg-white text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">Place of Birth (City/State)</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g., Ghaziabad, UP"
                      value={formData.pob}
                      onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[#D9CDBA] bg-white text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Your Primary Concern / Question
              </label>
              <textarea
                rows={2}
                placeholder="What specific decision or chapter do you need clarity on? (e.g. Job switch timing, marriage compatibility, business launch...)"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-3.5 py-2 rounded-md border border-[#D9CDBA] bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700/40 focus:border-amber-700"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#EAE0D0]">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Direct Desk: <span className="font-semibold text-slate-800">+91 73000-04325</span>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-md border border-emerald-600/40 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-md bg-[#16263B] hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  {loading ? 'Submitting...' : 'Confirm Request'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
