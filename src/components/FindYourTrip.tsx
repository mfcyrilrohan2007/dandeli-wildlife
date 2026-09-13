import React, { useState } from 'react';
import {
  User,
  Heart,
  Users,
  Compass,
  Building2,
  ArrowRight,
  Clock,
  MapPin,
  Bed,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Info,
} from 'lucide-react';

interface FindYourTripProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
  initialCategory?: 'solo' | 'duo' | 'friends' | 'family' | 'groups';
}

export type TripCategory = 'solo' | 'duo' | 'friends' | 'family' | 'groups';

interface TripPlanDetail {
  id: TripCategory;
  title: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  accentColor: string;
  image: string;
  icon: React.ReactNode;
  recommendedActivities: string[];
  suggestedDuration: string;
  stayType: string;
  priceRange: string;
  groupSize: string;
  experienceLevel: string;
  vibe: string;
  idealFor: string;
  sampleItinerary: {
    day: string;
    title: string;
    timeline: { time: string; activity: string }[];
  }[];
  localGuideTip: string;
}

export const TRIP_PLANS: Record<TripCategory, TripPlanDetail> = {
  solo: {
    id: 'solo',
    title: 'SOLO',
    badge: 'Quiet Escape & Personal Adventure',
    tagline: 'Step away from the noise, listen to the river, and reconnect.',
    shortDescription:
      'For travellers who want a quiet escape, immersive nature, birdwatching, and personal adventure at their own unhurried pace.',
    accentColor: '#247565',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    icon: <User className="w-5 h-5" />,
    recommendedActivities: [
      'Mindful Supa Backwaters Kayaking',
      'Old Timber Route Forest Trek',
      'Dawn Hornbill Birdwatching',
      'Quiet Riverbank Reading & Hammock Stays',
    ],
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    stayType: 'Eco Homestay or Riverside Stilt Cottage with private porch',
    priceRange: '₹3,200 – ₹4,600 / person (all meals & activities)',
    groupSize: '1 Solo Explorer',
    experienceLevel: 'Mindful, Self-Paced & Moderate',
    vibe: 'Peaceful, reflective, deep forest quietude',
    idealFor: 'Writers, solo backpackers, birdwatchers, and anyone seeking a digital detox',
    sampleItinerary: [
      {
        day: 'Day 1 — Forest Arrival & Slow Water',
        title: 'Settling Into the Canopy',
        timeline: [
          { time: '11:30 AM', activity: 'Arrive at Ganeshgudi eco-homestay, sip fresh Kokum sherbet' },
          { time: '01:30 PM', activity: 'Homestyle North Karnataka lunch (Jowar roti, local greens)' },
          { time: '04:00 PM', activity: 'Solitary guided kayak paddle on calm backwaters as mist rolls in' },
          { time: '07:30 PM', activity: 'Quiet starlight sit-out with forest sounds and warm woodstove dinner' },
        ],
      },
      {
        day: 'Day 2 — Birds & Ancient Trees',
        title: 'Dawn Canopy Walks',
        timeline: [
          { time: '06:00 AM', activity: 'Early morning bird walk with a native naturalist (spot Malabar Pied Hornbills)' },
          { time: '09:00 AM', activity: 'Traditional breakfast & hot Chikmagalur coffee' },
          { time: '10:30 AM', activity: 'Walk along the old timber logging trails near Supa reservoir' },
          { time: '01:00 PM', activity: 'Check-out with renewed focus and peaceful memories' },
        ],
      },
    ],
    localGuideTip:
      'Stay in Ganeshgudi rather than the main town. The Kali River is pristine here, with zero commercial traffic and absolute silence after sunset.',
  },
  duo: {
    id: 'duo',
    title: 'DUO',
    badge: 'Couples & Travel Pairs',
    tagline: 'Misty dawns, private river decks, and shared slow adventures.',
    shortDescription:
      'For two people looking for a relaxed adventure, private scenic stays, quiet boat drifts, and memorable moments away from the crowds.',
    accentColor: '#8C5E3C',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
    icon: <Heart className="w-5 h-5" />,
    recommendedActivities: [
      'Sunrise Coracle Drift for Two',
      'Tandem Kali Kayak Session',
      'Private Riverbank Candlelight Dining',
      'Syntheri Rock Canyon Walk',
    ],
    suggestedDuration: '2 Days / 1 Night (Weekend Escape) or 3 Days / 2 Nights',
    stayType: 'Private Riverfront Teak Cottage or Canopy Treehouse with Balcony',
    priceRange: '₹4,500 – ₹6,200 / person (includes cottage stay, all meals & experiences)',
    groupSize: '2 Travelers',
    experienceLevel: 'Relaxed, Scenic & Romantic',
    vibe: 'Romantic, serene, unhurried and picturesque',
    idealFor: 'Couples, partners, and close travel duos celebrating anniversaries or weekend getaways',
    sampleItinerary: [
      {
        day: 'Day 1 — Riverfront Seclusion',
        title: 'The Sound of Flowing Water',
        timeline: [
          { time: '12:00 PM', activity: 'Check-in to a private riverfront cottage overlooking the Kali rapids' },
          { time: '01:30 PM', activity: 'Buffet lunch featuring local spices and fresh fish curry' },
          { time: '04:30 PM', activity: 'Sunset coracle ride gently steered by a local boatman across the backwaters' },
          { time: '08:00 PM', activity: 'Private candlelit dinner on the wooden deck under the teak trees' },
        ],
      },
      {
        day: 'Day 2 — Mist & Canyon Exploration',
        title: 'Morning Waters & Hidden Rocks',
        timeline: [
          { time: '06:30 AM', activity: 'Tandem kayak in the morning river fog; watch kingfishers dive' },
          { time: '09:00 AM', activity: 'Leisurely deck breakfast with fresh fruits and brewed filter coffee' },
          { time: '11:00 AM', activity: 'Scenic drive to Syntheri Rocks monolith and ancient river canyon' },
          { time: '03:00 PM', activity: 'Departure with memorable photographs of the Western Ghats' },
        ],
      },
    ],
    localGuideTip:
      'Ask our desk for the Ganeshgudi sunrise boat slot at 6:15 AM. The temperature drops and mist hangs two feet above the water—it is pure cinema.',
  },
  friends: {
    id: 'friends',
    title: 'FRIENDS',
    badge: 'High Adrenaline & Campfires',
    tagline: 'Surging rapids, loud laughter, campfire BBQ, and wild stories.',
    shortDescription:
      'For groups of friends looking for white-water rafting, cliff jumps, natural jacuzzi rapids, riverside camping, and non-stop adventure.',
    accentColor: '#D97706',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
    icon: <Users className="w-5 h-5" />,
    recommendedActivities: [
      'Full 9.5 km White-Water Rafting (Class III–IV)',
      'Natural Jacuzzi Mountain Bathing',
      'Campfire with BBQ Skewers & Music',
      'River Raft Surfing & Cliff Diving',
    ],
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    stayType: 'Riverside Wooden Cabins or Starlit Safari Tents with Campfire lawn',
    priceRange: '₹3,400 – ₹4,800 / person (complete action package + all meals + stays)',
    groupSize: '3 – 8 Adventurers',
    experienceLevel: 'High Energy, Action-Packed & Thrilling',
    vibe: 'Exciting, loud, spirited and full of camaraderie',
    idealFor: 'College friends, reunion gangs, weekend adventure road-trippers',
    sampleItinerary: [
      {
        day: 'Day 1 — The Rapid Run',
        title: 'Conquering the Kali',
        timeline: [
          { time: '09:00 AM', activity: 'Gear up with CE-certified river vests and safety helmets at river base' },
          { time: '10:00 AM', activity: 'Tackle the big drops: Stanley’s Fall, The Snag, and Smugglers’ Corner' },
          { time: '01:30 PM', activity: 'Hearty local meal back at camp to refuel after rafting' },
          { time: '04:00 PM', activity: 'Natural Jacuzzi bath in turbulent mountain currents' },
          { time: '08:00 PM', activity: 'Campfire by the water, hot chicken/paneer skewers, and starry skies' },
        ],
      },
      {
        day: 'Day 2 — Jungle Trails & Canyon',
        title: 'Cliff Views & Farewell',
        timeline: [
          { time: '07:30 AM', activity: 'Morning dip in the river pool followed by breakfast' },
          { time: '09:30 AM', activity: 'Syntheri Rocks limestone canyon exploration' },
          { time: '12:30 PM', activity: 'Final group photo by the Supa suspension bridge' },
          { time: '02:00 PM', activity: 'Heading back with stories that will be told for years' },
        ],
      },
    ],
    localGuideTip:
      'We recommend the 8:30 AM or 11:30 AM dam release slots for maximum water speed. Keep strap sandals on—no loose flip-flops on the rapids!',
  },
  family: {
    id: 'family',
    title: 'FAMILY',
    badge: 'Safe, Comfortable & Wholesome',
    tagline: 'Gentle nature safaris, pool resorts, and memories for all generations.',
    shortDescription:
      'For families looking for comfortable stays, child-friendly activities, senior-accessible trails, wildlife spotting, and relaxed bonding.',
    accentColor: '#2563EB',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    icon: <Compass className="w-5 h-5" />,
    recommendedActivities: [
      'Open-Top 4x4 Anshi Wildlife Safari',
      'Gentle Supa Backwaters Coracle Float',
      'Kulgi Timber Museum & Nature Center',
      'Evening Lawn Bonfire with Warm Snacks',
    ],
    suggestedDuration: '3 Days / 2 Nights (Recommended) or 2 Days / 1 Night',
    stayType: 'Family Suites or Interconnecting Riverfront Cottages with Pool',
    priceRange: '₹3,800 – ₹5,500 / adult (special 50% discount for children under 8)',
    groupSize: '4 – 10 Family Members (Multi-generational)',
    experienceLevel: 'Comfortable, Educational & Senior/Child Friendly',
    vibe: 'Warm, safe, restful and enriching',
    idealFor: 'Parents with young children, grandparents, and extended family vacations',
    sampleItinerary: [
      {
        day: 'Day 1 — Welcome & Resort Relaxation',
        title: 'Settling in Comfortably',
        timeline: [
          { time: '01:00 PM', activity: 'Check-in to spacious family cottages with private garden lawns' },
          { time: '02:00 PM', activity: 'Mild homestyle buffet lunch with kids-friendly mild dishes' },
          { time: '04:30 PM', activity: 'Gentle coracle boat float on calm river pools (high-safety vests for all ages)' },
          { time: '07:30 PM', activity: 'Resort lawn bonfire with tea, hot pakodas, and stargazing' },
        ],
      },
      {
        day: 'Day 2 — Wildlife & Nature Discovery',
        title: 'Jungle Safari Day',
        timeline: [
          { time: '06:30 AM', activity: 'Open 4x4 Jeep Safari in Dandeli Wildlife Sanctuary (spot deer, peacocks, bison)' },
          { time: '09:00 AM', activity: 'Full breakfast buffet at the resort' },
          { time: '11:00 AM', activity: 'Visit the Kulgi Nature & Timber Museum (fascinating for kids)' },
          { time: '04:00 PM', activity: 'Swimming pool relaxation and indoor recreation room games' },
        ],
      },
      {
        day: 'Day 3 — Morning Walk & Departure',
        title: 'Fresh Air & Souvenirs',
        timeline: [
          { time: '07:30 AM', activity: 'Easy botanical garden stroll inside the property' },
          { time: '09:30 AM', activity: 'Breakfast, packing, and collecting local wild honey & spices' },
          { time: '11:30 AM', activity: 'Comfortable check-out with personalized family photo souvenir' },
        ],
      },
    ],
    localGuideTip:
      'Kids under 11 cannot enter high-grade rapids, but our gentle coracle floats and resort swimming pools keep them thoroughly entertained while parents can take turns if they wish to raft.',
  },
  groups: {
    id: 'groups',
    title: 'GROUPS',
    badge: '4+ to 50+ Pax • Offsites & Reunions',
    tagline: 'Team raft derbies, amphitheater dinners, and zero logistics headache.',
    shortDescription:
      'For 4+ people, college clans, corporate team offsites, and celebrations seeking dedicated coordinators, group challenges, and private resort blocks.',
    accentColor: '#7C3AED',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
    icon: <Building2 className="w-5 h-5" />,
    recommendedActivities: [
      'Multi-Boat Raft Derby & Team Races',
      'Team River Volleyball & Obstacle Fun',
      'Open-Air Amphitheater Gala Night & BBQ',
      'Dedicated AC Bus Pickup from Hubballi/Goa',
    ],
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    stayType: 'Exclusive Resort Block or Private Forest Estate with Lawn & Conference Hall',
    priceRange: '₹3,100 – ₹4,200 / person (Volume tier pricing with all inclusions)',
    groupSize: '4 to 50+ Guests',
    experienceLevel: 'Collaborative, Rejuvenating & High-Spirited',
    vibe: 'Festive, unified, seamlessly coordinated',
    idealFor: 'Tech company offsites, college alumni meets, photography clubs, and milestone celebrations',
    sampleItinerary: [
      {
        day: 'Day 1 — Team Onboarding & Rafting Derby',
        title: 'Team Spirit on the Water',
        timeline: [
          { time: '10:00 AM', activity: 'Smooth group arrival with luggage transfer to dedicated cottage wings' },
          { time: '11:30 AM', activity: 'Synchronized team white-water rafting with friendly multi-raft challenges' },
          { time: '02:00 PM', activity: 'Grand outdoor buffet lunch under the bamboo trees' },
          { time: '04:30 PM', activity: 'Riverside volleyball tournament & water zorbing' },
          { time: '08:00 PM', activity: 'Amphitheater gala with bonfire, barbecue grill counter, and celebration' },
        ],
      },
      {
        day: 'Day 2 — Morning Safari & Team Wrap-up',
        title: 'Into the Forest & Reflection',
        timeline: [
          { time: '06:30 AM', activity: 'Early morning jungle trek or optional 4x4 safari convoy' },
          { time: '09:00 AM', activity: 'Grand breakfast spread' },
          { time: '10:30 AM', activity: 'Team debrief, awards, or leisure pool session' },
          { time: '01:00 PM', activity: 'Coordinated departure with group transfer to airport/station' },
        ],
      },
    ],
    localGuideTip:
      'We assign dedicated local coordinators for large groups so your organizers don’t have to chase keys, food schedules, or safety briefings. Everything runs like clockwork.',
  },
};

