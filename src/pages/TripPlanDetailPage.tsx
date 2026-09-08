import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Users,
  Compass,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ChevronRight,
  Sparkles,
  Bed,
  Calendar,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { getTripPlanBySlug } from '../utils/slugHelpers';
import { TRIP_PLANS } from '../components/FindYourTrip';

interface TripPlanDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const TripPlanDetailPage: React.FC<TripPlanDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const plan = slug ? getTripPlanBySlug(slug) : undefined;

  if (!plan) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32">
        <h2 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
          Trip Plan Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md">
          The requested group itinerary could not be found. Select from our 5 curated expedition categories.
        </p>
        <Link
          to="/trip-plans"
          className="mt-6 py-3 px-6 rounded-full bg-[#122A1E] text-white text-xs font-bold uppercase tracking-wider"
        >
          View All Trip Plans
        </Link>
      </div>
    );
  }

  // Other plans
  const otherPlans = Object.values(TRIP_PLANS).filter((p) => p.id !== plan.id);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={plan.image}
            alt={plan.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/60 to-black/70" />
        </div>

        {/* Top Back Link */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <button
            type="button"
            onClick={() => navigate('/trip-plans')}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-stone-200 text-xs font-sans font-medium transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Trip Plans</span>
          </button>
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <span>{plan.badge}</span>
            <span>•</span>
            <span>{plan.groupSize}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            {plan.title} Expedition Plan
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            {plan.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5 text-[#EAE3D8]">
              <Clock className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {plan.suggestedDuration}
            </span>
            <span>•</span>
            <span className="text-[#FAF7F2] font-medium">
              {plan.priceRange.split('(')[0]}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Who it's for, Activities, Stay, Itinerary, Guide Tips */}
          <div className="lg:col-span-8 space-y-12">
            {/* Who This Plan Is For & Overview */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD7] shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Who this Plan is For
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {plan.shortDescription}
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-start gap-2 text-xs sm:text-sm text-stone-600 font-sans">
                <span className="font-medium text-[#1C1D1F] shrink-0">Ideal Match:</span>
                <span>{plan.idealFor}</span>
              </div>
            </div>

            {/* Recommended Activities */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Recommended Activities
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  Carefully paced adventures matching this travelling dynamic.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plan.recommendedActivities.map((act, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-[#E5DFD7] flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed font-sans">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Suggestions */}
            <div className="space-y-4 bg-[#F4EFEA] p-6 sm:p-8 rounded-2xl border border-[#E5DFD7]">
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-[#2E6B68]" />
                <h2 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                  Suggested Accommodation
                </h2>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {plan.stayType}
              </p>
              <p className="text-xs text-stone-600 font-sans">
                ✓ All meals included (authentic North Karnataka vegetarian & non-vegetarian spreads)
              </p>
            </div>

            {/* Suggested Day-by-Day Itinerary */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Suggested Day-by-Day Itinerary
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  A balanced, field-tested expedition schedule designed for comfort and adventure.
                </p>
              </div>

              <div className="space-y-6">
                {plan.sampleItinerary.map((dayItem, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5DFD7] p-6 sm:p-8 space-y-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <div>
                        <span className="text-[10px] font-sans text-[#C25E3E] uppercase tracking-wider block font-medium">
                          {dayItem.day}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                          {dayItem.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      {dayItem.timeline.map((slot, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm">
                          <span className="font-sans text-[#2E6B68] font-medium shrink-0 w-24 sm:w-28">
                            {slot.time}
                          </span>
                          <span className="text-stone-700 leading-relaxed font-sans">
                            {slot.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Guide Tips & Vibe */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF3EC] border border-[#E7D6C4] space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C25E3E]" />
                <h3 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  Local Guide Tip for this Group
                </h3>
              </div>
              <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-serif italic">
                "{plan.localGuideTip}"
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-600 font-sans">
                <span>Vibe: <strong className="text-stone-800 font-medium">{plan.vibe}</strong></span>
                <span>•</span>
                <span>Pace: <strong className="text-stone-800 font-medium">{plan.experienceLevel}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quick Facts & Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-2xl bg-white border border-[#E5DFD7] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-stone-100 pb-5">
                <span className="text-[10px] font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
                  Plan Summary
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
                  {plan.title} Explorer
                </h3>
                <div className="pt-2">
                  <span className="text-stone-400 text-[10px] font-sans uppercase block tracking-wider">Budget Range</span>
                  <span className="font-serif text-2xl font-normal text-[#1C1D1F] leading-tight block">
                    {plan.priceRange.split('(')[0]}
                  </span>
                  <span className="text-xs text-stone-500 font-sans">Includes stays, all meals & activities</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-stone-700 font-sans">
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{plan.groupSize}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{plan.suggestedDuration}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Vibe:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{plan.vibe}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2">
                  <span className="text-stone-400">Difficulty:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{plan.experienceLevel}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`${plan.title} Expedition Plan`)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire This Plan</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </button>

                <Link
                  to="/contact"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5DFD7]"
                >
                  <span>Customize Itinerary</span>
                </Link>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-stone-500 font-sans">
                  ✓ Flexible dates • Direct local guide coordination
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Trip Plans */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
          <div>
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              Explore Other Dynamics
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
              Other Travelling Party Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherPlans.map((other) => (
              <Link
                key={other.id}
                to={`/trip-plans/${other.id}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-normal">{other.title}</h3>
                    <p className="text-stone-300 text-xs font-sans">{other.groupSize}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-xs font-sans font-medium text-[#2E6B68]">
                  <span>View Plan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
