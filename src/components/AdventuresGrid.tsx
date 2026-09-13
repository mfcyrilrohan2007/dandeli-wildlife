import React, { useState, useMemo } from 'react';
import {
  ArrowUpRight,
  Compass,
  Waves,
  Users,
  Clock,
  Gauge,
  ShieldCheck,
  Sparkles,
  TreePine,
  Search,
  CheckCircle2,
  Calendar,
  Eye,
} from 'lucide-react';
import { Activity, ActivityCategory } from '../types';
import { ACTIVITIES } from '../data/dandeliData';

interface AdventuresGridProps {
  onSelectActivity: (activity: Activity) => void;
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const AdventuresGrid: React.FC<AdventuresGridProps> = ({
  onSelectActivity,
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Primary curated 10 Dandeli activities
  const primaryActivities = useMemo(() => {
    return ACTIVITIES.slice(0, 10);
  }, []);

  const categories = [
    { id: 'all', label: 'All Activities', count: 10 },
    { id: 'river', label: 'River & Rapids', count: 3 },
    { id: 'safari', label: 'Wildlife & Safaris', count: 4 },
    { id: 'trails', label: 'Trails & Waterfalls', count: 2 },
    { id: 'camp', label: 'Camping', count: 1 },
  ];

  const difficulties = [
    { id: 'all', label: 'Any Difficulty' },
    { id: 'easy', label: 'Easy & Relaxed' },
    { id: 'moderate', label: 'Moderate & Active' },
  ];

  const filteredActivities = useMemo(() => {
    return primaryActivities.filter((act) => {
      // Category match
      if (selectedCategory === 'river') {
        if (!['white-water-rafting', 'kayaking', 'river-activities'].includes(act.id)) {
          return false;
        }
      } else if (selectedCategory === 'safari') {
        if (!['jungle-safari', 'jeep-safari', 'bird-watching', 'wildlife-experiences'].includes(act.id)) {
          return false;
        }
      } else if (selectedCategory === 'trails') {
        if (!['waterfalls', 'nature-walks'].includes(act.id)) {
          return false;
        }
      } else if (selectedCategory === 'camp') {
        if (act.id !== 'camping') {
          return false;
        }
      }

      // Difficulty match
      if (selectedDifficulty === 'easy') {
        if (act.difficulty && !act.difficulty.toLowerCase().includes('easy')) {
          return false;
        }
      } else if (selectedDifficulty === 'moderate') {
        if (act.difficulty && !act.difficulty.toLowerCase().includes('moderate')) {
          return false;
        }
      }

      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = act.title.toLowerCase().includes(query);
        const matchesDesc = act.description.toLowerCase().includes(query);
        const matchesSuited = act.bestSuitedFor?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesSuited) {
          return false;
        }
      }

      return true;
    });
  }, [primaryActivities, selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <section id="activities" className="py-14 sm:py-24 lg:py-32 bg-[#0A1811] text-stone-100 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-10 border-b border-white/10">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <Compass className="w-3.5 h-3.5" />
              <span>Dandeli Field Guide • 10 Core Experiences</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              DANDELI ACTIVITIES & EXPEDITIONS
            </h2>
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed">
              Dandeli is defined by two living forces—the controlled mountain surges of the Kali River and the deep moist deciduous canopy of the Western Ghats. Here is what you will experience, what the environment feels like on the ground, and who each journey is best suited for.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="hidden sm:flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl shrink-0">
            <div>
              <div className="text-2xl font-condensed font-bold text-emerald-400">
                {filteredActivities.length} OF 10
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                Curated Activities
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-xs text-stone-300 font-sans max-w-[130px] leading-tight">
              Guided by native forest naturalists & river captains
            </div>
          </div>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Quick Category Filters - Mobile Horizontal Swipeable Chips / Desktop Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all shrink-0 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-[#091510] font-bold shadow-md shadow-emerald-400/20'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-[#091510]/20 text-[#091510]'
                      : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Difficulty & Search */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            {/* Difficulty Selector */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full text-xs font-mono">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 text-[11px] ${
                    selectedDifficulty === diff.id
                      ? 'bg-emerald-500/20 text-emerald-300 font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {diff.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search activity..."
                className="w-full pl-8 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-emerald-400/50 font-sans"
              />
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="mt-16 text-center py-16 px-4 rounded-3xl bg-white/5 border border-white/10 max-w-lg mx-auto">
            <Compass className="w-10 h-10 text-emerald-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-condensed text-2xl font-bold uppercase text-white">
              No matching activities found
            </h3>
            <p className="text-stone-400 text-xs mt-1.5">
              Try adjusting your category or difficulty filter to view all 10 Dandeli experiences.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-emerald-400 text-[#091510] text-xs font-bold uppercase tracking-wider hover:bg-emerald-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Activities Grid — 10 Dedicated Cards with Local Expert Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredActivities.map((activity) => (
            <article
              key={activity.id}
              className="group relative rounded-3xl overflow-hidden bg-[#112219] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/60"
            >
              {/* Image Container with Subtle Zoom on Hover */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A1610]">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: (activity as any).objectPosition || 'center' }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112219] via-[#112219]/25 to-transparent" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                    {activity.category === 'river'
                      ? 'River & Rapids'
                      : activity.category === 'jungle'
                      ? 'Wildlife Sanctuary'
                      : activity.category === 'trek'
                      ? 'Forest & Falls'
                      : activity.category === 'camp'
                      ? 'Camp & Stargazing'
                      : 'Bio Reserve'}
                  </span>

                  {activity.difficulty && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider text-emerald-200">
                      {activity.difficulty}
                    </span>
                  )}
                </div>

                {/* Floating Duration Tag on Lower Left of Photo */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[11px] font-mono text-stone-200 border border-white/10">
                  <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{activity.duration}</span>
                </div>

                {/* Indicative Tariff Badge on Lower Right */}
                <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[11px] font-mono text-emerald-300 border border-white/10">
                  <span>₹{activity.pricePerPerson.toLocaleString('en-IN')}</span>
                  <span className="text-[9px] text-stone-300 ml-1">/pax</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white leading-tight group-hover:text-emerald-300 transition-colors">
                    {activity.title}
                  </h3>

                  {/* Grounded Local Expert Description */}
                  <p className="text-xs sm:text-sm text-stone-300/90 font-sans leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>

                  {/* Atmosphere / Environment Note */}
                  {activity.environmentFeel && (
                    <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                        <TreePine className="w-3 h-3" />
                        <span>Environment & Atmosphere</span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-sans leading-relaxed italic line-clamp-2">
                        "{activity.environmentFeel}"
                      </p>
                    </div>
                  )}

                  {/* Best Suited For Callout */}
                  {activity.bestSuitedFor && (
                    <div className="flex items-start gap-2 pt-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-stone-300">
                        <span className="text-stone-400 font-mono text-[10px] uppercase block">
                          Best Suited For:
                        </span>
                        <span className="text-stone-200 font-sans text-xs font-medium">
                          {activity.bestSuitedFor}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectActivity(activity)}
                    className="min-h-[46px] flex-1 py-2.5 px-4 rounded-full bg-white text-[#091510] hover:bg-emerald-300 font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-98 cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(activity.title)}
                    className="min-h-[46px] py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-stone-200 text-xs font-display font-semibold uppercase tracking-wider transition-colors active:scale-98 cursor-pointer"
                    title={`Enquire about ${activity.title}`}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Local Expert Field Advice Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#0E2017] border border-emerald-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <Waves className="w-4 h-4" />
              <span className="font-bold">Water Dam Release Timing</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Kali River white-water rafting relies on scheduled water releases from Supa Dam upstream. Morning slots (9:00 AM) and afternoon slots (1:30 PM) offer the most sustained, thrilling class III-IV rapid volumes.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <TreePine className="w-4 h-4" />
              <span className="font-bold">Sanctuary Permits & Safaris</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Dandeli and Anshi core forest zones operate strictly under Karnataka Forest Department protocols. Dawn safaris (6:00 AM) offer the best chances for Malabar giant squirrels, chital herds, and horned raptors.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono uppercase text-xs tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-bold">River Masters & Safety Gear</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              All water activities provide CE-certified buoyancy vests and safety briefing before entering the river. Non-swimmers can comfortably participate in coracle drifts, kayaking, natural jacuzzi, and rafting with rescue escorts.
            </p>
          </div>
        </div>

        {/* Bottom Banner with Direct Guide Consultation */}
        <div className="mt-10 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white font-display">
              Unsure which activity fits your travel dates or group?
            </div>
            <div className="text-xs text-stone-400 font-sans mt-0.5">
              Our local Dandeli coordinator helps arrange custom activity combos with resort transfers and forest permits.
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry('Custom Activity Bundle Consultation')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-emerald-400 text-[#091510] font-display font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-colors shadow-lg active:scale-95 cursor-pointer"
          >
            Ask a Local Coordinator
          </button>
        </div>
      </div>
    </section>
  );
};
