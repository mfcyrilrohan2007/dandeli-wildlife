import React, { useState } from 'react';
import { Users, Heart, Zap, Sparkles, Building2, Check, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';
import { GroupCategory, TravelPackage } from '../types';
import { TRAVEL_PACKAGES } from '../data/dandeliData';

interface GroupSizePlannerProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
  initialGroupCategory?: GroupCategory;
}

interface GroupArchetype {
  id: GroupCategory;
  label: string;
  tagline: string;
  paxRange: string;
  icon: React.ReactNode;
  vibe: string;
  recommendedStay: string;
  mustDoActivities: string[];
  localGuideAdvice: string;
  packageId: string;
}

export const GroupSizePlanner: React.FC<GroupSizePlannerProps> = ({
  onOpenEnquiry,
  initialGroupCategory = 'friends',
}) => {
  const [selectedGroup, setSelectedGroup] = useState<GroupCategory>(
    initialGroupCategory === 'all' ? 'friends' : initialGroupCategory
  );
  const [paxCount, setPaxCount] = useState<number>(4);

  const archetypes: GroupArchetype[] = [
    {
      id: 'solo-duo',
      label: 'Couples & Duos',
      tagline: 'Quiet river song, private treehouses, and mist-laden paddles',
      paxRange: '1 - 2 Travelers',
      icon: <Heart className="w-5 h-5" />,
      vibe: 'Peaceful, unhurried, romantic immersion in nature',
      recommendedStay: 'Private Riverfront Teak Cottage or Canopy Treehouse',
      mustDoActivities: [
        'Dawn tandem kayak across calm Supa backwaters',
        'Private sunrise coracle drift with local birdwatcher',
        'Riverside candlelight dinner under teak trees',
        'Hornbill nesting trail in morning mist',
      ],
      localGuideAdvice:
        'Stay at Ganeshgudi instead of Dandeli town. The morning mist on the Kali River around 6:30 AM is breathtaking and completely silent.',
      packageId: 'pkg-couples-serenity',
    },
    {
      id: 'friends',
      label: 'Friends & Gangs',
      tagline: 'High adrenaline, Class IV rapids, campfire BBQ & loud laughs',
      paxRange: '3 - 8 Adventurers',
      icon: <Zap className="w-5 h-5" />,
      vibe: 'Energetic, thrilling, competitive river fun',
      recommendedStay: 'Riverside Wooden Cabins or Riverside Glamping Tents',
      mustDoActivities: [
        'Full 9.5 km White-Water Rafting on 9 surging rapids',
        'Natural Jacuzzi rapid bathing in mountain torrents',
        'Riverside campfire with hot local barbecue skewers',
        'Syntheri Rock canyon descent & forest cliff views',
      ],
      localGuideAdvice:
        'Book the 8:30 AM rafting slot when Supa Dam releases peak water volume for maximum rapid power.',
      packageId: 'pkg-friends-rapids',
    },
    {
      id: 'family',
      label: 'Families with Kids',
      tagline: 'Safe river wonder, wildlife safaris, swimming pools & easy trails',
      paxRange: '4 - 10 Members',
      icon: <Users className="w-5 h-5" />,
      vibe: 'Comfortable, safe, educational, wholesome bonding',
      recommendedStay: 'Bison Valley Heritage Family Suites with Swimming Pool',
      mustDoActivities: [
        'Open-top 4x4 Jeep Safari in Dandeli Wildlife Sanctuary',
        'Safe, gentle coracle boat ride with high-buoyancy vests',
        'Kulgi timber & nature museum interactive tour',
        'Evening lawn campfire with roasted marshmallows',
      ],
      localGuideAdvice:
        'Children under 11 cannot do high rapids, but the gentle coracle drift and wildlife safari are lifelong highlights for young explorers.',
      packageId: 'pkg-family-wildlife',
    },
    {
      id: 'corporate',
      label: 'Corporate & Offsites',
      tagline: 'Team rafting challenge, outdoor amphitheater & hassle-free logistics',
      paxRange: '10 - 50+ Pax',
      icon: <Building2 className="w-5 h-5" />,
      vibe: 'Collaborative, rejuvenating, tech detox offsite',
      recommendedStay: 'Exclusive Resort Block with Outdoor Amphitheatre',
      mustDoActivities: [
        'Dedicated raft derby challenge with custom team heats',
        'Group river volleyball & natural jacuzzi relaxation',
        'Gala night with local Karnataka barbecue buffet',
        'Full logistics & AC bus ground transfers included',
      ],
      localGuideAdvice:
        'We assign dedicated group marshals so your HR/organizers can actually relax and enjoy the trip without coordinating individual heads.',
      packageId: 'pkg-corporate-clan',
    },
  ];

  const currentArchetype = archetypes.find((a) => a.id === selectedGroup) || archetypes[1];
  const matchedPackage = TRAVEL_PACKAGES.find((p) => p.id === currentArchetype.packageId);

  // Quick price calculation estimate
  const estimatedTotal = matchedPackage ? matchedPackage.pricePerPerson * paxCount : 0;

  return (
    <section id="trip-plans" className="py-24 sm:py-32 bg-[#F3EFEA] text-[#19231D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
            <Users className="w-3.5 h-3.5" />
            <span>Tailored By Group Size & Travel Style</span>
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#0F2419]">
            EVERY GROUP EXPERIENCES DANDELI DIFFERENTLY
          </h2>
          <p className="text-base sm:text-lg text-[#526058] font-sans">
            A romantic duo requires quiet riverbanks; a gang of friends wants white-water thrill; a family needs safety and comfort. Choose your crew type below:
          </p>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {archetypes.map((arch) => (
            <button
              key={arch.id}
              type="button"
              onClick={() => {
                setSelectedGroup(arch.id);
                if (arch.id === 'solo-duo') setPaxCount(2);
                if (arch.id === 'friends') setPaxCount(5);
                if (arch.id === 'family') setPaxCount(6);
                if (arch.id === 'corporate') setPaxCount(15);
              }}
              className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                selectedGroup === arch.id
                  ? 'bg-[#122A1E] text-white border-[#122A1E] shadow-xl scale-[1.02]'
                  : 'bg-white/80 hover:bg-white text-[#2B3831] border-stone-200/80 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    selectedGroup === arch.id
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-stone-100 text-[#247565]'
                  }`}
                >
                  {arch.icon}
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    selectedGroup === arch.id
                      ? 'bg-emerald-900 text-emerald-300'
                      : 'bg-stone-200/70 text-stone-600'
                  }`}
                >
                  {arch.paxRange}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display font-bold text-lg">{arch.label}</h3>
                <p
                  className={`text-xs mt-1 line-clamp-2 ${
                    selectedGroup === arch.id ? 'text-stone-300' : 'text-stone-500'
                  }`}
                >
                  {arch.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Detail Card for Selected Group */}
        <div className="mt-8 rounded-3xl bg-white border border-stone-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Local Intelligence & Activities */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#247565]">
                    Recommended Plan For {currentArchetype.label}
                  </span>
                  <h4 className="font-condensed text-3xl font-bold uppercase text-[#0F2419]">
                    {currentArchetype.tagline}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#1C584C] text-xs font-semibold">
                  Vibe: {currentArchetype.vibe}
                </span>
              </div>

              {/* Must-do Activities Checklist */}
              <div>
                <h5 className="text-xs font-display font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Must-Do Experiences For Your Group:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentArchetype.mustDoActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#313E37]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#247565] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Guide Insight Box */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-1 text-xs">
                <span className="font-display font-bold text-[#142C21] uppercase tracking-wider block">
                  💡 Native Guide’s Secret Tip:
                </span>
                <p className="text-[#55635C] leading-relaxed">
                  {currentArchetype.localGuideAdvice}
                </p>
              </div>

              {/* Recommended Stay */}
              <div className="text-xs text-[#55635C]">
                <strong className="text-[#142C21] font-display">Recommended Stay: </strong>
                {currentArchetype.recommendedStay}
              </div>
            </div>

            {/* Quick Guest Count Stepper */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-stone-500">
                  Your Group Size:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPaxCount((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-display font-bold text-base text-[#142C21]">
                    {paxCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPaxCount((prev) => prev + 1)}
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                  <span className="text-xs text-stone-500">travellers</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry(
                    `${currentArchetype.label} Plan for ${paxCount} Pax (${matchedPackage?.title || 'Custom'})`
                  )
                }
                className="px-5 py-2.5 rounded-full bg-[#122A1E] hover:bg-[#1A3B2B] text-white text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Enquire This Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Matched Package Preview Card */}
          {matchedPackage && (
            <div className="lg:col-span-5 bg-[#122A1E] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider">
                    {matchedPackage.badge}
                  </span>
                  <span className="text-xs font-mono text-stone-300">
                    {matchedPackage.duration}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-condensed text-3xl font-bold uppercase text-white leading-tight">
                    {matchedPackage.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-sans line-clamp-2">
                    {matchedPackage.summary}
                  </p>
                </div>

                {/* Estimate Calculator Preview */}
                <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-stone-400 uppercase">
                      Package Rate:
                    </span>
                    <div className="text-right">
                      <span className="text-xl font-bold font-mono text-emerald-300">
                        ₹{matchedPackage.pricePerPerson.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-stone-400 block">/ person all-inclusive</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-2 flex items-baseline justify-between text-xs font-mono">
                    <span className="text-stone-300">
                      Estimated For {paxCount} {paxCount === 1 ? 'Guest' : 'Guests'}:
                    </span>
                    <span className="text-base font-bold text-white">
                      ₹{estimatedTotal.toLocaleString('en-IN')}*
                    </span>
                  </div>
                  <div className="text-[10px] text-stone-400 italic">
                    *Includes all meals, stay, rafting/safari permits, and certified gear.
                  </div>
                </div>

                <div className="text-xs text-stone-300 space-y-1">
                  <div>
                    <strong className="text-emerald-300">Meals: </strong>
                    {matchedPackage.meals}
                  </div>
                  <div>
                    <strong className="text-emerald-300">Stay: </strong>
                    {matchedPackage.stayType}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/15 relative z-10">
                <button
                  type="button"
                  onClick={() =>
                    onOpenEnquiry(
                      `${matchedPackage.title} (${paxCount} pax - ₹${estimatedTotal})`
                    )
                  }
                  className="w-full py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-colors shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Request Custom Itinerary & Dates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
