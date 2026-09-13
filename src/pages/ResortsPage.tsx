import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  TreePine,
  Waves,
  Flame,
  Users,
  Sparkles,
  Compass,
  MapPin,
  Bed,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Utensils,
  ChevronRight,
  Eye,
  Info,
} from 'lucide-react';
import { RESORT_STAYS } from '../data/dandeliData';
import { ResortStay } from '../types';
import { optimizeCloudinaryUrl } from '../utils/imageOptimization';

export type CuratedCategory = 'all' | 'forest' | 'riverside' | 'adventure' | 'family' | 'nature' | 'camping';

interface CategoryMeta {
  id: CuratedCategory;
  label: string;
  tagline: string;
  atmosphereSnippet: string;
  icon: React.ElementType;
  heroImage: string;
  idealFor: string;
}

const CURATED_CATEGORIES: CategoryMeta[] = [
  {
    id: 'forest',
    label: 'Forest',
    tagline: 'Old-Growth Canopy Treehouses & Wildlife Sanctuaries',
    atmosphereSnippet:
      'Sleep 35 feet up among teak branches or inside hand-hewn granite sanctuaries bordering the Anshi tiger corridor.',
    icon: TreePine,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    idealFor: 'Birdwatchers, wildlife photographers, quiet couples & nature seekers',
  },
  {
    id: 'riverside',
    label: 'River-side',
    tagline: 'Waterfront Verandas & Direct Kali River Access',
    atmosphereSnippet:
      'Step directly from your private wooden deck onto the riverbank, wake to morning fog, and launch kayaks at dawn.',
    icon: Waves,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_pool_deck_4K_faithful.png',
    idealFor: 'Paddlers, couples, photographers & travellers seeking water-soundscapes',
  },
  {
    id: 'adventure',
    label: 'Adventure Camps',
    tagline: 'High-Energy Rafting Basecamps & Riverfront Lawns',
    atmosphereSnippet:
      'Staging grounds for white-water rapid runs, volleyball lawns, gear lockers, and evening campfire barbecue.',
    icon: Flame,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_resort_cabins_4K_faithful.png',
    idealFor: 'Active friend groups, adventure squads, college reunions & team offsites',
  },
  {
    id: 'family',
    label: 'Family',
    tagline: 'Level Paths, Safe Shallows & Interconnected Cottages',
    atmosphereSnippet:
      'Effortless comfort for children and grandparents: spring-fed shallow splash pools, flat paved garden walks, and mild buffets.',
    icon: Users,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    idealFor: 'Multi-generational families with kids & grandparents, family reunions',
  },
  {
    id: 'nature',
    label: 'Nature',
    tagline: 'Heritage Spice Plantation Courtyards & Slow Living',
    atmosphereSnippet:
      'Terracotta-roofed farmsteads surrounded by organic cardamoms, pepper vines, and authentic wood-fired Malnad hospitality.',
    icon: Sparkles,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_cottage_4K_faithful.png',
    idealFor: 'Cultural travelers, solo writers, plant enthusiasts & peaceful retreats',
  },
  {
    id: 'camping',
    label: 'Camping',
    tagline: 'Weatherproof Canvas Stays Under Dark Skies',
    atmosphereSnippet:
      'Safari-grade canvas tents pitched on raised timber platforms by the river, crackling bonfires, and stargazing.',
    icon: Compass,
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_640/v1788989523/dandeli_cottages_night_4K_faithful.png',
    idealFor: 'Stargazers, backpackers, young couples & outdoor enthusiasts',
  },
];

// Helper to categorize stays into the 6 user-specified categories
const getStayCategory = (stay: ResortStay): 'forest' | 'riverside' | 'adventure' | 'family' | 'nature' | 'camping' => {
  if (stay.category === 'forest') return 'forest';
  if (stay.category === 'river' || stay.category === 'riverside') return 'riverside';
  if (stay.category === 'adventure') return 'adventure';
  if (stay.category === 'family') return 'family';
  if (stay.category === 'nature' || stay.category === 'homestay') return 'nature';
  if (stay.category === 'camping') return 'camping';
  return 'forest';
};

interface ResortsPageProps {
  onOpenEnquiry?: (preselectedItem?: string) => void;
}

