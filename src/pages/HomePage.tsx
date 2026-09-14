import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Users,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ChevronLeft,
  X,
  Phone,
  Mail,
  Camera,
  Star,
  Send,
  ExternalLink,
  Award,
  Headphones,
  Trees,
  Bed,
  Utensils,
  Flame,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import {
  ACTIVITIES,
  TRAVEL_PACKAGES,
  RESORT_STAYS,
  TESTIMONIALS,
} from '../data/dandeliData';
import { getCleanPackageSlug, getCleanActivitySlug } from '../utils/slugHelpers';
import { DANDELI_IMAGES, getThumbUrl, getHighResUrl } from '../data/imageLibrary';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';
import { PackageCardMetadata } from '../components/PackageCardMetadata';

interface HomePageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  // 1. Featured Packages: 4 distinct packages (Weekend, Rapids, Family, Squad)
  const featuredPackages = TRAVEL_PACKAGES.slice(0, 4);

  // 2. Featured Activities: 6 major adventures
  const featuredActivities = [
    ACTIVITIES.find((a) => a.id === 'white-water-rafting'),
    ACTIVITIES.find((a) => a.id === 'jungle-safari'),
    ACTIVITIES.find((a) => a.id === 'kayaking'),
    ACTIVITIES.find((a) => a.id === 'river-crossing-zipline'),
    ACTIVITIES.find((a) => a.id === 'camping'),
    ACTIVITIES.find((a) => a.id === 'natural-jacuzzi'),
  ].filter(Boolean) as typeof ACTIVITIES;

  // 3. Featured Resorts: 3 distinct accommodation categories
  const featuredResorts = RESORT_STAYS.slice(0, 3);

  // 4. Curated Gallery: 6 diverse photo moments
  const curatedGallery = [
    DANDELI_IMAGES[15], // Rafting rapids
    DANDELI_IMAGES[33], // Wildlife safari / tiger
    DANDELI_IMAGES[9],  // Pool deck riverside
    DANDELI_IMAGES[27], // Zipline river crossing
    DANDELI_IMAGES[23], // Tandem kayaking
    DANDELI_IMAGES[4],  // Night cottage & campfire
  ].filter(Boolean);

  // Lightbox state for homepage gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : curatedGallery.length - 1);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex < curatedGallery.length - 1 ? lightboxIndex + 1 : 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNextLightbox();
      else handlePrevLightbox();
    }
    setTouchStartX(null);
  };

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    travellerCount: '2 Persons',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateContactForm = () => {
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = 'Please enter your name.';
    if (!contactForm.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(contactForm.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit number.';
    }
    return errors;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F] overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (Video Background + Mobile-First Design)
          ========================================================================= */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* =========================================================================
          2. PACKAGES SECTION
          ========================================================================= */}
      <section
        id="packages-section"
        className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Itineraries</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Choose Your Dandeli Escape
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Thoughtfully planned experiences for every kind of traveller.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>View All Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* Package Cards Grid (Responsive layout with mobile finger-friendly spacing) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredPackages.map((pkg) => {
              const cleanSlug = getCleanPackageSlug(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Package Cover Image */}
                    <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-200">
                      <img
                        src={optimizeCloudinaryUrl(pkg.coverImage, 640)}
                        alt={pkg.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: pkg.objectPosition || 'center' }}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30 pointer-events-none" />

                      {/* Editorial Package Metadata (Terracotta Badge + Duration) */}
                      <PackageCardMetadata
                        badge={pkg.badge || pkg.tripStyle}
                        duration={pkg.duration}
                      />

                      {/* Title over image bottom */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 space-y-4">
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans font-light">
                        {pkg.summary}
                      </p>

                      <div className="space-y-1.5 text-xs text-stone-700 font-sans">
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-[#2E6B68] shrink-0" />
                          <span className="truncate">{pkg.suitableTravellers}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & CTA */}
                  <div className="p-5 pt-0 border-t border-[#E5DFD7]/70 mt-auto">
                    <div className="pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-sans uppercase text-stone-400 block tracking-wider font-medium">
                          From
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                            ₹{pkg.pricePerPerson.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-stone-500 font-sans">
                            / person
                          </span>
                        </div>
                      </div>

                      <Link
                        to={`/packages/${cleanSlug}`}
                        className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 shadow-sm active:scale-95"
                      >
                        <span>View Package</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ACTIVITIES SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Wilderness & Rapids</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Adventure Awaits
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                From Class III & IV white water rapids to jungle safaris, discover authentic wilderness experiences.
              </p>
            </div>

            <Link
              to="/activities"
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Explore All Activities</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* Activities Horizontal Swipe Rail on Mobile / 3-Column Grid on Desktop */}
          <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {featuredActivities.map((act) => {
              const cleanSlug = getCleanActivitySlug(act.id);
              return (
                <div
                  key={act.id}
                  className="w-[82vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Activity Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-200">
                      <img
                        src={optimizeCloudinaryUrl(act.image, 640)}
                        alt={act.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: act.objectPosition || 'center' }}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Difficulty Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-manrope uppercase text-[#FAF7F2] font-semibold tracking-wider border border-white/15">
                        {act.difficulty || act.category}
                      </span>

                      {/* Duration Tag */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-manrope text-stone-800 font-medium shadow-sm">
                        {act.duration.split('(')[0].trim()}
                      </span>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                          {act.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description Body */}
                    <div className="p-5 space-y-3">
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans font-light">
                        {act.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-stone-500 font-sans pt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#2E6B68]" />
                          <span className="truncate">{act.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-5 pt-0 mt-auto border-t border-[#E5DFD7]/70">
                    <div className="pt-4 flex items-center justify-between">
                      <div>
                        {act.pricePerPerson ? (
                          <>
                            <span className="text-[10px] font-sans uppercase text-stone-400 block tracking-wider font-medium">
                              From
                            </span>
                            <span className="font-serif text-lg sm:text-xl font-normal text-[#1C1D1F]">
                              ₹{act.pricePerPerson.toLocaleString()}
                              <span className="text-xs text-stone-500 font-sans font-normal"> / person</span>
                            </span>
                          </>
                        ) : (
                          <span className="text-xs text-stone-500 font-sans italic">Season rates</span>
                        )}
                      </div>

                      <Link
                        to={`/activities/${cleanSlug}`}
                        className="min-h-[44px] py-2 px-4 rounded-xl bg-stone-100 hover:bg-[#2E6B68] text-stone-800 hover:text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE US
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold">
              Rooted in Ganeshgudi
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
              Why Travel With Us?
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Genuine local expertise, safety-first protocols, and transparent planning directly from the Kali riverbank.
            </p>
          </div>

          {/* 5 Genuine Benefits Grid (2-column on mobile, 5-column on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {/* Benefit 1 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] shadow-2xs">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F]">
                  Local Dandeli Expertise
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-light line-clamp-3 sm:line-clamp-none">
                  Native river guides and forest trackers born along the Kali River who know every eddy and rapid bend.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] shadow-2xs">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F]">
                  Carefully Planned Trips
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-light line-clamp-3 sm:line-clamp-none">
                  Itineraries synchronized with Supa Dam hydro-release hours to guarantee optimal white water levels.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] shadow-2xs">
                <Trees className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F]">
                  Comfortable Stays
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-light line-clamp-3 sm:line-clamp-none">
                  Handpicked riverside eco-resorts, treehouses, and jungle cottages with home-style Karnataka buffet meals.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] shadow-2xs">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F]">
                  Adventure & Nature
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-light line-clamp-3 sm:line-clamp-none">
                  Certified Class III & IV gear, IRF rescue-trained captains, and certified sanctuary naturalists.
                </p>
              </div>
            </div>

            {/* Benefit 5 (Centered span-2 on mobile for symmetry) */}
            <div className="col-span-2 md:col-span-1 p-4 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center text-[#2E6B68] shadow-2xs">
                <Headphones className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F]">
                  Personalised Support
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-sans font-light line-clamp-3 sm:line-clamp-none">
                  Direct local desk support via phone and WhatsApp from your first enquiry until you return home safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ROOMS / RESORT STAYS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#18191B] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#EAE3D8] font-semibold flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-[#EAE3D8]" />
                <span>Wilderness Accommodations</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Stay Close to Nature
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                Wake up to river mist and hornbill calls. Handpicked riverside cottages, luxury tents, and nature lodges.
              </p>
            </div>

            <Link
              to="/resorts"
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Explore All Resorts</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Resorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredResorts.map((resort) => (
              <div
                key={resort.id}
                className="group rounded-2xl overflow-hidden bg-[#242629] border border-white/10 hover:border-[#2E6B68]/60 transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-stone-900">
                    <img
                      src={optimizeCloudinaryUrl(resort.coverImage, 640)}
                      alt={resort.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: resort.objectPosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#242629] via-transparent to-black/30 pointer-events-none" />

                    <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/65 backdrop-blur-md text-[10px] font-manrope uppercase text-[#FAF7F2] font-semibold border border-white/15">
                      {resort.categoryLabel}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-sans text-stone-300 block">
                        {resort.locationArea}
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-white leading-snug">
                        {resort.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans font-light">
                      {resort.tagline}
                    </p>

                    {/* Relevant Amenities */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-400 font-sans">
                      <span className="inline-flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                        <Utensils className="w-3 h-3 text-[#EAE3D8]" />
                        <span>Buffet Meals</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                        <Flame className="w-3 h-3 text-[#EAE3D8]" />
                        <span>Campfire</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                        <ShieldCheck className="w-3 h-3 text-[#2E6B68]" />
                        <span>River Access</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Tariff & CTA */}
                <div className="p-6 pt-0 border-t border-white/10 mt-auto">
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-sans uppercase text-stone-400 block tracking-wider font-medium">
                        Tariff from
                      </span>
                      <span className="font-serif text-2xl font-normal text-[#EAE3D8]">
                        ₹{resort.pricePerNight.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-stone-400 font-sans"> / person</span>
                    </div>

                    <Link
                      to={`/resorts/${resort.id}`}
                      className="min-h-[44px] py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#2E6B68] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 active:scale-95"
                    >
                      <span>View Stay</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. REVIEWS / FEEDBACK
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#2E6B68]" />
                <span>Guest Feedback & Field Notes</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Guest Feedback & Trip Notes
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Direct reflections from families, corporate squads, and solo nature travelers who navigated the Kali rapids and Dandeli rainforests with our local river captains.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Guest Experience Feedback')}
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#E5DFD7] text-[#1C1D1F] text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Share Your Experience</span>
              <ArrowUpRight className="w-4 h-4 text-[#2E6B68]" />
            </button>
          </div>

          {/* Genuine Reviews Horizontal Carousel on Mobile / 3-Column Grid on Desktop */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:grid-cols-3 gap-4 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {TESTIMONIALS.map((t, idx) => {
              // Extract initials for clean typographic monogram badge instead of stock photos
              const initials = t.guestName
                .split(' ')
                .filter((w) => w && w !== '&')
                .slice(0, 2)
                .map((w) => w[0])
                .join('');

              return (
                <div
                  key={t.id}
                  className="w-[85vw] max-w-[360px] shrink-0 snap-center md:w-auto md:max-w-none p-5 sm:p-8 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm flex flex-col justify-between space-y-5 sm:space-y-6"
                >
                  <div className="space-y-4">
                    {/* Category / Experience Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#2E6B68] border border-[#E5DFD7]">
                        {t.experience.split('(')[0].trim()}
                      </span>
                      <span className="text-[11px] font-sans text-stone-400">
                        {t.date}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-sans italic font-normal">
                      “{t.text}”
                    </p>
                  </div>

                  {/* Reviewer Metadata with Dignified Monogram Badge */}
                  <div className="pt-4 border-t border-[#E5DFD7] flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1C1D1F] border border-[#E5DFD7] font-serif font-medium text-xs flex items-center justify-center shrink-0">
                      {initials || 'DW'}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif text-sm font-normal text-[#1C1D1F] truncate">
                        {t.guestName}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans truncate">
                        {t.hometown} • Verified Trip
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Share Your Feedback Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5DFD7] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div className="space-y-1 max-w-xl">
              <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1D1F]">
                Recently returned from a trip with Dandeli Wilds?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                Help future travelers plan their journeys by sharing your river notes, homestay feedback, or guide shoutouts.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Guest Experience Feedback')}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-colors shadow-xs active:scale-95 cursor-pointer"
              >
                Submit Feedback
              </button>
              <a
                href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20share%20my%20feedback%20and%20photos%20from%20our%20recent%20trip"
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] border border-[#E5DFD7] text-[#1C1D1F] text-xs font-sans font-medium transition-colors flex items-center justify-center"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. GALLERY
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                <span>Authentic Captures</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Moments From Dandeli
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Real snapshots of white water rapids, deep forest canopies, wildlife sightings, and tranquil evenings.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* Curated Editorial Mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {curatedGallery.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-200 border border-[#E5DFD7] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-end text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E6B68]"
              >
                <img
                  src={getThumbUrl(img, 480)}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: img.objectPosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="relative p-3 text-white space-y-0.5 pointer-events-none">
                  <span className="text-[9px] font-manrope uppercase tracking-widest text-[#EAE3D8] font-semibold block">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-xs font-normal leading-snug line-clamp-1">
                    {img.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxIndex !== null && curatedGallery[lightboxIndex] && (
            <div
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between text-white z-10">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-manrope uppercase tracking-widest text-[#EAE3D8] font-semibold">
                    {curatedGallery[lightboxIndex].category} • {lightboxIndex + 1} / {curatedGallery.length}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-normal text-stone-200">
                    {curatedGallery[lightboxIndex].title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/gallery"
                    className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    onClick={() => setLightboxIndex(null)}
                  >
                    <span>View All</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    aria-label="Close Lightbox"
                    onClick={() => setLightboxIndex(null)}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Main Image Area */}
              <div className="relative flex-1 flex items-center justify-center py-4 my-auto overflow-hidden">
                <img
                  src={getHighResUrl(curatedGallery[lightboxIndex])}
                  alt={curatedGallery[lightboxIndex].alt}
                  className="max-h-[75vh] max-w-full w-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Mobile & Desktop Nav Arrows */}
                <button
                  type="button"
                  aria-label="Previous Image"
                  onClick={handlePrevLightbox}
                  className="absolute left-2 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next Image"
                  onClick={handleNextLightbox}
                  className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer Bar */}
              <div className="text-center text-[11px] text-stone-400 font-sans">
                <span>Swipe left / right on mobile • Tap outside or X to close</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          8. CONTACT US
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
              Ready to Experience Dandeli?
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Tell us your preferred dates and squad size. Our local river captain will check dam water releases and send a tailored plan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            {/* Direct Contact Cards (Left column on desktop) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#1C1D1F] text-white p-6 sm:p-8 space-y-6 border border-white/10 shadow-md">
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-manrope uppercase text-[#EAE3D8] tracking-widest font-semibold">
                    Direct Expeditions Desk
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    Ganeshgudi River Desk
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-sans text-stone-300">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#EAE3D8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">Hotline / Calling Desk</span>
                      <a
                        href="tel:+919481245890"
                        className="hover:text-white font-medium text-sm text-[#FAF7F2] font-mono"
                      >
                        +91 94812 45890
                      </a>
                      <p className="text-[10px] text-stone-400">7:00 AM – 9:30 PM IST</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">Direct WhatsApp</span>
                      <a
                        href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20plan%20a%20trip"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white font-medium text-sm text-[#FAF7F2] font-mono"
                      >
                        +91 94812 45890
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#EAE3D8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">Email Enquiries</span>
                      <a
                        href="mailto:expeditions@dandeliwilds.in"
                        className="hover:text-white font-medium"
                      >
                        expeditions@dandeliwilds.in
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#EAE3D8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 block text-[10px]">Physical Station</span>
                      <p className="leading-relaxed">
                        Kali Riverbank Road, Ganeshgudi, Dandeli, Karnataka 581325
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20plan%20a%20trip"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white font-manrope font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Simple Enquiry Form (Right column on desktop) */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#2E6B68]/30 shadow-md space-y-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#FAF7F2] text-[#2E6B68] border border-[#2E6B68]/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                      Your enquiry has been received
                    </h3>
                    <p className="text-stone-600 text-sm font-sans max-w-md mx-auto">
                      Thank you, <strong>{contactForm.name}</strong>. Our local river captain will review water release timings and contact you shortly.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/919481245890?text=Hi%20Dandeli%20Wilds%2C%20I%20am%20${encodeURIComponent(contactForm.name)}%2C%20travelling%20on%20${encodeURIComponent(contactForm.travelDate || 'soon')}%20for%20${encodeURIComponent(contactForm.travellerCount)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] py-2.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white font-manrope font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Message on WhatsApp Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="home-contact-name" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="home-contact-name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full min-h-[48px] p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50"
                      />
                      {formErrors.name && (
                        <p className="text-red-600 text-xs">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="home-contact-phone" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="home-contact-phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full min-h-[48px] p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50 font-mono"
                      />
                      {formErrors.phone && (
                        <p className="text-red-600 text-xs">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="home-contact-email" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        id="home-contact-email"
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full min-h-[48px] p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="home-contact-date" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                        Preferred Date
                      </label>
                      <input
                        id="home-contact-date"
                        type="date"
                        value={contactForm.travelDate}
                        onChange={(e) => setContactForm({ ...contactForm, travelDate: e.target.value })}
                        className="w-full min-h-[48px] p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50"
                      />
                    </div>
                  </div>

                  {/* Travellers Count */}
                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="home-contact-travellers" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                      Number of Travellers
                    </label>
                    <select
                      id="home-contact-travellers"
                      value={contactForm.travellerCount}
                      onChange={(e) => setContactForm({ ...contactForm, travellerCount: e.target.value })}
                      className="w-full min-h-[48px] p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50"
                    >
                      <option value="1 Person (Solo)">1 Person (Solo)</option>
                      <option value="2 Persons (Couple / Duo)">2 Persons (Couple / Duo)</option>
                      <option value="3 – 5 Persons (Small Group / Family)">3 – 5 Persons (Small Group / Family)</option>
                      <option value="6 – 10 Persons (Friends Gang)">6 – 10 Persons (Friends Gang)</option>
                      <option value="11+ Persons (Large Squad / Corporate)">11+ Persons (Large Squad / Corporate)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 font-sans">
                    <label htmlFor="home-contact-msg" className="text-xs font-semibold uppercase text-stone-700 block tracking-wider">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      id="home-contact-msg"
                      rows={3}
                      placeholder="e.g. Vegetarian food preferences, treehouse interest, white water rafting questions..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E5DFD7] text-base sm:text-sm focus:outline-none focus:border-[#2E6B68] bg-stone-50/50"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white font-manrope font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 text-[#EAE3D8]" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-stone-500 font-sans">
                    ✓ Direct local guides • No booking fee for enquiries • Quick WhatsApp response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. MAP SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-manrope uppercase tracking-widest text-[#2E6B68] font-semibold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Location</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Find Us in Dandeli
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Located in Ganeshgudi & Dandeli, along the banks of the Kali River in Uttara Kannada, Karnataka.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Dandeli,+Karnataka"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto min-h-[44px] py-2.5 px-5 sm:px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-manrope font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4 text-[#EAE3D8]" />
            </a>
          </div>

          {/* Interactive Map Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Embedded Responsive Google Map (100% width, no horizontal overflow) */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-[#E5DFD7] shadow-sm bg-stone-100 min-h-[300px] sm:min-h-[380px] relative">
              <iframe
                title="Dandeli Wilds Geographic Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61596.79093867086!2d74.5772391!3d15.2443425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8b56f8f553a15%3A0x7d6a455a7ad5b119!2sDandeli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[300px] sm:min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Travel Distances & Connectivity Card */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-manrope uppercase text-[#2E6B68] font-semibold tracking-wider">
                    Getting Here
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                    Connectivity Hubs
                  </h3>
                </div>

                <div className="space-y-3 text-xs font-sans text-stone-700">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD7]">
                    <span className="font-medium text-[#1C1D1F]">Hubli (Airport / Railway)</span>
                    <span className="text-stone-500">72 km • 2.2 hrs</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD7]">
                    <span className="font-medium text-[#1C1D1F]">Belgaum (Airport / Train)</span>
                    <span className="text-stone-500">88 km • 2.5 hrs</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD7]">
                    <span className="font-medium text-[#1C1D1F]">Goa (Dabolim / MOPA)</span>
                    <span className="text-stone-500">125 km • 3.0 hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#1C1D1F]">Bengaluru</span>
                    <span className="text-stone-500">460 km • Overnight</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DFD7] space-y-2 text-[11px] text-stone-600 font-sans">
                <p>
                  📍 <strong>Base Station:</strong> Kali Riverbank Road, Ganeshgudi, Dandeli, Karnataka 581325
                </p>
                <p className="text-stone-500">
                  Pickups from Alnavar, Londa, and Hubli railway stations can be arranged upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note: Section 10 (FOOTER) is persistently rendered directly below this page in App.tsx! */}
    </div>
  );
};
