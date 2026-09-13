import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowUpRight,
  MapPin,
  ChevronRight,
  Waves,
  TreePine,
  Sparkles,
  Mountain,
  Droplets,
  Flame,
  Feather,
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  Info,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { HeroPanoramicMontage } from '../components/HeroPanoramicMontage';
import {
  DANDELI_DESTINATIONS,
  EXPLORE_CATEGORIES_LIST,
  DandeliDestination,
  ExploreCategoryType,
} from '../data/destinationsData';

type FilterCategoryOrAll = 'All' | ExploreCategoryType;

export const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategoryOrAll>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVibe, setActiveVibe] = useState<'all' | 'curator' | 'family' | 'adrenaline' | 'relaxed'>('all');

  // Filter destinations based on category, search, and vibe
  const filteredDestinations = useMemo(() => {
    return DANDELI_DESTINATIONS.filter((item) => {
      // 1. Category check
      if (selectedCategory !== 'All') {
        const matchesPrimary = item.category === selectedCategory;
        const matchesSecondary = item.secondaryCategories.includes(selectedCategory);
        if (!matchesPrimary && !matchesSecondary) return false;
      }

      // 2. Vibe filter
      if (activeVibe === 'curator' && !item.isCuratorPick) return false;
      if (activeVibe === 'family' && item.difficulty === 'Challenging') return false;
      if (activeVibe === 'adrenaline' && !item.secondaryCategories.includes('Adventure') && item.category !== 'Adventure') return false;
      if (activeVibe === 'relaxed' && item.difficulty !== 'Relaxed' && item.difficulty !== 'Easy') return false;

      // 3. Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesHighlight = item.usefulHighlight.toLowerCase().includes(query);
        const matchesLoc = item.location.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesHighlight && !matchesLoc && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, activeVibe]);

  // Curator's Top Picks for discovery showcase rail
  const curatorPicks = useMemo(() => {
    return DANDELI_DESTINATIONS.filter((d) => d.isCuratorPick);
  }, []);

  // Category counts for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: DANDELI_DESTINATIONS.length };
    EXPLORE_CATEGORIES_LIST.forEach((cat) => {
      counts[cat.id] = DANDELI_DESTINATIONS.filter(
        (d) => d.category === cat.id || d.secondaryCategories.includes(cat.id)
      ).length;
    });
    return counts;
  }, []);

  // Category Icon helper
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'Adventure':
        return Flame;
      case 'River & Water':
        return Waves;
      case 'Wildlife':
        return Compass;
      case 'Jungle':
        return TreePine;
      case 'Waterfalls':
        return Droplets;
      case 'Nature':
        return Feather;
      case 'Places to Visit':
        return MapPin;
      case 'Peaceful Escapes':
        return Sparkles;
      default:
        return Compass;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Signature Panoramic Hero Montage */}
      <HeroPanoramicMontage
        badgeIcon={Compass}
        badgeText="CURATED FIELD GUIDE • WESTERN GHATS FLORA & WATERWAYS"
        title="Explore Dandeli"
        tagline="Tucked into the rugged North Karnataka Western Ghats, Dandeli is where timed dam releases on the Kali River surge through prehistoric teak, bamboo, and rosewood canopies. From 300-foot volcanic granite monoliths and thunderous hidden waterfalls to tiger corridors and tranquil mirror backwaters, discover Dandeli through our curated local naturalist guide."
        bullets={[
          { icon: MapPin, text: 'Uttara Kannada, Karnataka' },
          { icon: Compass, text: '15.2427° N, 74.6247° E' },
          { icon: Sparkles, text: '8 Distinct Experience Categories' },
        ]}
        panels={[
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png', alt: 'Kali River Gorge & Morning Waters' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png', alt: 'Ancient Rainforest Canopy' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png', alt: 'Syntheri Volcanic Monolith' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png', alt: 'Cascading Western Ghats Waterfalls' },
        ]}
      />

      {/* 2. Live Naturalist Field Bulletin */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="rounded-2xl bg-white border border-[#E5DFD7] shadow-sm p-4 sm:p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-xs font-sans uppercase tracking-wider font-semibold text-[#2E6B68]">
              Wilderness Field Status
            </span>
            <span className="hidden sm:inline-block w-px h-4 bg-stone-300" />
            <span className="text-xs text-stone-600 font-sans hidden sm:inline-block">
              Live updates from Ganeshgudi & Kulgi Ranger Outposts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
              <Waves className="w-4 h-4 text-[#2E6B68] shrink-0" />
              <div className="truncate">
                <span className="font-medium text-[#1C1D1F]">Kali River Surge: </span>
                <span className="text-stone-600">09:00 AM – 01:30 PM (Class III/IV)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
              <Compass className="w-4 h-4 text-[#C25E3E] shrink-0" />
              <div className="truncate">
                <span className="font-medium text-[#1C1D1F]">Anshi Safari Gates: </span>
                <span className="text-stone-600">06:00 AM & 04:00 PM (12 Vehicles/slot)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
              <Feather className="w-4 h-4 text-[#2E6B68] shrink-0" />
              <div className="truncate">
                <span className="font-medium text-[#1C1D1F]">Hornbill Fig Feeding: </span>
                <span className="text-stone-600">Dawn (06:30 – 09:00 AM) Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Natural Progression Banner: Explore → Activity → Package → Plan Your Trip */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1C1D1F] text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-lg border border-stone-800">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-5">
              <div className="space-y-1">
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#EAE3D8] font-medium flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#2E6B68]" />
                  <span>The Dandeli Travel Blueprint</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  How Exploration Connects Into Your Complete Trip
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-sans font-light max-w-2xl">
                  Every place you discover here links directly to certified activities, all-inclusive cottage packages, and personalized trip planners.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs font-sans text-stone-400">
                <span>Seamless Onward Journey</span>
                <ChevronRight className="w-4 h-4 text-[#2E6B68]" />
              </div>
            </div>

            {/* 4 Steps Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1: Explore (Current) */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-[#2E6B68] text-white font-sans text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-emerald-400 font-sans">
                    You Are Here
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-white font-normal">1. Explore Spots</h3>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    Uncover Kali rapids, Syntheri monoliths, Sathodi falls, and tiger safari ranges.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-sans text-stone-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Curated Local Travel Guide</span>
                </div>
              </div>

              {/* Step 2: Activity */}
              <Link
                to="/activities"
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                    02
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal">
                    2. Choose Activity
                  </h3>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    Match with certified river rafting marshals, open-top 4x4 jeeps, and kayak guides.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <span>Browse Activities</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Step 3: Package */}
              <Link
                to="/packages"
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                    03
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal">
                    3. Bundle Package
                  </h3>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    Combine riverside cottage stays, 3 daily meals, permits, and core adventures.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <span>View Packages</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              {/* Step 4: Plan Your Trip */}
              <Link
                to="/trip-plans"
                className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-stone-800 hover:border-[#2E6B68] transition-all space-y-3 block"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-stone-800 group-hover:bg-[#2E6B68] text-stone-300 group-hover:text-white font-sans text-xs font-medium flex items-center justify-center transition-colors">
                    04
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#EAE3D8] transition-colors font-normal">
                    4. Plan Your Trip
                  </h3>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    Personalized day-by-day itineraries tailored for Solo, Couples, Friends, or Families.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-sans text-[#2E6B68] group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <span>Open Trip Planner</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curator's Spotlight: Comfortable Horizontal Rail on Mobile, Showcase Grid on Desktop */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5DFD7] pb-4">
          <div className="space-y-1">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#C25E3E] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curator's Top Picks • Must-Experience Essentials</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              Handpicked Dandeli Landmarks
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
              Iconic destinations that form the foundational character of the Western Ghats.
            </p>
          </div>

          <span className="text-xs text-stone-500 font-sans hidden sm:block">
            Swipe sideways on mobile for quick discovery
          </span>
        </div>

        {/* Mobile Horizontal Rail / Desktop 3-Col Rail */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 no-scrollbar snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {curatorPicks.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between w-[84vw] max-w-[340px] shrink-0 snap-start sm:w-auto"
            >
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#2E6B68] text-[10px] font-sans font-medium text-white shadow-sm">
                      {item.keyBadge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-sans text-stone-300 block">{item.zone}</span>
                    <h3 className="font-serif text-xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3.5">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {/* Useful Highlight Box */}
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-wider text-[#C25E3E] font-medium">
                      <Info className="w-3.5 h-3.5 shrink-0" />
                      <span>Field Note & Timing</span>
                    </div>
                    <p className="text-xs text-stone-700 font-sans leading-snug">
                      {item.usefulHighlight}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                {/* Onward Bridge Mini-Chips */}
                <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5 text-[11px] font-sans">
                  <Link
                    to={item.journeyBridge.activity.slug}
                    className="px-2 py-1 rounded-md bg-[#F4EFEA] hover:bg-[#EAE3D8] text-[#1C1D1F] transition-colors flex items-center gap-1"
                  >
                    <span>Activity: {item.journeyBridge.activity.title}</span>
                  </Link>
                </div>

                {/* View Details Action Button (Spacious min-h-[44px] for mobile accessibility) */}
                <Link
                  to={`/explore/${item.slug}`}
                  className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-between border border-[#E5DFD7] shadow-sm"
                >
                  <span>View Details & Guide</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Main Exploration Hub: Filters, Discovery Rails & Directory */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DFD7] pb-6">
            <div className="space-y-1.5">
              <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#2E6B68]">
                DANDELI DISCOVERY DIRECTORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
                Browse by Experience Category
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-2xl font-light">
                Discover destinations and wilderness experiences organized logically by terrain, water dynamics, and travel vibe.
              </p>
            </div>

            {/* Live Search Field */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spots, falls, rapids..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[#E5DFD7] text-xs font-sans text-[#1C1D1F] focus:outline-none focus:border-[#2E6B68] transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Navigation Pills (Mobile Comfortable Rail with Smooth Horizontal Overflow) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {/* "All" Tab */}
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-[#E5DFD7] hover:bg-[#FAF7F2]'
                }`}
              >
                <span>All Experiences</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-sans ${
                    selectedCategory === 'All' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {categoryCounts['All']}
                </span>
              </button>

              {/* 8 Required Category Tabs */}
              {EXPLORE_CATEGORIES_LIST.map((cat) => {
                const CatIcon = getCategoryIcon(cat.id);
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#2E6B68] text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-[#E5DFD7] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <CatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#EAE3D8]' : 'text-stone-500'}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-sans ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {categoryCounts[cat.id] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Vibe Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-sans text-stone-600 -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider shrink-0 mr-1">
                Filter By Vibe:
              </span>
              {[
                { id: 'all', label: 'Any Vibe' },
                { id: 'curator', label: 'Curator Favorites' },
                { id: 'family', label: 'Family Friendly' },
                { id: 'adrenaline', label: 'Adrenaline & Rapids' },
                { id: 'relaxed', label: 'Peaceful & Gentle' },
              ].map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveVibe(v.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer shrink-0 ${
                    activeVibe === v.id
                      ? 'bg-[#EAE3D8] text-[#1C1D1F] font-medium border border-[#D5CEC2]'
                      : 'bg-[#FAF7F2] text-stone-600 hover:bg-[#EFE9DF] border border-transparent'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Destination & Experience Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-sans text-stone-500">
            <span>
              Showing {filteredDestinations.length} curated destination{filteredDestinations.length === 1 ? '' : 's'}
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            </span>
            {(selectedCategory !== 'All' || activeVibe !== 'all' || searchQuery !== '') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setActiveVibe('all');
                  setSearchQuery('');
                }}
                className="text-[#2E6B68] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-[#E5DFD7] space-y-4">
              <Compass className="w-10 h-10 text-stone-400 mx-auto" />
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  No destinations found matching your filters
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Try adjusting your search query or selecting "All Experiences".
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setActiveVibe('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium"
              >
                Show All Destinations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredDestinations.map((item) => {
                const CatIcon = getCategoryIcon(item.category);
                return (
                  <div
                    key={item.id}
                    className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        {/* Badges on Image */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15 flex items-center gap-1">
                            <CatIcon className="w-3 h-3 text-[#EAE3D8]" />
                            <span>{item.category}</span>
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-sans font-medium text-stone-800 shadow-sm">
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Zone */}
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-[10px] font-sans text-stone-300 uppercase tracking-wider block">
                            {item.zone}
                          </span>
                          <h3 className="font-serif text-xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                            {item.name}
                          </h3>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 space-y-4">
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light line-clamp-2">
                          {item.shortDescription}
                        </p>

                        {/* Useful Highlight Box (Explicitly requested) */}
                        <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] space-y-1">
                          <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-wider text-[#C25E3E] font-medium">
                            <Info className="w-3.5 h-3.5 shrink-0" />
                            <span>Useful Highlight / Field Note</span>
                          </div>
                          <p className="text-xs text-stone-800 font-sans leading-relaxed">
                            {item.usefulHighlight}
                          </p>
                        </div>

                        {/* Natural Journey Flow: Explore → Activity → Package → Trip Plan */}
                        <div className="pt-2 border-t border-stone-100 space-y-2">
                          <span className="text-[10px] font-sans uppercase tracking-wider text-stone-400 font-medium block">
                            Connected Travel Pathway:
                          </span>
                          <div className="space-y-1.5 text-xs font-sans">
                            <Link
                              to={item.journeyBridge.activity.slug}
                              className="group/bridge flex items-center justify-between text-stone-700 hover:text-[#2E6B68] transition-colors p-1.5 rounded-lg hover:bg-[#FAF7F2]"
                            >
                              <span className="truncate">
                                <strong className="font-medium text-[#1C1D1F]">Activity: </strong>
                                {item.journeyBridge.activity.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/bridge:text-[#2E6B68] group-hover/bridge:translate-x-0.5 transition-all shrink-0" />
                            </Link>

                            <Link
                              to={item.journeyBridge.travelPackage.slug}
                              className="group/bridge flex items-center justify-between text-stone-700 hover:text-[#2E6B68] transition-colors p-1.5 rounded-lg hover:bg-[#FAF7F2]"
                            >
                              <span className="truncate">
                                <strong className="font-medium text-[#1C1D1F]">Package: </strong>
                                {item.journeyBridge.travelPackage.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/bridge:text-[#2E6B68] group-hover/bridge:translate-x-0.5 transition-all shrink-0" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions: Large, Accessible View Details Button */}
                    <div className="p-5 pt-0">
                      <Link
                        to={`/explore/${item.slug}`}
                        className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-all flex items-center justify-between border border-[#E5DFD7] shadow-sm active:scale-98"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 7. EDITORIAL STORYTELLING BREAK: The Three Ecological Zones of Dandeli */}
        <div className="my-12 p-6 sm:p-10 rounded-3xl bg-white border border-[#E5DFD7] shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Ecosystem Architecture • Western Ghats</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1D1F]">
              The Three Distinct Wilderness Zones of Dandeli
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Dandeli is not a single uniform forest. It spans three distinct ecological habitats, each shaped by different terrain, water dynamics, and wildlife corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Zone 1: Kali River Canyon */}
            <div className="space-y-3.5 group">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] border border-[#E5DFD7] shadow-sm relative">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png"
                  alt="The Kali River Canyon at Ganeshgudi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-sans font-medium uppercase text-[#FAF7F2] border border-white/10">
                  Zone I • River Gorge
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F] group-hover:text-[#2E6B68] transition-colors">
                  The Kali River Canyon
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                  A high-volume hydrological corridor powered by Supa Dam. White-water rapids churn from 09:00 AM to 01:30 PM, softening into glass-calm backwaters at sunset.
                </p>
                <div className="text-[11px] font-sans text-stone-500 pt-1 flex items-center gap-2">
                  <span className="font-medium text-[#1C1D1F]">Key Sights:</span>
                  <span>Ganeshgudi rapids, Supa backwaters, coracle bays</span>
                </div>
              </div>
            </div>

            {/* Zone 2: Ancient Monoliths */}
            <div className="space-y-3.5 group">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] border border-[#E5DFD7] shadow-sm relative">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png"
                  alt="Syntheri Rocks monolith and Kaneri river"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-sans font-medium uppercase text-[#FAF7F2] border border-white/10">
                  Zone II • Ancient Monoliths
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F] group-hover:text-[#2E6B68] transition-colors">
                  Volcanic & Karst Monoliths
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                  Ancient 300-foot granite monoliths sculpted by the torrential Kaneri River over millions of years. Cool microclimates and natural limestone hollows.
                </p>
                <div className="text-[11px] font-sans text-stone-500 pt-1 flex items-center gap-2">
                  <span className="font-medium text-[#1C1D1F]">Key Sights:</span>
                  <span>Syntheri Rocks, Kavala Caves, canyon gorges</span>
                </div>
              </div>
            </div>

            {/* Zone 3: Tiger & Hornbill Canopy */}
            <div className="space-y-3.5 group">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] border border-[#E5DFD7] shadow-sm relative">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png"
                  alt="Anshi National park rainforest canopy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-sans font-medium uppercase text-[#FAF7F2] border border-white/10">
                  Zone III • Tiger Canopy
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F] group-hover:text-[#2E6B68] transition-colors">
                  The Protected Anshi Canopy
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                  1,300 sq km of dense semi-evergreen and moist deciduous teak forest. Home to leopards, black panthers, barking deer, and all four South Indian hornbills.
                </p>
                <div className="text-[11px] font-sans text-stone-500 pt-1 flex items-center gap-2">
                  <span className="font-medium text-[#1C1D1F]">Key Sights:</span>
                  <span>Anshi Tiger Reserve, timber nature trails, bird hides</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Local Naturalist Travel Tips & Knowledge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD7] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#2E6B68] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Water Safety & Seasonal Dynamics</span>
            </div>
            <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
              How the Kali River Hydrology Works
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Unlike snow-fed Himalayan rivers, white water in Dandeli is regulated by controlled releases from the Supa Dam upstream. This creates a remarkably consistent and reliable surge of Class III and IV rapids daily between 09:00 AM and 01:30 PM from October through June.
            </p>
            <div className="pt-2 text-xs text-stone-700 font-sans space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B68]" />
                <span>150N high-buoyancy life jackets keep non-swimmers completely safe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B68]" />
                <span>Certified rescue kayakers follow every commercial raft team</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD7] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#C25E3E] font-medium">
              <Compass className="w-4 h-4" />
              <span>Forest Permitting & Etiquette</span>
            </div>
            <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
              Visiting Anshi Tiger Reserve Safely
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
              The core wildlife zones of the Kali Tiger Reserve operate under strict government quotas to prevent animal disturbance. Private vehicles are prohibited inside the sanctuary; visitors must board authorized open-top 4x4 forest department jeeps accompanied by accredited local trackers.
            </p>
            <div className="pt-2 text-xs text-stone-700 font-sans space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>Wear muted, earthy forest colors (khaki, olive green, dark brown)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>Maintain quiet speech to hear chital deer alarm barks</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Next Steps Pathway Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4EFEA] border border-[#E5DFD7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl text-center md:text-left">
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#2E6B68] font-medium">
              Next Step in Your Journey
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              Ready to turn these destinations into your trip?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-sans font-light">
              Choose your favorite activities, explore all-inclusive packages, or talk to our native Ganeshgudi team to tailor dates around dam releases and forest quotas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/activities"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE3D8] text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-all text-center border border-[#E5DFD7]"
            >
              Browse Activities
            </Link>
            <Link
              to="/packages"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <span>Explore Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
