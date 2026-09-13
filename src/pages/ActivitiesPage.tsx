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
  TreePine,
  Users,
  Feather,
  Flame,
  Droplets,
  Mountain,
  Zap,
  Eye,
  ArrowRight,
} from 'lucide-react';
import { ACTIVITIES } from '../data/dandeliData';
import { getCleanActivitySlug } from '../utils/slugHelpers';
import { HeroPanoramicMontage } from '../components/HeroPanoramicMontage';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';

interface QuickCardItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ElementType;
  category: 'water' | 'jungle' | 'trek';
  slug: string;
}

const QUICK_ADVENTURES: QuickCardItem[] = [
  {
    id: 'rafting',
    title: 'Rafting',
    subtitle: 'White Water Adventures',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788989523/dandeli_rafting_4k.png',
    icon: Waves,
    category: 'water',
    slug: '/activities/kali-river-rafting',
  },
  {
    id: 'jungle-safari',
    title: 'Jungle Safari',
    subtitle: 'Wildlife & Forest Trails',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    icon: Compass,
    category: 'jungle',
    slug: '/activities/jungle-safari',
  },
  {
    id: 'jeep-safari',
    title: 'Jeep Safari',
    subtitle: 'Explore Deeper',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    icon: Compass,
    category: 'jungle',
    slug: '/activities/jungle-safari',
  },
  {
    id: 'kayaking',
    title: 'Kayaking',
    subtitle: 'Calm Waters, Great Views',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
    icon: Waves,
    category: 'water',
    slug: '/activities/kayaking-kali',
  },
  {
    id: 'camping',
    title: 'Camping',
    subtitle: 'Under the Open Sky',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788989523/dandeli_cottages_night_4K_faithful.png',
    icon: Flame,
    category: 'jungle',
    slug: '/activities/riverside-camping',
  },
  {
    id: 'bird-watching',
    title: 'Bird Watching',
    subtitle: "Nature's Colorful Guests",
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    icon: Feather,
    category: 'jungle',
    slug: '/activities/bird-watching',
  },
  {
    id: 'syntheri-rocks',
    title: 'Syntheri Rocks',
    subtitle: 'Ancient Volcanic Monolith',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
    icon: Mountain,
    category: 'trek',
    slug: '/activities/syntheri-rocks',
  },
  {
    id: 'waterfalls-trek',
    title: 'Waterfalls Trek',
    subtitle: 'Cascades & Rainforest',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
    icon: Droplets,
    category: 'trek',
    slug: '/activities/waterfalls-trek',
  },
  {
    id: 'coracle-ride',
    title: 'Coracle Ride',
    subtitle: 'Traditional Kali River Drift',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    icon: Waves,
    category: 'water',
    slug: '/activities/coracle-ride',
  },
  {
    id: 'river-zipline',
    title: 'River Zipline',
    subtitle: 'Aerial Canopy Crossing',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    icon: Zap,
    category: 'water',
    slug: '/activities/river-crossing',
  },
  {
    id: 'nature-walks',
    title: 'Nature Walks',
    subtitle: 'Medicinal Flora & Canopy',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    icon: TreePine,
    category: 'trek',
    slug: '/activities/nature-walk',
  },
  {
    id: 'wildlife-safari',
    title: 'Wildlife Reserve',
    subtitle: 'Anshi Tiger Sanctuary',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_480/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    icon: Eye,
    category: 'jungle',
    slug: '/activities/wildlife-safari',
  },
];

