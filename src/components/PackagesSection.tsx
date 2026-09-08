import React, { useState } from 'react';
import {
  Compass,
  Clock,
  Users,
  Home,
  Utensils,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Eye,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { TravelPackage } from '../types';
import { TRAVEL_PACKAGES } from '../data/dandeliData';
import { PackageDetailModal } from './PackageDetailModal';

interface PackagesSectionProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
  filteredGroup: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onOpenEnquiry,
  filteredGroup,
}) => {
  const [activeTab, setActiveTab] = useState<string>(filteredGroup || 'all');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  // Distinct curation filter tabs
  const tabs = [
    { id: 'all', label: 'All Curated Experiences' },
    { id: 'weekend', label: 'Weekend Escapes' },
    { id: 'adventure', label: 'Adventures & Rapids' },
    { id: 'wildlife', label: 'Wildlife & Nature' },
    { id: 'family', label: 'Family Stays' },
    { id: 'group', label: 'Friends & Groups' },
  ];

  // Map user tabs to packages
  const filteredPackages = TRAVEL_PACKAGES.filter((pkg) => {
    // Exclude backwards-compatibility duplicate alias IDs from the primary listing
    if (
      pkg.id === 'pkg-couples-serenity' ||
      pkg.id === 'pkg-friends-rapids' ||
      pkg.id === 'pkg-family-wildlife' ||
      pkg.id === 'pkg-corporate-clan'
    ) {
      return false;
    }

    if (activeTab === 'all') return true;
    if (activeTab === 'weekend') return pkg.days <= 2;
    if (activeTab === 'adventure')
      return pkg.id === 'adventure-weekend' || pkg.id === 'friends-adventure-trip';
    if (activeTab === 'wildlife')
      return pkg.id === 'wildlife-explorer' || pkg.id === 'river-jungle-experience';
    if (activeTab === 'family')
      return pkg.id === 'family-nature-escape' || pkg.groupCategory === 'family';
    if (activeTab === 'group')
      return pkg.groupCategory === 'friends' || pkg.groupCategory === 'corporate';
    return true;
  });

  return (
    <section
      id="packages"
      className="py-14 sm:py-24 lg:py-32 bg-[#FAF8F5] text-[#192420] relative border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Human-crafted Travel Agency Feel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-10 border-b border-stone-200">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
              <Compass className="w-3.5 h-3.5" />
              <span>Tailored Western Ghats Journeys</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#0F2419]">
              CURATED TRAVEL PACKAGES
            </h2>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg font-sans leading-relaxed">
              We design whole journeys, not fragmented tickets. Every package combines genuine riverside stays, home-cooked regional meals, verified river guides, and forest permissions.
            </p>
          </div>

          {/* Curated Filter Pills - Mobile Horizontal Scrollable Rail */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`pkg-tab-${tab.id}`}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-200 shrink-0 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#122A1E] text-[#5FE395] font-bold shadow-sm'
                    : 'bg-stone-200/80 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Spotlight on Adventure Weekend if visible */}
        {activeTab === 'all' && (
          <div className="mt-8 sm:mt-12 rounded-3xl bg-white border border-stone-200/90 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 hover:border-[#247565]/40 hover:shadow-xl">
            <div className="lg:col-span-7 relative h-64 sm:h-72 lg:h-full min-h-[280px] sm:min-h-[360px] overflow-hidden bg-stone-900">
              <img
                src="/images/kali-rafting-hero.jpg"
                alt="Adventure Weekend Dandeli"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-mono text-xs font-bold uppercase tracking-wider">
                  Featured Journey
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 block">
                  Most Popular Itinerary
                </span>
                <h3 className="font-condensed text-2xl sm:text-4xl font-bold uppercase tracking-tight">
                  Adventure Weekend (2D/1N)
                </h3>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#247565] font-semibold">
                    The Signature Dandeli Experience
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500">2 Days / 1 Night</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Our core itinerary designed for maximum excitement and comfort. Includes certified Kali white-water rafting, natural river jacuzzi bath, serene homestyle food, and riverside campfire night.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/70 text-xs">
                    <span className="font-mono text-[10px] uppercase text-stone-400 block">Stay Option</span>
                    <span className="font-semibold text-stone-800">Riverside Resort / Eco Cottages</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/70 text-xs">
                    <span className="font-mono text-[10px] uppercase text-stone-400 block">Food Inclusions</span>
                    <span className="font-semibold text-stone-800">All 3 Meals + Tea & Snacks</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">Tariff</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-condensed text-3xl font-bold text-[#0F2419]">₹2,800</span>
                    <span className="text-xs text-stone-500 font-sans">/ person onwards</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const featured = TRAVEL_PACKAGES.find(
                        (p) => p.id === 'adventure-weekend'
                      );
                      if (featured) setSelectedPackage(featured);
                    }}
                    className="min-h-[46px] flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-display font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Package</span>
                  </button>

                  <button
                    id="enquire-featured-pkg-btn"
                    type="button"
                    onClick={() => onOpenEnquiry('Adventure Weekend')}
                    className="min-h-[46px] flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-[#122A1E] hover:bg-[#1C3E2D] text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Packages Grid: Varied layout & curated styling */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                id={`pkg-card-${pkg.id}`}
                className="rounded-3xl bg-white border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#247565]/40"
              >
                <div>
                  {/* Image Container with Natural Depth & Badges */}
                  <div className="relative h-60 w-full overflow-hidden bg-stone-900 group">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Floating Chips */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-[#122A1E]/90 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider backdrop-blur-md">
                        {pkg.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-mono backdrop-blur-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <h3 className="font-condensed text-2xl font-bold uppercase tracking-tight leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-stone-200 font-sans mt-0.5 line-clamp-1 opacity-90">
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Suitable Travellers Tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-stone-200 text-stone-700 text-xs font-sans">
                      <Users className="w-3.5 h-3.5 text-[#247565] shrink-0" />
                      <span className="font-medium text-[#142C21]">Best for:</span>
                      <span className="truncate">{pkg.suitableTravellers || 'Travellers & Seekers'}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed line-clamp-3">
                      {pkg.summary}
                    </p>

                    {/* Accommodation and Stay Snippet */}
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs space-y-1.5 text-stone-700">
                      <div className="flex items-start gap-2">
                        <Home className="w-3.5 h-3.5 text-[#247565] shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{pkg.stayType}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-3.5 h-3.5 text-[#247565] shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-stone-500">{pkg.meals}</span>
                      </div>
                    </div>

                    {/* Key Activities Chips */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1.5">
                        Activities Included:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.includedActivities.slice(0, 3).map((act, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-100 text-[11px] font-medium text-stone-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#247565]" />
                            <span className="truncate max-w-[140px]">{act}</span>
                          </span>
                        ))}
                        {pkg.includedActivities.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-stone-100 text-[10px] font-mono text-stone-500">
                            +{pkg.includedActivities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Transparent Tariff & Clear Two-Button Actions */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 flex flex-col space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                          Tariff Range
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-condensed text-2xl font-bold text-[#0F2419]">
                            ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-stone-500 font-sans">
                            / person
                          </span>
                        </div>
                      </div>
                      {pkg.priceRange && (
                        <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          {pkg.priceRange}
                        </span>
                      )}
                    </div>

                    {/* Two Clean Buttons: View Package & Enquire Now */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`btn-view-${pkg.id}`}
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className="min-h-[46px] py-2.5 px-3 rounded-full border border-stone-300 hover:bg-stone-100 text-[#142C21] font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Package</span>
                      </button>

                      <button
                        id={`btn-enquire-${pkg.id}`}
                        type="button"
                        onClick={() => onOpenEnquiry(pkg.title)}
                        className="min-h-[46px] py-2.5 px-3 rounded-full bg-[#122A1E] hover:bg-[#1C3E2D] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                      >
                        <span>Enquire Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Agency Assurance Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#122A1E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Personalized Trip Curation
            </span>
            <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase">
              Need a Custom Plan for Your Dates or Group Size?
            </h3>
            <p className="text-stone-300 text-sm font-sans leading-relaxed">
              We specialize in custom itineraries with pick-up from Dharwad, Hubballi, Belagavi, or Goa. Tell us what you have in mind and we'll craft a personal proposal within 2 hours.
            </p>
          </div>

          <button
            id="pkg-banner-custom-plan-btn"
            type="button"
            onClick={() => onOpenEnquiry('Custom Custom Itinerary Request')}
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#E5D7B7] hover:bg-[#d6c59f] text-[#122A1E] font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Request Custom Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-Featured Package Detail Modal */}
      <PackageDetailModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onOpenEnquiry={(name) => onOpenEnquiry(name)}
      />
    </section>
  );
};
