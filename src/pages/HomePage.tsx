import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
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
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { ACTIVITIES, TRAVEL_PACKAGES, RESORT_STAYS } from '../data/dandeliData';
import { TRIP_PLANS } from '../components/FindYourTrip';
import { getCleanPackageSlug, getCleanActivitySlug } from '../utils/slugHelpers';

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
                image: '/images/kali-rafting-hero.jpg',
                tag: 'Class III & IV Rapids',
                desc: '9.5 km of surging mountain dam releases on the untamed Kali River.',
              },
              {
                title: 'Jungle Safari',
                slug: 'jungle-safari',
                image: '/images/jungle-safari.jpg',
                tag: 'Anshi National Park',
                desc: 'Quiet tracking of tigers, hornbills, and giant squirrels with forest rangers.',
              },
              {
                title: 'Wilderness Camping',
                slug: 'camping',
                image: '/images/campfire-night.jpg',
                tag: 'Riverbank Starlight',
                desc: 'Fall asleep to cicada choruses and teak campfires under dark skies.',
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                to={`/activities/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
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

      {/* 2. TRIP PLANS PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium">
                Tailored Expedition Plans
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Who are you travelling with?
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
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

          {/* 5 Group Options Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {[
              { id: 'solo', label: 'Solo', desc: 'Mindful trails, birding & quiet river decks' },
              { id: 'duo', label: 'Duo', desc: 'Riverside cottages & peaceful tandem kayaks' },
              { id: 'friends', label: 'Friends', desc: 'Rapid descents, campfire nights & group treks' },
              { id: 'family', label: 'Family', desc: 'Gentle river floats, nature walks & comfort' },
              { id: 'group', label: 'Groups 4+', desc: 'Dedicated guides, team wings & custom schedules' },
            ].map((plan) => (
              <Link
                key={plan.id}
                to={`/trip-plans/${plan.id}`}
                className="group p-5 rounded-xl bg-[#1C1D1F] text-white border border-white/10 hover:border-[#2E6B68]/60 transition-all duration-300 flex flex-col justify-between min-h-[170px] shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-[10px] text-[#C46849] font-sans uppercase tracking-wider font-medium block">Expedition</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mt-1 group-hover:text-[#EAE3D8] transition-colors">
                    {plan.label}
                  </h3>
                  <p className="text-stone-300 text-xs mt-2 line-clamp-2 leading-relaxed font-sans">
                    {plan.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[11px] font-sans font-medium text-[#EAE3D8]">
                  <span>Explore Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PACKAGES PREVIEW (Only 2-3 Packages) */}
      <section className="py-16 sm:py-24 bg-[#EFE9E1] border-y border-[#E5DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium">
                Curated All-Inclusive Stays
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Featured Packages
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                Handcrafted itineraries combining riverside accommodations, home-style Karnataka buffet meals, safety gear, and licensed guides.
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
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={pkg.coverImage}
                        alt={pkg.title}
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
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
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

      {/* 4. FEATURED ACTIVITIES PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium">
                River & Canopy Action
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D1F]">
                Featured Activities
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                From high-adrenaline Class IV rapids to silent dawn kayaking through mist, explore Dandeli’s signature outdoor adventures.
              </p>
            </div>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 self-start md:self-auto py-3 px-6 rounded-xl bg-[#1C1D1F] hover:bg-[#2B2C2E] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <span>View All Activities</span>
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
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
                      <p className="text-stone-600 text-xs line-clamp-2 mt-1 leading-relaxed font-sans">
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

      {/* 5. FEATURED RESORTS PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#18191B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium">
                Eco Lodges & Forest Stays
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Featured Resorts & Stays
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
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
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={resort.coverImage}
                    alt={resort.name}
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

      {/* 6. ABOUT US PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium">
                Native Dandeli Guide Network
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1D1F] tracking-tight leading-tight">
                Who we are & why we do this
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
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
                  <span>About Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E5DFD7]">
                <img
                  src="/images/kali-kayak.jpg"
                  alt="Dandeli river guide paddling on the Kali River"
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

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[#18191B] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium">
            Plan Your Dandeli Expedition
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