export const ActivitiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'water' | 'jungle' | 'trek'>('all');

  const filteredQuickAdventures = QUICK_ADVENTURES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filteredActivities = ACTIVITIES.filter((act) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'water') return act.category === 'river';
    if (activeFilter === 'jungle') return act.category === 'jungle' || act.category === 'wildlife';
    if (activeFilter === 'trek') return act.category === 'trek';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Signature 4-Panel Panoramic Hero Montage */}
      <HeroPanoramicMontage
        badgeIcon={Compass}
        badgeText="OUTDOOR EXPEDITIONS & RIVER SPORTS"
        title="Activities in Dandeli"
        tagline="From premier Class III & IV white water river rafting to quiet dawn coracle rides, deep forest jeep safaris, and ancient monolith treks—discover every guided adventure led by certified native marshals."
        bullets={[
          { icon: ShieldCheck, text: 'IRF Certified River Marshals' },
          { icon: TreePine, text: 'Forest Dept. Authorized Safaris' },
          { icon: Users, text: 'Non-swimmer Friendly Options' },
        ]}
        panels={[
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png', alt: 'White Water Rafting on Kali River' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png', alt: 'Jungle Safari in Western Ghats' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png', alt: 'Cascading Waterfalls in Dandeli' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png', alt: 'Spotted Chital Deer in Rainforest' },
        ]}
      />

      {/* 2. Main Content Section with subtle Topographical Lines */}
      <section className="relative py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Subtle Topographic background curves */}
        <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden select-none -z-10">
          <svg className="w-full h-full text-stone-300/40" viewBox="0 0 1200 800" fill="none">
            <path d="M-100 200 C 300 150, 600 350, 1300 180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M-100 350 C 400 250, 700 500, 1300 320" stroke="currentColor" strokeWidth="1" />
            <path d="M-100 520 C 350 420, 800 650, 1300 480" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M-100 680 C 450 580, 850 780, 1300 640" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Section Header & Discipline Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5DFD7]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#2E6B68]">
                EXPLORE
              </span>
              <span className="w-8 h-px bg-[#2E6B68]/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1D1F]">
              All Adventure Activities
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-2xl font-light">
              Browse by discipline or tap any experience to view full itinerary and requirements.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
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
                className={`px-4 py-2 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-[#EFE9DF] text-stone-700 hover:bg-[#E4DCD0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Quick Adventures: Tactile Horizontal Rail on Mobile, 6-Col Grid on Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 no-scrollbar snap-x snap-mandatory sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredQuickAdventures.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.slug}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/11] border border-[#E5DFD7] hover:border-[#2E6B68] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-end bg-stone-900 w-[72vw] max-w-[280px] shrink-0 snap-start sm:w-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 p-3 sm:p-3.5 flex items-end justify-between gap-1 text-white">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <ItemIcon className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />
                      <h3 className="font-sans font-medium text-xs sm:text-sm text-white truncate group-hover:text-[#EAE3D8] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[10px] text-stone-300 font-sans font-light truncate">
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mb-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* 3.5 ACTION SPOTLIGHT: The White-Water Anatomy & Safety Standards (STORY → IMAGE → ACTION) */}
        <div className="my-10 p-6 sm:p-10 rounded-3xl bg-[#1C1D1F] text-white shadow-md overflow-hidden relative border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story & Specifications */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#EAE3D8] px-2.5 py-1 rounded bg-white/10 border border-white/15">
                  River Protocol & Safety
                </span>
                <span className="text-xs text-stone-400 font-sans">Ganeshgudi Launch Base</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight text-white">
                How White-Water Rafting Works on the Kali River
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                Every morning around 9:00 AM, the Supa hydroelectric dam opens its release gates. Cold water rushes down through the forested gorge, turning 9.5 km of calm jade river into thrilling Class III and IV rapids.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#EAE3D8] text-xs font-medium font-sans">
                    <ShieldCheck className="w-4 h-4 text-[#2E6B68]" />
                    <span>Non-Swimmers Welcome</span>
                  </div>
                  <p className="text-[11px] text-stone-400 font-sans font-light">
                    Every guest wears a high-buoyancy CE 150N life vest and ergonomic helmet. You do not need to know swimming.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#EAE3D8] text-xs font-medium font-sans">
                    <Waves className="w-4 h-4 text-[#2E6B68]" />
                    <span>Rescue Safety Kayaker</span>
                  </div>
                  <p className="text-[11px] text-stone-400 font-sans font-light">
                    An expert solo safety kayaker paddles directly ahead of every commercial raft to scout hydraulic currents.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-stone-300 font-sans">
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Descent Length</span>
                  <span className="font-medium text-white">9.5 km (9 Rapid Drops)</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">River Duration</span>
                  <span className="font-medium text-white">2.5 to 3 Hours</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Water Schedule</span>
                  <span className="font-medium text-white">09:00 AM – 01:30 PM</span>
                </div>
              </div>
            </div>

            {/* Authentic Photography Pair */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border border-white/15 shadow-md">
                  <img
                    src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_rafting_4k.png"
                    alt="White-water rafting crew navigating rapids in Dandeli"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.96]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] text-stone-400 font-sans text-center">
                  Stanley's Fall (Grade III rapid)
                </p>
              </div>

              <div className="space-y-2 pt-6">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-stone-900 border border-white/15 shadow-md">
                  <img
                    src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png"
                    alt="River marshals conducting safety briefing on Kali riverbank"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.96]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] text-stone-400 font-sans text-center">
                  Pre-departure vest check & briefing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Full Detailed Activity Cards Grid with Specifications & Tariffs */}
        <div className="pt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
              Detailed Field Schedules & Booking Tariffs
            </h3>
            <span className="text-xs font-sans text-stone-500">
              Showing {filteredActivities.length} experiences
            </span>
          </div>

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
                    <div className="relative h-56 overflow-hidden bg-stone-200">
                      <img
                        src={optimizeCloudinaryUrl(activity.image, 640)}
                        alt={activity.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: (activity as any).objectPosition || 'center' }}
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
                        <h4 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                          {activity.title}
                        </h4>
                        <p className="text-stone-300 text-xs font-sans mt-0.5">{activity.location}</p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans font-light">
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

                    <span className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#E5DFD7]">
                      <span>View Activity</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 5. Safety First Assurance Box */}
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
