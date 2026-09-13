import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Camera,
  Search,
  Grid3X3,
  LayoutGrid,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Check,
  Compass,
  ArrowUpRight,
  SlidersHorizontal,
  Sparkles,
  Phone,
  Waves,
  TreePine,
  ShieldCheck,
  Calendar,
  MapPin,
  Info
} from 'lucide-react';
import {
  DANDELI_IMAGES,
  DandeliImage,
  ImageCategory,
  getThumbUrl,
  getHighResUrl,
  getImagesByCategory
} from '../data/imageLibrary';

interface GalleryPageProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

interface CategoryFilterItem {
  id: ImageCategory;
  label: string;
  icon?: string;
}

const CATEGORIES: CategoryFilterItem[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'rafting', label: 'Rafting Rapids' },
  { id: 'resorts', label: 'Resorts & Stays' },
  { id: 'adventure', label: 'Adventure & Zipline' },
  { id: 'river', label: 'River & Coracle' },
  { id: 'kayaking', label: 'Kayaking' },
  { id: 'wildlife', label: 'Wildlife & Tigers' },
  { id: 'safari', label: 'Jungle Safari' },
  { id: 'waterfalls', label: 'Waterfalls' },
  { id: 'forest', label: 'Rainforest Canopy' },
  { id: 'camping', label: 'Tent & Camps' },
  { id: 'family', label: 'Group Moments' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<ImageCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(16);

  // Reset pagination when category or search changes
  useEffect(() => {
    setVisibleCount(16);
  }, [activeCategory, searchQuery]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: DANDELI_IMAGES.length };
    DANDELI_IMAGES.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered images based on category and search
  const filteredImages = useMemo(() => {
    return DANDELI_IMAGES.filter((img) => {
      if (activeCategory !== 'all' && img.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = img.title.toLowerCase().includes(query);
        const matchesDesc = img.description.toLowerCase().includes(query);
        const matchesCategory = img.category.toLowerCase().includes(query);
        const matchesAlt = img.alt.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesAlt) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Slice for progressive rendering
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  // Current active lightbox image
  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  // Preload ONLY next and previous image for instant lightbox navigation
  useEffect(() => {
    if (lightboxIndex === null || filteredImages.length === 0) return;
    const targetW = typeof window !== 'undefined' && window.innerWidth <= 768 ? 960 : 1600;
    const nextIdx = lightboxIndex < filteredImages.length - 1 ? lightboxIndex + 1 : 0;
    const prevIdx = lightboxIndex > 0 ? lightboxIndex - 1 : filteredImages.length - 1;

    const nextImg = filteredImages[nextIdx];
    const prevImg = filteredImages[prevIdx];

    if (nextImg) {
      const img1 = new Image();
      img1.src = getHighResUrl(nextImg, targetW);
    }
    if (prevImg) {
      const img2 = new Image();
      img2.src = getHighResUrl(prevImg, targetW);
    }
  }, [lightboxIndex, filteredImages]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
    },
    [lightboxIndex, filteredImages.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredImages.length - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredImages.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const handleCopyLink = (img: DandeliImage) => {
    const url = getHighResUrl(img, 1800);
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F] pt-20 sm:pt-24 pb-20">
      {/* 1. Header Banner */}
      <section className="relative bg-[#18191B] text-white py-12 sm:py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={getHighResUrl(DANDELI_IMAGES[16] || DANDELI_IMAGES[0], 1600)}
            alt="Aerial forest canopy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#EAE3D8] text-[11px] font-sans font-medium uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-[#EAE3D8]" />
            <span>Authentic Dandeli Photography Archive</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                Moments from the Kali River & Rainforests
              </h1>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-2xl">
                Browse 48 authentic photographs capturing real white water rapids, jungle safaris, wooden cottages, resort pools, and secluded Western Ghats backwaters. Every image is taken on-location across Ganeshgudi, Kulgi, and Anshi.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs font-sans shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                <span className="font-mono text-white font-semibold">{DANDELI_IMAGES.length}</span> Authentic Captures
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                <span className="font-mono text-[#4E9B96] font-semibold">12</span> Wilderness Themes
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                <span className="font-mono text-[#D97D5F] font-semibold">4K</span> Ultra HD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Filter & Controls Bar */}
      <section className="sticky top-14 sm:top-16 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD7] py-3.5 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Top row: Search & View Modes */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search photos by activity, mood, or setting (e.g. rapids, tiger, pool, cottage)..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-[#E5DFD7] rounded-xl text-xs sm:text-sm text-[#1C1D1F] placeholder-stone-400 focus:outline-none focus:border-[#2E6B68] focus:ring-1 focus:ring-[#2E6B68] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results count & layout toggles */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-sans">
              <span className="text-stone-500">
                Showing <strong className="text-[#1C1D1F] font-medium">{filteredImages.length}</strong> photo{filteredImages.length === 1 ? '' : 's'}
              </span>

              <div className="flex items-center gap-1 p-1 bg-white border border-[#E5DFD7] rounded-xl">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-1.5 rounded-lg transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                    viewMode === 'masonry'
                      ? 'bg-[#2E6B68] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#1C1D1F] hover:bg-stone-100'
                  }`}
                  title="Editorial Masonry View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Collage</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#2E6B68] text-white shadow-xs'
                      : 'text-stone-600 hover:text-[#1C1D1F] hover:bg-stone-100'
                  }`}
                  title="Clean Equal Grid View"
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal scrollable category pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              if (cat.id !== 'all' && count === 0) return null;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-150 flex items-center gap-1.5 cursor-pointer whitespace-nowrap interactive-tap active:scale-95 ${
                    isActive
                      ? 'bg-[#1C1D1F] text-white font-medium shadow-xs'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-[#E5DFD7]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Photos Grid / Masonry Showcase */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E5DFD7] p-8 space-y-4">
            <Camera className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="font-serif text-xl text-[#1C1D1F]">No photos found matching your criteria</h3>
            <p className="text-stone-500 text-xs sm:text-sm font-sans max-w-md mx-auto">
              Try adjusting your search terms or switch back to "All Photos" to see the complete Dandeli collection.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#2E6B68] text-white text-xs font-sans font-medium rounded-xl hover:bg-[#235452] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'masonry' ? (
          /* Masonry Columns for Natural Aspect Ratios - High Visibility & Sturdy Layout */
          <div>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
              {visibleImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative break-inside-avoid mb-5 rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.985] interactive-tap flex flex-col"
                >
                  <div className="relative overflow-hidden bg-stone-200/60 min-h-[180px]">
                    <img
                      src={getThumbUrl(img, 540)}
                      srcSet={`
                        ${getThumbUrl(img, 380)} 380w,
                        ${getThumbUrl(img, 540)} 540w,
                        ${getThumbUrl(img, 720)} 720w
                      `}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      style={{ objectPosition: img.objectPosition }}
                    />

                    {/* Top Badges (Always visible on photo) */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                        {img.category}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-black/50 text-white backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#2E6B68] group-hover:border-[#2E6B68] transition-colors shadow-xs">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Subtle Gradient Veil on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Information Card - Fully Visible Across All Screen Sizes */}
                  <div className="p-4 bg-white border-t border-[#E5DFD7] flex flex-col justify-between space-y-2.5">
                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg font-medium text-[#1C1D1F] leading-snug group-hover:text-[#2E6B68] transition-colors">
                        {img.title}
                      </h4>
                      <p className="text-xs font-sans text-stone-600 font-light leading-relaxed line-clamp-2">
                        {img.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-sans">
                      <span className="text-[#2E6B68] font-medium flex items-center gap-1 group-hover:underline">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                        {img.width > 2500 ? '4K UHD' : 'HD'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progressive Load More */}
            {visibleCount < filteredImages.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredImages.length))}
                  className="px-6 py-3 rounded-xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] hover:bg-[#FAF7F2] text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-xs active:scale-98 cursor-pointer"
                >
                  Load More Photos ({filteredImages.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Uniform Grid View - High Visibility */
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {visibleImages.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col active:scale-[0.985] interactive-tap"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-200/60">
                    <img
                      src={getThumbUrl(img, 540)}
                      srcSet={`
                        ${getThumbUrl(img, 380)} 380w,
                        ${getThumbUrl(img, 540)} 540w,
                        ${getThumbUrl(img, 720)} 720w
                      `}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      style={{ objectPosition: img.objectPosition }}
                    />

                    {/* Top Badges (Always visible) */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                        {img.category}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-black/50 text-white backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#2E6B68] group-hover:border-[#2E6B68] transition-colors shadow-xs">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <div className="p-4 bg-white border-t border-[#E5DFD7] flex-1 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-medium text-[#1C1D1F] leading-snug group-hover:text-[#2E6B68] transition-colors line-clamp-1">
                        {img.title}
                      </h4>
                      <p className="text-xs font-sans text-stone-600 font-light leading-relaxed line-clamp-2">
                        {img.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-sans">
                      <span className="text-[#2E6B68] font-medium flex items-center gap-1 group-hover:underline">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                        {img.width > 2500 ? '4K UHD' : 'HD'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progressive Load More */}
            {visibleCount < filteredImages.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredImages.length))}
                  className="px-6 py-3 rounded-xl bg-white border border-[#E5DFD7] hover:border-[#2E6B68] hover:bg-[#FAF7F2] text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-xs active:scale-98 cursor-pointer"
                >
                  Load More Photos ({filteredImages.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* 4. Customer Enquiry CTA Bridge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E5DFD7] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#2E6B68] text-xs font-sans font-medium uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Experiences, Not Generic Stock</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1D1F] font-normal">
              Want to experience Dandeli like this?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Every photo here represents real activities hosted at our Ganeshgudi and Anshi campsites. Tell our native trip planners which photo caught your eye and we'll craft your exact itinerary.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry('Gallery Custom Trip Planning')}
              className="py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>Plan This Experience</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919481245890?text=Hi%20Dandeli%20Wilds%2C%20I%20saw%20your%20photo%20gallery%20and%20want%20to%20plan%20a%20trip!"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-6 rounded-xl bg-[#FAF7F2] hover:bg-stone-100 border border-[#E5DFD7] text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-colors"
            >
              WhatsApp Desk
            </a>
          </div>
        </div>
      </section>

      {/* 5. Full-Screen Touch & Keyboard Lightbox Modal */}
      {lightboxIndex !== null && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between select-none animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 text-white border-b border-white/10 z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-400">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
              <span className="hidden sm:inline text-stone-500">•</span>
              <span className="hidden sm:inline text-xs font-sans text-[#EAE3D8] capitalize">
                {activeImage.category}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleCopyLink(activeImage)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
                title="Copy high-res image link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden md:inline">{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Display */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* High-res image with responsive resolution */}
            <div className="max-w-6xl max-h-[72vh] flex items-center justify-center">
              <img
                key={activeImage.id}
                src={getHighResUrl(activeImage, 1200)}
                srcSet={`
                  ${getHighResUrl(activeImage, 768)} 768w,
                  ${getHighResUrl(activeImage, 1200)} 1200w,
                  ${getHighResUrl(activeImage, 1600)} 1600w
                `}
                sizes="(max-width: 768px) 100vw, 1200px"
                alt={activeImage.alt}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-150"
              />
            </div>
          </div>

          {/* Lightbox Bottom Tray */}
          <div className="bg-[#141517] text-white p-4 sm:p-6 border-t border-white/10 z-10">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#EAE3D8] px-2 py-0.5 rounded bg-white/10">
                    {activeImage.category}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    {activeImage.width} × {activeImage.height}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                  {activeImage.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => {
                    const title = activeImage.title;
                    setLightboxIndex(null);
                    onOpenEnquiry(`Photo Enquiry: ${title}`);
                  }}
                  className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book This Experience</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
