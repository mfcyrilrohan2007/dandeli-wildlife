import React from 'react';
import { User, Heart, Users, Compass, Building2, Flame } from 'lucide-react';

export type PlannerCategoryKey = 'solo' | 'duo' | 'friends' | 'family' | 'groups';

export interface PlannerActivity {
  id: string;
  name: string;
  slug: string;
  duration: string;
  whyItFits: string;
  image: string;
}

export interface PlannerPackageSuggestion {
  id: string;
  slug: string;
  name: string;
  duration: string;
  pricePerPerson: number;
  highlight: string;
  image: string;
  badge: string;
}

export interface PlannerStaySuggestion {
  id: string;
  slug: string;
  name: string;
  stayType: string;
  location: string;
  whyItFits: string;
  image: string;
  pricePerNight: number;
}

export interface PlannerCategoryData {
  id: PlannerCategoryKey;
  label: string;
  shortSubtitle: string;
  iconName: 'User' | 'Heart' | 'Flame' | 'Compass' | 'Building2';
  coverImage: string;
  badge: string;
  recommendedTripStyle: string;
  suitabilityStatement: string;
  idealFor: string;
  groupSize: string;
  suggestedDuration: string;
  priceRange: string;
  experienceHighlights: string[];
  activities: PlannerActivity[];
  packages: PlannerPackageSuggestion[];
  stays: PlannerStaySuggestion[];
  dayByDaySchedule: {
    day: number;
    title: string;
    description: string;
    milestones: { time: string; event: string }[];
  }[];
  localNaturalistTip: string;
}

