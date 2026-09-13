import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowUpRight,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Waves,
  Bed,
  Utensils,
  Calendar,
  Filter,
  ArrowRight,
  TreePine,
  Tent,
  Check,
} from 'lucide-react';
import { TRAVEL_PACKAGES } from '../data/dandeliData';
import { getCleanPackageSlug } from '../utils/slugHelpers';
import { TravelPackage } from '../types';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';
import { PackageCardMetadata } from '../components/PackageCardMetadata';

interface PackagesPageProps {
  onOpenEnquiry?: (preselectedItem?: string) => void;
}

// Package Card Component with clean mobile-responsive layout and collapsible inclusions
const PackageCatalogueCard: React.FC<{
  pkg: TravelPackage;
  onOpenEnquiry?: (preselectedItem?: string) => void;
}> = ({ pkg, onOpenEnquiry }) => {
  const [showInclusions, setShowInclusions] = useState(false);
  const cleanSlug = getCleanPackageSlug(pkg.id);

  return (
    <article
      id={`package-card-${pkg.id}`}
      className="bg-white rounded-3xl border border-[#E5DFD7] hover:border-[#2E6B68]/60 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Editorial Image Header */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-stone-900 group">
          <img
            src={optimizeCloudinaryUrl(pkg.coverImage, 720)}
            alt={pkg.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

          {/* Editorial Package Metadata: Printed terracotta tag + clean natural duration */}
          <PackageCardMetadata badge={pkg.badge || pkg.tripStyle} duration={pkg.duration} />

          {/* Bottom Title on Image */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight">
              {pkg.title}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-sans line-clamp-1 mt-1 font-light">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* Card Body: Designed to answer "Is this package suitable for me?" */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Who It Is For */}
          <div className="bg-[#FAF8F5] rounded-2xl p-3.5 sm:p-4 border border-[#ECE6DE] flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center shrink-0 text-[#2E6B68] mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 font-semibold block">
                Who It Is For
              </span>
              <p className="text-stone-800 text-xs sm:text-sm font-sans font-medium mt-0.5">
                {pkg.suitableTravellers}
              </p>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 font-semibold block">
              Experience Highlights
            </span>
            <ul className="space-y-1.5">
              {(pkg.experienceHighlights || pkg.itinerary.map(it => it.title)).slice(0, 3).map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B68] mt-2 shrink-0" />
                  <span className="leading-snug">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Included */}
          <div className="space-y-2 pt-1 border-t border-stone-100">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Activities Included
              </span>
              <span className="text-[11px] text-[#2E6B68] font-sans font-medium">
                {pkg.includedActivities.length} activities
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {pkg.includedActivities.slice(0, 4).map((act, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E5DFD7] text-stone-800 text-[11px] font-sans font-medium flex items-center gap-1"
                >
                  <Check className="w-3 h-3 text-[#2E6B68]" />
                  <span>{act}</span>
                </span>
              ))}
              {pkg.includedActivities.length > 4 && (
                <span className="px-2 py-1 rounded-lg bg-stone-100 text-stone-600 text-[11px] font-sans">
                  +{pkg.includedActivities.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Accommodation & Meals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-stone-100 text-xs font-sans">
            <div className="flex items-start gap-2 text-stone-700">
              <Bed className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Stay</span>
                <span className="line-clamp-2 text-stone-600">{pkg.stayType}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-stone-700">
              <Utensils className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-900 block">Buffet Meals</span>
                <span className="line-clamp-2 text-stone-600">{pkg.meals.split('(')[0].trim()}</span>
              </div>
            </div>
          </div>

          {/* Collapsible Inclusions & Exclusions Quick Peek */}
          <div className="pt-2 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setShowInclusions(!showInclusions)}
              className="w-full flex items-center justify-between py-2 text-xs font-sans font-medium text-[#2E6B68] hover:text-[#1F4A47] transition-colors cursor-pointer"
            >
              <span>{showInclusions ? 'Hide Inclusions & Exclusions' : 'View Inclusions & Exclusions'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showInclusions ? 'rotate-180' : ''}`} />
            </button>

            {showInclusions && (
              <div className="mt-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#ECE6DE] space-y-3 animate-in fade-in duration-200">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-wider text-[#2E6B68] font-bold block mb-1.5">
                    Important Inclusions
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700 font-sans">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B68] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-wider text-stone-500 font-bold block mb-1.5">
                    Important Exclusions
                  </span>
                  <ul className="space-y-1 text-xs text-stone-600 font-sans">
                    {pkg.exclusions.slice(0, 2).map((exc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Tariff & Dual Actions */}
      <div className="p-5 sm:p-7 pt-4 bg-[#FAF8F5] border-t border-[#E5DFD7] rounded-b-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-sans uppercase tracking-wider text-stone-500 block font-medium">
            Tariff (All-Inclusive)
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="font-serif text-2xl sm:text-3xl font-normal text-[#19231D]">
              ₹{pkg.pricePerPerson.toLocaleString()}
            </span>
            <span className="text-xs text-stone-500 font-sans"> / person</span>
          </div>
          <span className="text-[10px] text-stone-500 font-sans block">
            Stay, all meals, gear & permits bundled
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to={`/packages/${cleanSlug}`}
            className="flex-1 sm:flex-none text-center py-3 px-4 rounded-xl border border-[#E5DFD7] bg-white hover:bg-stone-50 text-stone-800 text-xs font-sans font-medium tracking-wide transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          </Link>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry(pkg.title)}
            className="flex-1 sm:flex-none text-center py-3 px-5 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Plan This Trip</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#EAE3D8]" />
          </button>
        </div>
      </div>
    </article>
  );
};

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenEnquiry }) => {
  const [styleFilter, setStyleFilter] = useState<string>('all');
  const [durationFilter, setDurationFilter] = useState<'all' | '2d1n' | '3d2n'>('all');

  const filteredPackages = useMemo(() => {
    return TRAVEL_PACKAGES.filter((pkg) => {
      // Duration filter
      if (durationFilter === '2d1n' && !pkg.duration.includes('2 Days')) return false;
      if (durationFilter === '3d2n' && !pkg.duration.includes('3 Days')) return false;

      // Style / Category filter
      if (styleFilter === 'all') return true;
      if (styleFilter === 'solo-duo') return pkg.groupCategory === 'solo-duo';
      if (styleFilter === 'friends') return pkg.groupCategory === 'friends';
      if (styleFilter === 'family') return pkg.groupCategory === 'family';
      if (styleFilter === 'corporate') return pkg.groupCategory === 'corporate';
      return true;
    });
  }, [styleFilter, durationFilter]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Curated Editorial Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#18231E] text-white border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png"
            alt="Riverside Dandeli Expedition Cottages"
            className="w-full h-full object-cover opacity-25 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18231E] via-[#18231E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Verified Dandeli Travel Catalogue</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
              Curated Dandeli Travel Packages
            </h1>
            <p className="text-stone-300 text-base sm:text-lg font-sans font-light leading-relaxed">
              Transparent, all-inclusive packages combining verified riverside cottages, 3 daily home-cooked buffet meals, certified Kali river activities, and evening bonfires. Each package clearly answers who it is suitable for and what is included.
            </p>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs text-stone-300 font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C25E3E] shrink-0" />
              <span>All 3 Daily Buffet Meals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C25E3E] shrink-0" />
              <span>Full Safety Gear & Permits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C25E3E] shrink-0" />
              <span>Direct Local Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C25E3E] shrink-0" />
              <span>Zero Hidden Surcharges</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar & Catalogue Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5DFD7]">
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#2E6B68]">
              CATALOGUE ({filteredPackages.length} PACKAGES)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F] mt-1">
              Select Your Travel Style
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-sans mt-1">
              Filter by who is travelling or your preferred expedition duration.
            </p>
          </div>

          {/* Dual Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Group Style Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DF] rounded-xl overflow-x-auto no-scrollbar">
              {[
                { id: 'all', label: 'All Styles' },
                { id: 'solo-duo', label: 'Couples & Duos' },
                { id: 'friends', label: 'Friends & Gangs' },
                { id: 'family', label: 'Families' },
                { id: 'corporate', label: 'Groups' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStyleFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all whitespace-nowrap cursor-pointer ${
                    styleFilter === tab.id
                      ? 'bg-white text-[#1C1D1F] shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Duration Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DF] rounded-xl">
              {[
                { id: 'all', label: 'Any Duration' },
                { id: '2d1n', label: '2D / 1N' },
                { id: '3d2n', label: '3D / 2N' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setDurationFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all whitespace-nowrap cursor-pointer ${
                    durationFilter === tab.id
                      ? 'bg-[#1C1D1F] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Package Catalogue Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {filteredPackages.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#E5DFD7] p-8 space-y-4">
            <h3 className="font-serif text-2xl font-normal text-stone-800">
              No packages match this specific combination
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Try resetting the duration or group filters to see all 8 verified Dandeli packages.
            </p>
            <button
              type="button"
              onClick={() => {
                setStyleFilter('all');
                setDurationFilter('all');
              }}
              className="py-2.5 px-5 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium uppercase tracking-wider"
            >
              Show All Packages
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredPackages.map((pkg) => (
              <PackageCatalogueCard key={pkg.id} pkg={pkg} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>
        )}

        {/* 4. Natural Progression Pathway / Journey Bridge (Activity → Package → Plan Your Trip) */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#2E6B68] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORATION TO RESERVATION PATHWAY</span>
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
              Next Steps in Planning Your Journey
            </h3>
            <p className="text-stone-600 text-sm font-sans font-light leading-relaxed">
              Dandeli trips can be experienced as ready-to-book bundled packages, day-by-day itineraries, or individual activity bookings. Choose how you want to proceed:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Browse Activities */}
            <Link
              to="/activities"
              className="group p-6 rounded-2xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] group-hover:bg-[#2E6B68] group-hover:text-white transition-colors">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                1. Browse Activities
              </h4>
              <p className="text-stone-600 text-xs font-sans leading-relaxed font-light">
                Inspect rafting rapids, kayaking timings, jungle safaris, and canyon walks with standalone pricing and requirements.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#2E6B68] pt-1">
                <span>View Activities</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Step 2: Compare Trip Plans */}
            <Link
              to="/trip-plans"
              className="group p-6 rounded-2xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] group-hover:bg-[#2E6B68] group-hover:text-white transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                2. Compare Trip Plans
              </h4>
              <p className="text-stone-600 text-xs font-sans leading-relaxed font-light">
                Follow hour-by-hour itineraries for 1-day, 2-day weekend, or 3-day full wilderness road trips with family or friends.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#2E6B68] pt-1">
                <span>Explore Trip Plans</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Step 3: Direct Custom Plan */}
            <div
              onClick={() => onOpenEnquiry && onOpenEnquiry('Custom Dandeli Trip Plan')}
              className="group p-6 rounded-2xl bg-[#18231E] text-white border border-white/10 hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md space-y-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#EAE3D8] group-hover:bg-[#2E6B68] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-white">
                3. Plan This Trip With a Naturalist
              </h4>
              <p className="text-stone-300 text-xs font-sans leading-relaxed font-light">
                Speak directly with local coordinators regarding water release dates, cottage availability, and personalized group bookings.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#EAE3D8] pt-1">
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
