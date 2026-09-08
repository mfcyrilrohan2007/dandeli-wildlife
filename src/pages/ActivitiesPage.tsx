import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowUpRight,
  Clock,
  MapPin,
  ChevronRight,
  Waves,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ACTIVITIES } from '../data/dandeliData';
import { getCleanActivitySlug } from '../utils/slugHelpers';

export const ActivitiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'water' | 'jungle' | 'trek'>('all');

  const filteredActivities = ACTIVITIES.filter((act) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'water') return act.category === 'river';
    if (activeFilter === 'jungle') return act.category === 'jungle' || act.category === 'wildlife';
    if (activeFilter === 'trek') return act.category === 'trek';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/kali-rafting-hero.jpg"
            alt="Activities on the Kali River"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Outdoor Expeditions & River Sports</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            Activities in Dandeli
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            From premier Class III & IV white water river rafting to quiet dawn coracle rides, deep forest jeep safaris, and ancient monolith treks—discover every guided adventure led by certified native marshals.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EAE3D8]" />
              IRF Certified River Marshals
            </span>
            <span>•</span>
            <span className="text-[#FAF7F2]">Forest Dept. Authorized Safaris</span>
            <span>•</span>
            <span>Non-swimmer Friendly Options</span>
          </div>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD7]">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              All Adventure Activities
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
              Browse by discipline or tap any experience to view full itinerary and requirements.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'All Activities' },
              { id: 'water', label: 'River & Water' },
              { id: 'jungle', label: 'Jungle & Safari' },
              { id: 'trek', label: 'Treks & Waterfalls' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-[#F4EFEA] text-stone-700 hover:bg-[#EAE3D8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((activity) => {
            const cleanSlug = getCleanActivitySlug(activity.id);
            return (
              <Link
                key={activity.id}
                to={`/activities/${cleanSlug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15">
                      {activity.category}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#1C1D1F]/80 backdrop-blur-md text-stone-200 text-xs font-sans">
                      {activity.duration}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-stone-300 text-xs font-sans mt-0.5">{activity.location}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
                      {activity.tagline}
                    </p>

                    <div className="space-y-2 text-xs text-stone-700 font-sans">
                      <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                        <span className="text-stone-400">Difficulty:</span>
                        <span className="font-medium text-[#1C1D1F]">{activity.difficulty || 'All Skill Levels'}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                        <span className="text-stone-400">Best Season:</span>
                        <span className="font-medium text-[#1C1D1F]">{activity.season}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5">
                        <span className="text-stone-400">Suitable for:</span>
                        <span className="font-medium text-[#1C1D1F] text-right">{activity.bestSuitedFor || 'Beginners & Families'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-sans text-stone-400 block tracking-wider">From</span>
                    <span className="font-serif text-2xl font-normal text-[#1C1D1F]">
                      ₹{activity.pricePerPerson.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-stone-500 font-sans"> / person</span>
                  </div>

                  <span className="py-2.5 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#E5DFD7]">
                    <span>View Activity</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Safety First Assurance Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#1C1D1F] text-white border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              Safety & Regulations
            </span>
            <h3 className="font-serif text-3xl font-normal text-white">
              Committed to uncompromising river and forest safety
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Every river trip is accompanied by an independent safety kayaker. Life jackets are high-buoyancy ISO/CE certified, and all vehicles entering tiger reserve zones are accompanied by licensed Karnataka Forest Department naturalists.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/about"
              className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans font-medium uppercase tracking-wider transition-all"
            >
              Read Safety Protocols
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
