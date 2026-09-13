import React from 'react';
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
  Waves,
  TreePine,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Heart,
  Phone,
  Camera,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ACTIVITIES, TRAVEL_PACKAGES, RESORT_STAYS } from '../data/dandeliData';
import { TRIP_PLANS } from '../components/FindYourTrip';
import { getCleanPackageSlug, getCleanActivitySlug } from '../utils/slugHelpers';
import { DANDELI_IMAGES, getThumbUrl } from '../data/imageLibrary';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';

interface HomePageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  // Only 2-3 featured packages on home
  const featuredPackages = TRAVEL_PACKAGES.slice(0, 3);
  // Curated 4 activities on home
  const featuredActivities = ACTIVITIES.slice(0, 4);
  // Curated 3 resorts on home
  const featuredResorts = RESORT_STAYS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 0. TRAVELER ORIENTATION & 3-STEP TRIP ROADMAP */}
      <section className="py-10 sm:py-12 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Quick Orientation Pill & Summary */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7]">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#2E6B68] px-2 py-0.5 rounded bg-[#2E6B68]/10">
                  First-Time Traveler Guide
                </span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-xs font-sans text-stone-500">Uttara Kannada, Western Ghats</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
                Dandeli at a Glance
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                Nestled deep in the Western Ghats rainforests of North Karnataka, Dandeli is South India’s adventure capital. Driven by daily water releases from the Supa Dam, the untamed Kali River offers South India’s only perennial Class III & IV white water rapids, flanked by Anshi National Park, home to black panthers, hornbills, and ancient teak canopies.
              </p>
            </div>

            {/* Quick Key Facts */}
            <div className="grid grid-cols-2 gap-3 shrink-0 w-full lg:w-auto text-xs font-sans">
              <div className="p-3 rounded-xl bg-white border border-[#E5DFD7] space-y-1">
                <div className="flex items-center gap-1.5 text-[#2E6B68] font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Travel Time</span>
                </div>
                <p className="text-stone-600 text-[11px]">2.5h from Hubli/Belgaum • 3h from Goa</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#E5DFD7] space-y-1">
                <div className="flex items-center gap-1.5 text-[#C46849] font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prime Season</span>
                </div>
                <p className="text-stone-600 text-[11px]">Oct–May (Rapids & Safaris)</p>
              </div>
            </div>
          </div>

          {/* 3-Step Simple Way to Plan */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans uppercase tracking-widest text-stone-500 font-medium">
                How Trip Planning Works in 3 Simple Steps
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/explore"
                className="group p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#E5DFD7] hover:border-[#2E6B68]/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#2E6B68] text-white flex items-center justify-center font-mono text-xs font-medium">
                      01
                    </span>
                    <span className="text-[11px] font-sans text-[#2E6B68] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Explore Realms <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#1C1D1F]">
                    Choose Your Environment
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                    From white water rapids in Ganeshgudi to Anshi Tiger Reserve safaris and volcanic monoliths at Syntheri.
                  </p>
                </div>
              </Link>

              <Link
                to="/packages"
                className="group p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#E5DFD7] hover:border-[#2E6B68]/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#C46849] text-white flex items-center justify-center font-mono text-xs font-medium">
                      02
                    </span>
                    <span className="text-[11px] font-sans text-[#C46849] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Compare Deals <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#1C1D1F]">
                    Pick All-Inclusive or A La Carte
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                    Save up to 35% with complete stay packages (cottage + 3 buffet meals + rafting) or book standalone resorts.
                  </p>
                </div>
              </Link>

              <Link
                to="/contact"
                className="group p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#E5DFD7] hover:border-[#2E6B68]/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#1C1D1F] text-white flex items-center justify-center font-mono text-xs font-medium">
                      03
                    </span>
                    <span className="text-[11px] font-sans text-[#1C1D1F] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Lock In Dates <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#1C1D1F]">
                    Confirm with Native River Desk
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                    We match your travel dates with official Supa Dam water discharge timings and forest reserve permit quotas.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. SHORT EXPLORE PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Field Preview • Chapter I</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Explore Dandeli
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                South India’s wildest river gorge, contiguous rainforests, and centuries-old Western Ghats lore. Choose your environment.
              </p>
            </div>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>Explore Dandeli</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* 3 Highlight Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'White Water Rafting',
                slug: 'white-water-rafting',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_rafting_4k.png',
                tag: 'Class III & IV Rapids',
                desc: '9.5 km of surging mountain dam releases on the untamed Kali River.',
              },
              {
                title: 'Jungle Safari',
                slug: 'jungle-safari',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_tiger_4K.png',
                tag: 'Anshi National Park',
                desc: 'Quiet tracking of tigers, hornbills, and giant squirrels with forest rangers.',
              },
              {
                title: 'Wilderness Camping',
                slug: 'camping',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_cottages_night_4K_faithful.png',
                tag: 'Riverbank Starlight',
                desc: 'Fall asleep to cicada choruses and teak campfires under dark skies.',
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                to={`/activities/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden bg-stone-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15">
                    {cat.tag}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl font-normal">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">{cat.desc}</p>
                  <div className="flex items-center justify-between text-xs font-medium text-[#2E6B68] group-hover:text-[#1F4E5B] font-sans">
                    <span>View Chapter</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED ACTIVITIES PREVIEW (Chapter II) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5" />
                <span>River & Canopy Action • Chapter II</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Featured Activities
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                From high-adrenaline Class IV rapids on the Kali River to silent dawn kayaking through mist, explore Dandeli’s signature outdoor adventures.
              </p>
            </div>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>View All 14 Activities</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* 4 Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((act) => {
              const cleanSlug = getCleanActivitySlug(act.id);
              return (
                <Link
                  key={act.id}
                  to={`/activities/${cleanSlug}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden bg-stone-200">
                    <img
                      src={optimizeCloudinaryUrl(act.image, 540)}
                      alt={act.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-sans text-[#FAF7F2] uppercase font-medium">
                      {act.category}
                    </span>
                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#1C1D1F] text-white font-mono text-xs font-semibold">
                      ₹{act.pricePerPerson}
                    </span>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-normal text-[#1C1D1F] group-hover:text-[#2E6B68] transition-colors">
                        {act.title}
                      </h3>
                      <p className="text-stone-600 text-xs line-clamp-2 mt-1 leading-relaxed font-sans font-light">
                        {act.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                      <span>{act.duration}</span>
                      <span className="text-[#2E6B68] font-medium flex items-center gap-0.5">
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL STORYTELLING BREAK: The Living River & Ancient Canopy */}
      <section className="py-14 sm:py-20 bg-[#18191B] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story Block */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-[#2E6B68]" />
                <span>The Rhythm of the Current • Western Ghats</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Where 9.5 km of mountain rapids meet 1,300 sq km of ancient rainforest.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                The Kali River is South India’s only perennial white-water corridor. Every morning around 9:00 AM, the Supa hydroelectric dam releases cold reservoir waters down the gorge, transforming calm jade currents into surging Class III and IV rapids across granite boulders.
              </p>
              <p className="text-stone-300 text-sm leading-relaxed font-sans font-light">
                By 4:00 PM, the water recedes into mirror-like stillness. Hornbills fly across the teak canopy, kingfishers dive in the shallows, and local boatmen take travelers on silent coracle drifts under the mist.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="font-mono text-lg sm:text-xl font-semibold text-[#EAE3D8] block">9.5 km</span>
                  <span className="text-[10px] text-stone-400 font-sans uppercase tracking-wider">River Descent</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="font-mono text-lg sm:text-xl font-semibold text-[#EAE3D8] block">Class IV</span>
                  <span className="text-[10px] text-stone-400 font-sans uppercase tracking-wider">Peak Rapids</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="font-mono text-lg sm:text-xl font-semibold text-[#EAE3D8] block">300+</span>
                  <span className="text-[10px] text-stone-400 font-sans uppercase tracking-wider">Bird Species</span>
                </div>
              </div>
            </div>

            {/* Authentic Photographic Diptych */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-white/10 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png"
                    alt="Authentic Kali River rapids navigated by rafters in Dandeli"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[11px] text-stone-400 font-sans italic text-center">
                  Cresting churning Kali River foam
                </p>
              </div>
              <div className="space-y-3 pt-6 sm:pt-10">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-white/10 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png"
                    alt="River crew maneuvering through churning rapids"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[11px] text-stone-400 font-sans italic text-center">
                  Lead captains guiding rapid descents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PACKAGES PREVIEW (Chapter III) */}
      <section className="py-16 sm:py-24 bg-[#EFE9E1] border-y border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>All-Inclusive Value • Chapter III</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Featured Packages
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Handcrafted itineraries combining riverside accommodations, home-style Karnataka buffet meals, safety gear, and licensed guides. Save up to 35% compared to booking separately.
              </p>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>View All Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredPackages.map((pkg) => {
              const cleanSlug = getCleanPackageSlug(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-stone-200">
                      <img
                        src={optimizeCloudinaryUrl(pkg.coverImage, 640)}
                        alt={pkg.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#C46849] text-white font-sans text-[10px] font-medium uppercase tracking-wider shadow-sm">
                        {pkg.badge}
                      </span>
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white font-mono text-xs">
                        {pkg.duration}
                      </span>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="font-serif text-2xl font-normal leading-snug">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans font-light">
                        {pkg.summary}
                      </p>

                      <div className="space-y-1.5 text-xs text-stone-700 font-sans">
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-[#2E6B68] shrink-0" />
                          <span className="truncate">{pkg.suitableTravellers}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#2E6B68] shrink-0" />
                          <span>{pkg.stayType}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pkg.includedActivities.slice(0, 3).map((act, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E5DFD7] text-stone-600 text-[11px] font-sans">
                            ✓ {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-sans uppercase text-stone-400 block tracking-wider">From</span>
                      <span className="font-serif text-2xl font-normal text-[#1C1D1F]">
                        ₹{pkg.pricePerPerson.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-stone-500 font-sans"> / person</span>
                    </div>

                    <Link
                      to={`/packages/${cleanSlug}`}
                      className="px-4 py-2 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5"
                    >
                      <span>View Package</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TRIP PLANS PREVIEW (Chapter IV) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Tailored Expedition Plans • Chapter IV</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Who are you travelling with?
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Whether you want quiet solo reflective trails or a synchronized multi-raft derby for a 20-person squad, we craft each plan around your crew.
              </p>
            </div>
            <Link
              to="/trip-plans"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>View Trip Plans</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* 5 Group Options Preview with Authentic Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {[
              {
                id: 'solo',
                label: 'Solo',
                desc: 'Mindful trails, birding & quiet river decks',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
                tag: 'Digital Detox',
              },
              {
                id: 'duo',
                label: 'Duo',
                desc: 'Riverside cottages & peaceful tandem kayaks',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
                tag: 'Scenic & Romantic',
              },
              {
                id: 'friends',
                label: 'Friends',
                desc: 'Rapid descents, campfire nights & group treks',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_rafting_4k.png',
                tag: 'High Adrenaline',
              },
              {
                id: 'family',
                label: 'Family',
                desc: 'Gentle river floats, nature walks & comfort',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
                tag: 'Wildlife & Care',
              },
              {
                id: 'group',
                label: 'Groups 4+',
                desc: 'Dedicated guides, team wings & custom schedules',
                image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_cottages_night_4K_faithful.png',
                tag: 'Campfire & Derby',
              },
            ].map((plan) => (
              <Link
                key={plan.id}
                to={`/trip-plans/${plan.id}`}
                className="group relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] bg-stone-900 border border-[#E5DFD7] hover:border-[#2E6B68] transition-all duration-300 flex flex-col justify-end shadow-sm hover:shadow-md"
              >
                <img
                  src={plan.image}
                  alt={plan.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Gentle gradient keeping the scenery natural and legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="relative z-10 p-4 sm:p-5 text-white flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#EAE3D8] font-medium px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/15">
                      {plan.tag}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#2E6B68] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#EAE3D8]/80 font-sans uppercase tracking-wider block font-medium">Expedition</span>
                    <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#EAE3D8] transition-colors leading-tight mt-0.5">
                      {plan.label}
                    </h3>
                    <p className="text-stone-200 text-xs mt-1.5 line-clamp-2 leading-relaxed font-sans font-light">
                      {plan.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED RESORTS PREVIEW (Chapter V) */}
      <section className="py-16 sm:py-24 bg-[#18191B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium flex items-center gap-1.5">
                <TreePine className="w-3.5 h-3.5" />
                <span>Eco Lodges & Forest Stays • Chapter V</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Featured Resorts & Stays
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                Reclaim your sleep. Stay in granite river cottages, elevated timber treehouses, or spice plantation homestays free of city sounds.
              </p>
            </div>
            <Link
              to="/resorts"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Explore Resorts</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Resorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredResorts.map((resort) => (
              <Link
                key={resort.id}
                to={`/resorts/${resort.id}`}
                className="group rounded-2xl overflow-hidden bg-[#242629] border border-white/10 hover:border-[#2E6B68]/60 transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div className="relative h-60 overflow-hidden bg-stone-900">
                  <img
                    src={optimizeCloudinaryUrl(resort.coverImage, 640)}
                    alt={resort.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242629] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans uppercase text-[#FAF7F2] font-medium border border-white/15">
                    {resort.categoryLabel}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-sans text-stone-300 block">{resort.locationArea}</span>
                    <h3 className="font-serif text-2xl font-normal text-white leading-snug">
                      {resort.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
                    {resort.tagline}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-sans uppercase text-stone-400 block tracking-wider">Tariff from</span>
                      <span className="font-serif text-2xl font-normal text-[#EAE3D8]">
                        ₹{resort.pricePerNight.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-stone-400 font-sans"> / person</span>
                    </div>

                    <span className="px-4 py-2 rounded-xl bg-white/10 group-hover:bg-white/20 text-white text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center gap-1">
                      <span>View Stay</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5B. CUSTOMER PHOTOGRAPHY ARCHIVE SHOWCASE */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Traveler Perspectives • 48 Authentic Captures</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Dandeli Through Real Eyes
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                No generic stock photos. See genuine white-water drops, river ziplines, teak forest cottages, and night bonfires captured right here in Ganeshgudi and Anshi.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Explore All 48 Photos</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>

          {/* Curated 6-Photo Mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              DANDELI_IMAGES[15], // Rafting rapids
              DANDELI_IMAGES[33], // Tiger sighting
              DANDELI_IMAGES[9],  // Riverside pool deck
              DANDELI_IMAGES[4],  // A-frame cottage night
              DANDELI_IMAGES[27], // Zipline river crossing
              DANDELI_IMAGES[23], // Tandem kayaking
            ].filter(Boolean).map((img) => (
              <Link
                key={img.id}
                to="/gallery"
                className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-stone-200 border border-[#E5DFD7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-end"
              >
                <img
                  src={getThumbUrl(img, 480)}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative p-3 text-white space-y-0.5">
                  <span className="text-[9px] font-sans uppercase tracking-widest text-[#EAE3D8] font-medium block">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-xs font-normal leading-snug line-clamp-1">
                    {img.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-stone-600">
            <span className="text-center sm:text-left">
              Browse by category in our dedicated gallery: White Water Rafting, Luxury Resorts, Forest Treks, Ziplines & Elephant Safaris.
            </span>
            <Link
              to="/gallery"
              className="text-[#2E6B68] font-medium hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Open Customer Gallery</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ABOUT US PREVIEW (Chapter VI) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Native Dandeli Guide Network • Chapter VI</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1D1F] tracking-tight leading-tight">
                Who we are & why we do this
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                Dandeli Wilds is not an automated corporate aggregator. We are a family of native Kali River captains, Anshi forest department trackers, and Ganeshgudi homestay owners born along these waters.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-medium text-stone-800 font-sans">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E6B68] shrink-0" />
                  <span>IRF Certified Marshals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0" />
                  <span>100% Zero Middlemen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C46849] shrink-0" />
                  <span>Community Native Roots</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <span>About Us & Safety Protocols</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E5DFD7] bg-stone-200">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png"
                  alt="Dandeli river guide paddling on the Kali River"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-white border border-[#E5DFD7] shadow-lg text-xs max-w-[240px]">
                <p className="italic text-stone-700 font-serif">“The river doesn’t run on a schedule, but with native eyes, you know every eddy.”</p>
                <p className="font-sans font-medium text-[#1C1D1F] mt-1.5">— Ganeshgudi River Desk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (Chapter VII) */}
      <section className="py-16 sm:py-20 bg-[#18191B] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Plan Your Dandeli Expedition • Chapter VII</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
            Ready to experience the wild Kali?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Tell us your travel dates, preferred squad size, and what excites you most. We will check dam water releases, cottage availability, and suggest an authentic itinerary.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20am%20planning%20a%20trip"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EAE3D8]" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
