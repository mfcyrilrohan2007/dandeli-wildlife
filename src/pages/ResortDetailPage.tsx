import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Users,
  Compass,
  CheckCircle2,
  Bed,
  Utensils,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';
import { getResortBySlug } from '../utils/slugHelpers';
import { RESORT_STAYS } from '../data/dandeliData';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';

interface ResortDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const ResortDetailPage: React.FC<ResortDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const stay = slug ? getResortBySlug(slug) : undefined;

  if (!stay) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32">
        <h2 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
          Property Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md">
          The requested resort or stay could not be found. Explore our complete directory of Dandeli accommodations.
        </p>
        <Link
          to="/resorts"
          className="mt-6 py-3 px-6 rounded-full bg-[#122A1E] text-white text-xs font-bold uppercase tracking-wider"
        >
          View All Resorts
        </Link>
      </div>
    );
  }

  // Related stays
  const relatedStays = RESORT_STAYS.filter((s) => s.id !== stay.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Large Hero Image with Breadcrumb & Title */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img
            src={optimizeCloudinaryUrl(stay.coverImage, 1280)}
            alt={stay.name}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/60 to-black/70" />
        </div>

        {/* Top Back Link */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <button
            type="button"
            onClick={() => navigate('/resorts')}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-stone-200 text-xs font-sans font-medium transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Resorts</span>
          </button>
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <span>{stay.categoryLabel}</span>
            <span>•</span>
            <span>{stay.locationArea}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            {stay.name}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            {stay.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5 text-[#EAE3D8] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E6B68]" />
              Hand-Inspected Wilderness Property
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {stay.locationArea}
            </span>
            <span>•</span>
            <span className="text-[#FAF7F2] font-medium">
              ₹{stay.pricePerNight.toLocaleString()} / night
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Gallery, Overview, Facilities, Accommodation, Nearby Activities */}
          <div className="lg:col-span-8 space-y-12">
            {/* Gallery Grid */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Property Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stay.gallery.map((img, idx) => (
                  <div key={idx} className="h-44 sm:h-52 rounded-xl overflow-hidden bg-stone-200 border border-[#E5DFD7] shadow-sm">
                    <img
                      src={optimizeCloudinaryUrl(img, 480)}
                      alt={`${stay.name} photo ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Overview */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD7] shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                About the Property
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {stay.overview}
              </p>
              {stay.atmosphereNote && (
                <p className="text-stone-600 text-xs sm:text-sm italic font-serif">
                  "{stay.atmosphereNote}"
                </p>
              )}
            </div>

            {/* Accommodation & Stay Structure */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Accommodation & Setting
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  Room choices and architecture details for this property.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] flex items-start gap-3 shadow-sm">
                  <Bed className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#1C1D1F] text-sm font-sans">Stay Format</h4>
                    <p className="text-stone-600 text-xs mt-1 font-sans">{stay.stayType}</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] flex items-start gap-3 shadow-sm">
                  <Compass className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[#1C1D1F] text-sm font-sans">River Proximity</h4>
                    <p className="text-stone-600 text-xs mt-1 font-sans">{stay.distanceToRiver}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Property Facilities & Amenities
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stay.facilities.map((fac, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E5DFD7] flex items-center gap-2.5 text-xs text-stone-800 font-medium font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0" />
                    <span className="truncate">{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Activities */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  Activities Conducted from this Resort
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stay.nearbyActivities.map((act, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-[#E5DFD7] flex items-center gap-3 text-xs sm:text-sm text-stone-800 font-sans"
                  >
                    <Compass className="w-4 h-4 text-[#2E6B68] shrink-0" />
                    <span>{act}</span>
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
                  Stay Details
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
                  {stay.name}
                </h3>
                <div className="pt-2">
                  <span className="text-stone-400 text-[10px] font-sans uppercase block tracking-wider">Tariff from</span>
                  <span className="font-serif text-3xl font-normal text-[#1C1D1F]">
                    ₹{stay.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-sans"> / night</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-stone-700 font-sans">
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{stay.locationArea}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Suitable For:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{stay.suitableFor}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Meal Inclusions:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{stay.diningStyle || 'All meals included (Buffet style)'}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2">
                  <span className="text-stone-400">Audit Status:</span>
                  <span className="font-medium text-right text-[#2E6B68]">Verified Eco-Property</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(stay.name)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire This Stay</span>
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
                  ✓ Direct local rates • Verified homestay partners
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resorts */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
          <div>
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              Explore More Stays
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
              Other Dandeli Resorts & Stays
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStays.map((rel) => (
              <Link
                key={rel.id}
                to={`/resorts/${rel.id}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-stone-200">
                  <img
                    src={optimizeCloudinaryUrl(rel.coverImage, 480)}
                    alt={rel.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-normal">{rel.name}</h3>
                    <p className="text-stone-300 text-xs font-sans">₹{rel.pricePerNight} / night</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-xs font-sans font-medium text-[#2E6B68]">
                  <span>View Stay</span>
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
