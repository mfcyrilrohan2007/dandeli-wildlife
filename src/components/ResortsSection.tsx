import React, { useState, useMemo } from 'react';
import {
  Trees,
  Waves,
  Tent,
  Home,
  Users,
  Compass,
  ArrowUpRight,
  Eye,
  MapPin,
  Check,
  Sparkles,
  Bed,
  Utensils,
  ShieldCheck,
  Filter,
  Info,
} from 'lucide-react';
import { ResortStay, StayCategory } from '../types';
import { RESORT_STAYS } from '../data/dandeliData';
import { StayDetailModal } from './StayDetailModal';

interface ResortsSectionProps {
  onOpenEnquiry: (stayName?: string) => void;
}

export const ResortsSection: React.FC<ResortsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<StayCategory>('all');
  const [selectedStayForModal, setSelectedStayForModal] = useState<ResortStay | null>(null);

  const categories: { id: StayCategory; label: string; icon: React.ReactNode; count: number }[] = [
    { id: 'all', label: 'All Stays', icon: <Compass className="w-3.5 h-3.5" />, count: RESORT_STAYS.length },
    { id: 'river', label: 'River-side Stays', icon: <Waves className="w-3.5 h-3.5" />, count: 2 },
    { id: 'forest', label: 'Forest Resorts', icon: <Trees className="w-3.5 h-3.5" />, count: 2 },
    { id: 'adventure', label: 'Adventure Camps', icon: <Compass className="w-3.5 h-3.5" />, count: 1 },
    { id: 'family', label: 'Family Resorts', icon: <Users className="w-3.5 h-3.5" />, count: 1 },
    { id: 'homestay', label: 'Nature Homestays', icon: <Home className="w-3.5 h-3.5" />, count: 1 },
    { id: 'camping', label: 'Camping', icon: <Tent className="w-3.5 h-3.5" />, count: 1 },
  ];

  // Curated Featured Stay (Riverbank Lodge)
  const featuredStay = useMemo(() => {
    return RESORT_STAYS.find((s) => s.featured) || RESORT_STAYS[0];
  }, []);

  // Filtered Stays
  const filteredStays = useMemo(() => {
    if (selectedCategory === 'all') {
      return RESORT_STAYS;
    }
    return RESORT_STAYS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Determine if featured stay should be shown prominently at top
  const showFeaturedAtTop =
    selectedCategory === 'all' || selectedCategory === featuredStay.category;

  // Supporting stays list (excluding featured stay if shown at top)
  const supportingStays = useMemo(() => {
    if (showFeaturedAtTop) {
      return filteredStays.filter((s) => s.id !== featuredStay.id);
    }
    return filteredStays;
  }, [filteredStays, showFeaturedAtTop, featuredStay.id]);

  return (
    <section id="resorts" className="py-14 sm:py-24 lg:py-32 bg-[#08140E] text-stone-100 relative overflow-hidden">
      {/* Background Ambience Elements */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-10 border-b border-white/10">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <Trees className="w-3.5 h-3.5" />
              <span>Western Ghats Sanctuaries • Travel Editorial</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              RESORTS & WILDERNESS STAYS
            </h2>
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed">
              Accommodation in Dandeli is not just a room—it is where the Kali River lulls you to sleep and wild hornbill wings wake you at dawn. Explore hand-picked riverfront lodges, treetop cabins, family retreats, and quiet plantation homestays.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenEnquiry('General Stay Recommendation Consultation')}
              className="min-h-[46px] w-full sm:w-auto py-3 px-6 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Personalized Stay Advice</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Navigation Bar - Mobile Horizontal Scrollable Rail */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-emerald-400 text-[#091510] font-bold shadow-md shadow-emerald-400/20'
                  : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-[#091510]/25 text-[#091510]'
                    : 'bg-white/10 text-stone-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* FEATURED STAY: Larger Panoramic Editorial Showcase */}
        {showFeaturedAtTop && (
          <div className="mt-10">
            <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curator's Spotlight • Featured Riverfront Lodge</span>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#0F2218] border border-emerald-500/30 shadow-2xl hover:border-emerald-500/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Photo Showcase (7 Cols on desktop) */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-black/40 group">
                <img
                  src={featuredStay.coverImage}
                  alt={featuredStay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: (featuredStay as any).objectPosition || 'center' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2218] via-[#0F2218]/25 to-transparent" />

                {/* Floating Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                    {featuredStay.stayType}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono uppercase tracking-widest text-emerald-200">
                    Direct Riverfront
                  </span>
                </div>

                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-sm text-xs font-mono text-stone-200 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{featuredStay.locationArea}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-black/75 px-2.5 py-1 rounded-md border border-white/10">
                    {featuredStay.gallery.length} Photos in Gallery
                  </span>
                </div>
              </div>

              {/* Editorial Details (5 Cols on desktop) */}
              <div className="lg:col-span-5 p-6 sm:p-9 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                      {featuredStay.categoryLabel}
                    </span>
                    <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight leading-tight">
                      {featuredStay.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 font-sans italic">
                      "{featuredStay.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed line-clamp-3">
                    {featuredStay.overview}
                  </p>

                  {/* Highlights & Facilities */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      Key Property Facilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featuredStay.facilities.slice(0, 4).map((fac, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs text-stone-200 font-sans"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For Callout */}
                  <div className="p-3.5 rounded-2xl bg-black/35 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Best Suited For</span>
                    </div>
                    <p className="text-xs text-stone-200 font-sans">
                      {featuredStay.suitableFor}
                    </p>
                  </div>
                </div>

                {/* Footer Strip with Tariff & Two Distinct Buttons */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                        Approximate Tariff
                      </span>
                      <span className="font-condensed text-2xl sm:text-3xl font-bold text-white">
                        {featuredStay.priceRange}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 text-right max-w-[150px] leading-tight">
                      All 3 meals + sunset coracle included
                    </span>
                  </div>

                    <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedStayForModal(featuredStay)}
                      className="min-h-[46px] flex-1 py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-300" />
                      <span>View Stay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(`Resort Stay: ${featuredStay.name}`)}
                      className="min-h-[46px] flex-1 py-3 px-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md active:scale-98 cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUPPORTING STAYS: Editorial Grid */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>
                {selectedCategory === 'all'
                  ? 'More Western Ghats Stays & Homestays'
                  : `${categories.find((c) => c.id === selectedCategory)?.label} (${supportingStays.length})`}
              </span>
            </h3>
            <span className="text-xs text-stone-400 font-mono">
              {supportingStays.length} Listings Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {supportingStays.map((stay) => (
              <article
                key={stay.id}
                className="group rounded-3xl overflow-hidden bg-[#102319] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/50 hover:-translate-y-1"
              >
                {/* Photo Container */}
                <div className="relative h-64 w-full overflow-hidden bg-black/40">
                  <img
                    src={stay.coverImage}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: (stay as any).objectPosition || 'center' }}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102319] via-[#102319]/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                      {stay.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-stone-300 text-[10px] font-mono border border-white/10">
                      {stay.capacity}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-stone-300">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 text-[11px]">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate max-w-[180px]">{stay.locationArea}</span>
                    </span>
                    <span className="text-[10px] text-emerald-300/90 font-mono bg-black/60 px-2 py-1 rounded-md border border-white/10">
                      {stay.distanceToRiver}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Stay Type & Name */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                        {stay.stayType}
                      </span>
                      <h4 className="font-condensed text-2xl font-bold uppercase tracking-wide text-white leading-tight mt-0.5 group-hover:text-emerald-300 transition-colors">
                        {stay.name}
                      </h4>
                    </div>

                    {/* Tagline / Micro-overview */}
                    <p className="text-xs text-stone-300/90 font-sans leading-relaxed line-clamp-2 italic">
                      "{stay.tagline}"
                    </p>

                    {/* Facilities Chips */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {stay.facilities.slice(0, 3).map((facility, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-sans text-stone-300 flex items-center gap-1"
                          >
                            <Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                            <span className="truncate max-w-[140px]">{facility}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Suitable For */}
                    <div className="p-3 rounded-xl bg-black/25 border border-white/5 space-y-0.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Suitable For:
                      </span>
                      <p className="text-[11px] text-stone-200 font-sans line-clamp-1">
                        {stay.suitableFor}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Approximate Tariff
                      </span>
                      <div className="flex items-baseline justify-between">
                        <span className="font-condensed text-xl sm:text-2xl font-bold text-white">
                          {stay.priceRange}
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono">/ night</span>
                      </div>
                      <p className="text-[10px] text-emerald-400/90 font-mono truncate mt-0.5">
                        {stay.priceNote}
                      </p>
                    </div>

                    {/* View Stay and Enquire Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedStayForModal(stay)}
                        className="min-h-[46px] flex-1 py-2.5 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-stone-200 text-xs font-display font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        <span>View Stay</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenEnquiry(`Resort Stay: ${stay.name}`)}
                        className="min-h-[46px] flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1 active:scale-98 cursor-pointer"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Editorial Guidance Notes Strip: Understanding Dandeli Accommodations */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#0E2017] border border-emerald-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <Waves className="w-4 h-4" />
              <span className="font-bold">Riverfront vs. Forest Canopy</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Ganeshgudi and Barchi stays sit right along the Kali River, providing immediate access to coracles and rapids. Kulgi and Anshi forest lodges place you deep within old-growth teak canopy for birding and wildlife safaris.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <Utensils className="w-4 h-4" />
              <span className="font-bold">All-Inclusive Meal Culture</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Unlike city hotels, nearly all authentic Dandeli wilderness stays include breakfast, lunch, high tea, and dinner. Because properties sit inside forest reserves, chefs prepare fresh homestyle Uttara Kannada and Malnad dishes on-site.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-bold">Audited for Forest Tranquility</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              We exclusively list properties that enforce quiet nocturnal hours (no loud outdoor speakers past 10 PM) and respect Western Ghats wildlife corridors. All stays provide 24x7 hot water and verified clean drinking water.
            </p>
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white font-display">
              Need help matching your group size or budget to the right property?
            </div>
            <div className="text-xs text-stone-400 font-sans mt-0.5">
              Tell our native coordinator your travel dates, group size, and whether you prefer riverbanks or quiet forest homestays.
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry('Custom Resort Matching Service')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-emerald-400 text-[#091510] font-display font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-lg active:scale-95 cursor-pointer"
          >
            Consult with a Local Host
          </button>
        </div>
      </div>

      {/* Stay Detail Modal when "View Stay" is clicked */}
      <StayDetailModal
        stay={selectedStayForModal}
        onClose={() => setSelectedStayForModal(null)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </section>
  );
};
