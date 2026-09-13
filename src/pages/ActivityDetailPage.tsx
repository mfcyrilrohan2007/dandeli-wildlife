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
  ShieldCheck,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { getActivityBySlug, getCleanActivitySlug } from '../utils/slugHelpers';
import { ACTIVITIES } from '../data/dandeliData';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';
import { DetailBackButton } from '../components/DetailBackButton';

interface ActivityDetailPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const ActivityDetailPage: React.FC<ActivityDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const activity = slug ? getActivityBySlug(slug) : undefined;

  if (!activity) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center pt-32">
        <h2 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
          Activity Not Found
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-md">
          The requested adventure could not be found. Check our complete collection of Dandeli outdoor activities.
        </p>
        <Link
          to="/activities"
          className="mt-6 py-3 px-6 rounded-full bg-[#122A1E] text-white text-xs font-bold uppercase tracking-wider"
        >
          View All Activities
        </Link>
      </div>
    );
  }

  // Related activities from same or other categories
  const relatedActivities = ACTIVITIES.filter((a) => a.id !== activity.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img
            src={optimizeCloudinaryUrl(activity.image, 1280)}
            alt={activity.title}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/60 to-black/70" />
        </div>

        {/* Top Back Navigation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <DetailBackButton label="Back to Activities" fallbackPath="/activities" variant="dark-hero" />
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <span>{activity.category} Adventure</span>
            <span>•</span>
            <span>{activity.difficulty}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            {activity.title}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            {activity.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {activity.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
              {activity.location}
            </span>
            <span>•</span>
            <span className="text-[#FAF7F2] font-medium">
              ₹{activity.pricePerPerson.toLocaleString()} per participant
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Overview, Experience, Requirements */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD7] shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Overview
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
                {activity.description}
              </p>
            </div>

            {/* Experience / What Happens */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  The Experience
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  Key highlights of this adventure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-[#E5DFD7] flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium font-sans">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                  What to Bring
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mt-1">
                  Essential gear and clothing for safety and comfort.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                {(activity.safetyGear || [
                  'Quick-dry clothing',
                  'Secure strapped river sandals',
                  'Dry change of clothes',
                  'Sunscreen & cap',
                ]).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E5DFD7] flex items-center gap-3 text-xs sm:text-sm text-stone-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#2E6B68] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information & Safety */}
            <div className="space-y-6">
              <div className="border-b border-[#E5DFD7] pb-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F] flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#C25E3E]" />
                  <span>Key Highlights & Safety Protocols</span>
                </h2>
              </div>

              <div className="space-y-3 font-sans">
                {(activity.highlights || [
                  'International Rafting Federation certified guides on board',
                  'Safety briefing and command rehearsal prior to embarkation',
                  'High-buoyancy CE certified life jackets and helmets supplied',
                  'Dedicated rescue kayak accompanying every convoy',
                ]).map((guide, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] text-xs sm:text-sm text-stone-800 leading-relaxed"
                  >
                    • {guide}
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
                  Adventure Snapshot
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1C1D1F]">
                  {activity.title}
                </h3>
                <div className="pt-2">
                  <span className="text-stone-400 text-[10px] font-sans uppercase block tracking-wider">Tariff</span>
                  <span className="font-serif text-3xl font-normal text-[#1C1D1F]">
                    ₹{activity.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500 font-sans"> / participant</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-stone-700 font-sans">
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{activity.duration}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Difficulty:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{activity.difficulty || 'Moderate'}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Best For:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{activity.bestSuitedFor || 'Beginners & Families'}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2 border-b border-stone-100">
                  <span className="text-stone-400">Location:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{activity.location}</span>
                </div>
                <div className="flex items-start justify-between gap-2 py-2">
                  <span className="text-stone-400">Best Season:</span>
                  <span className="font-medium text-[#1C1D1F] text-right">{activity.season}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(activity.title)}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire This Activity</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </button>

                <Link
                  to="/contact"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5DFD7]"
                >
                  <span>Plan Your Trip</span>
                </Link>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] text-stone-500 font-sans">
                  ✓ Safety equipment & certified instructors included
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Activities */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E5DFD7] space-y-8">
          <div>
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              More Adventures
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1F] mt-1">
              Related Outdoor Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedActivities.map((rel) => {
              const cleanSlug = getCleanActivitySlug(rel.id);
              return (
                <Link
                  key={rel.id}
                  to={`/activities/${cleanSlug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden bg-stone-200">
                    <img
                      src={optimizeCloudinaryUrl(rel.image, 480)}
                      alt={rel.title}
                      loading="lazy"
                      decoding="async"
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
                    <span>View Activity</span>
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
