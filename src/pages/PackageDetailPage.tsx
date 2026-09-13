import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Users,
  Compass,
  CheckCircle2,
  XCircle,
  Bed,
  Utensils,
  MapPin,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Waves,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';
import { getPackageBySlug, getCleanPackageSlug, getActivityBySlug } from '../utils/slugHelpers';
import { TRAVEL_PACKAGES, ACTIVITIES } from '../data/dandeliData';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';
import { PackageCardMetadata, parseEditorialDuration } from '../components/PackageCardMetadata';
import { DetailBackButton } from '../components/DetailBackButton';

interface PackageDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  // Track expanded state for itinerary days on mobile
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true });

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }));
  };

  if (!pkg) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32 bg-[#FAF7F2]">
        <h2 className="font-serif text-3xl font-normal text-[#1C1D1F]">
          Package Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md font-sans">
          The requested package could not be found. Explore our complete catalogue of verified Dandeli travel packages.
        </p>
        <Link
          to="/packages"
          className="mt-6 py-3 px-6 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium uppercase tracking-wider"
        >
          View All Packages
        </Link>
      </div>
    );
  }

  // Related packages to compare
  const relatedPackages = TRAVEL_PACKAGES.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F] pb-24 lg:pb-16">
      {/* 1. Large Hero with Editorial Image & Key Facts */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0 bg-stone-950">
          <img
            src={optimizeCloudinaryUrl(pkg.coverImage, 1280)}
            alt={pkg.title}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/55 to-black/70" />
        </div>

        {/* Top Back Navigation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <DetailBackButton label="Back to Packages" fallbackPath="/packages" variant="dark-hero" />
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center font-manrope font-bold text-xs text-[#FAF7F2] tracking-[0.035em] uppercase px-3 py-1.5 rounded-[7px] select-none shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: '#9E4E32' }}
            >
              {pkg.badge || pkg.tripStyle}
            </span>
            {(() => {
              const dur = parseEditorialDuration(pkg.duration);
              if (!dur) return null;
              return (
                <span className="font-manrope font-semibold text-sm text-[#FAF7F2] tracking-[-0.01em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {'single' in dur ? dur.single : (
                    <>
                      <span>{dur.days}</span>
                      <span className="mx-1.5 opacity-60 font-normal text-xs select-none">·</span>
                      <span>{dur.nights}</span>
                    </>
                  )}
                </span>
              );
            })()}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            {pkg.title}
          </h1>

          <p className="text-stone-300 text-base sm:text-xl max-w-3xl leading-relaxed font-sans font-light">
            {pkg.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-sans text-stone-300">
            <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Users className="w-4 h-4 text-[#EAE3D8]" />
              <span>{pkg.suitableTravellers}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Bed className="w-4 h-4 text-[#EAE3D8]" />
              <span>{pkg.stayType.split('with')[0].trim()}</span>
            </span>
            <span className="bg-[#2E6B68]/90 text-white px-3 py-1.5 rounded-lg font-medium">
              ₹{pkg.pricePerPerson.toLocaleString()} / person (All-Inclusive)
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Detail Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column (8 cols): Answers "What exactly do I get?" */}
          <div className="lg:col-span-8 space-y-10">
            {/* Section A: What Exactly You Get (Summary) */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#2E6B68]">
                <Info className="w-5 h-5" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider">
                  WHAT EXACTLY DO I GET?
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Package Summary & Trip Ethos
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                {pkg.summary}
              </p>
              {pkg.bestSeason && (
                <div className="pt-2 text-xs text-stone-600 font-sans flex items-center gap-2 bg-[#FAF8F5] p-3 rounded-xl border border-[#E5DFD7]">
                  <Calendar className="w-4 h-4 text-[#2E6B68] shrink-0" />
                  <span><strong>Best Season:</strong> {pkg.bestSeason}</span>
                </div>
              )}
            </section>

            {/* Section B: Included Activities Breakdown */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                    ADVENTURES & EXPEDITIONS
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1D1F] mt-0.5">
                    Included Activities ({pkg.includedActivities.length})
                  </h3>
                </div>
                <Compass className="w-6 h-6 text-[#2E6B68]" />
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-sans">
                All listed activities include certified local river marshals, safety briefing, CE-certified flotation gear, and forest passes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pkg.includedActivities.map((activityName, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E5DFD7] flex items-center justify-center shrink-0 text-[#2E6B68] mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-sans font-semibold text-stone-900">
                        {activityName}
                      </h4>
                      <span className="text-[11px] text-stone-500 font-sans block mt-0.5">
                        Safety gear, briefing & guide included
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section C: Accommodation & Dining Specifications */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                  LODGING & MEAL SCHEDULE
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#1C1D1F] mt-0.5">
                  Accommodation & Dining
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stay Details */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#ECE6DE] space-y-3">
                  <div className="flex items-center gap-2 text-[#2E6B68]">
                    <Bed className="w-5 h-5" />
                    <h4 className="font-sans font-semibold text-sm text-stone-900">
                      Stay Type & Room Specifications
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#19231D]">
                    {pkg.stayType}
                  </p>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    {pkg.accommodationDetails || 'Verified riverside accommodation with attached western washroom, clean cotton bedding, hot water supply, and charging points.'}
                  </p>
                </div>

                {/* Meals Details */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#ECE6DE] space-y-3">
                  <div className="flex items-center gap-2 text-[#2E6B68]">
                    <Utensils className="w-5 h-5" />
                    <h4 className="font-sans font-semibold text-sm text-stone-900">
                      Buffet Meals & Local Cuisine
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#19231D]">
                    {pkg.meals}
                  </p>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    Buffet dining featuring regional North Karnataka & Malnad cuisine, including Jolada rotti, fresh country curries, vegetable stir-fries, and evening high tea with hot regional snacks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section D: Important Inclusions vs Exclusions */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                  FULL TRANSPARENCY
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#1C1D1F] mt-0.5">
                  Important Inclusions & Exclusions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="space-y-3 p-5 rounded-2xl bg-[#F4F9F6] border border-[#D5EAE0]">
                  <div className="flex items-center gap-2 text-[#2E6B68]">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h4 className="font-sans font-semibold text-sm text-[#1E4D4A]">
                      What Is Included (✓)
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#2E6B68] font-bold shrink-0 mt-0.5">✓</span>
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="space-y-3 p-5 rounded-2xl bg-[#FBF9F7] border border-[#EBE4DD]">
                  <div className="flex items-center gap-2 text-stone-700">
                    <XCircle className="w-5 h-5 text-stone-400 shrink-0" />
                    <h4 className="font-sans font-semibold text-sm text-stone-900">
                      What Is Excluded (✕)
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-sans">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-stone-400 font-bold shrink-0 mt-0.5">✕</span>
                        <span className="leading-snug">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section E: Day-by-Day Itinerary (with Collapsible Mobile Support) */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                    TIMELINE & SCHEDULE
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1D1F] mt-0.5">
                    Day-by-Day Itinerary
                  </h3>
                </div>
                <span className="text-xs text-stone-500 font-sans">
                  {pkg.days} Days / {pkg.nights} Nights
                </span>
              </div>

              <div className="space-y-4">
                {pkg.itinerary.map((dayItem) => {
                  const isExpanded = expandedDays[dayItem.day] !== false;
                  return (
                    <div
                      key={dayItem.day}
                      className="border border-[#E5DFD7] rounded-2xl overflow-hidden bg-[#FAF8F5] transition-colors duration-150"
                    >
                      {/* Day Header - Tap to toggle on mobile */}
                      <button
                        type="button"
                        onClick={() => toggleDay(dayItem.day)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-stone-50 active:bg-stone-100/70 transition-colors duration-150 cursor-pointer min-h-[52px]"
                        aria-expanded={isExpanded}
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#2E6B68]">
                            Day 0{dayItem.day}
                          </span>
                          <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1C1D1F]">
                            {dayItem.title}
                          </h4>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-stone-400 transition-transform duration-200 ease-out shrink-0 ml-3 ${
                            isExpanded ? 'rotate-180 text-[#2E6B68]' : 'rotate-0'
                          }`}
                        />
                      </button>

                      {/* Day Body */}
                      <div className={`accordion-content-grid ${isExpanded ? 'open' : 'closed'}`}>
                        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-stone-200/60 space-y-3">
                          <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed">
                            {dayItem.description}
                          </p>
                          {dayItem.highlights && dayItem.highlights.length > 0 && (
                            <div className="pt-2 flex flex-wrap gap-2">
                              {dayItem.highlights.map((hl, hIdx) => (
                                <span
                                  key={hIdx}
                                  className="px-2.5 py-1 rounded-md bg-white border border-[#E5DFD7] text-[#2E6B68] text-[11px] font-sans font-medium"
                                >
                                  ✓ {hl}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section F: Journey Bridge (Explore → Activity → Package → Plan Your Trip) */}
            <section className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                EXPLORATION PATHWAY
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                Move Seamlessly Across Dandeli
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed font-light">
                Want to learn more about the destinations or customize your activities? Connect directly to other sections of our guide:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Link
                  to="/explore"
                  className="p-4 rounded-xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all flex items-center justify-between text-xs font-sans font-medium text-stone-800"
                >
                  <span>Explore All 8 Dandeli Destinations</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
                <Link
                  to="/activities"
                  className="p-4 rounded-xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all flex items-center justify-between text-xs font-sans font-medium text-stone-800"
                >
                  <span>Browse Individual Activities</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
              </div>
            </section>
          </div>

          {/* Right Column (4 cols): Sticky Quick Booking Card on Desktop */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-3xl bg-white border border-[#E5DFD7] p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Tariff Header */}
              <div className="space-y-2 border-b border-stone-100 pb-5">
                <span className="text-[10px] font-sans uppercase text-[#2E6B68] tracking-wider font-bold">
                  All-Inclusive Package Tariff
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
                    ₹{pkg.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-sans"> / person</span>
                </div>
                <p className="text-[11px] text-stone-500 font-sans">
                  Zero hidden costs. Includes lodging, 3 daily meals, activities & guides.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-3 text-xs text-stone-700 font-sans">
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-medium text-[#1C1D1F]">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-400">Trip Style:</span>
                  <span className="font-medium text-[#1C1D1F]">{pkg.tripStyle || pkg.badge}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-400">Suitable For:</span>
                  <span className="font-medium text-[#1C1D1F] text-right truncate max-w-[170px]">{pkg.suitableTravellers}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-400">Stay Type:</span>
                  <span className="font-medium text-[#1C1D1F] text-right truncate max-w-[170px]">{pkg.stayType.split('with')[0].trim()}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-stone-400">Meals:</span>
                  <span className="font-medium text-[#1C1D1F]">All 3 Meals + Tea</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(pkg.title)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Plan This Trip</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </button>

                <Link
                  to="/trip-plans"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5DFD7]"
                >
                  <span>Compare Trip Plans</span>
                </Link>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-stone-500 font-sans block">
                  ✓ Instant check on dam water releases & cottage slots
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Related Packages Section */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
          <div>
            <span className="text-xs font-sans uppercase text-[#2E6B68] tracking-wider font-bold">
              ALTERNATIVE OPTIONS
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
              Other Verified Dandeli Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPackages.map((rel) => {
              const cleanSlug = getCleanPackageSlug(rel.id);
              return (
                <Link
                  key={rel.id}
                  to={`/packages/${cleanSlug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img
                      src={optimizeCloudinaryUrl(rel.coverImage, 480)}
                      alt={rel.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />
                    <PackageCardMetadata badge={rel.badge || rel.tripStyle} duration={rel.duration} />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl font-normal">{rel.title}</h3>
                      <p className="text-stone-300 text-xs font-sans">
                        ₹{rel.pricePerPerson.toLocaleString()} per person
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between text-xs font-sans font-medium text-[#2E6B68]">
                    <span>View Package</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Mobile Sticky Bottom Action Bar (Thumb-friendly & accessible) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5DFD7] p-3.5 px-4 flex items-center justify-between gap-4 shadow-lg">
        <div>
          <span className="text-[10px] uppercase font-sans text-stone-500 block font-medium">
            Tariff / person
          </span>
          <span className="font-serif text-xl font-normal text-[#1C1D1F]">
            ₹{pkg.pricePerPerson.toLocaleString()}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onOpenEnquiry(pkg.title)}
          className="flex-1 min-h-[44px] py-2.5 px-5 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
        >
          <span>Plan This Trip</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#EAE3D8]" />
        </button>
      </div>
    </div>
  );
};
