import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Users,
  MessageSquare,
  ShieldCheck,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { TRAVEL_PACKAGES } from '../data/dandeliData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    travellerCount: '2',
    tripType: 'Friends',
    preferredPackage: 'Weekend Dandeli Escape (2D/1N)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.travelDate) errs.travelDate = 'Please select your tentative travel date.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/kali-river.jpg"
            alt="Kali River Gorge"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Direct Local Expeditions Desk</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white max-w-4xl">
            Plan Your Dandeli Trip
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-light">
            Tell us about your dates and travelling party. A native Ganeshgudi river guide will check water release schedules, cottage slots, and verify your tailored itinerary.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Form or Success State */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#2E6B68]/30 shadow-md space-y-6 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#2E6B68] border border-[#2E6B68]/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-sans uppercase tracking-wider text-[#C25E3E] font-medium">
                    Enquiry Logged
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
                    Your enquiry has been received
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-sans">
                    Thank you, <strong>{formData.name}</strong>. Please note that this is an enquiry request and not a finalized booking.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#F4EFEA] border border-[#E5DFD7] text-left max-w-lg mx-auto space-y-2.5 text-xs text-stone-700 font-sans">
                  <div className="font-medium text-[#1C1D1F] text-sm border-b border-[#E5DFD7] pb-2">
                    Next Steps:
                  </div>
                  <p>
                    1. A local river captain from our Ganeshgudi desk will review your dates (<strong>{formData.travelDate || 'Selected Dates'}</strong>) against the Supa Dam water discharge schedule.
                  </p>
                  <p>
                    2. We will check cottage/camp availability for your party of <strong>{formData.travellerCount}</strong> travellers.
                  </p>
                  <p>
                    3. We will call or WhatsApp you at <strong>{formData.phone}</strong> within 2 hours with the best available package and seasonal guidance.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(
                      formData.name
                    )}%20(${formData.travellerCount}%20travellers)`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all"
                  >
                    Speed Up via WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        travelDate: '',
                        travellerCount: '2',
                        tripType: 'Friends',
                        preferredPackage: 'Weekend Dandeli Escape (2D/1N)',
                        message: '',
                      });
                    }}
                    className="py-3 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-stone-700 text-xs font-sans font-medium uppercase tracking-wider transition-all border border-[#E5DFD7]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E5DFD7] shadow-sm space-y-8">
                <div className="border-b border-[#E5DFD7] pb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                    Tell us about your trip
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                    Fill in your details below. We never share your contact information with external agencies.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="contact-name" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Full Name <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Ramesh Kulkarni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E5DFD7] focus:border-[#2E6B68]'
                        }`}
                      />
                      {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="contact-phone" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Phone / WhatsApp <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E5DFD7] focus:border-[#2E6B68]'
                        }`}
                      />
                      {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Tentative Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="contact-email" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E5DFD7] focus:border-[#2E6B68]'
                        }`}
                      />
                      {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="contact-date" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Tentative Travel Date <span className="text-[#C25E3E]">*</span>
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.travelDate
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-[#E5DFD7] focus:border-[#2E6B68]'
                        }`}
                      />
                      {errors.travelDate && (
                        <p className="text-red-600 text-xs">{errors.travelDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Travellers Count & Trip Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-travellers" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Number of Travellers
                      </label>
                      <select
                        id="contact-travellers"
                        value={formData.travellerCount}
                        onChange={(e) => setFormData({ ...formData, travellerCount: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-[#E5DFD7] text-sm focus:outline-none focus:border-[#2E6B68] bg-white"
                      >
                        <option value="1">1 Person (Solo)</option>
                        <option value="2">2 Persons (Couple / Duo)</option>
                        <option value="3-5">3 – 5 Persons</option>
                        <option value="6-10">6 – 10 Persons</option>
                        <option value="11-20">11 – 20 Persons (Group)</option>
                        <option value="20+">20+ Persons (Corporate / Large Group)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-trip-type" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                        Trip Type
                      </label>
                      <select
                        id="contact-trip-type"
                        value={formData.tripType}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-[#E5DFD7] text-sm focus:outline-none focus:border-[#2E6B68] bg-white"
                      >
                        <option value="Solo">Solo Traveler</option>
                        <option value="Duo">Duo / Couple</option>
                        <option value="Friends">Friends Gang</option>
                        <option value="Family">Family with Children</option>
                        <option value="Group">Corporate / College Group</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="contact-package" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                      Preferred Package or Experience
                    </label>
                    <select
                      id="contact-package"
                      value={formData.preferredPackage}
                      onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#E5DFD7] text-sm focus:outline-none focus:border-[#2E6B68] bg-white"
                    >
                      {TRAVEL_PACKAGES.map((p) => (
                        <option key={p.id} value={`${p.title} (${p.duration})`}>
                          {p.title} ({p.duration}) — ₹{p.pricePerPerson}/person
                        </option>
                      ))}
                      <option value="Custom Itinerary">Custom Tailored Itinerary</option>
                      <option value="Only River Rafting">Only White Water Rafting</option>
                      <option value="Only Jungle Safari">Only Jungle Safari</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="contact-message" className="text-xs font-medium uppercase text-stone-700 block tracking-wider">
                      Specific Requests or Notes (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="e.g. Vegetarian food preferences, senior citizens in the group, non-swimmers, treehouse preference..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#E5DFD7] text-sm focus:outline-none focus:border-[#2E6B68]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] disabled:opacity-50 text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Trip Enquiry</span>
                        <Send className="w-4 h-4 text-[#EAE3D8]" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-stone-500 font-sans">
                    ✓ No advance payment required for enquiry • Official Dandeli guides
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contact & Office Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#1C1D1F] text-white p-6 sm:p-8 space-y-6 border border-white/10 shadow-md">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <span className="text-[10px] font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
                  Direct Assistance
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  Ganeshgudi River Desk
                </h3>
              </div>

              <div className="space-y-4 text-xs font-sans text-stone-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C25E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Hotline / WhatsApp</span>
                    <a href="tel:+919481245890" className="hover:text-white font-medium text-sm text-[#FAF7F2]">
                      +91 94812 45890
                    </a>
                    <p className="text-[10px] text-stone-400">Available 7:00 AM – 9:30 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C25E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Expeditions Email</span>
                    <a href="mailto:expeditions@dandeliwilds.in" className="hover:text-white font-medium">
                      expeditions@dandeliwilds.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C25E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px]">Physical Station</span>
                    <p className="leading-relaxed">
                      Kali Riverbank Road, Ganeshgudi, Dandeli, Karnataka 581325
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                <span className="font-sans text-stone-300 font-medium block">
                  Why talk to us directly?
                </span>
                <p className="text-[11px] text-stone-400 leading-relaxed font-sans font-light">
                  The Kali River flow is regulated by hydro-power dams. Our river captains know the exact release hours weeks in advance, ensuring you book on days with optimal water volume.
                </p>
              </div>

              <a
                href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20plan%20a%20trip"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
