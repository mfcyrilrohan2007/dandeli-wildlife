import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Compass,
  ArrowUpRight,
  Clock,
  MapPin,
  ChevronRight,
  Heart,
  User,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { TRIP_PLANS, TripCategory } from '../components/FindYourTrip';

export const TripPlansPage: React.FC = () => {
  const plans = Object.values(TRIP_PLANS);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/forest-canopy.jpg"
            alt="Dandeli Forest Canopy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>Tailored Itinerary Architecture</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            Who are you travelling with?
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            A quiet solo writer needs an unhurried dawn bird trail and an eco homestay porch; a 12-person squad needs multi-raft river derbies and a private bonfire clearing. Select your travelling party to explore an itinerary engineered for your group dynamics.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-400">
            <span className="text-[#FAF7F2]">5 Handcrafted Expedition Archetypes</span>
            <span>•</span>
            <span>All-Inclusive Pricing & Transparent Inclusions</span>
            <span>•</span>
            <span>Customized by Local Guides</span>
          </div>
        </div>
      </section>

      {/* 5 Distinct Trip Plan Cards */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-[#E5DFD7] pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
            Select Your Travelling Group
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
            Tap any category to inspect sample day-by-day schedules, stay recommendations, and budget ranges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Link
              key={plan.id}
              to={`/trip-plans/${plan.id}`}
              className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#1C1D1F]/90 backdrop-blur-md text-[#EAE3D8] font-sans text-[10px] uppercase font-medium tracking-wider">
                    {plan.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-sans text-stone-300 uppercase tracking-widest block">
                      {plan.groupSize}
                    </span>
                    <h3 className="font-serif text-3xl font-normal leading-tight group-hover:text-[#EAE3D8] transition-colors">
                      {plan.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
                    {plan.tagline}
                  </p>

                  <div className="space-y-2 text-xs text-stone-700 font-sans">
                    <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                      <span className="text-stone-400">Suggested:</span>
                      <span className="font-medium text-[#1C1D1F] text-right">{plan.suggestedDuration}</span>
                    </div>
                    <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                      <span className="text-stone-400">Stay Type:</span>
                      <span className="font-medium text-[#1C1D1F] text-right line-clamp-1">{plan.stayType}</span>
                    </div>
                    <div className="flex items-start justify-between py-1.5">
                      <span className="text-stone-400">Budget:</span>
                      <span className="font-medium text-[#1C1D1F]">{plan.priceRange.split('(')[0]}</span>
                    </div>
                  </div>

                  <div className="pt-2 font-sans">
                    <span className="text-[10px] uppercase text-stone-400 block mb-1.5 tracking-wider font-medium">
                      Recommended Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {plan.recommendedActivities.slice(0, 3).map((act, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B68]" />
                          <span className="truncate">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100">
                <div className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-between border border-[#E5DFD7]">
                  <span>View Complete Plan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Group Consultation Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
              Planning a corporate retreat or reunion?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
              We handle end-to-end logistics for groups of 15 to 150 participants including private bus transfers from Hubli or Belgaum, dedicated forest resort wings, and customized team-building river challenges.
            </p>
          </div>
          <Link
            to="/contact"
            className="py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>Custom Group Enquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
          </Link>
        </div>
      </section>
    </div>
  );
};
