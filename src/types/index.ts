export type ActivityCategory = 'all' | 'river' | 'jungle' | 'trek' | 'camp' | 'wildlife';

export type GroupCategory = 'all' | 'solo-duo' | 'friends' | 'family' | 'corporate';

export interface Activity {
  id: string;
  title: string;
  category: 'river' | 'jungle' | 'trek' | 'camp' | 'wildlife';
  waterGrade?: string;
  duration: string;
  difficulty?: string;
  bestSuitedFor?: string;
  environmentFeel?: string;
  visitorExperience?: string;
  season: string;
  minGroup: number;
  maxGroup: number;
  pricePerPerson: number;
  tagline: string;
  description: string;
  location: string;
  image: string;
  highlights: string[];
  safetyGear: string[];
  timing: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  days: number;
  nights: number;
  groupCategory: 'all' | 'solo-duo' | 'friends' | 'family' | 'corporate';
  suitableTravellers: string;
  pricePerPerson: number;
  priceRange: string;
  originalPrice?: number;
  coverImage: string;
  badge: string;
  stayType: string;
  accommodationDetails?: string;
  meals: string;
  summary: string;
  includedActivities: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    highlights?: string[];
  }[];
  bestSeason?: string;
  experienceLevel?: string;
  featured?: boolean;
}

export type StayCategory = 'all' | 'forest' | 'river' | 'adventure' | 'family' | 'homestay' | 'camping';

export interface ResortStay {
  id: string;
  name: string;
  category: 'forest' | 'river' | 'adventure' | 'family' | 'homestay' | 'camping';
  categoryLabel: string;
  locationArea: string;
  stayType: string;
  tagline: string;
  overview: string;
  atmosphereNote?: string;
  priceRange: string;
  pricePerNight: number;
  priceNote: string;
  suitableFor: string;
  unsuitableFor?: string;
  facilities: string[];
  nearbyActivities: string[];
  coverImage: string;
  gallery: string[];
  architectureStyle?: string;
  diningStyle?: string;
  distanceToRiver: string;
  featured?: boolean;
  capacity: string;
  // Legacy aliases
  type?: string;
  locationDescription?: string;
  vibe?: string;
  amenities?: string[];
  image?: string;
  rating?: number;
  reviewsCount?: number;
}

export interface Testimonial {
  id: string;
  guestName: string;
  hometown: string;
  experience: string;
  text: string;
  date: string;
  avatar: string;
  rating: number;
}