export const FindYourTrip: React.FC<FindYourTripProps> = ({
  onOpenEnquiry,
  initialCategory = 'friends',
}) => {
  const [selectedPlanKey, setSelectedPlanKey] = useState<TripCategory>(initialCategory);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const currentPlan = TRIP_PLANS[selectedPlanKey];

  const handleOpenDetail = (category: TripCategory) => {
    setSelectedPlanKey(category);
    setIsDetailOpen(true);
  };

  const handleEnquireFromPlan = () => {
    onOpenEnquiry(`Curated Plan: ${currentPlan.title} (${currentPlan.badge})`);
  };

  return (
    <section id="trip-plans" className="py-14 sm:py-24 lg:py-32 bg-[#FAF8F5] text-[#19231D] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 border-b border-stone-300/80 pb-6 sm:pb-10">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
              <Compass className="w-3.5 h-3.5" />
              <span>Tailored By Travel Style & Companions</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#0F2419]">
              FIND A TRIP THAT FITS YOU
            </h2>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg font-sans leading-relaxed">
              Dandeli isn't one-size-fits-all. A solo traveler seeking peace needs an entirely different rhythm
              than a gang of friends ready for Class IV rapids or a family traveling with grandparents.
              Select who you are exploring with:
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500 hidden sm:flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Click any card below to open its sample itinerary & planner</span>
          </div>
        </div>

        {/* MOBILE-ONLY COMPANION SELECTOR & ACTIVE PLAN CARD */}
        <div className="md:hidden space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#247565] font-bold">
            SELECT TRAVEL COMPANIONS:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 -mx-4 px-4">
            {(Object.keys(TRIP_PLANS) as TripCategory[]).map((key) => {
              const plan = TRIP_PLANS[key];
              const isSelected = selectedPlanKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedPlanKey(key)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all shrink-0 flex items-center gap-1.5 min-h-[44px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F2319] text-[#5FE395] shadow-md border border-[#5FE395]/40'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {plan.icon}
                  <span>{key === 'groups' ? 'Groups 4+' : key}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Single Focused Card */}
          <div className="rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-lg flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src={currentPlan.image}
                alt={currentPlan.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider">
                  {currentPlan.groupSize}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#5FE395] block">
                  {currentPlan.badge}
                </span>
                <h3 className="font-condensed text-3xl font-bold uppercase tracking-wide">
                  {currentPlan.title} PLAN
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {currentPlan.shortDescription}
              </p>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                  Best Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentPlan.recommendedActivities.map((act, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-[11px] text-emerald-900 border border-emerald-200/60 font-medium"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[9.5px] font-mono uppercase text-stone-400 block">Duration</span>
                  <span className="font-bold text-stone-800">{currentPlan.suggestedDuration}</span>
                </div>
                <div>
                  <span className="text-[9.5px] font-mono uppercase text-stone-400 block">Approx. Guidance</span>
                  <span className="font-bold text-emerald-800">{currentPlan.priceRange.split('(')[0]}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(selectedPlanKey)}
                  className="w-full min-h-[48px] py-3 px-4 rounded-full bg-[#0F2319] hover:bg-[#163627] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                >
                  <span>VIEW {currentPlan.title} PLAN ITINERARY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#5FE395]" />
                </button>

                <button
                  type="button"
                  onClick={handleEnquireFromPlan}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-full bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-950 font-display font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <span>ENQUIRE FOR THIS PLAN</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP/TABLET: 5 Distinct Cards with Varied Visual Treatments & Authentic Photography */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1. SOLO (Span 4) — Vertical Sanctuary Style */}
          <div
            onClick={() => handleOpenDetail('solo')}
            className={`lg:col-span-4 group cursor-pointer rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
              selectedPlanKey === 'solo'
                ? 'border-emerald-700 ring-2 ring-emerald-700/20 shadow-lg'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src={TRIP_PLANS.solo.image}
                alt="Solo traveler in forest canopy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <User className="w-3 h-3 text-emerald-300" />
                  <span>1 Guest</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-condensed text-3xl font-bold uppercase text-white tracking-wide">
                  SOLO
                </h3>
                <p className="text-xs text-emerald-200 font-sans">{TRIP_PLANS.solo.badge}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {TRIP_PLANS.solo.shortDescription}
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Recommended Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TRIP_PLANS.solo.recommendedActivities.slice(0, 3).map((act, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-emerald-50 text-[11px] text-emerald-900 border border-emerald-200/60"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-emerald-900 group-hover:text-emerald-700">
                <span>Explore Solo Plan</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. DUO (Span 4) — Warm Scenic Style */}
          <div
            onClick={() => handleOpenDetail('duo')}
            className={`lg:col-span-4 group cursor-pointer rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
              selectedPlanKey === 'duo'
                ? 'border-[#8C5E3C] ring-2 ring-[#8C5E3C]/20 shadow-lg'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src={TRIP_PLANS.duo.image}
                alt="Two people kayaking on calm Kali water"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-amber-300" />
                  <span>2 Guests</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-condensed text-3xl font-bold uppercase text-white tracking-wide">
                  DUO
                </h3>
                <p className="text-xs text-amber-200 font-sans">{TRIP_PLANS.duo.badge}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {TRIP_PLANS.duo.shortDescription}
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Recommended Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TRIP_PLANS.duo.recommendedActivities.slice(0, 3).map((act, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-amber-50 text-[11px] text-amber-900 border border-amber-200/60"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-amber-950 group-hover:text-amber-800">
                <span>Explore Duo Plan</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#8C5E3C] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. FRIENDS (Span 4) — High Adrenaline Feature Style */}
          <div
            onClick={() => handleOpenDetail('friends')}
            className={`lg:col-span-4 group cursor-pointer rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
              selectedPlanKey === 'friends'
                ? 'border-amber-600 ring-2 ring-amber-600/20 shadow-lg'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="relative h-60 sm:h-64 overflow-hidden">
              <img
                src={TRIP_PLANS.friends.image}
                alt="Friends white water rafting on rapids"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-amber-400" />
                  <span>3 – 8 Adventurers</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-condensed text-3xl font-bold uppercase text-white tracking-wide">
                  FRIENDS
                </h3>
                <p className="text-xs text-amber-200 font-sans">{TRIP_PLANS.friends.badge}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {TRIP_PLANS.friends.shortDescription}
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Recommended Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TRIP_PLANS.friends.recommendedActivities.slice(0, 3).map((act, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-orange-50 text-[11px] text-orange-950 border border-orange-200/60"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-amber-950 group-hover:text-amber-700">
                <span>Explore Friends Plan</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. FAMILY (Span 6) — Wide Nature & Safari Style */}
          <div
            onClick={() => handleOpenDetail('family')}
            className={`lg:col-span-6 group cursor-pointer rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col sm:flex-row hover:shadow-xl ${
              selectedPlanKey === 'family'
                ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-lg'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="relative h-60 sm:h-auto sm:w-1/2 overflow-hidden shrink-0">
              <img
                src={TRIP_PLANS.family.image}
                alt="Family jungle safari in Dandeli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent sm:hidden"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-blue-300" />
                  <span>4 – 10 Pax</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-wide">
                  FAMILY
                </h3>
                <span className="text-xs text-blue-700 font-sans font-medium block mt-0.5">
                  {TRIP_PLANS.family.badge}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans mt-2">
                  {TRIP_PLANS.family.shortDescription}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Recommended Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TRIP_PLANS.family.recommendedActivities.map((act, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-blue-50 text-[11px] text-blue-900 border border-blue-200/60"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-blue-900 group-hover:text-blue-700">
                <span>Explore Family Plan</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 5. GROUPS (Span 6) — Wide Celebration & Offsite Style */}
          <div
            onClick={() => handleOpenDetail('groups')}
            className={`lg:col-span-6 group cursor-pointer rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col sm:flex-row hover:shadow-xl ${
              selectedPlanKey === 'groups'
                ? 'border-purple-600 ring-2 ring-purple-600/20 shadow-lg'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="relative h-60 sm:h-auto sm:w-1/2 overflow-hidden shrink-0">
              <img
                src={TRIP_PLANS.groups.image}
                alt="Night campfire and group gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent sm:hidden"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-purple-300" />
                  <span>4+ to 50+ Pax</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-wide">
                  GROUPS
                </h3>
                <span className="text-xs text-purple-700 font-sans font-medium block mt-0.5">
                  {TRIP_PLANS.groups.badge}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans mt-2">
                  {TRIP_PLANS.groups.shortDescription}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                  Recommended Experiences:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TRIP_PLANS.groups.recommendedActivities.map((act, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-purple-50 text-[11px] text-purple-900 border border-purple-200/60"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-purple-900 group-hover:text-purple-700">
                <span>Explore Groups Plan</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED FRONTEND PLAN VIEW (Integrated directly into page with smooth state) */}
        <div className="rounded-3xl bg-[#0F2319] text-white border border-emerald-500/30 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8">
          {/* Header of Detailed View */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                  {currentPlan.icon}
                  <span>{currentPlan.badge}</span>
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  Showing Plan: <strong className="text-white uppercase">{currentPlan.title}</strong>
                </span>
              </div>
              <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                {currentPlan.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans max-w-2xl">
                {currentPlan.idealFor}
              </p>
            </div>

            {/* Quick Switcher for the 5 categories */}
            <div className="flex flex-wrap gap-1.5 self-start lg:self-auto bg-black/40 p-1.5 rounded-2xl border border-white/10">
              {(Object.keys(TRIP_PLANS) as TripCategory[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedPlanKey(key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                    selectedPlanKey === key
                      ? 'bg-emerald-500 text-[#091510] shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Key Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                Suggested Duration
              </span>
              <span className="font-bold text-white block">{currentPlan.suggestedDuration}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                Stay Type
              </span>
              <span className="font-bold text-emerald-300 block">{currentPlan.stayType}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                Approx. Guidance Price
              </span>
              <span className="font-bold text-white block">{currentPlan.priceRange}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                Suitable Group Size
              </span>
              <span className="font-bold text-white block">{currentPlan.groupSize}</span>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                Experience Pace
              </span>
              <span className="font-bold text-emerald-300 block">{currentPlan.experienceLevel}</span>
            </div>
          </div>

          {/* Sample Itinerary (Day-by-Day Timeline) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-condensed text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Sample {currentPlan.title} Expedition Timeline</span>
              </h4>
              <span className="text-[11px] font-mono text-stone-400">
                Customizable by local coordinator
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPlan.sampleItinerary.map((daySchedule, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#142C20] border border-white/10 space-y-4"
                >
                  <div className="border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      {daySchedule.day}
                    </span>
                    <h5 className="font-display font-bold text-base text-white mt-0.5">
                      {daySchedule.title}
                    </h5>
                  </div>

                  <div className="space-y-3">
                    {daySchedule.timeline.map((item, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 text-xs">
                        <span className="w-16 font-mono text-emerald-300 font-bold shrink-0 pt-0.5">
                          {item.time}
                        </span>
                        <span className="text-stone-300 leading-relaxed">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Guide Insight & Action Row */}
          <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3 text-xs text-stone-300 max-w-2xl">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-display block mb-0.5">Local River Desk Advice:</strong>
                <p className="text-stone-400 leading-relaxed font-sans">{currentPlan.localGuideTip}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={handleEnquireFromPlan}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Enquire {currentPlan.title} Trip</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Disclaimer (Frontend mock note) */}
          <div className="text-center">
            <span className="text-[11px] font-mono text-stone-500">
              * Indicative tariffs & sample timeline. Final packages are tailored according to live river dam releases, room categories, and custom group requirements.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
