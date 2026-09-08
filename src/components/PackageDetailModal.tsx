import React, { useEffect } from 'react';
import {
  X,
  Clock,
  Users,
  Compass,
  Home,
  Utensils,
  Check,
  AlertCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Trees,
  Waves,
} from 'lucide-react';
import { TravelPackage } from '../types';

interface PackageDetailModalProps {
  packageData: TravelPackage | null;
  onClose: () => void;
  onOpenEnquiry: (packageName: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  packageData,
  onClose,
  onOpenEnquiry,
}) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (packageData) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [packageData, onClose]);

  if (!packageData) return null;

  const handleEnquireClick = () => {
    onOpenEnquiry(packageData.title);
    onClose();
  };

  return (
    <div
      id="package-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-package-title"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#192420] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200/80 my-8">
        {/* Close Button */}
        <button
          id="close-package-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Banner */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-stone-900">
          <img
            src={packageData.coverImage}
            alt={packageData.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14231B] via-black/40 to-black/20" />

          {/* Top Floating Tags */}
          <div className="absolute top-5 left-5 right-16 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#122A1E]/90 text-emerald-300 border border-emerald-500/30 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
              {packageData.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 text-stone-200 text-xs font-mono backdrop-blur-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {packageData.duration}
            </span>
            {packageData.experienceLevel && (
              <span className="px-3 py-1 rounded-full bg-black/50 text-stone-200 text-xs font-mono backdrop-blur-md hidden sm:inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {packageData.experienceLevel}
              </span>
            )}
          </div>

          {/* Title & Tagline at Bottom */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 mb-1 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Dandeli Journey</span>
            </div>
            <h2
              id="modal-package-title"
              className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight"
            >
              {packageData.title}
            </h2>
            <p className="text-stone-200 text-sm sm:text-base font-sans mt-1.5 max-w-2xl leading-relaxed">
              {packageData.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10 max-h-[65vh] overflow-y-auto">
          {/* Quick Overview & Audience Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#247565]" />
                <span>Suitable Travellers</span>
              </div>
              <p className="text-sm font-display font-bold text-[#142C21]">
                {packageData.suitableTravellers || 'Adventurers & Nature Lovers'}
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#247565]" />
                <span>Best Season</span>
              </div>
              <p className="text-sm font-sans text-stone-700">
                {packageData.bestSeason || 'October to May'}
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#247565]" />
                <span>Price Transparency</span>
              </div>
              <p className="text-sm font-display font-bold text-[#0F2419]">
                {packageData.priceRange || `₹${packageData.pricePerPerson.toLocaleString('en-IN')} / person`}
              </p>
            </div>
          </div>

          {/* Narrative Overview: What Makes This Special */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#247565] flex items-center gap-2">
              <Trees className="w-4 h-4" />
              <span>What Makes This Journey Special</span>
            </div>
            <p className="text-stone-700 text-base leading-relaxed font-sans">
              {packageData.summary}
            </p>
          </div>

          {/* Day-by-Day Detailed Itinerary */}
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#247565] flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Day-by-Day Natural Schedule</span>
              </div>
              <span className="text-xs font-mono text-stone-400">
                {packageData.days} Days / {packageData.nights} Nights
              </span>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-800/20">
              {packageData.itinerary.map((step) => (
                <div key={step.day} className="relative pl-10 space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#122A1E] border-2 border-emerald-400 ring-4 ring-[#FAF8F5]" />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#122A1E] text-white font-mono text-xs font-bold uppercase">
                      Day {step.day}
                    </span>
                    <h4 className="font-display font-bold text-[#142C21] text-base sm:text-lg">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed font-sans">
                    {step.description}
                  </p>

                  {step.highlights && step.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {step.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-stone-200/70 text-stone-700 text-xs font-medium"
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Included Activities & Experience */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#247565] flex items-center gap-2">
              <Waves className="w-4 h-4" />
              <span>Key Activities & Experiences Included</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packageData.includedActivities.map((act, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-white border border-stone-200/90 flex items-start gap-3 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#247565] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-[#142C21]">
                      {act}
                    </div>
                    <div className="text-xs text-stone-500 font-sans mt-0.5">
                      Included with safety gear & certified instructor
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation & Meals */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#247565] flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Stay & Food Arrangements</span>
            </div>

            <div className="space-y-3 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#247565] shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-[#142C21]">
                    {packageData.stayType}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {packageData.accommodationDetails ||
                      'Clean, comfortable riverfront cottages with attached bathrooms, 24x7 running hot water, and serene sit-outs.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                <Utensils className="w-5 h-5 text-[#247565] shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-[#142C21]">
                    Meals Included
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {packageData.meals}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
              <div className="font-display font-bold text-sm text-[#142C21] uppercase tracking-wider flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>What's Included</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                {(packageData.inclusions || [
                  'All specified meals & welcome drinks',
                  'Accommodation in verified partner stays',
                  'Certified river guides and life jackets',
                  'All local forest and river permits',
                  'Evening campfire and safety gear',
                ]).map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200 space-y-3">
              <div className="font-display font-bold text-sm text-stone-700 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-stone-500" />
                <span>What's Not Included</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                {(packageData.exclusions || [
                  'Personal road travel to Dandeli base',
                  'Optional video footage / photography packages',
                  'Personal snacks and mineral water bottles',
                  'Medical insurance & personal expenses',
                ]).map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-stone-400 font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer / Action CTA */}
        <div className="p-5 sm:p-6 bg-white border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
              Approximate Tariff (All Inclusive)
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-condensed text-3xl font-bold text-[#0F2419]">
                ₹{packageData.pricePerPerson.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-500">
                / person ({packageData.priceRange || 'seasonal variation applies'})
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-sans mt-0.5">
              *Indicative mock pricing for simulation. Includes stay, all meals & activities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              id="modal-cancel-btn"
              type="button"
              onClick={onClose}
              className="min-h-[46px] w-full sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-display uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer active:scale-95"
            >
              Back to Journeys
            </button>
            <button
              id="modal-enquire-now-btn"
              type="button"
              onClick={handleEnquireClick}
              className="min-h-[46px] w-full sm:w-auto px-6 py-3 rounded-full bg-[#122A1E] hover:bg-[#1C3E2D] text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire About This Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
