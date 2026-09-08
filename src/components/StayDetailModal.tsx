import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowUpRight,
  MapPin,
  Check,
  Trees,
  Waves,
  Sparkles,
  Users,
  Compass,
  Bed,
  Utensils,
  Calendar,
  AlertCircle,
  Clock,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';
import { ResortStay } from '../types';

interface StayDetailModalProps {
  stay: ResortStay | null;
  onClose: () => void;
  onOpenEnquiry: (stayName: string) => void;
}

export const StayDetailModal: React.FC<StayDetailModalProps> = ({
  stay,
  onClose,
  onOpenEnquiry,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Reset active photo index when stay changes
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [stay]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!stay) return null;

  const gallery = stay.gallery && stay.gallery.length > 0 ? stay.gallery : [stay.coverImage];

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#0C1A13] text-white border border-white/15 shadow-2xl overflow-hidden my-6 sm:my-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 min-w-[44px] min-h-[44px] rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white border border-white/15 transition-colors cursor-pointer flex items-center justify-center active:scale-95"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Interactive Photo Gallery Header */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-black/60">
          <img
            key={gallery[activePhotoIndex]}
            src={gallery[activePhotoIndex]}
            alt={`${stay.name} view ${activePhotoIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A13] via-[#0C1A13]/30 to-transparent" />

          {/* Photo Navigation arrows if multi-photo */}
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Gallery Indicator Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
              {stay.categoryLabel || stay.type}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-stone-300 text-[10px] font-mono border border-white/10">
              {activePhotoIndex + 1} of {gallery.length} Photos
            </span>
          </div>

          {/* Header Title Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>{stay.locationArea}</span>
              <span className="text-white/40">•</span>
              <span>{stay.distanceToRiver}</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight">
              {stay.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-sans italic line-clamp-2">
              "{stay.tagline}"
            </p>
          </div>
        </div>

        {/* Gallery Thumbnails Bar */}
        {gallery.length > 1 && (
          <div className="px-4 sm:px-8 py-2.5 bg-black/40 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 shrink-0 mr-1">
              Gallery Views:
            </span>
            {gallery.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhotoIndex(idx)}
                className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-150 ${
                  activePhotoIndex === idx
                    ? 'border-emerald-400 scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Quick Property At-a-Glance Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/30 border border-white/10 text-xs font-mono">
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Stay Category</span>
              <span className="text-emerald-300 font-semibold">{stay.categoryLabel}</span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Accommodations</span>
              <span className="text-stone-200 font-medium">{stay.stayType}</span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Guest Capacity</span>
              <span className="text-stone-200 font-medium">{stay.capacity}</span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">River Proximity</span>
              <span className="text-emerald-300 font-semibold">{stay.distanceToRiver}</span>
            </div>
          </div>

          {/* Overview & Architecture */}
          <div className="space-y-4">
            <h3 className="font-condensed text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Property Overview & Atmosphere</span>
            </h3>
            <p className="text-stone-200 text-sm sm:text-base font-sans leading-relaxed">
              {stay.overview}
            </p>

            {stay.atmosphereNote && (
              <div className="p-4 rounded-2xl bg-[#12251B] border border-emerald-500/20 text-xs sm:text-sm font-sans space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Trees className="w-3.5 h-3.5" />
                  <span>What Mornings & Evenings Feel Like</span>
                </div>
                <p className="text-stone-300 italic">
                  "{stay.atmosphereNote}"
                </p>
              </div>
            )}

            {/* Architecture & Dining details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {stay.architectureStyle && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="text-stone-400 font-mono text-[10px] uppercase mb-1">
                    Design & Materials
                  </div>
                  <div className="text-stone-200 font-sans">{stay.architectureStyle}</div>
                </div>
              )}
              {stay.diningStyle && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="text-stone-400 font-mono text-[10px] uppercase mb-1 flex items-center gap-1">
                    <Utensils className="w-3 h-3 text-emerald-400" />
                    <span>Culinary & Meal Style</span>
                  </div>
                  <div className="text-stone-200 font-sans">{stay.diningStyle}</div>
                </div>
              )}
            </div>
          </div>

          {/* Facilities & Amenities */}
          <div className="space-y-4">
            <h3 className="font-condensed text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Facilities & On-Site Comforts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {stay.facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-black/25 border border-white/10 text-xs text-stone-200"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-sans leading-snug">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable Travellers & Advice */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/25 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Best Suited For</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                {stay.suitableFor}
              </p>
            </div>

            {stay.unsuitableFor ? (
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>Important Note</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {stay.unsuitableFor}
                </p>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Local Coordinator Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  All properties are directly verified by our native Dandeli team for cleanliness, hot water supply, authentic food quality, and river safety standards.
                </p>
              </div>
            )}
          </div>

          {/* Nearby Activities */}
          {stay.nearbyActivities && stay.nearbyActivities.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-black/30 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <Waves className="w-4 h-4" />
                <span>Immediate Doorstep & Nearby Activities</span>
              </h4>
              <p className="text-xs text-stone-400 font-sans">
                These experiences can be scheduled seamlessly alongside your stay dates:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {stay.nearbyActivities.map((act, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-200 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {act}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer with Price & Enquiry CTA */}
        <div className="p-5 sm:p-7 bg-[#08130D] border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
              Indicative Tariff
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-condensed text-2xl sm:text-3xl font-bold text-white">
                {stay.priceRange}
              </span>
              <span className="text-xs text-stone-400 font-sans">/ night</span>
            </div>
            <p className="text-[11px] text-emerald-400/90 font-mono mt-0.5">
              {stay.priceNote}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenEnquiry(`Resort Stay: ${stay.name}`);
              }}
              className="w-full sm:w-auto min-h-[48px] py-3.5 px-7 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire Availability</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
