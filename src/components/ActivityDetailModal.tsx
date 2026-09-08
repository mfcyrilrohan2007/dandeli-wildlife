import React from 'react';
import { X, ArrowUpRight, ShieldCheck, Clock, Users, Calendar, MapPin, Check } from 'lucide-react';
import { Activity } from '../types';

interface ActivityDetailModalProps {
  activity: Activity | null;
  onClose: () => void;
  onOpenEnquiry: (activityTitle: string) => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  activity,
  onClose,
  onOpenEnquiry,
}) => {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0E1E16] text-white border border-white/15 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white transition-colors flex items-center justify-center cursor-pointer active:scale-95"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header with authentic photography */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E16] via-[#0E1E16]/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider">
              {activity.waterGrade || activity.category}
            </span>
            <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-white leading-tight">
              {activity.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 font-sans italic opacity-95">
              "{activity.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs font-mono">
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Duration</span>
              <span className="text-emerald-300 font-bold">{activity.duration}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Difficulty</span>
              <span className="text-white font-bold">{activity.difficulty || 'Easy & Relaxed'}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Best Season</span>
              <span className="text-white font-bold">{activity.season}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Indicative Rate</span>
              <span className="text-emerald-300 font-bold">₹{activity.pricePerPerson.toLocaleString('en-IN')}/pax</span>
            </div>
          </div>

          {/* Best Suited For Callout */}
          {activity.bestSuitedFor && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-start gap-3 text-xs">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-3 h-3" />
              </div>
              <div>
                <span className="text-emerald-400 font-mono uppercase text-[10px] block tracking-wider font-semibold">
                  Best Suited For
                </span>
                <span className="text-stone-200 font-sans text-xs sm:text-sm">
                  {activity.bestSuitedFor}
                </span>
              </div>
            </div>
          )}

          {/* Local Expert Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Local Expert Overview
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
              {activity.description}
            </p>
          </div>

          {/* What Visitor Experiences & Environment Feel */}
          {(activity.visitorExperience || activity.environmentFeel) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-black/40 border border-white/10 text-xs">
              {activity.visitorExperience && (
                <div className="space-y-1.5">
                  <span className="text-emerald-400 font-mono uppercase text-[10px] tracking-wider block font-semibold">
                    What You Experience
                  </span>
                  <p className="text-stone-300 font-sans leading-relaxed text-xs">
                    {activity.visitorExperience}
                  </p>
                </div>
              )}
              {activity.environmentFeel && (
                <div className="space-y-1.5">
                  <span className="text-emerald-400 font-mono uppercase text-[10px] tracking-wider block font-semibold">
                    Environment & Atmosphere
                  </span>
                  <p className="text-stone-300 font-sans leading-relaxed text-xs">
                    {activity.environmentFeel}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Key Journey Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activity.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gear Provided & Timings */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="font-display font-bold text-white mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Safety & Equipment Provided:</span>
              </div>
              <ul className="text-stone-300 space-y-1 pl-5 list-disc">
                {activity.safetyGear.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display font-bold text-white mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Departure Slots:</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                {activity.timing}. Reporting 20 minutes prior for safety briefing and gear fitting.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Location: <span className="text-white font-medium">{activity.location}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[46px] py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-semibold uppercase transition-colors flex items-center justify-center cursor-pointer active:scale-95"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEnquiry(activity.title);
                }}
                className="min-h-[46px] flex-1 sm:flex-none py-3 px-6 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Book / Enquire This Activity</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
