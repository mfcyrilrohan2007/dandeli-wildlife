import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowUpRight,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Sparkles,
  Bed,
  CheckCircle2,
  Utensils,
  Star,
} from 'lucide-react';
import { RESORT_STAYS } from '../data/dandeliData';

export const ResortsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stays (6)' },
    { id: 'Riverside', label: 'River-side Stays' },
    { id: 'Forest', label: 'Forest Resorts' },
    { id: 'Adventure', label: 'Adventure Camps' },
    { id: 'Family', label: 'Family Resorts' },
    { id: 'Eco', label: 'Nature Stays' },
    { id: 'Camp', label: 'Camping' },
  ];

  const filteredStays = RESORT_STAYS.filter((stay) => {
    if (selectedCategory === 'all') return true;
    return stay.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/kali-river.jpg"
            alt="Dandeli Resorts & Stays"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Bed className="w-3.5 h-3.5" />
            <span>Verified Eco Stays & Riverside Lodges</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            Resorts & Wilderness Stays
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            Hand-inspected, licensed properties across Ganeshgudi, Barchi, and Kulgi. From granite river cottages and starlit glamping tents to elevated forest treehouses and ancestral spice plantation homestays.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-400">
            <span className="text-[#FAF7F2]">All 3 Home-Style Meals Included</span>
            <span>•</span>
            <span>Zero Middleman Markups</span>
            <span>•</span>
            <span>Verified Local Families & River Marshals</span>
          </div>
        </div>
      </section>

      {/* Main Resorts Collection */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Categories Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD7]">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              Browse by Stay Category
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
              Tap any property to view photo galleries, facilities, room options, and pricing.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C1D1F] text-white shadow-sm'
                    : 'bg-[#F4EFEA] text-stone-700 hover:bg-[#EAE3D8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay) => (
            <Link
              key={stay.id}
              to={`/resorts/${stay.id}`}
              className="group rounded-2xl overflow-hidden bg-white border border-[#E5DFD7] hover:border-[#2E6B68]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stay.coverImage}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans font-medium uppercase tracking-wider text-[#FAF7F2] border border-white/15">
                    {stay.categoryLabel}
                  </span>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#1C1D1F] font-sans text-xs font-medium flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-[#C25E3E] text-[#C25E3E]" />
                    <span>{stay.rating}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-sans text-stone-300 block">{stay.locationArea}</span>
                    <h3 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#EAE3D8] transition-colors">
                      {stay.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-sans">
                    {stay.tagline}
                  </p>

                  <div className="space-y-2 text-xs text-stone-700 font-sans">
                    <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                      <span className="text-stone-400">Suitable For:</span>
                      <span className="font-medium text-[#1C1D1F] text-right truncate max-w-[180px]">{stay.suitableFor}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                      <span className="text-stone-400">Stay Type:</span>
                      <span className="font-medium text-[#1C1D1F] text-right truncate max-w-[180px]">{stay.stayType}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1 font-sans">
                    <span className="text-[10px] uppercase text-stone-400 block tracking-wider font-medium">
                      Key Facilities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stay.facilities.slice(0, 3).map((h, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-[#FAF7F2] text-stone-700 text-[11px] border border-[#E5DFD7]">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-sans text-stone-400 block tracking-wider">Tariff from</span>
                  <span className="font-serif text-2xl font-normal text-[#1C1D1F]">
                    ₹{stay.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans"> / night</span>
                </div>

                <span className="py-2.5 px-4 rounded-xl bg-[#FAF7F2] group-hover:bg-[#2E6B68] group-hover:text-white text-[#1C1D1F] text-xs font-sans font-medium uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#E5DFD7]">
                  <span>View Stay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Local Hospitality Note */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F4EFEA] border border-[#E5DFD7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F]">
              Prefer a private homestay or secluded cottage?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
              We partner directly with native families in Ganeshgudi and Kulgi who open their organic spice plantation cottages and heritage forest properties to travellers. Contact us for private bookings.
            </p>
          </div>
          <Link
            to="/contact"
            className="py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white text-xs font-sans font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>Ask Stays Desk</span>
            <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
          </Link>
        </div>
      </section>
    </div>
  );
};
