import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Users,
  Calendar,
  Compass,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { getExploreCategoryBySlug } from '../utils/slugHelpers';
import { EXPLORE_CATEGORIES } from '../data/exploreData';

interface ExploreDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const ExploreDetailPage: React.FC<ExploreDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const category = slug ? getExploreCategoryBySlug(slug) : undefined;

  if (!category) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32">
        <h2 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
          Experience Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md">
          We couldn’t locate the exploration realm you requested. Explore our available Dandeli categories below.
        </p>
        <Link
          to="/explore"
          className="mt-6 py-3 px-6 rounded-full bg-[#122A1E] text-white text-xs font-bold uppercase tracking-wider"
        >
          Return to Explore
        </Link>
      </div>
    );
  }

  // Related categories
  const relatedCategories = category.relatedSlugs
    .map((s) => EXPLORE_CATEGORIES[s])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Large Hero Image with Breadcrumb & Title */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={category.heroImage}
            alt={category.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/60 to-black/70" />
        </div>

        {/* Back Link & Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <button
            type="button"
            onClick={() => navigate('/explore')}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-stone-200 text-xs font-sans font-medium transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Experiences</span>
          </button>
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>{category.subtitle}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            {category.title}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            {category.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {category.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {category.bestSeason.split('(')[0]}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {category.elevationOrArea}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Details, Expectations, Highlights */}
          <div className="lg:col-span-8 space-y-12">
            {/* Short Introduction */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD7] shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Overview
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {category.intro}
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  What to Expect
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  How your time unfolds from arrival to finish.
                </p>
              </div>

              <div className="space-y-3">
                {category.whatToExpect.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E5DFD7] flex items-start gap-4 shadow-sm"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#FAF7F2] text-[#2E6B68] border border-[#E5DFD7] font-sans text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-stone-700 text-sm leading-relaxed font-sans">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Expedition Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E5DFD7] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 font-medium font-sans">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Things to Know */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F] flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#C25E3E]" />
                  <span>Things to Know Before You Go</span>
                </h2>
              </div>

              <div className="space-y-2.5 font-sans">
                {category.thingsToKnow.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] text-xs sm:text-sm text-stone-800 leading-relaxed"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-normal text-[#1C1D1F]">
                Visual Journal
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.gallery.map((img, i) => (
                  <div key={i} className="h-44 rounded-xl overflow-hidden border border-[#E5DFD7] shadow-sm">
                    <img
                      src={img}
                      alt={`${category.title} photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quick Facts & Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-2xl bg-white border border-[#E5DFD7] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-stone-100 pb-5">
                <span className="text-[10px] font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
                  Expedition Snapshot
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
                  {category.title}
                </h3>
                <p className="text-stone-500 text-xs font-sans">{category.subtitle}</p>
              </div>

              <div className="space-y-3.5 text-xs text-stone-700 font-sans">
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{category.duration}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Suitable For:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{category.suitableFor}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Daily Timing:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{category.timing}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Best Season:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{category.bestSeason}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{category.elevationOrArea}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(category.title)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire This Experience</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </button>

                <Link
                  to="/contact"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5DFD7]"
                >
                  <span>Plan Full Trip</span>
                </Link>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-stone-500 font-sans">
                  ✓ Regulated safety gear & certified local marshals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Natural Progression Pathway: Explore → Activity → Package → Plan Your Trip */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#1C1D1F] text-white space-y-8 border border-stone-800 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5">
            <div className="space-y-1">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#EAE3D8] font-medium flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#2E6B68]" />
                <span>Next Step In Your Journey</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Turn This Spot Into Your Complete Dandeli Trip
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-sans font-light">
                Explore the seamless progression from discovery to certified activities, cottage packages, and tailored itineraries.
              </p>
            </div>
            <Link
              to="/explore"
              className="text-xs text-[#EAE3D8] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Back to all destinations</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1: Explore (Current) */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#2E6B68] text-white font-sans text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-sans font-medium">
                  Current Spot
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-white font-normal truncate">
                  {category.title}
                </h4>
                <p className="text-xs text-stone-300 font-sans line-clamp-2">
                  {category.tagline}
                </p>
              </div>
            </div>

            {/* Step 2: Activity */}
            <Link
              to={category.journeyBridge?.activity.slug || '/activities'}
              className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                  02
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans block">
                  Matched Activity
                </span>
                <h4 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal truncate">
                  {category.journeyBridge?.activity.title || 'Certified Adventures'}
                </h4>
                <p className="text-xs text-stone-400 font-sans line-clamp-2">
                  {category.journeyBridge?.activity.description || 'Guided by certified river captains and forest rangers.'}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                <span>View Activity</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Step 3: Package */}
            <Link
              to={category.journeyBridge?.travelPackage.slug || '/packages'}
              className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                  03
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans block">
                  Cottage & Meals Bundle
                </span>
                <h4 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal truncate">
                  {category.journeyBridge?.travelPackage.title || 'All-Inclusive Package'}
                </h4>
                <p className="text-xs text-stone-400 font-sans line-clamp-2">
                  {category.journeyBridge?.travelPackage.duration
                    ? `${category.journeyBridge.travelPackage.duration} with riverside stay & 3 daily meals.`
                    : 'Riverfront stay with 3 daily buffet meals and permits.'}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                <span>Explore Package</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            {/* Step 4: Plan Your Trip */}
            <Link
              to={category.journeyBridge?.tripPlan.slug || '/trip-plans'}
              className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                  04
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans block">
                  Itinerary Planner
                </span>
                <h4 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal truncate">
                  {category.journeyBridge?.tripPlan.title || 'Curated Itinerary'}
                </h4>
                <p className="text-xs text-stone-400 font-sans line-clamp-2">
                  {category.journeyBridge?.tripPlan.spirit || 'Tailored schedule by group type and travel pace.'}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                <span>Open Planner</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>

        {/* Related Experiences */}
        {relatedCategories.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
            <div>
              <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
                Keep Exploring
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
                Related Dandeli Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/explore/${rel.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl font-normal">{rel.title}</h3>
                      <p className="text-stone-300 text-xs font-sans">{rel.duration}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between text-xs font-sans font-medium text-[#2E6B68]">
                    <span>View Experience</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
