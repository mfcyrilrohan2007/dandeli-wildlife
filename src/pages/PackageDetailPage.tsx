import React from 'react';
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
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { getPackageBySlug, getCleanPackageSlug } from '../utils/slugHelpers';
import { TRAVEL_PACKAGES } from '../data/dandeliData';

interface PackageDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = slug ? getPackageBySlug(slug) : undefined;

  if (!pkg) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32">
        <h2 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
          Package Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md">
          The requested package could not be found. View our complete catalog of Dandeli travel packages.
        </p>
        <Link
          to="/packages"
          className="mt-6 py-3 px-6 rounded-full bg-[#122A1E] text-white text-xs font-bold uppercase tracking-wider"
        >
          View All Packages
        </Link>
      </div>
    );
  }

  // Related packages
  const relatedPackages = TRAVEL_PACKAGES.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Large Hero Image with Breadcrumb & Title */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.coverImage}
            alt={pkg.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/60 to-black/70" />
        </div>

        {/* Top Back Link */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <button
            type="button"
            onClick={() => navigate('/packages')}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-stone-200 text-xs font-sans font-medium transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Packages</span>
          </button>
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <span>{pkg.badge}</span>
            <span>•</span>
            <span>{pkg.duration}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            {pkg.title}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            {pkg.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {pkg.suitableTravellers}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {pkg.stayType}
            </span>
            <span>•</span>
            <span className="text-[#FAF7F2] font-medium">
              ₹{pkg.pricePerPerson.toLocaleString()} per person (all-inclusive)
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Overview, Itinerary, Activities, Accommodation, Inclusions/Exclusions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD7] shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Package Overview
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {pkg.summary}
              </p>
              {pkg.tagline && (
                <p className="text-stone-600 text-xs sm:text-sm italic font-serif">
                  "{pkg.tagline}"
                </p>
              )}
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Day-by-Day Itinerary
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  Full schedule from check-in to farewell.
                </p>
              </div>

              <div className="space-y-6">
                {pkg.itinerary.map((dayItem, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5DFD7] p-6 sm:p-8 space-y-4 shadow-sm"
                  >
                    <div className="border-b border-stone-100 pb-3">
                      <span className="text-[10px] font-sans text-[#C25E3E] uppercase tracking-wider block font-medium">
                        Day 0{dayItem.day}
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                        {dayItem.title}
                      </h3>
                    </div>

                    <div className="space-y-3 pt-2">
                      <p className="text-stone-700 text-sm leading-relaxed font-sans">
                        {dayItem.description}
                      </p>
                      {dayItem.highlights && dayItem.highlights.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {dayItem.highlights.map((hl, hIdx) => (
                            <span key={hIdx} className="px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E5DFD7] text-[#2E6B68] text-[11px] font-sans font-medium">
                              ✓ {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Accommodation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Activities */}
              <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] space-y-4">
                <h3 className="font-serif text-xl font-normal text-[#1C1D1F] flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#2E6B68]" />
                  <span>Included Activities</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans">
                  {pkg.includedActivities.map((act, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accommodation & Meals */}
              <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] space-y-4">
                <h3 className="font-serif text-xl font-normal text-[#1C1D1F] flex items-center gap-2">
                  <Bed className="w-5 h-5 text-[#2E6B68]" />
                  <span>Stay & Meals</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-stone-700 font-sans">
                  <div>
                    <span className="font-medium text-[#1C1D1F] block">Cottage / Camp:</span>
                    <span>{pkg.stayType}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1C1D1F] block">Meals Provided:</span>
                    <span>{pkg.meals}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-normal text-[#2E6B68] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2E6B68]" />
                  <span>Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2E6B68] font-bold shrink-0">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-normal text-stone-700 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-stone-400" />
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-sans">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stone-400 font-bold shrink-0">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quick Facts & Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 rounded-2xl bg-white border border-[#E5DFD7] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-stone-100 pb-5">
                <span className="text-[10px] font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
                  Package Summary
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
                  {pkg.title}
                </h3>
                <div className="pt-2">
                  <span className="text-stone-400 text-[10px] font-sans uppercase block tracking-wider">All-Inclusive Tariff</span>
                  <span className="font-serif text-3xl font-normal text-[#1C1D1F]">
                    ₹{pkg.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-sans"> / participant</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-stone-700 font-sans">
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{pkg.duration}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Travellers:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{pkg.suitableTravellers}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Stay Type:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{pkg.stayType}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2">
                  <span className="text-stone-400">Buffet Meals:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">All 3 meals daily</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(pkg.title)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire This Package</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </button>

                <Link
                  to="/contact"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5DFD7]"
                >
                  <span>Customize Package</span>
                </Link>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-stone-500 font-sans">
                  ✓ Instant check on dam water releases & cottage slots
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
          <div>
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              More Options
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
              Other Dandeli Packages
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl font-normal">{rel.title}</h3>
                      <p className="text-stone-300 text-xs font-sans">₹{rel.pricePerPerson} • {rel.duration}</p>
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
    </div>
  );
};
