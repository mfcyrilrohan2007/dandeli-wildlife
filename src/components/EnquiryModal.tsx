import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Calendar, Users, Sparkles, Minus, Plus, Clock, Loader2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedItem = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [groupCategory, setGroupCategory] = useState('friends');
  const [guestCount, setGuestCount] = useState(4);
  const [selectedInterest, setSelectedInterest] = useState(preselectedItem || 'White-Water Rafting & Stay');
  const [dietary, setDietary] = useState('Standard Local & Vegetarian');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedItem) {
      setSelectedInterest(preselectedItem);
    }
  }, [preselectedItem]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dandeli Wilds! I am planning a trip to Dandeli.\nName: ${name || 'Guest'}\nGroup: ${groupCategory} (${guestCount} pax)\nDate: ${travelDate || 'Flexible'}\nInterested in: ${selectedInterest}\nNotes: ${notes || 'Looking for recommendations'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-t-3xl sm:rounded-2xl bg-[#FAF7F2] text-[#1C1D1F] border border-[#E5DFD7] shadow-2xl overflow-hidden max-h-[94vh] sm:max-h-[90vh] flex flex-col my-0 sm:my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Touch-Friendly Close button (min 44px) */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors flex items-center justify-center cursor-pointer active:scale-95"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-12 text-center space-y-6 overflow-y-auto bg-[#FAF7F2]">
            <div className="w-16 h-16 rounded-full bg-[#2E6B68]/15 text-[#2E6B68] border border-[#2E6B68]/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 text-[#2E6B68]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-wider text-[#C25E3E] font-medium">
                Enquiry Registered • River Desk Ganeshgudi
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
                We heard you, {name || 'Explorer'}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-sans">
                Your trip enquiry for <strong className="text-[#1C1D1F]">{guestCount} travelers</strong> ({selectedInterest}) has been logged directly with our local coordinator team in Dandeli.
              </p>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E5DFD7] text-xs text-stone-700 max-w-md mx-auto text-left space-y-2 font-sans">
              <div className="flex items-center gap-2 font-medium text-[#2E6B68]">
                <Clock className="w-4 h-4 text-[#2E6B68] shrink-0" />
                <span>We reply within 15–30 minutes via WhatsApp or call.</span>
              </div>
              <p className="text-stone-500 text-[11px] leading-relaxed">
                No automated bot emails. A certified local river master will message your WhatsApp with current Supa dam water levels, stay pictures, and an itemized transparent quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919481245890?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp Directly</span>
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-white border border-[#E5DFD7] hover:bg-[#F4EFEA] text-[#1C1D1F] text-xs font-sans font-medium uppercase cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          /* Enquiry Form */
          <div className="overflow-y-auto">
            <div className="p-5 sm:p-8 bg-[#1C1D1F] text-white border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#EAE3D8] font-medium mb-1">
                <span>Handcrafted Dandeli Travel Plans</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white tracking-tight">
                Plan Your Expedition with Local Experts
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 font-sans font-light">
                Tell us about your group size and dates. We craft genuine, crowd-free itineraries.
              </p>

              {/* Direct WhatsApp Pill Shortcut */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-stone-300 font-sans flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#EAE3D8]" />
                  <span>We reply within 15–30 minutes via WhatsApp or call</span>
                </span>
                <a
                  href={`https://wa.me/919481245890?text=${encodeURIComponent('Hello Dandeli Wilds! I would like quick assistance planning my Dandeli trip.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-sans text-[#EAE3D8] hover:underline"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-4 sm:space-y-5 bg-[#FAF7F2]">
              {/* Row 1: Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-h-[46px] px-4 py-3 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 placeholder:text-stone-400 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full min-h-[46px] px-4 py-3 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 placeholder:text-stone-400 font-sans"
                  />
                </div>
              </div>

              {/* Row 2: Group Category & Stepper for Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    Group Type
                  </label>
                  <select
                    value={groupCategory}
                    onChange={(e) => setGroupCategory(e.target.value)}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 font-sans cursor-pointer"
                  >
                    <option value="friends">Friends Gang (3-8 Pax)</option>
                    <option value="solo-duo">Couples & Duo (1-2 Pax)</option>
                    <option value="family">Family with Children & Elders (4-10 Pax)</option>
                    <option value="corporate">Corporate / Large Group (10+ Pax)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                      className="min-w-[46px] min-h-[46px] rounded-xl bg-white hover:bg-stone-100 border border-[#E5DFD7] flex items-center justify-center text-[#1C1D1F] cursor-pointer active:scale-95 transition-transform duration-100"
                      aria-label="Decrease guests"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="flex-1 min-h-[46px] rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center font-sans font-medium text-[#2E6B68] text-base">
                      {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                    </div>

                    <button
                      type="button"
                      onClick={() => setGuestCount((c) => Math.min(50, c + 1))}
                      className="min-w-[46px] min-h-[46px] rounded-xl bg-white hover:bg-stone-100 border border-[#E5DFD7] flex items-center justify-center text-[#1C1D1F] cursor-pointer active:scale-95 transition-transform duration-100"
                      aria-label="Increase guests"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Travel Dates & Primary Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    Approximate Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 font-sans cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                    Selected Package / Experience
                  </label>
                  <input
                    type="text"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 font-sans"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-xs font-sans font-medium uppercase tracking-wider text-stone-700">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Vegetarian food only, elderly member needing ground floor room, cab pickup from Hubballi, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5DFD7] text-[#1C1D1F] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] focus:ring-2 focus:ring-[#2E6B68]/20 transition-all duration-150 placeholder:text-stone-400 font-sans"
                ></textarea>
              </div>

              {/* Submit Button & Assurance */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] disabled:bg-stone-400 text-white font-sans font-medium text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] cursor-pointer interactive-tap"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting to River Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry to River Desk</span>
                    </>
                  )}
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-stone-500 font-sans block">
                    Direct local coordination • 0 spam • We reply within 15–30 minutes
                  </span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
