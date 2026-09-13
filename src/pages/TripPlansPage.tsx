import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  User,
  Heart,
  Flame,
  Compass,
  Building2,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Bed,
  Utensils,
  MapPin,
  ShieldCheck,
  Calendar,
  Waves,
  Lightbulb,
  Check,
  Phone,
  MessageSquare,
  Layers,
  Info,
} from 'lucide-react';
import {
  TRIP_PLANNER_DATA,
  PlannerCategoryKey,
  PlannerCategoryData,
} from '../data/tripPlannerData';
import { PackageCardMetadata } from '../components/PackageCardMetadata';

interface TripPlansPageProps {
  onOpenEnquiry?: (preselectedItem?: string) => void;
}

const ICONS_MAP: Record<string, React.ElementType> = {
  User,
  Heart,
  Flame,
  Compass,
  Building2,
};

type PlannerTab = 'highlights' | 'activities' | 'stays' | 'packages' | 'itinerary';

export const TripPlansPage: React.FC<TripPlansPageProps> = ({ onOpenEnquiry }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category')?.toLowerCase();

  // Normalize category if comes from legacy slugs
  const resolveInitialKey = (): PlannerCategoryKey => {
    if (categoryParam === 'solo') return 'solo';
    if (categoryParam === 'duo' || categoryParam === 'couples') return 'duo';
    if (categoryParam === 'friends') return 'friends';
    if (categoryParam === 'family') return 'family';
    if (categoryParam === 'groups' || categoryParam === 'group' || categoryParam === 'corporate') return 'groups';
    return 'duo';
  };

  const [selectedKey, setSelectedKey] = useState<PlannerCategoryKey>(resolveInitialKey);
  const [activeTab, setActiveTab] = useState<PlannerTab>('highlights');
  const [showAllSections, setShowAllSections] = useState<boolean>(false);

  // Sync state if URL search param changes
  useEffect(() => {
    if (categoryParam) {
      if (categoryParam === 'solo') setSelectedKey('solo');
      else if (categoryParam === 'duo' || categoryParam === 'couples') setSelectedKey('duo');
      else if (categoryParam === 'friends') setSelectedKey('friends');
      else if (categoryParam === 'family') setSelectedKey('family');
      else if (categoryParam === 'groups' || categoryParam === 'group' || categoryParam === 'corporate') setSelectedKey('groups');
    }
  }, [categoryParam]);

  const handleSelectCategory = (key: PlannerCategoryKey) => {
    setSelectedKey(key);
    setSearchParams({ category: key }, { replace: true });
    // Reset tab to highlights on category switch to give a fresh oriented view
    if (!showAllSections) {
      setActiveTab('highlights');
    }
  };

  const currentPlan: PlannerCategoryData = TRIP_PLANNER_DATA[selectedKey];
  const categories = Object.values(TRIP_PLANNER_DATA);

  const tabList: { id: PlannerTab; label: string; count?: number }[] = [
    { id: 'highlights', label: 'Trip Style' },
    { id: 'activities', label: 'Activities', count: currentPlan.activities.length },
    { id: 'stays', label: 'Stays', count: currentPlan.stays.length },
    { id: 'packages', label: 'Packages', count: currentPlan.packages.length },
    { id: 'itinerary', label: 'Day Flow' },
  ];

  const currentTabIndex = tabList.findIndex((t) => t.id === activeTab);

  const goToNextTab = () => {
    if (currentTabIndex < tabList.length - 1) {
      setActiveTab(tabList[currentTabIndex + 1].id);
      window.scrollTo({ top: 480, behavior: 'smooth' });
    }
  };

  const goToPrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(tabList[currentTabIndex - 1].id);
      window.scrollTo({ top: 480, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F] pb-24 sm:pb-16">
      {/* 1. Header Section: The Helpful Planning Tool */}
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 bg-[#18231E] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={currentPlan.coverImage}
            alt={currentPlan.label}
            className="w-full h-full object-cover opacity-25 brightness-50 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18231E] via-[#18231E]/85 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>DANDELI TRIP PLANNING TOOL</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Which Dandeli trip is suitable for you?
            </h1>
            <p className="text-stone-300 text-xs sm:text-base font-sans font-light leading-relaxed max-w-2xl">
              Solo birders, couples seeking mist, friend gangs chasing rapids, multi-generation families, and offsite groups need completely different itineraries. Select your travel party below to immediately see your tailored trip style.
            </p>
          </div>

          {/* Value reassurance badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] sm:text-xs font-sans text-stone-300">
            <span className="flex items-center gap-1.5 text-[#EAE3D8]">
              <Check className="w-3.5 h-3.5 text-[#2E6B68]" />
              Tailored around Dam Water Releases
            </span>
            <span className="text-stone-500">•</span>
            <span className="flex items-center gap-1.5 text-[#EAE3D8]">
              <Check className="w-3.5 h-3.5 text-[#2E6B68]" />
              Vetted Accommodations
            </span>
            <span className="text-stone-500">•</span>
            <span className="flex items-center gap-1.5 text-[#EAE3D8]">
              <Check className="w-3.5 h-3.5 text-[#2E6B68]" />
              No Complicated Booking Lock
            </span>
          </div>
        </div>
      </section>

      {/* 2. Traveller Category Selector (Distinctive Visual Identity with Photography & Minimal Icons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-3 sm:p-5 border border-[#E5DFD7] shadow-xl space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E6B68] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-stone-600">
                Step 1: Select Your Travelling Party
              </span>
            </div>
            <span className="text-[11px] font-sans text-[#2E6B68] font-medium hidden sm:inline-block">
              Click any category to update recommendations
            </span>
            <span className="text-[11px] font-sans text-[#2E6B68] font-medium sm:hidden">
              Swipe to switch →
            </span>
          </div>

          {/* Visual Category Cards Grid / Touch Rail */}
          <div className="flex sm:grid sm:grid-cols-5 gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pt-1 pb-1">
            {categories.map((cat) => {
              const CatIcon = ICONS_MAP[cat.iconName] || Users;
              const isSelected = selectedKey === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  aria-pressed={isSelected}
                  className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer snap-start shrink-0 w-[72vw] max-w-[240px] sm:w-auto h-[170px] sm:h-[190px] p-3.5 sm:p-4 flex flex-col justify-between border ${
                    isSelected
                      ? 'border-[#2E6B68] shadow-md ring-2 ring-[#2E6B68] scale-[1.01]'
                      : 'border-[#E5DFD7] hover:border-stone-400 opacity-90 hover:opacity-100 bg-[#FAF8F5]'
                  }`}
                >
                  {/* Category Photography Background */}
                  <img
                    src={cat.coverImage}
                    alt={cat.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      isSelected ? 'scale-105 brightness-[0.45]' : 'brightness-[0.4] group-hover:scale-105'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Top Bar inside Card: Minimal Icon & Selected Chip */}
                  <div className="relative z-10 flex items-start justify-between gap-1.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2E6B68] text-white shadow-sm'
                          : 'bg-black/50 backdrop-blur-md border border-white/20 text-stone-200'
                      }`}
                    >
                      <CatIcon className="w-4 h-4" />
                    </div>

                    {isSelected ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#2E6B68] text-white text-[10px] font-sans font-semibold tracking-wide flex items-center gap-1 shadow-sm">
                        <Check className="w-3 h-3" />
                        Selected
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-stone-300 text-[10px] font-sans font-medium">
                        {cat.groupSize.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content inside Card */}
                  <div className="relative z-10 space-y-1 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                      {cat.label}
                    </h3>
                    <p className="text-[11px] text-stone-300 font-sans line-clamp-1 font-light">
                      {cat.shortSubtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Step 2: The Suitability Verdict ("I know what kind of Dandeli trip is suitable for me") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 space-y-6">
        {/* Core Suitability Verdict Card */}
        <div className="bg-white rounded-3xl border border-[#E5DFD7] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#2E6B68]/10 text-[#2E6B68] text-[11px] font-sans font-bold uppercase tracking-wider">
                RECOMMENDED TRIP STYLE
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[11px] font-sans font-medium">
                {currentPlan.badge}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1C1D1F] leading-snug">
              {currentPlan.recommendedTripStyle}
            </h2>
          </div>

          {/* Plain English Suitability Explanation */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-2">
            <div className="flex items-center gap-2 text-[#2E6B68]">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider">
                Why this Dandeli trip is suitable for {currentPlan.label.toLowerCase()}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed font-normal">
              "{currentPlan.suitabilityStatement}"
            </p>
          </div>

          {/* 4 Fast Facts / Trip Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-1">
            <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD7] space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-sans block tracking-wider">
                Ideal Match
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-800 font-sans block line-clamp-1">
                {currentPlan.idealFor.split(',')[0]}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD7] space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-sans block tracking-wider">
                Party Dynamics
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-800 font-sans block line-clamp-1">
                {currentPlan.groupSize}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD7] space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-sans block tracking-wider">
                Suggested Duration
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-800 font-sans block line-clamp-1">
                {currentPlan.suggestedDuration.split('or')[0].trim()}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E5DFD7] space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-400 font-sans block tracking-wider">
                Estimated Tariff
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#2E6B68] font-sans block line-clamp-1">
                {currentPlan.priceRange.split('(')[0].trim()}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Progressive Disclosure Workspace: View tabs vs Expand All */}
        <div className="bg-white rounded-3xl border border-[#E5DFD7] shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          {/* Section Header & Tab Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                STEP 2: EXPLORE RELEVANT DETAILS
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1C1D1F] mt-0.5">
                Curated Details for {currentPlan.label}
              </h3>
            </div>

            {/* Toggle between Progressive Tabs and Expand All */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setShowAllSections(!showAllSections)}
                className="text-xs font-sans text-stone-600 hover:text-[#2E6B68] font-medium transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5DFD7] bg-[#FAF8F5]"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showAllSections ? 'Use Step Tabs' : 'Expand All Sections'}</span>
              </button>
            </div>
          </div>

          {/* Progressive Segmented Tabs (When not in Expand All mode) */}
          {!showAllSections && (
            <div className="space-y-6">
              {/* Responsive Pill Tabs Navigation */}
              <div className="flex items-center gap-1.5 p-1.5 bg-[#F0EBE1] rounded-2xl overflow-x-auto no-scrollbar">
                {tabList.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#18231E] text-white shadow-sm font-semibold'
                          : 'text-stone-700 hover:text-[#18231E] hover:bg-white/60'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                            isActive ? 'bg-white/20 text-[#EAE3D8]' : 'bg-stone-300 text-stone-700'
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Experience Highlights */}
              {activeTab === 'highlights' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                      CORE ATMOSPHERE
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                      What a {currentPlan.label} Day in Dandeli Feels Like
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                      Four core experiential milestones designed for the pacing and energy of this group:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPlan.experienceHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] flex items-start gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-center shrink-0 text-[#2E6B68] font-sans text-xs font-bold shadow-xs">
                          {i + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                          {hl}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Local Naturalist Insight Callout */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#EFE9DF] border border-[#E0D8CA] flex items-start gap-3.5">
                    <Lightbulb className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#2E6B68]">
                        FIELD NATURALIST TIP FOR {currentPlan.label.toUpperCase()}
                      </span>
                      <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                        {currentPlan.localNaturalistTip}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Activities */}
              {activeTab === 'activities' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                      CURATED EXPERIENCES
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                      Recommended Activities for {currentPlan.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                      Selected based on safety standards, group dynamics, and physical intensity:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentPlan.activities.map((act) => (
                      <div
                        key={act.id}
                        className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] hover:border-[#2E6B68] transition-all flex flex-col justify-between space-y-3"
                      >
                        <div className="flex gap-3.5 items-center">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-900 shrink-0 relative">
                            <img
                              src={act.image}
                              alt={act.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="space-y-1 min-w-0 flex-1">
                            <h5 className="font-serif text-base sm:text-lg font-normal text-[#1C1D1F] truncate">
                              {act.name}
                            </h5>
                            <span className="text-[11px] font-sans text-[#2E6B68] font-medium block">
                              Duration: {act.duration}
                            </span>
                            <p className="text-xs text-stone-600 font-sans line-clamp-2 font-light">
                              {act.whyItFits}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs font-sans">
                          <span className="text-stone-500 text-[11px]">Includes certified river marshals</span>
                          <Link
                            to={`/activities/${act.slug}`}
                            className="text-[#2E6B68] hover:text-[#18231E] font-medium flex items-center gap-1"
                          >
                            <span>View Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Stays */}
              {activeTab === 'stays' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                      VETTED ACCOMMODATIONS
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                      Stay Suggestions for {currentPlan.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                      Properties selected for location proximity, comfort, safety, and room configurations:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPlan.stays.map((stay) => (
                      <div
                        key={stay.id}
                        className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-900">
                            <img
                              src={stay.image}
                              alt={stay.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-sans">
                              {stay.location}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h5 className="font-serif text-xl font-normal text-[#1C1D1F]">
                              {stay.name}
                            </h5>
                            <span className="text-xs font-sans text-[#2E6B68] font-medium block">
                              {stay.stayType}
                            </span>
                            <p className="text-xs text-stone-600 font-sans leading-relaxed">
                              {stay.whyItFits}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-sans text-stone-400 block">Tariff from</span>
                            <span className="font-serif text-xl font-normal text-[#1C1D1F]">
                              ₹{stay.pricePerNight.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-stone-500 font-sans"> / night</span>
                          </div>

                          <Link
                            to={`/resorts/${stay.slug}`}
                            className="py-2.5 px-4 rounded-xl bg-white hover:bg-[#2E6B68] hover:text-white text-[#1C1D1F] text-xs font-sans font-medium border border-[#E5DFD7] transition-all flex items-center gap-1.5 shadow-sm"
                          >
                            <span>View Property</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Packages */}
              {activeTab === 'packages' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                      ALL-INCLUSIVE VALUES
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                      Package Suggestions for {currentPlan.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                      Bundled packages including cottage lodging, 3 daily buffet meals, activities, and river gear:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPlan.packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-900">
                            <img
                              src={pkg.image}
                              alt={pkg.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
                            <PackageCardMetadata badge={pkg.badge} duration={pkg.duration} />
                          </div>

                          <div className="space-y-1">
                            <h5 className="font-serif text-xl font-normal text-[#1C1D1F]">
                              {pkg.name}
                            </h5>
                            <p className="text-xs text-stone-600 font-sans leading-relaxed">
                              {pkg.highlight}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-sans text-stone-400 block">All-Inclusive Tariff</span>
                            <span className="font-serif text-xl font-normal text-[#1C1D1F]">
                              ₹{pkg.pricePerPerson.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-stone-500 font-sans"> / person</span>
                          </div>

                          <Link
                            to={`/packages/${pkg.slug}`}
                            className="py-2.5 px-4 rounded-xl bg-white hover:bg-[#2E6B68] hover:text-white text-[#1C1D1F] text-xs font-sans font-medium border border-[#E5DFD7] transition-all flex items-center gap-1.5 shadow-sm"
                          >
                            <span>View Package</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Day Flow */}
              {activeTab === 'itinerary' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2E6B68] block">
                      DAILY RHYTHM
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1F]">
                      Day-by-Day Flow for {currentPlan.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light">
                      Paced carefully around dam water discharge windows and pleasant temperatures:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {currentPlan.dayByDaySchedule.map((day) => (
                      <div key={day.day} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#2E6B68] text-white text-[10px] font-sans font-bold uppercase">
                            Day 0{day.day}
                          </span>
                          <h5 className="font-serif text-lg font-normal text-[#1C1D1F]">
                            {day.title}
                          </h5>
                        </div>
                        <p className="text-xs text-stone-600 font-sans leading-relaxed">
                          {day.description}
                        </p>
                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                          {day.milestones.map((m, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E5DFD7]">
                              <span className="font-mono text-[#2E6B68] font-semibold text-[11px] shrink-0">
                                {m.time}
                              </span>
                              <span className="text-stone-700">{m.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Progressive Tab Navigation Footers (Next / Prev Step Buttons) */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goToPrevTab}
                  disabled={currentTabIndex === 0}
                  className={`py-2.5 px-4 rounded-xl text-xs font-sans font-medium flex items-center gap-1.5 transition-colors ${
                    currentTabIndex === 0
                      ? 'text-stone-300 cursor-not-allowed'
                      : 'text-stone-700 hover:bg-stone-100 cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {tabList.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTabIndex ? 'w-5 bg-[#2E6B68]' : 'bg-stone-300'
                      }`}
                    />
                  ))}
                </div>

                {currentTabIndex < tabList.length - 1 ? (
                  <button
                    type="button"
                    onClick={goToNextTab}
                    className="py-2.5 px-4 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-[#245754] transition-colors cursor-pointer"
                  >
                    <span>Next: {tabList[currentTabIndex + 1].label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${currentPlan.label} Expedition Plan`)}
                    className="py-2.5 px-4 rounded-xl bg-[#18231E] text-white text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <span>Plan This Trip</span>
                    <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Expanded View (When user clicks 'Expand All Sections') */}
          {showAllSections && (
            <div className="space-y-12 animate-in fade-in duration-300">
              {/* 1. Highlights */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                  Experience Highlights for {currentPlan.label}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPlan.experienceHighlights.map((hl, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white border border-[#E5DFD7] flex items-center justify-center shrink-0 text-[#2E6B68] text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-stone-700 font-sans">{hl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Activities */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                  Recommended Activities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentPlan.activities.map((act) => (
                    <Link
                      key={act.id}
                      to={`/activities/${act.slug}`}
                      className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] hover:border-[#2E6B68] flex gap-3.5 items-center"
                    >
                      <img
                        src={act.image}
                        alt={act.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0 flex-1">
                        <h5 className="font-serif text-base text-[#1C1D1F] truncate">{act.name}</h5>
                        <span className="text-[11px] text-[#2E6B68] block">Duration: {act.duration}</span>
                        <p className="text-xs text-stone-600 line-clamp-1">{act.whyItFits}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 3. Stays */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                  Stay Suggestions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPlan.stays.map((stay) => (
                    <div key={stay.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-3">
                      <h5 className="font-serif text-lg text-[#1C1D1F]">{stay.name}</h5>
                      <span className="text-xs text-[#2E6B68] block">{stay.stayType} • {stay.location}</span>
                      <p className="text-xs text-stone-600">{stay.whyItFits}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Packages */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-normal text-[#1C1D1F]">
                  Package Suggestions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPlan.packages.map((pkg) => (
                    <div key={pkg.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD7] space-y-2">
                      <div className="flex justify-between items-start">
                        <h5 className="font-serif text-lg text-[#1C1D1F]">{pkg.name}</h5>
                        <span className="text-xs font-serif text-[#2E6B68]">₹{pkg.pricePerPerson} / person</span>
                      </div>
                      <p className="text-xs text-stone-600">{pkg.highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. Simple, Honest Consultation & Next Step (No Complicated Booking System) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#18231E] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#EAE3D8]">
              NO COMPLICATED BOOKING SYSTEM
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              “I know what kind of Dandeli trip is suitable for me.”
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light max-w-xl">
              Talk directly to local river marshals and forest coordinators. We check Supa Dam water discharge slots, confirm cottage room readiness, and give you honest ground advice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry(`${currentPlan.label} Expedition Plan`)}
              className="py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plan This {currentPlan.label} Trip</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </button>

            <Link
              to={`/trip-plans/${currentPlan.id}`}
              className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-sans font-medium uppercase tracking-wider transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Dedicated Blueprint</span>
              <ChevronRight className="w-4 h-4 text-stone-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Sticky Bottom Action Bar for Mobile Thumb Ergonomics */}
      <div className="fixed bottom-0 inset-x-0 bg-[#18231E]/95 backdrop-blur-md text-white border-t border-white/10 p-3 sm:hidden z-40 flex items-center justify-between shadow-2xl">
        <div className="space-y-0.5">
          <span className="text-[10px] font-sans uppercase tracking-wider text-stone-400 block">
            {currentPlan.label} Plan Selected
          </span>
          <span className="font-serif text-base font-normal text-[#EAE3D8]">
            {currentPlan.suggestedDuration.split('or')[0].trim()}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpenEnquiry && onOpenEnquiry(`${currentPlan.label} Trip Plan`)}
          className="py-2.5 px-4 rounded-xl bg-[#2E6B68] text-white text-xs font-sans font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
        >
          <span>Plan This Trip</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#EAE3D8]" />
        </button>
      </div>
    </div>
  );
};
