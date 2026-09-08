import { ACTIVITIES, TRAVEL_PACKAGES, RESORT_STAYS } from '../data/dandeliData';
import { TRIP_PLANS, TripCategory } from '../components/FindYourTrip';
import { EXPLORE_CATEGORIES, ExploreCategory } from '../data/exploreData';
import { Activity, TravelPackage, ResortStay } from '../types';

// Activity Slug Mapping
export const ACTIVITY_SLUG_MAP: Record<string, string> = {
  rafting: 'white-water-rafting',
  'white-water-rafting': 'white-water-rafting',
  'jungle-safari': 'jungle-safari',
  'jeep-safari': 'jeep-safari',
  kayaking: 'kayaking',
  camping: 'jungle-camping',
  'jungle-camping': 'jungle-camping',
  waterfalls: 'waterfalls',
  'bird-watching': 'wildlife-experiences',
  'nature-walk': 'syntheri-trek',
  'syntheri-trek': 'syntheri-trek',
  'wildlife-experiences': 'wildlife-experiences',
  wildlife: 'wildlife-experiences',
  'natural-jacuzzi': 'natural-jacuzzi',
  'river-activities': 'natural-jacuzzi',
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
  const key = slug.toLowerCase() as TripCategory;
  return TRIP_PLANS[key] || undefined;
}

// Explore Category Slug Helper
export function getExploreCategoryBySlug(slug: string): ExploreCategory | undefined {
  const normalized = slug.toLowerCase();
  return EXPLORE_CATEGORIES[normalized];
}

// Resort Slug Helper
export function getResortBySlug(slug: string): ResortStay | undefined {
  const normalized = slug.toLowerCase();
  return RESORT_STAYS.find((r) => r.id.toLowerCase() === normalized);
}
