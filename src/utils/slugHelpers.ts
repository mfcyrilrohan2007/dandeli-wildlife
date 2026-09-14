import { ACTIVITIES, TRAVEL_PACKAGES, RESORT_STAYS } from '../data/dandeliData';
import { TRIP_PLANS, TripCategory } from '../components/FindYourTrip';
import { EXPLORE_CATEGORIES, ExploreCategory } from '../data/exploreData';
import { DANDELI_DESTINATIONS, DandeliDestination } from '../data/destinationsData';
import { Activity, TravelPackage, ResortStay } from '../types';

// Activity Slug Mapping
export const ACTIVITY_SLUG_MAP: Record<string, string> = {
  rafting: 'white-water-rafting',
  'white-water-rafting': 'white-water-rafting',
  'kali-rafting': 'kali-rafting',
  'jungle-safari': 'jungle-safari',
  'jeep-safari': 'jeep-safari',
  safari: 'jungle-safari',
  kayaking: 'kayaking',
  'supa-kayaking': 'supa-kayaking',
  camping: 'jungle-camping',
  'jungle-camping': 'jungle-camping',
  waterfalls: 'waterfalls',
  'bird-watching': 'wildlife-experiences',
  'hornbill-safari': 'hornbill-safari',
  'nature-walk': 'syntheri-trek',
  'nature-walks': 'nature-walks',
  'syntheri-trek': 'syntheri-trek',
  'wildlife-experiences': 'wildlife-experiences',
  wildlife: 'wildlife-experiences',
  'natural-jacuzzi': 'natural-jacuzzi',
  'river-activities': 'river-activities',
  'coracle-ride': 'coracle-ride',
  coracle: 'coracle-ride',
  'river-crossing-zipline': 'river-crossing-zipline',
  zipline: 'river-crossing-zipline',
};

export function getActivityBySlug(slug: string): Activity | undefined {
  const normalized = slug.toLowerCase();
  const targetId = ACTIVITY_SLUG_MAP[normalized] || normalized;
  return ACTIVITIES.find((a) => a.id === targetId || a.id.toLowerCase() === normalized);
}

// Package Slug Mapping
export const PACKAGE_SLUG_MAP: Record<string, string> = {
  'weekend-escape': 'weekend-dandeli-escape',
  'weekend-dandeli-escape': 'weekend-dandeli-escape',
  adventure: 'adventure-weekend',
  'adventure-weekend': 'adventure-weekend',
  family: 'pkg-family-rainforest',
  'family-escape': 'pkg-family-rainforest',
  'pkg-family-rainforest': 'pkg-family-rainforest',
  friends: 'pkg-friends-rapids',
  'friends-adventure': 'pkg-friends-rapids',
  'pkg-friends-rapids': 'pkg-friends-rapids',
  wildlife: 'pkg-wildlife-hornbill',
  'wildlife-explorer': 'pkg-wildlife-hornbill',
  'pkg-wildlife-hornbill': 'pkg-wildlife-hornbill',
  'river-jungle': 'river-jungle-experience',
  'river-jungle-experience': 'river-jungle-experience',
  camping: 'camping-under-the-stars',
  'camping-getaway': 'camping-under-the-stars',
  'camping-under-the-stars': 'camping-under-the-stars',
  group: 'large-group-getaway',
  'group-adventure': 'large-group-getaway',
  'large-group-getaway': 'large-group-getaway',
};

export function getPackageBySlug(slug: string): TravelPackage | undefined {
  const normalized = slug.toLowerCase();
  const targetId = PACKAGE_SLUG_MAP[normalized] || normalized;
  return TRAVEL_PACKAGES.find((p) => p.id === targetId || p.id.toLowerCase() === normalized);
}

// Package clean URL slug helper
export function getCleanPackageSlug(id: string): string {
  switch (id) {
    case 'weekend-dandeli-escape':
      return 'weekend-escape';
    case 'adventure-weekend':
      return 'adventure';
    case 'pkg-family-rainforest':
      return 'family';
    case 'pkg-friends-rapids':
      return 'friends';
    case 'pkg-wildlife-hornbill':
      return 'wildlife';
    case 'river-jungle-experience':
      return 'river-jungle';
    case 'camping-under-the-stars':
      return 'camping';
    case 'large-group-getaway':
      return 'group';
    default:
      return id;
  }
}

// Activity clean URL slug helper
export function getCleanActivitySlug(id: string): string {
  switch (id) {
    case 'white-water-rafting':
      return 'rafting';
    case 'jungle-camping':
      return 'camping';
    case 'natural-jacuzzi':
      return 'natural-jacuzzi';
    case 'wildlife-experiences':
      return 'wildlife';
    default:
      return id;
  }
}