export const TRIP_PLANNER_DATA: Record<PlannerCategoryKey, PlannerCategoryData> = {
  solo: {
    id: 'solo',
    label: 'Solo',
    shortSubtitle: 'Quiet Forest & Personal Reset',
    iconName: 'User',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    badge: 'Self-Paced & Reflective',
    recommendedTripStyle: 'Mindful Nature, Canopy Hideouts & Slow River Paddles',
    suitabilityStatement:
      'For travelers who want a quiet escape, immersive Western Ghats nature, birdwatching, and personal adventure at their own unhurried pace.',
    idealFor: 'Writers, solo backpackers, birders, photographers, and digital detox seekers',
    groupSize: '1 Solo Explorer',
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    priceRange: '₹3,200 – ₹4,600 / person (all meals & experiences)',
    experienceHighlights: [
      'Dawn bird hide walks in Ganeshgudi to spot Malabar Pied Hornbills and emerald kingfishers',
      'Unhurried Supa backwaters solo kayak paddle with zero commercial motor noise',
      'Secluded riverside stilt cottage or eco-homestay with private reading porch',
      'Self-paced forest trails through old timber logging routes accompanied by resident trackers',
    ],
    activities: [
      {
        id: 'kayaking',
        name: 'Mindful Supa Backwaters Kayaking',
        slug: 'kayaking',
        duration: '1.5 – 2 Hours',
        whyItFits: 'Gentle, meditative paddling through glassy morning river mist at your own cadence.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      },
      {
        id: 'hornbill-watching',
        name: 'Dawn Hornbill & Forest Bird Hide',
        slug: 'hornbill-watching',
        duration: '2 Hours (Dawn)',
        whyItFits: 'Accompanied by a native tracker with high-power spotting scopes in Ganeshgudi.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      },
      {
        id: 'jungle-nature-walk',
        name: 'Old Timber Logging Forest Walk',
        slug: 'jungle-nature-walk',
        duration: '2.5 Hours',
        whyItFits: 'Interpretive trail discovering medicinal flora, massive teak trees, and rainforest quiet.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      },
      {
        id: 'syntheri-rocks',
        name: 'Syntheri Rock Canyon Exploration',
        slug: 'syntheri-rocks-exploration',
        duration: '2 Hours',
        whyItFits: 'Contemplative walk along Kaneri river gorge to view the 300-foot monolithic granite.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      },
    ],
    packages: [
      {
        id: 'wildlife-explorer',
        slug: 'wildlife-explorer',
        name: 'Wildlife Explorer',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 5400,
        highlight: 'Two dedicated 4x4 safaris inside Anshi Tiger Reserve & canopy stilt treehouse.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
        badge: 'Naturalist Guided',
      },
      {
        id: 'weekend-dandeli-escape',
        slug: 'weekend-dandeli-escape',
        name: 'Weekend Dandeli Escape',
        duration: '2 Days / 1 Night',
        pricePerPerson: 3450,
        highlight: 'Restorative 2-day reset with riverside teak porch, morning kayak, and all 3 buffet meals.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        badge: 'Weekend Favorite',
      },
    ],
    stays: [
      {
        id: 'hornbill-canopy-treehouses',
        slug: 'hornbill-canopy-treehouses',
        name: 'Hornbill Canopy Treehouses',
        stayType: 'Elevated Stilt Wooden Treehouse',
        location: 'Kulgi Forest Fringe',
        whyItFits: 'Total treetop seclusion 35ft up with private canopy viewing balcony and field library.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
        pricePerNight: 3800,
      },
      {
        id: 'kali-riverfront-eco-cottages',
        slug: 'kali-riverfront-eco-cottages',
        name: 'Kali Riverfront Eco-Cottages',
        stayType: 'Elevated Teak Riverfront Cottage',
        location: 'Ganeshgudi River Shore',
        whyItFits: 'River veranda hovering directly over water rapids with quiet reading hammocks.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        pricePerNight: 3400,
      },
    ],
    dayByDaySchedule: [
      {
        day: 1,
        title: 'Settling Into the Rainforest Canopy',
        description: 'Smooth arrival, warm regional lunch, slow water paddle, and peaceful woodsmoke dinner.',
        milestones: [
          { time: '11:30 AM', event: 'Arrive at Ganeshgudi eco-lodge, sip fresh Kokum sherbet' },
          { time: '01:30 PM', event: 'Homestyle North Karnataka buffet lunch (Jowar roti, local greens)' },
          { time: '04:00 PM', event: 'Solitary guided kayak paddle on calm backwaters as mist rolls in' },
          { time: '07:30 PM', event: 'Quiet starlight sit-out with forest soundscapes and warm buffet' },
        ],
      },
      {
        day: 2,
        title: 'Dawn Bird Hide & Ancient Teak Walks',
        description: 'Wake with the canopy, track hornbills, walk historic trails, and depart refreshed.',
        milestones: [
          { time: '06:00 AM', event: 'Early morning bird walk with a native naturalist (spot Malabar Pied Hornbills)' },
          { time: '08:30 AM', event: 'Traditional breakfast with hot local filter coffee on the porch' },
          { time: '10:00 AM', event: 'Walk along old timber logging paths near Supa reservoir' },
          { time: '01:00 PM', event: 'Relaxed check-out with peaceful memories' },
        ],
      },
    ],
    localNaturalistTip:
      'Stay in Ganeshgudi rather than the commercial town center. The Kali River is pristine here, with zero motor traffic and absolute tranquility after sunset.',
  },

  duo: {
    id: 'duo',
    label: 'Duo',
    shortSubtitle: 'Couples & Scenic Escapes',
    iconName: 'Heart',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
    badge: 'Couples & Travel Pairs',
    recommendedTripStyle: 'Romantic Riverside Decks, Misty Dawns & Scenic Kayaking',
    suitabilityStatement:
      'For two people looking for a relaxed adventure, private scenic stays, quiet boat drifts, and memorable moments away from tourist crowds.',
    idealFor: 'Couples, partners, honeymooners, and close travel duos celebrating anniversaries or weekend getaways',
    groupSize: '2 Travelers',
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    priceRange: '₹3,450 – ₹4,900 / person (includes cottage stay, all meals & experiences)',
    experienceHighlights: [
      'Misty 6:15 AM tandem kayak paddle across glassy river waters when fog hangs above the rapids',
      'Sunset coracle boat drift gently steered by a native boatman across serene backwaters',
      'Private candlelit dinner on a wooden riverside deck under old-growth teak trees',
      'Scenic drive to Syntheri Rocks monolith followed by an unhurried riverside afternoon',
    ],
    activities: [
      {
        id: 'kayaking',
        name: 'Tandem Kali River Kayak Session',
        slug: 'kayaking',
        duration: '1.5 Hours',
        whyItFits: 'Two-seater sit-on-top kayak navigating gentle river pools with scenic rainforest banks.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      },
      {
        id: 'coracle-boat-ride',
        name: 'Sunset Handcrafted Coracle Float',
        slug: 'coracle-boat-ride',
        duration: '1 Hour',
        whyItFits: 'Circular artisanal coracle drifting gently as twilight paints the river gold.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988869/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
      },
      {
        id: 'natural-jacuzzi',
        name: 'Natural Jacuzzi Rapid Hydro-Massage',
        slug: 'natural-jacuzzi',
        duration: '1.5 Hours',
        whyItFits: 'Refreshing dip in foaming mountain currents cushioned by smooth riverbed boulders.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988869/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
      },
      {
        id: 'syntheri-rocks',
        name: 'Syntheri Rock Canyon Walk',
        slug: 'syntheri-rocks-exploration',
        duration: '2 Hours',
        whyItFits: 'Picturesque descent through shaded bamboo pathways to the dramatic 300ft limestone wall.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      },
    ],
    packages: [
      {
        id: 'weekend-dandeli-escape',
        slug: 'weekend-dandeli-escape',
        name: 'Weekend Dandeli Escape',
        duration: '2 Days / 1 Night',
        pricePerPerson: 3450,
        highlight: 'Riverfront teak porch, tandem kayak, sunset coracle, and all 3 home-cooked buffet meals.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        badge: 'Top Pick for Two',
      },
      {
        id: 'river-jungle-experience',
        slug: 'river-jungle-experience',
        name: 'River & Jungle Experience',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 4600,
        highlight: 'Harmonious balance of misty Kali waters, Syntheri gorge, and riverside starlit dining.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
        badge: 'All-Round Favorite',
      },
    ],
    stays: [
      {
        id: 'kali-riverfront-eco-cottages',
        slug: 'kali-riverfront-eco-cottages',
        name: 'Kali Riverfront Eco-Cottages',
        stayType: 'Elevated Riverfront Teak Cottage',
        location: 'Ganeshgudi, Riverbank',
        whyItFits: 'Private deck cantilevered directly over the water with sunrise views and evening quiet.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        pricePerNight: 3400,
      },
      {
        id: 'hornbill-canopy-treehouses',
        slug: 'hornbill-canopy-treehouses',
        name: 'Hornbill Canopy Treehouses',
        stayType: 'Stilt Treehouse Suite',
        location: 'Kulgi Forest Fringe',
        whyItFits: 'Romantic canopy nest 35 feet up among flowering teak trees with eye-level bird watching.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
        pricePerNight: 3800,
      },
    ],
    dayByDaySchedule: [
      {
        day: 1,
        title: 'Riverfront Seclusion & Sunset Float',
        description: 'Check-in to a river cottage, enjoy spiced country lunch, and float on sunset coracles.',
        milestones: [
          { time: '12:00 PM', event: 'Check-in to a private riverfront cottage overlooking the Kali' },
          { time: '01:30 PM', event: 'Traditional buffet lunch with fresh rotis, local dal & river fish' },
          { time: '04:30 PM', event: 'Sunset coracle ride steered by an experienced local boatman' },
          { time: '08:00 PM', event: 'Candlelit dinner on the wooden deck under the teak trees' },
        ],
      },
      {
        day: 2,
        title: 'Misty Dawn Paddle & Monolith Canyon',
        description: 'Early morning tandem kayak in the river mist followed by Syntheri Rocks canyon.',
        milestones: [
          { time: '06:15 AM', event: 'Tandem kayak in morning river fog; watch kingfishers and cormorants' },
          { time: '09:00 AM', event: 'Leisurely deck breakfast with fresh fruits and brewed filter coffee' },
          { time: '11:00 AM', event: 'Scenic drive to Syntheri Rocks monolith and ancient river canyon' },
          { time: '03:00 PM', event: 'Departure with memorable photographs of the Western Ghats' },
        ],
      },
    ],
    localNaturalistTip:
      'Request the Ganeshgudi sunrise boat slot at 6:15 AM. The temperature drops and mist hangs two feet above the water—it is pure cinema.',
  },

  friends: {
    id: 'friends',
    label: 'Friends',
    shortSubtitle: 'Rapids, Campfires & Gangs',
    iconName: 'Flame',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
    badge: 'High Adrenaline & Campfires',
    recommendedTripStyle: 'High-Energy Rapids, Bouldering Jacuzzi & Campfire Barbecue',
    suitabilityStatement:
      'For groups of friends looking for certified white-water rafting, rock cliff jumps, natural jacuzzi rapids, riverside camping, and non-stop camaraderie.',
    idealFor: 'College friends, reunion gangs, birthday trips, and weekend adventure road-trippers',
    groupSize: '3 – 10 Adventurers',
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    priceRange: '₹2,450 – ₹4,950 / person (action activities + stays + all meals bundled)',
    experienceHighlights: [
      'Full 9.5 km Class III & IV white-water rafting powered by Supa Dam release with 15ft cliff jumping',
      'Natural jacuzzi bath foaming through mountain boulder channels for a thrilling hydro-massage',
      'Crackling riverside campfire with live charcoal barbecue skewers and music under starry skies',
      'Backwater kayak duel races, river raft surfing, and off-road Syntheri canyon trek',
    ],
    activities: [
      {
        id: 'white-water-rafting',
        name: 'Full 9.5 km White-Water Rafting',
        slug: 'white-water-rafting',
        duration: '3 – 4 Hours',
        whyItFits: 'Conquer legendary Stanley’s Fall, The Snag, and Smugglers’ Corner with CE river gear.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
      },
      {
        id: 'natural-jacuzzi',
        name: 'Natural Jacuzzi Boulder Bath',
        slug: 'natural-jacuzzi',
        duration: '2 Hours',
        whyItFits: 'Natural hydro-massage formed by foaming mountain currents rushing through boulders.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988869/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
      },
      {
        id: 'kayaking',
        name: 'Backwater Kayak Races & Zorbing',
        slug: 'kayaking',
        duration: '1.5 Hours',
        whyItFits: 'Competitive tandem paddles and water zorbing balls on still backwaters.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      },
      {
        id: 'syntheri-rocks',
        name: 'Syntheri Canyon Gorge Trek',
        slug: 'syntheri-rocks-exploration',
        duration: '2.5 Hours',
        whyItFits: 'Trail through bamboo canopy ending at the dramatic hollowed-out canyon floor.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      },
    ],
    packages: [
      {
        id: 'friends-adventure-trip',
        slug: 'friends-adventure-trip',
        name: 'Friends Adventure Trip',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 4950,
        highlight: 'Full 9.5km raft run, cliff jump, jacuzzi session, and 2 nights of live campfire BBQ.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
        badge: 'Squad Top Pick',
      },
      {
        id: 'camping-under-the-stars',
        slug: 'camping-under-the-stars',
        name: 'Camping Under the Stars',
        duration: '2 Days / 1 Night',
        pricePerPerson: 2450,
        highlight: 'Weatherproof riverbank tents, natural jacuzzi bath, BBQ skewers, and dawn river dip.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
        badge: 'Pure Wilderness Camp',
      },
    ],
    stays: [
      {
        id: 'bison-valley-adventure-camp',
        slug: 'bison-valley-adventure-camp',
        name: 'Bison Valley Wilderness Camp',
        stayType: 'Alpine Cabanas & Riverbank Cabins',
        location: 'Barchi Valley, River Shore',
        whyItFits: 'Staging ground for certified rafting with open campfire lawn and late-night music.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
        pricePerNight: 2400,
      },
      {
        id: 'kali-riverfront-eco-cottages',
        slug: 'kali-riverfront-eco-cottages',
        name: 'Kali Riverfront Wooden Cabins',
        stayType: 'Wooden Cabins with Attached Stone Bath',
        location: 'Ganeshgudi, River Edge',
        whyItFits: 'Cluster of cabins facing the rapids with lawn volleyball net and direct river access.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        pricePerNight: 3400,
      },
    ],
    dayByDaySchedule: [
      {
        day: 1,
        title: 'Squad Gear-Up & Jacuzzi Rapids',
        description: 'Camp check-in, refuel with unlimited buffet, natural jacuzzi current soak, and evening BBQ.',
        milestones: [
          { time: '11:00 AM', event: 'Arrive at basecamp, drop bags into riverbank cabins/tents' },
          { time: '01:00 PM', event: 'Heavy country lunch buffet with spiced chicken curry & rotis' },
          { time: '03:30 PM', event: 'Natural Jacuzzi bath in turbulent mountain boulder channels' },
          { time: '08:00 PM', event: 'Campfire by the water with live charcoal grilled skewers & music' },
        ],
      },
      {
        day: 2,
        title: 'The Great Kali Raft Run & Cliff Jumps',
        description: 'Tackle the 9.5km Class III–IV rapids, 15ft rock cliff jump, and explore the monolith.',
        milestones: [
          { time: '08:30 AM', event: 'Safety briefing & river gear check (vests, helmets, paddles)' },
          { time: '09:30 AM', event: 'Drop into Stanley’s Fall, The Snag, and Smugglers’ Corner rapids' },
          { time: '01:30 PM', event: 'Hearty warm lunch feast to refuel after rafting' },
          { time: '04:00 PM', event: 'Syntheri Rocks limestone canyon exploration' },
          { time: '08:00 PM', event: 'Campfire night 2 under unpolluted starry skies' },
        ],
      },
    ],
    localNaturalistTip:
      'Catch the morning dam release slot (between 8:30 AM and 11:00 AM) for highest river velocity and maximum rapid volume. Strap-on sandals are strictly required—no loose slippers on the rafts.',
  },

  family: {
    id: 'family',
    label: 'Family',
    shortSubtitle: 'Kids, Seniors & Safe Nature',
    iconName: 'Compass',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    badge: 'Child & Senior Friendly',
    recommendedTripStyle: 'Safe Comfort, Open 4x4 Wildlife Safaris & Pool Resorts',
    suitabilityStatement:
      'For families looking for comfortable ground-level suites, child-friendly mild meals, senior-accessible nature paths, wildlife spotting, and relaxed bonding.',
    idealFor: 'Multi-generational families with kids, parents, grandparents, and extended family holidays',
    groupSize: '4 – 10 Family Members',
    suggestedDuration: '3 Days / 2 Nights (Recommended) or 2 Days / 1 Night',
    priceRange: '₹4,200 – ₹5,600 / adult (50% off for kids under 8)',
    experienceHighlights: [
      'Open-top 4x4 safari in Dandeli Wildlife Sanctuary spotting spotted deer herds, bison & giant squirrels',
      'Gentle Supa Backwaters coracle boat float equipped with specialized junior and senior safety life-vests',
      'Comfortable ground-level air-conditioned family suites with lawn and swimming pool',
      'Nutritious homestyle buffet featuring mild, non-spicy dishes, fresh fruits, and campfire marshmallows',
    ],
    activities: [
      {
        id: 'jungle-safari',
        name: 'Open-Top 4x4 Anshi Wildlife Safari',
        slug: 'jungle-safari',
        duration: '2.5 Hours',
        whyItFits: 'Safe, seated 4x4 drive guided by certified forest department trackers through core jungle.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
      },
      {
        id: 'coracle-boat-ride',
        name: 'Gentle Backwaters Coracle Float',
        slug: 'coracle-boat-ride',
        duration: '1 Hour',
        whyItFits: 'Flat still-water float safe for toddlers and grandparents with double-buoyancy life vests.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988869/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
      },
      {
        id: 'jungle-nature-walk',
        name: 'Kulgi Timber Museum & Nature Center',
        slug: 'jungle-nature-walk',
        duration: '1.5 Hours',
        whyItFits: 'Fascinating educational exhibits on 150-year-old teak trees, seeds, and Western Ghats wildlife.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      },
      {
        id: 'syntheri-rocks',
        name: 'Syntheri Rock Monolith (Paved Path)',
        slug: 'syntheri-rocks-exploration',
        duration: '2 Hours',
        whyItFits: 'Paved, railed walkway with shaded benches leading to scenic view deck.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      },
    ],
    packages: [
      {
        id: 'family-nature-escape',
        slug: 'family-nature-escape',
        name: 'Family Nature Escape',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 4450,
        highlight: '4x4 safari, safe coracle ride, pool suite comfort, mild buffet, and junior life jackets.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
        badge: 'Family Top Pick',
      },
      {
        id: 'river-jungle-experience',
        slug: 'river-jungle-experience',
        name: 'River & Jungle Experience',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 4600,
        highlight: 'Riverfront cottages, timber trail walks, sunset float, and zero strenuous rapids.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
        badge: 'All Ages Comfort',
      },
    ],
    stays: [
      {
        id: 'kali-riverfront-eco-cottages',
        slug: 'kali-riverfront-eco-cottages',
        name: 'Kali Riverfront Family Suites',
        stayType: 'Interconnecting Family Suite with Pool',
        location: 'Ganeshgudi Riverbank',
        whyItFits: 'Ground-level access, non-slip tiled bathrooms, swimming pool, and manicured lawns.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottage_4K_faithful.png',
        pricePerNight: 3600,
      },
      {
        id: 'hornbill-canopy-treehouses',
        slug: 'hornbill-canopy-treehouses',
        name: 'Hornbill Forest Cottages',
        stayType: 'Ground Eco-Cottages with Lawn',
        location: 'Kulgi Forest Fringe',
        whyItFits: 'Safe garden surroundings where kids can spot flying squirrels and colorful hornbills.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
        pricePerNight: 3800,
      },
    ],
    dayByDaySchedule: [
      {
        day: 1,
        title: 'Check-in, Swimming Pool & Gentle Float',
        description: 'Smooth check-in, mild lunch buffet, afternoon pool relaxation, and calm sunset coracle.',
        milestones: [
          { time: '01:00 PM', event: 'Check-in to family garden suites, relax in air-conditioned comfort' },
          { time: '02:00 PM', event: 'Mild buffet lunch with non-spicy vegetable dishes and dal' },
          { time: '04:30 PM', event: 'Gentle coracle boat float on calm pools with junior life-vests' },
          { time: '07:30 PM', event: 'Resort lawn campfire with hot banana fritters and roasted marshmallows' },
        ],
      },
      {
        day: 2,
        title: 'Anshi Safari, Monolith & Lawn Games',
        description: 'Morning 4x4 open-top jeep safari, timber museum visit, and poolside relaxation.',
        milestones: [
          { time: '06:30 AM', event: 'Open 4x4 Jeep Safari in Dandeli Wildlife Sanctuary (spot deer & peacocks)' },
          { time: '09:00 AM', event: 'Hot buffet breakfast with fresh fruits, idlis, and eggs' },
          { time: '11:00 AM', event: 'Visit Kulgi Nature & Timber Museum (loved by children)' },
          { time: '04:00 PM', event: 'Swimming pool session and indoor family board games' },
        ],
      },
    ],
    localNaturalistTip:
      'Children under 11 cannot board Grade III/IV white-water rapids per state forest safety rules. Our gentle coracle floats and resort swimming pools provide thoroughly enjoyable river experiences without the risk.',
  },

  groups: {
    id: 'groups',
    label: 'Groups 4+',
    shortSubtitle: 'Reunions & Team Offsites',
    iconName: 'Building2',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
    badge: '4+ to 50+ Pax • Offsites',
    recommendedTripStyle: 'Synchronized Multi-Raft Derbies, Private Estate Wing & Gala Dinners',
    suitabilityStatement:
      'For 4+ people, corporate offsites, college alumni clans, and family celebrations seeking dedicated coordinators, group challenges, and private resort blocks.',
    idealFor: 'Company team offsites, college reunions, photography groups, and milestone celebrations',
    groupSize: '4 to 50+ Guests',
    suggestedDuration: '2 Days / 1 Night or 3 Days / 2 Nights',
    priceRange: '₹3,500 – ₹4,600 / person (Volume Group Tier with all inclusions)',
    experienceHighlights: [
      'Synchronized multi-boat rafting derby challenge with dedicated river marshals per raft',
      'Exclusive private resort block ensuring dedicated lawn, dining gazebo, and campfire amphitheater',
      'Dedicated on-site coordinator handling luggage allocation, activity slots, and meal timings',
      'Riverside team volleyball tournament, water zorbing, and grand open-air barbecue gala dinner',
    ],
    activities: [
      {
        id: 'white-water-rafting',
        name: 'Synchronized Multi-Boat Rafting Derby',
        slug: 'white-water-rafting',
        duration: '3.5 Hours',
        whyItFits: 'Multiple 8-person rafts competing in friendly time heats down the 9.5km Kali rapid run.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
      },
      {
        id: 'natural-jacuzzi',
        name: 'Riverside Team Games & Jacuzzi',
        slug: 'natural-jacuzzi',
        duration: '2 Hours',
        whyItFits: 'River volleyball, tug-of-war on the beach lawn, and boulder current hydro-massage.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988869/134030b2-8ca1-4608-bb48-f2a0955637e8.png',
      },
      {
        id: 'jungle-safari',
        name: 'Dawn Jungle Safari Convoy',
        slug: 'jungle-safari',
        duration: '2.5 Hours',
        whyItFits: 'Convoy of open 4x4 safari vehicles tracking wildlife inside Anshi Wildlife Reserve.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
      },
      {
        id: 'jungle-camping',
        name: 'Private Lawn Amphitheater Gala',
        slug: 'jungle-camping',
        duration: 'Evening / Night',
        whyItFits: 'Exclusive campfire circle, barbecue skewer counters, sound setup, and celebration.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
      },
    ],
    packages: [
      {
        id: 'large-group-getaway',
        slug: 'large-group-getaway',
        name: 'Large Group Getaway',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 3900,
        highlight: 'Dedicated resort wing, synchronized raft derby, amphitheater gala BBQ, on-site coordinator.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
        badge: 'Top Value 10+ Pax',
      },
      {
        id: 'friends-adventure-trip',
        slug: 'friends-adventure-trip',
        name: 'Friends Adventure Trip',
        duration: '3 Days / 2 Nights',
        pricePerPerson: 4950,
        highlight: 'Full white-water rafting, jacuzzi soak, wooden cabins, and 2 consecutive nights BBQ.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
        badge: 'High Action',
      },
    ],
    stays: [
      {
        id: 'bison-valley-adventure-camp',
        slug: 'bison-valley-adventure-camp',
        name: 'Bison Valley Wilderness Camp',
        stayType: 'Exclusive Estate Block & Cabins',
        location: 'Barchi Valley, River Shore',
        whyItFits: 'Massive 14-acre riverbank lawn capable of hosting 50+ guests with private dining pavilion.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
        pricePerNight: 2400,
      },
      {
        id: 'kali-riverfront-eco-cottages',
        slug: 'kali-riverfront-eco-cottages',
        name: 'Kali Riverfront Estate Block',
        stayType: 'Multi-Cottage Wing with Bonfire Lawn',
        location: 'Ganeshgudi, River Edge',
        whyItFits: 'Cluster of riverside cottages with private amphitheater and volleyball court.',
        image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
        pricePerNight: 3400,
      },
    ],
    dayByDaySchedule: [
      {
        day: 1,
        title: 'Team Onboarding & Riverside Games',
        description: 'Smooth arrival, luggage pre-assigned to rooms, lunch buffet, team games, and bonfire gala.',
        milestones: [
          { time: '10:00 AM', event: 'Smooth group arrival with luggage pre-assigned to dedicated cottage wings' },
          { time: '01:00 PM', event: 'Grand outdoor buffet lunch under the bamboo trees' },
          { time: '03:30 PM', event: 'Riverside volleyball tournament, water zorbing & jacuzzi soak' },
          { time: '08:00 PM', event: 'Private amphitheater gala with campfire, barbecue grill counter, and music' },
        ],
      },
      {
        day: 2,
        title: 'The Kali Multi-Boat Raft Derby',
        description: 'Synchronized raft derby on the 9.5km rapids, celebration feast, and team awards.',
        milestones: [
          { time: '09:00 AM', event: 'Synchronized team white-water rafting with friendly multi-raft challenges' },
          { time: '01:30 PM', event: 'Grand celebration feast back at camp' },
          { time: '04:00 PM', event: 'Team debrief, outdoor strategy games, or leisure pool session' },
          { time: '08:00 PM', event: 'Celebration dinner night under decorative string lights' },
        ],
      },
    ],
    localNaturalistTip:
      'We assign dedicated local coordinators for groups of 10+ guests so organizers never have to chase keys, gear sizes, or kitchen schedules. Everything runs smoothly on time.',
  },
};