export const ResortsPage: React.FC<ResortsPageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<CuratedCategory>('all');
  const [selectedImageIndexMap, setSelectedImageIndexMap] = useState<Record<string, number>>({});

  // Group all stays by the 6 categories
  const staysByCategory = useMemo(() => {
    const map: Record<'forest' | 'riverside' | 'adventure' | 'family' | 'nature' | 'camping', ResortStay[]> = {
      forest: [],
      riverside: [],
      adventure: [],
      family: [],
      nature: [],
      camping: [],
    };

    RESORT_STAYS.forEach((stay) => {
      const cat = getStayCategory(stay);
      map[cat].push(stay);
    });

    return map;
  }, []);

  // Filtered categories to display
  const activeCategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return CURATED_CATEGORIES;
    }
    return CURATED_CATEGORIES.filter((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  const totalStaysCount = RESORT_STAYS.length;

  const handleThumbnailClick = (stayId: string, imgIndex: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImageIndexMap((prev) => ({
      ...prev,
      [stayId]: imgIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. EDITORIAL MASTHEAD: "Where would I love to stay in Dandeli?" */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD7] overflow-hidden">
        {/* Subtle topographic background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none -z-10">
          <svg className="w-full h-full text-stone-300" viewBox="0 0 1200 600" fill="none">
            <path d="M-100 150 C 300 100, 600 300, 1300 120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M-100 280 C 400 180, 700 420, 1300 240" stroke="currentColor" strokeWidth="1" />
            <path d="M-100 420 C 350 320, 800 520, 1300 360" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#2E6B68]">
              CURATED ACCOMMODATION GUIDE • DANDELI WILDERNESS
            </span>
            <span className="w-8 h-px bg-[#2E6B68]/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1D1F] leading-[1.12]">
                Where would you love to stay in Dandeli?
              </h1>
              <p className="text-stone-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-sans font-light">
                Dandeli offers no sterile concrete hotel corridors or multinational chain lobbies—and that is its greatest luxury.
                Sleeping here means waking to hornbill flight calls inside an old-growth teak treehouse, stepping directly from
                your wooden veranda onto river lawns where kayaks are moored, or sharing ancestral wood-fired meals in a spice grove.
                Every property in this guide is personally inspected, environmentally licensed, and run by native hosts.
              </p>
            </div>

            {/* Editorial Hallmarks - Honest Standards (No fake ratings or reviews) */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-[#2E6B68] block">
                CURATED FIELD STANDARDS
              </span>
              <ul className="space-y-2 text-xs font-sans text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span>Personally inspected wilderness properties only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span>All 3 home-style meals included with stay</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span>Direct local tariffs with zero middleman markups</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. CATEGORY SELECTOR: Forest, River-side, Adventure Camps, Family, Nature, Camping */}
          <div className="pt-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === 'all'
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-white border border-[#E5DFD7] text-stone-700 hover:bg-[#EFE9DF]'
                }`}
              >
                <span>All Stays</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                  selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                }`}>
                  {totalStaysCount}
                </span>
              </button>

              {CURATED_CATEGORIES.map((cat) => {
                const CatIcon = cat.icon;
                const count = staysByCategory[cat.id as keyof typeof staysByCategory]?.length || 0;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#1C1D1F] text-white shadow-sm'
                        : 'bg-white border border-[#E5DFD7] text-stone-700 hover:bg-[#EFE9DF]'
                    }`}
                  >
                    <CatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#EAE3D8]' : 'text-[#2E6B68]'}`} />
                    <span>{cat.label}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CURATED STAYS SECTION */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {activeCategories.map((categoryMeta) => {
          const categoryStays = staysByCategory[categoryMeta.id as keyof typeof staysByCategory] || [];
          if (categoryStays.length === 0) return null;

          const CategoryIcon = categoryMeta.icon;

          return (
            <div key={categoryMeta.id} className="space-y-8">
              {/* Category Editorial Chapter Header */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD7] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-sans font-medium text-[#2E6B68] uppercase tracking-wider">
                    <CategoryIcon className="w-4 h-4" />
                    <span>{categoryMeta.label} Living</span>
                    <span className="text-stone-400">•</span>
                    <span className="text-stone-500 font-normal">{categoryStays.length} {categoryStays.length === 1 ? 'Stay' : 'Stays'}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1D1F]">
                    {categoryMeta.tagline}
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {categoryMeta.atmosphereSnippet}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD7] text-xs text-stone-600 font-sans">
                  <span className="font-medium text-[#1C1D1F]">Best Match:</span>
                  <span>{categoryMeta.idealFor}</span>
                </div>
              </div>

              {/* Stays Cards Grid - Prioritizing Photography & Large Comfortable Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                {categoryStays.map((stay) => {
                  const galleryImages = stay.gallery && stay.gallery.length > 0 ? stay.gallery : [stay.coverImage];
                  const currentImageIndex = selectedImageIndexMap[stay.id] ?? 0;
                  const activeImage = galleryImages[currentImageIndex] || stay.coverImage;

                  return (
                    <article
                      key={stay.id}
                      className="group rounded-3xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* 1. PHOTOGRAPHY FIRST: Large, comfortable hero aspect */}
                        <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-stone-900">
                          <img
                            src={optimizeCloudinaryUrl(activeImage, 720)}
                            alt={stay.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ objectPosition: (stay as any).objectPosition || 'center' }}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Top Tag: Category & Location Area */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                            <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/20 flex items-center gap-1.5">
                              <CategoryIcon className="w-3 h-3 text-[#EAE3D8]" />
                              <span>{categoryMeta.label}</span>
                            </span>

                            {stay.distanceToRiver && (
                              <span className="px-3 py-1 rounded-lg bg-[#FAF8F5]/90 backdrop-blur-md text-[11px] font-sans font-medium text-[#1C1D1F] border border-black/10">
                                {stay.distanceToRiver}
                              </span>
                            )}
                          </div>

                          {/* Interactive Photo Switcher Strip */}
                          {galleryImages.length > 1 && (
                            <div className="absolute bottom-3 right-4 z-10 flex items-center gap-1.5 p-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/15">
                              {galleryImages.slice(0, 4).map((thumb, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={(e) => handleThumbnailClick(stay.id, idx, e)}
                                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                    currentImageIndex === idx
                                      ? 'bg-white scale-125'
                                      : 'bg-white/40 hover:bg-white/70'
                                  }`}
                                  title={`View photo ${idx + 1}`}
                                />
                              ))}
                            </div>
                          )}

                          {/* Bottom Gradient Caption on Photo */}
                          <div className="absolute bottom-3 left-4 right-20 text-white">
                            <span className="text-[11px] font-sans text-stone-300 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#EAE3D8] shrink-0" />
                              <span className="truncate">{stay.locationArea}</span>
                            </span>
                          </div>
                        </div>

                        {/* 2. EDITORIAL DETAILS: Clean, concise & informative */}
                        <div className="p-6 sm:p-8 space-y-6">
                          {/* Name & Stay Type */}
                          <div className="space-y-2">
                            <div className="inline-block text-[11px] font-sans font-medium uppercase tracking-wider text-[#2E6B68] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E5DFD7]">
                              {stay.stayType}
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F] group-hover:text-[#2E6B68] transition-colors leading-tight">
                              <Link to={`/resorts/${stay.id}`}>
                                {stay.name}
                              </Link>
                            </h3>
                          </div>

                          {/* ATMOSPHERE: Sensory description of what living here feels like */}
                          <div className="p-4 rounded-2xl bg-[#FAF8F5] border-l-2 border-[#2E6B68] space-y-1">
                            <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#2E6B68] block">
                              ATMOSPHERE & VIBE
                            </span>
                            <p className="font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
                              "{stay.atmosphereNote || stay.tagline}"
                            </p>
                          </div>

                          {/* USEFUL HIGHLIGHTS: 4 honest tangible bullets */}
                          <div className="space-y-2 font-sans">
                            <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider block">
                              USEFUL HIGHLIGHTS:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                              {stay.facilities.slice(0, 4).map((facility, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B68] shrink-0 mt-0.5" />
                                  <span className="leading-snug">{facility}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* SUITABLE TRAVELLER TYPE */}
                          <div className="pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-600 font-sans">
                            <span className="font-medium text-[#1C1D1F] shrink-0">Suitable For:</span>
                            <span className="font-light">{stay.suitableFor}</span>
                          </div>
                        </div>
                      </div>

                      {/* 3. CARD FOOTER: Obvious View Details & Direct Consultation */}
                      <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] uppercase font-sans text-stone-400 block tracking-wider font-medium">
                            Tariff Guidance
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="font-serif text-2xl font-normal text-[#1C1D1F]">
                              ₹{stay.pricePerNight.toLocaleString()}
                            </span>
                            <span className="text-xs text-stone-500 font-sans">/ person</span>
                          </div>
                          <span className="text-[10px] text-stone-500 font-sans block">
                            Includes all 3 meals & activities
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {onOpenEnquiry && (
                            <button
                              type="button"
                              onClick={() => onOpenEnquiry(stay.name)}
                              className="flex-1 sm:flex-initial min-h-[48px] px-4 py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EFE9DF] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-all border border-[#E5DFD7] flex items-center justify-center gap-1.5 cursor-pointer"
                              title="Ask about availability for this stay"
                            >
                              <span>Enquire</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#2E6B68]" />
                            </button>
                          )}

                          <Link
                            to={`/resorts/${stay.id}`}
                            className="flex-1 sm:flex-initial min-h-[48px] px-6 py-3 rounded-xl bg-[#1C1D1F] hover:bg-[#2E6B68] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 group/btn"
                          >
                            <span>View Details</span>
                            <ChevronRight className="w-4 h-4 text-stone-300 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* 4. EDITORIAL ESSAY: "HOW WILDERNESS ACCOMMODATIONS WORK IN DANDELI" */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DFD7] shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-sans uppercase tracking-widest text-[#2E6B68] font-medium flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>Traveler’s Field Notes</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1D1F]">
              What to Expect When Sleeping in the Dandeli Wilderness
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Staying inside a protected reserve forest is fundamentally different from booking a city hotel.
              Here is how accommodation works across our hand-inspected properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            {/* Note 1 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7]">
              <div className="w-8 h-8 rounded-lg bg-[#2E6B68]/10 text-[#2E6B68] flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                1. All Meals Are Included
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                Because properties are nestled inside forest belts kilometers away from commercial markets, stays operate on an all-inclusive meal model. Fresh hot breakfasts, regional Karnataka lunches, and evening wood-fired dinners are part of your stay.
              </p>
            </div>

            {/* Note 2 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7]">
              <div className="w-8 h-8 rounded-lg bg-[#2E6B68]/10 text-[#2E6B68] flex items-center justify-center">
                <Waves className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                2. The Rhythm of the Kali River
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                Water flow on the river is governed by the Supa Hydroelectric Dam. Mornings feature glass-like mirror water perfect for quiet kayaking and coracle rides. Around mid-day, released water creates exhilarating rafting rapids, settling down again by sunset.
              </p>
            </div>

            {/* Note 3 */}
            <div className="space-y-2.5 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7]">
              <div className="w-8 h-8 rounded-lg bg-[#2E6B68]/10 text-[#2E6B68] flex items-center justify-center">
                <TreePine className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                3. Quiet-Hours & Dark Skies
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans font-light">
                Licensed eco-stays maintain strict silence after 9:30 PM. No blaring sound systems or commercial club music are allowed in the tiger buffer. Nights are dedicated to acoustic campfires, river soundscapes, and undisturbed dark-sky stargazing.
              </p>
            </div>
          </div>
        </div>

        {/* 5. CONCIERGE CALLOUT: Direct Local Consultation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1D1F] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium block">
              DANDELI STAYS DESK
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white">
              Unsure which wilderness stay matches your group?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Tell us your group size, travel dates, and whether you prefer riverbanks, treehouses, or quiet plantation homestays. Our local field desk will match you with verified properties without agent commissions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenEnquiry ? (
              <button
                type="button"
                onClick={() => onOpenEnquiry('Resort & Wilderness Stay Consultation')}
                className="w-full sm:w-auto min-h-[48px] py-3.5 px-8 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ask Stays Desk</span>
                <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full sm:w-auto min-h-[48px] py-3.5 px-8 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Ask Stays Desk</span>
                <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
              </Link>
            )}

            <Link
              to="/trip-plans"
              className="w-full sm:w-auto min-h-[48px] py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-sans font-medium uppercase tracking-wider transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Explore Trip Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