// Trip Plan Slug Helper
export function getTripPlanBySlug(slug: string) {
  const key = slug.toLowerCase();
  if (key === 'couples') return TRIP_PLANS['duo'];
  if (key === 'corporate' || key === 'group') return TRIP_PLANS['groups'];
  return (TRIP_PLANS as Record<string, any>)[key] || undefined;
}

// Explore Destination & Category Slug Mapping
export const EXPLORE_SLUG_ALIASES: Record<string, string> = {
  'river-rapids': 'kali-rapids',
  'kali-river': 'kali-rapids',
  'kali-river-rapids': 'kali-rapids',
  'bird-corridor': 'hornbill-trail',
  hornbill: 'hornbill-trail',
  'hornbill-trail': 'hornbill-trail',
  'waterfalls-springs': 'sathodi-falls',
  'wilderness-camping': 'riverside-starlight-camping',
  'nature-trails': 'kulgi-botanical-trail',
  syntheri: 'syntheri-rocks',
  'syntheri-rock': 'syntheri-rocks',
  'syntheri-rocks': 'syntheri-rocks',
  sathodi: 'sathodi-falls',
  magod: 'magod-falls',
  kavala: 'kavala-caves',
  'kavala-caves': 'kavala-caves',
  sykes: 'sykes-point',
  'sykes-point': 'sykes-point',
  shiroli: 'sykes-point',
  'shiroli-peak': 'sykes-point',
  'supa-dam': 'supa-backwaters',
  'supa-dam-backwaters': 'supa-backwaters',
  'supa-backwaters': 'supa-backwaters',
  'dandeli-wildlife': 'anshi-safari',
  'dandeli-wildlife-sanctuary': 'anshi-safari',
  'moulangi-ecopark': 'moulangi-ecopark',
  moulangi: 'moulangi-ecopark',
  anshi: 'anshi-safari',
  'anshi-safari': 'anshi-safari',
  coracle: 'coracle-drift',
  'coracle-drift': 'coracle-drift',
  jacuzzi: 'natural-jacuzzi',
  'natural-jacuzzi': 'natural-jacuzzi',
};

// Explore Category & Destination Slug Helper
export function getExploreCategoryBySlug(slug: string): ExploreCategory | undefined {
  const normalized = slug.toLowerCase();
  const aliased = EXPLORE_SLUG_ALIASES[normalized] || normalized;

  // 1. Check direct EXPLORE_CATEGORIES
  if (EXPLORE_CATEGORIES[aliased]) {
    return EXPLORE_CATEGORIES[aliased];
  }
  if (EXPLORE_CATEGORIES[normalized]) {
    return EXPLORE_CATEGORIES[normalized];
  }

  // 2. Check DANDELI_DESTINATIONS
  const destination = DANDELI_DESTINATIONS.find(
    (d) => d.slug.toLowerCase() === aliased || d.id.toLowerCase() === aliased || d.slug.toLowerCase() === normalized
  );

  if (destination) {
    return {
      slug: destination.slug,
      title: destination.name,
      subtitle: `${destination.category} • ${destination.zone}`,
      tagline: destination.shortDescription,
      heroImage: destination.image,
      gallery: destination.gallery.length > 0 ? destination.gallery : [destination.image],
      intro: destination.intro,
      whatToExpect: destination.whatToExpect,
      duration: destination.duration,
      suitableFor: destination.suitableFor,
      bestSeason: destination.bestTime,
      timing: destination.usefulHighlight,
      highlights: destination.detailedHighlights,
      thingsToKnow: destination.thingsToKnow,
      relatedSlugs: ['rafting', 'jungle-safari', 'waterfalls', 'nature'].filter((s) => s !== destination.slug),
      accentColor: destination.category === 'River & Water' || destination.category === 'Waterfalls' ? '#2E6B68' : '#1B4931',
      elevationOrArea: destination.location,
      destination,
      journeyBridge: destination.journeyBridge,
    };
  }

  return undefined;
}

// Resort Slug Aliases & Helper
export const RESORT_SLUG_ALIASES: Record<string, string> = {
  'kali-river-resort': 'kali-riverbank-lodge',
  'hornbill-nest-resort': 'hornbill-canopy-treehouses',
  'green-woods-nature-camp': 'kogilban-nature-homestay',
  'bison-river-resort': 'bison-valley-adventure-camp',
  'river-edge-adventure-camp': 'starry-kali-glamping-camp',
  'white-water-village': 'kali-riverwoods-family-resort',
};

export function getResortBySlug(slug: string): ResortStay | undefined {
  const normalized = slug.toLowerCase();
  const aliased = RESORT_SLUG_ALIASES[normalized] || normalized;
  return RESORT_STAYS.find((r) => r.id.toLowerCase() === aliased || r.id.toLowerCase() === normalized);
}
