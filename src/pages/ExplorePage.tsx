import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight, MapPin, ChevronRight, Waves, TreePine, Sparkles } from 'lucide-react';
import { EXPLORE_CATEGORIES } from '../data/exploreData';

export const ExplorePage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'river' | 'jungle' | 'trails'>('all');
  const categories = Object.values(EXPLORE_CATEGORIES);

  const filteredCategories = categories.filter((cat) => {
    if (filter === 'all') return true;
    if (filter === 'river') return ['rafting', 'river'].includes(cat.slug);
    if (filter === 'jungle') return ['jungle-safari', 'wildlife', 'forest'].includes(cat.slug);
    if (filter === 'trails') return ['waterfalls', 'nature', 'camping'].includes(cat.slug);
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero: "Explore Dandeli" */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/forest-canopy.jpg"
            alt="Dandeli Forest Canopy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Field Guide • Western Ghats Rainforest & River</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            Explore Dandeli
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            Tucked deep into the rugged North Karnataka Western Ghats, Dandeli is where turbulent dam-released waters of the Kali River carve through ancient teak, bamboo, and rosewood canopies. Home to four species of hornbills, black panthers, and thrilling rapids, explore the eight distinct environments of this untamed paradise.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
              Uttara Kannada, Karnataka
            </span>
            <span>•</span>
            <span className="font-mono">15.2427° N, 74.6247° E</span>
            <span>•</span>
            <span className="text-[#FAF7F2]">8 Curated Exploration Realms</span>
          </div>
        </div>
      </section>

      {/* Main Exploration Categories Grid */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD7]">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              Choose an Experience Realm
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
              Select an environment to view expectations, timings, duration, and details.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'all', label: 'All 8 Realms' },
              { id: 'river', label: 'River & Rapids' },
              { id: 'jungle', label: 'Jungle & Safari' },
              { id: 'trails', label: 'Waterfalls & Trails' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-[#F4EFEA] text-stone-700 hover:bg-[#EAE3D8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Clickable Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/explore/${cat.slug}`}
              className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.heroImage}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15">
                    {cat.duration}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-sans text-stone-300 block">{cat.elevationOrArea}</span>
                    <h3 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
                    {cat.tagline}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600 font-sans">
                    <div className="font-medium text-[#1C1D1F]">
                      <span className="text-stone-400">Best Season: </span>
                      {cat.bestSeason.split('(')[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center justify-between border border-[#E5DFD7]">
                  <span>Explore Experience</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Local Expert Assurance Banner */}
        <div className="p-8 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-normal text-[#1C1D1F]">
              Unsure which experience fits your dates?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-sans">
              Dam water levels change by season, and safari zones operate on strict forestry quotas. Talk to our Ganeshgudi desk for live recommendations.
            </p>
          </div>
          <Link
            to="/contact"
            className="py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>Ask a Local Guide</span>
            <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
          </Link>
        </div>
      </section>
    </div>
  );
};
