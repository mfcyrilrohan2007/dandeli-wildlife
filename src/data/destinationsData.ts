export type ExploreCategoryType =
  | 'Adventure'
  | 'River & Water'
  | 'Wildlife'
  | 'Jungle'
  | 'Waterfalls'
  | 'Nature'
  | 'Places to Visit'
  | 'Peaceful Escapes';

export interface DestinationJourneyBridge {
  activity: {
    id: string;
    title: string;
    slug: string;
    description: string;
  };
  travelPackage: {
    id: string;
    title: string;
    slug: string;
    price: number;
    duration: string;
  };
  tripPlan: {
    id: string;
    title: string;
    slug: string;
    spirit: string;
  };
}

export interface DandeliDestination {
  id: string;
  slug: string;
  name: string;
  category: ExploreCategoryType;
  secondaryCategories: ExploreCategoryType[];
  shortDescription: string;
  usefulHighlight: string;
  image: string;
  gallery: string[];
  location: string;
  zone: string;
  duration: string;
  bestTime: string;
  difficulty: 'Relaxed' | 'Easy' | 'Moderate' | 'Challenging';
  suitableFor: string;
  keyBadge: string;
  isCuratorPick?: boolean;
  intro: string;
  whatToExpect: string[];
  detailedHighlights: string[];
  thingsToKnow: string[];
  journeyBridge: DestinationJourneyBridge;
}

export interface CategoryMetadata {
  id: ExploreCategoryType;
  label: string;
  tagline: string;
  iconName: string;
  coverImage: string;
}

export const EXPLORE_CATEGORIES_LIST: CategoryMetadata[] = [
  {
    id: 'Adventure',
    label: 'Adventure',
    tagline: 'High-adrenaline white water rapids, cave crawls, and cliff descents',
    iconName: 'Flame',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
  },
  {
    id: 'River & Water',
    label: 'River & Water',
    tagline: 'Perennial hydro-surges, natural jacuzzis, and mirror-calm backwaters',
    iconName: 'Waves',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
  },
  {
    id: 'Wildlife',
    label: 'Wildlife',
    tagline: 'Hornbill roosts, chital deer, giant squirrels, and big cat territories',
    iconName: 'Compass',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
  },
  {
    id: 'Jungle',
    label: 'Jungle',
    tagline: 'Moist deciduous teak stands and ancient Western Ghats canopy corridors',
    iconName: 'TreePine',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
  },
  {
    id: 'Waterfalls',
    label: 'Waterfalls',
    tagline: 'Plunging canyons, misty emerald plunge pools, and thunderous cascades',
    iconName: 'Droplets',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
  },
  {
    id: 'Nature',
    label: 'Nature',
    tagline: 'Medicinal flora, bamboo ecosystems, and ancient granite rock formations',
    iconName: 'Feather',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
  },
  {
    id: 'Places to Visit',
    label: 'Places to Visit',
    tagline: 'Iconic landmarks, prehistoric monoliths, viewpoints, and reservoirs',
    iconName: 'MapPin',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
  },
  {
    id: 'Peaceful Escapes',
    label: 'Peaceful Escapes',
    tagline: 'Dawn kayak drifts, serene coracle floats, and undisturbed forest quiet',
    iconName: 'Sparkles',
    coverImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
  },
];

export const DANDELI_DESTINATIONS: DandeliDestination[] = [
  {
    id: 'kali-rapids',
    slug: 'kali-rapids',
    name: 'Kali River Rapids • Ganeshgudi Gorge',
    category: 'River & Water',
    secondaryCategories: ['Adventure'],
    shortDescription:
      'South India’s premier white-water river corridor, powered by scheduled Supa Dam surges churning through dramatic basalt gorges.',
    usefulHighlight:
      'Dam water release peaks daily between 09:00 AM & 01:30 PM; Class III & IV rapids accompanied by certified rescue kayakers.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png',
    ],
    location: 'Upper Kali River, Ganeshgudi',
    zone: 'Zone I • River Canyon',
    duration: '3.5 – 4 Hours',
    bestTime: 'October to June (Surge: 09:00 AM – 01:30 PM)',
    difficulty: 'Moderate',
    suitableFor: 'Adventure Seekers, Friends Squads, Active Beginners (Swimmers & Non-Swimmers)',
    keyBadge: 'Class III/IV Rapids',
    isCuratorPick: true,
    intro:
      'Dandeli is the heartbeat of South Indian white-water adventure. Fed by regulated releases from the Supa Dam, the Kali River cuts a surging 9.5 km white-water gorge framed by sheer granite cliffs and hundred-foot teak forests. You will navigate iconic named rapids including Adi’s Delirium, The Stitch, Stanley’s Squeeze, and Smugglers’ Corner under the guidance of licensed International Rafting Federation (IRF) river captains.',
    whatToExpect: [
      '20-minute land safety drill, life vest fitting (150N CE-buoyancy), and paddle strokes briefing at Ganeshgudi base.',
      'Navigating 9 named rapid drops surging over prehistoric basalt riverbeds.',
      'Thrilling 15-foot deep-water cliff jump supervised by river rescue marshals.',
      'A serene 1-kilometer float where you drift through cool emerald water looking up at hornbills in the canopy.',
    ],
    detailedHighlights: [
      '9 exhilarating mountain rapids with dependable water volume',
      'CE-approved impact helmets and 150N high-buoyancy vests provided',
      'Escort rescue kayaker follows every multi-raft convoy',
      'Non-swimmers completely safe and welcomed',
    ],
    thingsToKnow: [
      'Non-swimmers can safely participate; buoyancy vests keep you effortlessly afloat.',
      'Wear synthetic quick-drying clothing; avoid heavy denim or cotton.',
      'Secure strap sandals or water booties are required; flip-flops strictly prohibited.',
    ],
    journeyBridge: {
      activity: {
        id: 'white-water-rafting',
        title: 'White Water Rafting (9.5 km)',
        slug: '/activities/white-water-rafting',
        description: 'Complete run through 9 named Class III & IV mountain rapids.',
      },
      travelPackage: {
        id: 'adventure-weekend',
        title: 'Adrenaline Weekend Expedition',
        slug: '/packages/adventure-weekend',
        price: 3499,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'friends',
        title: 'Friends Adventure & Action Squad',
        slug: '/trip-plans/friends',
        spirit: 'High-energy rapids, cliff jumps, and riverbank campfires.',
      },
    },
  },
  {
    id: 'syntheri-rocks',
    slug: 'syntheri-rocks',
    name: 'Syntheri Rocks Monolith',
    category: 'Places to Visit',
    secondaryCategories: ['Nature', 'Waterfalls'],
    shortDescription:
      'A colossal 300-foot monolithic granite rock face sculpted over millions of years by the rushing torrents of the Kaneri River.',
    usefulHighlight:
      'Features hollow limestone caverns and giant wild rock-bee hives; best visited in crisp morning light; 240 paved forest steps.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Kaneri River Gorge, Gund Forest (32 km from Dandeli)',
    zone: 'Zone II • Ancient Monoliths',
    duration: '2.5 – 3 Hours',
    bestTime: 'October to May (Best light: 09:00 AM – 12:00 PM)',
    difficulty: 'Easy',
    suitableFor: 'Families, Nature Lovers, Photographers, Geological Explorers',
    keyBadge: '300ft Ancient Monolith',
    isCuratorPick: true,
    intro:
      'Rising sheer from the rushing Kaneri River, Syntheri Rocks is an ancient natural geological marvel. Over millions of years, torrential river currents carved deep cavernous hollows into the solid volcanic granite face. Thousands of wild rock bees build dangling honeycomb colonies high along the vertical cliff walls, while cool river spray creates a soothing rainforest microclimate.',
    whatToExpect: [
      'Scenic shaded forest drive through the pristine bamboo and ironwood reserves of Gund forest.',
      'Descending 240 stepped stone steps equipped with sturdy handrails to the river canyon floor.',
      'Standing at the observation terrace gazing up at the 300-foot vertical granite monolith.',
      'Listening to the roar of the Kaneri River cascading through narrow rock crevices.',
    ],
    detailedHighlights: [
      '300-foot monolithic volcanic granite formation millions of years old',
      'Unique rock erosion caves and hollows created by the Kaneri River',
      'Wild rock-bee colonies visible on the high cliff faces',
      'Shaded forest pathway with rest benches suitable for multi-generational families',
    ],
    thingsToKnow: [
      'Swimming is strictly prohibited due to turbulent undercurrents in the Kaneri gorge.',
      'Wear walking shoes with reliable grip; river rocks near the viewing base can be damp.',
      'Forest entry fee is included when booked with our guided nature excursions.',
    ],
    journeyBridge: {
      activity: {
        id: 'syntheri-trek',
        title: 'Syntheri Geological & Forest Walk',
        slug: '/activities/syntheri-trek',
        description: 'Guided geological descent through the Kaneri canyon with naturalists.',
      },
      travelPackage: {
        id: 'weekend-dandeli-escape',
        title: 'Weekend Dandeli Wilderness Escape',
        slug: '/packages/weekend-dandeli-escape',
        price: 2699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'family',
        title: 'Family Comfort & Safe Nature',
        slug: '/trip-plans/family',
        spirit: 'Gentle step access, educational geological wonder, and shaded forest picnic.',
      },
    },
  },
  {
    id: 'anshi-safari',
    slug: 'anshi-safari',
    name: 'Anshi Tiger Reserve Core Safari',
    category: 'Wildlife',
    secondaryCategories: ['Jungle', 'Adventure'],
    shortDescription:
      'An open-top 4x4 expedition into 1,300 sq km of protected Western Ghats moist deciduous and semi-evergreen tiger and black panther habitat.',
    usefulHighlight:
      'Only wild habitat in Asia for melanistic leopards (Black Panthers); forest department permits capped at 06:00 AM & 04:00 PM.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    ],
    location: 'Kulgi & Phansoli Forest Ranges, Dandeli-Anshi Reserve',
    zone: 'Zone III • Tiger Canopy',
    duration: '2.5 – 3 Hours',
    bestTime: 'October to May (Dawn slot: 06:00 AM, Dusk slot: 04:00 PM)',
    difficulty: 'Easy',
    suitableFor: 'Wildlife Enthusiasts, Photographers, Families & Nature Seekers',
    keyBadge: 'Tiger & Black Panther Habitat',
    isCuratorPick: true,
    intro:
      'Part of the protected Kali Tiger Reserve, Anshi National Park encompasses some of the densest rainforest tracts in Karnataka. Riding in government-approved open-top 4x4 safari vehicles accompanied by accredited forest rangers, you travel along quiet laterite tracks through bamboo clumps, listening for chital alarm calls and scanning tree perches for leopards and giant squirrels.',
    whatToExpect: [
      'Early morning mist clearing across ancient teak trees as daylight breaks.',
      'Pausing at forest salt licks and watering holes where spotted deer and Indian gaur gather.',
      'Native tracker reading pugmarks, territorial tree scratches, and bird alarm barks.',
      'High likelihood of observing wild boars, barking deer, sambar deer, and hornbills.',
    ],
    detailedHighlights: [
      'Regulated access into core wilderness zones strictly off-limits to private vehicles',
      'Accompanied by an official Karnataka Forest Department tracker',
      'Frequent sightings of Indian gaur (the world’s largest wild bovid) and spotted deer',
      'Quiet, respectful wildlife tracking with small passenger limits per jeep',
    ],
    thingsToKnow: [
      'Wear neutral, muted forest tones (khaki, brown, olive green); avoid bright reds or whites.',
      'Carry binoculars and long lenses; silence must be strictly maintained in core zones.',
      'Forest department ticket quotas are strictly limited; advance registration is recommended.',
    ],
    journeyBridge: {
      activity: {
        id: 'jungle-safari',
        title: 'Open-Jeep Forest Safari',
        slug: '/activities/jungle-safari',
        description: 'Core forest tracking with accredited Karnataka Forest department ranger.',
      },
      travelPackage: {
        id: 'pkg-wildlife-hornbill',
        title: 'Wildlife & Hornbill Expedition',
        slug: '/packages/pkg-wildlife-hornbill',
        price: 3699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'solo',
        title: 'Solo Nature & Photography Retreat',
        slug: '/trip-plans/solo',
        spirit: 'Quiet morning tracks, telephoto photography, and zero commercial noise.',
      },
    },
  },
  {
    id: 'sathodi-falls',
    slug: 'sathodi-falls',
    name: 'Sathodi Falls & River Canyon',
    category: 'Waterfalls',
    secondaryCategories: ['Nature', 'Places to Visit'],
    shortDescription:
      'Often called Karnataka’s mini-Niagara, a 50-foot multi-tiered cascade where several forest streams unite before tumbling into a dramatic emerald gorge.',
    usefulHighlight:
      'Flanked by vertical rock canyon walls; crystal-clear plunge pool; scenic 25 km drive through dense Yellapur teak and betel nut reserves.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Kallakarva, Yellapur Forest Division (75 km from Dandeli)',
    zone: 'Zone II • Ancient Monoliths',
    duration: 'Half-Day Excursion (4 – 5 Hours)',
    bestTime: 'September through February (Peak post-monsoon volume)',
    difficulty: 'Moderate',
    suitableFor: 'Couples, Nature Lovers, Photographers & Small Adventure Groups',
    keyBadge: 'Karnataka’s Mini-Niagara',
    isCuratorPick: true,
    intro:
      'Hidden deep inside the Yellapur forests where the Western Ghats form steep river chasms, Sathodi Falls is one of the most picturesque natural waterfalls in South India. Formed by multiple forest rivulets coming together, the water thunders down in a wide rectangular curtain into an emerald pool nestled between sheer basalt cliffs.',
    whatToExpect: [
      'A scenic country drive through rural spice hamlets and teak forest canopies.',
      'A 1-kilometer gentle forest walk along a paved rocky trail with lush moss-covered trees.',
      'Arriving at the natural amphitheater of the gorge with cool mist blowing off the cascades.',
      'Dipping feet into cool, clean mountain streams flowing over smooth river pebbles.',
    ],
    detailedHighlights: [
      '50-foot rectangular roaring waterfall dropping into a tranquil rock amphitheater',
      'Surrounded by dramatic vertical basalt canyon walls topped with wild rainforest canopy',
      'Crystal-clear mountain water stream feeding into the Kodasalli backwaters',
      'Unspoiled natural setting with minimal commercial interference',
    ],
    thingsToKnow: [
      'Swimming in the deep plunge pool directly below the fall is restricted for safety.',
      'Wear sturdy walking shoes with reliable rubber grip on damp stones.',
      'Carry water and snacks as there are limited commercial stalls inside the reserve.',
    ],
    journeyBridge: {
      activity: {
        id: 'waterfalls',
        title: 'Waterfalls & Hidden Canyon Trail',
        slug: '/activities/waterfalls',
        description: 'Excursion through Sathodi & Magod canyon viewing platforms.',
      },
      travelPackage: {
        id: 'river-jungle-experience',
        title: 'River & Jungle Complete Experience',
        slug: '/packages/river-jungle-experience',
        price: 3199,
        duration: '3 Days / 2 Nights',
      },
      tripPlan: {
        id: 'duo',
        title: 'Couples Quiet Nature & Scenic Retreat',
        slug: '/trip-plans/duo',
        spirit: 'Romantic canyon misty views, unhurried walks, and lush green backdrops.',
      },
    },
  },
  {
    id: 'hornbill-trail',
    slug: 'hornbill-trail',
    name: 'Old Magazine Hornbill Sanctuary Trail',
    category: 'Wildlife',
    secondaryCategories: ['Peaceful Escapes', 'Jungle'],
    shortDescription:
      'The premier birdwatching corridor in South India where all four native species of Western Ghats hornbills feed at canopy eye-level.',
    usefulHighlight:
      'Over 300 bird species recorded; dawn (06:30 AM – 09:00 AM) brings feeding flocks of Malabar Pied and Great Indian Hornbills to wild fig clusters.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    ],
    location: 'Old Magazine House, Ganeshgudi (18 km from Dandeli)',
    zone: 'Zone III • Tiger Canopy',
    duration: '2.5 – 3 Hours',
    bestTime: 'November to April (Peak fig fruiting season)',
    difficulty: 'Easy',
    suitableFor: 'Birdwatchers, Nature Photographers, Quiet Naturalists & Families',
    keyBadge: 'Hornbill Capital of India',
    isCuratorPick: true,
    intro:
      'Dandeli is celebrated globally by ornithologists as the Hornbill Capital of South India. The dense semi-evergreen canopy of Ganeshgudi is one of the rare habitats where you can spot all four South Indian species—the Great Indian Hornbill, Malabar Pied Hornbill, Malabar Grey Hornbill, and Common Grey Hornbill—often feeding together on giant wild ficus trees.',
    whatToExpect: [
      'Early morning silence along forest trails broken only by the whooshing sound of hornbill wings.',
      'Native certified bird guide pointing out camouflaged canopy species using spotting scopes.',
      'Watching majestic Malabar Pied Hornbills crack open wild figs with their massive yellow casques.',
      'Frequent sightings of Emerald Doves, Asian Paradise Flycatchers, and Malabar Trogons.',
    ],
    detailedHighlights: [
      'High-probability sightings of the iconic Malabar Pied Hornbill at close range',
      'Over 300 documented avian species within a 20 km protected sanctuary radius',
      'Accompanied by native naturalists who locate rare species by calls and flight paths',
      'Dedicated observation platforms overlooking natural bird watering and bathing perches',
    ],
    thingsToKnow: [
      'Dawn between 06:30 AM and 09:00 AM is the single best window for maximum bird activity.',
      'Muted clothing and quiet whispers are strictly required on the birding trails.',
      'Carry telephoto camera lenses (300mm+ recommended) or binoculars.',
    ],
    journeyBridge: {
      activity: {
        id: 'wildlife-experiences',
        title: 'Guided Birding & Naturalist Walk',
        slug: '/activities/wildlife-experiences',
        description: 'Morning canopy bird walk led by certified Ganeshgudi ornithologists.',
      },
      travelPackage: {
        id: 'pkg-wildlife-hornbill',
        title: 'Wildlife & Hornbill Expedition',
        slug: '/packages/pkg-wildlife-hornbill',
        price: 3699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'solo',
        title: 'Solo Naturalist Immersion',
        slug: '/trip-plans/solo',
        spirit: 'Patience, high canopy observation, and listening to forest symphonies.',
      },
    },
  },
  {
    id: 'supa-backwaters',
    slug: 'supa-backwaters',
    name: 'Supa Dam Reservoir & Island Backwaters',
    category: 'Peaceful Escapes',
    secondaryCategories: ['River & Water', 'Places to Visit'],
    shortDescription:
      'A vast, mirror-flat inland freshwater sea created by the Supa Dam, dotted with mist-veiled forested islets and quiet coracle coves.',
    usefulHighlight:
      'Perfect for dawn tandem kayaking and sunset photography; absolute quiet with zero motorized boat noise allowed on the backwaters.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    ],
    location: 'Supa Dam Reservoir Basin, Ganeshgudi',
    zone: 'Zone I • River Canyon',
    duration: '2 – 2.5 Hours',
    bestTime: 'All year round (Best light: 06:30 AM & 05:00 PM)',
    difficulty: 'Relaxed',
    suitableFor: 'Couples, Families, Quiet Seekers, Solo Kayakers',
    keyBadge: 'Mirror-Glass Backwaters',
    isCuratorPick: false,
    intro:
      'Holding over 145 tmcft of Western Ghats rainwater, the Supa Reservoir forms an immense, peaceful freshwater basin surrounded by rolling green hills. When dawn arrives, morning fog rolls across the glassy surface, and silence is broken only by the dip of kayak paddles and kingfishers diving for small fish along the reed edges.',
    whatToExpect: [
      'Gliding effortlessly across glassy water on sit-on-top kayaks or traditional bamboo coracles.',
      'Drifting around uninhabited wooded islands where white-bellied sea eagles nest.',
      'Spectacular sunset reflections turning the massive water expanse into liquid gold.',
      'A profound sense of quiet far removed from city rush or motorized transport.',
    ],
    detailedHighlights: [
      'Expansive mirror-like water surface ideal for beginners and leisure kayakers',
      'Panoramic view of the Supa Dam structure and surrounding Western Ghats ridges',
      'Excellent vantage point for sunset landscape photography',
      'Life jackets and certified kayak escorts provided at all times',
    ],
    thingsToKnow: [
      'Sit-on-top kayaks are stable and self-draining; easy even if you have never paddled before.',
      'Wear sun protection (hat and sunscreen) during daytime sessions.',
      'Morning sessions offer the smoothest water with the least breeze.',
    ],
    journeyBridge: {
      activity: {
        id: 'kayaking',
        title: 'River & Backwater Kayaking',
        slug: '/activities/kayaking',
        description: 'Tandem or solo sit-on-top kayaking on calm reservoir bays.',
      },
      travelPackage: {
        id: 'river-jungle-experience',
        title: 'River & Jungle Complete Experience',
        slug: '/packages/river-jungle-experience',
        price: 3199,
        duration: '3 Days / 2 Nights',
      },
      tripPlan: {
        id: 'duo',
        title: 'Couples Romantic River Drift',
        slug: '/trip-plans/duo',
        spirit: 'Silent dawn kayaking, private water reflections, and riverfront decks.',
      },
    },
  },
  {
    id: 'kavala-caves',
    slug: 'kavala-caves',
    name: 'Kavala Prehistoric Limestone Caves',
    category: 'Adventure',
    secondaryCategories: ['Places to Visit', 'Jungle'],
    shortDescription:
      'Prehistoric natural limestone caves tucked deep inside the rainforest, reached via a descent of 375 stone steps through ancient bamboo groves.',
    usefulHighlight:
      'Contains a naturally formed stalagmite sacred to locals; involves crawling through a 40-foot illuminated natural tunnel; sturdy shoes required.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    ],
    location: 'Dandeli Wildlife Sanctuary Core (25 km from Dandeli)',
    zone: 'Zone II • Ancient Monoliths',
    duration: '3.5 – 4 Hours',
    bestTime: 'October to March (Sanctuary closes cave access during monsoon rains)',
    difficulty: 'Moderate',
    suitableFor: 'Active Travelers, Trekkers, Heritage Enthusiasts, Adventure Friends',
    keyBadge: 'Prehistoric Caverns',
    isCuratorPick: false,
    intro:
      'Hidden beneath the dense rainforest canopy of the Kali Tiger Reserve, the Kavala Caves date back thousands of years. Reached via a winding forest trail followed by a steep descent of 375 stone steps, the cave entrance leads into cool subterranean limestone chambers where water droplets have sculpted natural stalagmites over millennia.',
    whatToExpect: [
      'Scenic trek through wild bamboo thickets and dense evergreen forest.',
      'Descending 375 stone steps leading down into a cool limestone canyon.',
      'Entering a low cavern and crawling or bending through a 40-foot natural rock tunnel.',
      'Viewing the naturally formed limestone stalagmite in the inner sanctum with a guide’s light.',
    ],
    detailedHighlights: [
      'Ancient subterranean limestone formations preserved deep in protected jungle',
      'True caving experience with natural crawl corridors and cool interior air',
      'Rich bat colonies and unique subterranean rock geology',
      'Forest department registered guide escorts your party safely through the cave',
    ],
    thingsToKnow: [
      'Requires descending and climbing back up 375 steep steps; requires reasonable knee fitness.',
      'The inner passage requires ducking or crawling for about 30 to 40 feet; not suitable for severe claustrophobia.',
      'Wear sturdy walking shoes with reliable grip; carry a pocket flashlight or headlamp.',
    ],
    journeyBridge: {
      activity: {
        id: 'syntheri-trek',
        title: 'Geological & Cave Expedition',
        slug: '/activities/syntheri-trek',
        description: 'Guided descent into Kavala Caves and Kaneri river gorge trails.',
      },
      travelPackage: {
        id: 'weekend-dandeli-escape',
        title: 'Weekend Dandeli Wilderness Escape',
        slug: '/packages/weekend-dandeli-escape',
        price: 2699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'friends',
        title: 'Friends Adventure Explorer',
        slug: '/trip-plans/friends',
        spirit: 'Thrilling underground crawl, forest stairs climb, and jungle banter.',
      },
    },
  },
  {
    id: 'natural-jacuzzi',
    slug: 'natural-jacuzzi',
    name: 'Natural Jacuzzi Boulder Channels',
    category: 'River & Water',
    secondaryCategories: ['Peaceful Escapes', 'Adventure'],
    shortDescription:
      'Nature’s own bubbling whirlpool bath, where rapid Kali River currents filter through smooth granite boulder chutes creating natural hydro-massages.',
    usefulHighlight:
      'Pure mountain current massages back and shoulders; life jackets mandatory; shallow safe zones carefully monitored by river marshals.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png',
    ],
    location: 'Kali River Rapids Outflow, Ganeshgudi Island',
    zone: 'Zone I • River Canyon',
    duration: '1.5 – 2 Hours',
    bestTime: 'October through May',
    difficulty: 'Easy',
    suitableFor: 'Families, Friends Squads, Couples, Swimmers & Non-Swimmers',
    keyBadge: 'Natural River Whirlpool',
    isCuratorPick: true,
    intro:
      'Below the main white-water rapids of the Kali River, the river divides around granite boulder clusters. In several narrow channels, clear foamy mountain water rushes through smooth natural stone hollows at high velocity. Sitting inside these natural chutes with your life jacket on gives you an exhilarating, natural aquatic deep-tissue massage.',
    whatToExpect: [
      'Wading into shallow riverbanks wearing certified high-buoyancy life jackets.',
      'Wedging safely into smooth granite channels where pressurized river water foams around you.',
      'Feeling the soothing hydro-massage on tired back and shoulder muscles.',
      'Relaxing on warm sunlit boulders between revitalizing water sessions.',
    ],
    detailedHighlights: [
      'Completely natural river feature formed by millions of years of water erosion',
      'Clean, unpolluted Western Ghats mountain water continuously refreshed by river flow',
      'Life jackets ensure you stay buoyant and secure without any swimming effort',
      'Supervised by certified local river marshals positioned along the boulder banks',
    ],
    thingsToKnow: [
      'Life jackets are compulsory for everyone entering the water, regardless of swimming ability.',
      'Wear secure strap sandals to protect your feet while walking over underwater pebbles.',
      'Carry a spare change of dry clothes, towels, and waterproof phone cases.',
    ],
    journeyBridge: {
      activity: {
        id: 'natural-jacuzzi',
        title: 'Natural Jacuzzi River Bath',
        slug: '/activities/natural-jacuzzi',
        description: 'Guided natural whirlpool hydro-massage in the Kali river rapids.',
      },
      travelPackage: {
        id: 'pkg-family-rainforest',
        title: 'Family Rainforest & River Escape',
        slug: '/packages/pkg-family-rainforest',
        price: 2899,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'family',
        title: 'Family Water Fun & Safe Thrills',
        slug: '/trip-plans/family',
        spirit: 'Safe shallow water fun, laughing together in bubbling currents, zero stress.',
      },
    },
  },
  {
    id: 'sykes-point',
    slug: 'sykes-point',
    name: 'Sykes Point & Kali Valley Vista',
    category: 'Places to Visit',
    secondaryCategories: ['Nature', 'Peaceful Escapes'],
    shortDescription:
      'The most dramatic panoramic viewpoint in the Western Ghats, perched high atop a cliff edge overlooking the deep Kali River gorge and valley below.',
    usefulHighlight:
      'Named after a British surveyor; watch the Kali river wind like a jade serpent hundreds of feet below; best at golden sunset (05:00 PM).',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Ambikanagar Ridge (22 km from Dandeli Town)',
    zone: 'Zone I • River Canyon',
    duration: '1.5 – 2 Hours',
    bestTime: 'October to February (Sunset light: 04:30 PM – 06:00 PM)',
    difficulty: 'Relaxed',
    suitableFor: 'Sightseers, Photographers, Elders, Families & Romantic Couples',
    keyBadge: 'Panoramic River Gorge Vista',
    isCuratorPick: false,
    intro:
      'Perched on a high rocky spur in the Ambikanagar hills, Sykes Point offers an awe-inspiring birds-eye view of the Kali River cutting through the densely forested Western Ghats. From the observation pavilion, you can trace the jade ribbon of the river winding through steep canyons, with the distant peaks of the Anshi forest stretching toward the horizon.',
    whatToExpect: [
      'A scenic uphill drive through teak plantations to reach the elevated forest overlook.',
      'Standing at the railed observation deck overlooking a 1,000-foot valley drop.',
      'Watching hornbills and crested serpent eagles soaring below eye level on thermal currents.',
      'Witnessing the sunset transform the valley into shades of ochre, purple, and gold.',
    ],
    detailedHighlights: [
      'Highest and most dramatic panoramic vista of the meandering Kali River',
      'Watch eagles and hornbills glide below eye-level across the gorge',
      'Well-maintained viewpoint with safety railings and comfortable seating pavilions',
      'Gentle flat vehicle access with no strenuous climbing required',
    ],
    thingsToKnow: [
      'Permission passes are required from the Karnataka Power Corporation security office (included in our guided tours).',
      'Late afternoons offer the best photographic lighting with minimal haze.',
      'Carry a light jacket as ridge breezes can be cool at sunset.',
    ],
    journeyBridge: {
      activity: {
        id: 'syntheri-trek',
        title: 'Viewpoints & Nature Trail',
        slug: '/activities/syntheri-trek',
        description: 'Guided tour covering Sykes Point, Syntheri Rocks, and Supa Vista.',
      },
      travelPackage: {
        id: 'weekend-dandeli-escape',
        title: 'Weekend Dandeli Wilderness Escape',
        slug: '/packages/weekend-dandeli-escape',
        price: 2699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'duo',
        title: 'Couples Scenic Panorama',
        slug: '/trip-plans/duo',
        spirit: 'Quiet sunset watching, expansive vistas, and memorable landscape photos.',
      },
    },
  },
  {
    id: 'magod-falls',
    slug: 'magod-falls',
    name: 'Magod Falls & Bedti River Chasm',
    category: 'Waterfalls',
    secondaryCategories: ['Nature', 'Places to Visit'],
    shortDescription:
      'A thunderous two-tiered cascade where the Bedti River leaps 650 feet down into a dramatic, mist-filled rocky gorge surrounded by dense jungle.',
    usefulHighlight:
      'Two well-maintained viewpoint pavilions provide grand panoramic vistas; visit early morning before mist burns off for magical photos.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Magod Village, Yellapur Division (80 km from Dandeli)',
    zone: 'Zone II • Ancient Monoliths',
    duration: 'Half-Day Excursion (4 Hours)',
    bestTime: 'September to January (Peak post-monsoon roar)',
    difficulty: 'Easy',
    suitableFor: 'Nature Lovers, Photographers, Families & Road Trippers',
    keyBadge: '650ft Twin Cascade',
    isCuratorPick: false,
    intro:
      'Magod Falls is one of the most majestic waterfalls in the North Karnataka Western Ghats. Here, the energetic Bedti River makes two dramatic leaps descending nearly 650 feet into an immense, sheer rocky chasm. The sheer scale of the vertical drop and the perpetual cloud of fine spray make it an unforgettable stop for landscape photographers.',
    whatToExpect: [
      'Driving through winding rural countryside dotted with betel nut and pepper plantations.',
      'Walking along paved walkways to two separate stone viewing gazebos built by the forest department.',
      'Observing the twin water jets plunging into the shadowed chasm below.',
      'Relaxing in the cool spray drifting across the forest canopy.',
    ],
    detailedHighlights: [
      'Two-tiered 650-foot waterfall plunging into a vertical forested canyon',
      'Spectacular views from two secure stone gazebos overlooking the drop',
      'Dense surrounding rainforest that attracts vibrant butterflies and forest birds',
      'Easy walking access from the parking bay suitable for travelers of all ages',
    ],
    thingsToKnow: [
      'The walk from the vehicle area to the viewpoint is paved and takes only 5 to 10 minutes.',
      'Fencing is erected for safety; climbing beyond guardrails is strictly prohibited.',
      'Can be combined seamlessly with a visit to Sathodi Falls for a full-day waterfalls safari.',
    ],
    journeyBridge: {
      activity: {
        id: 'waterfalls',
        title: 'Waterfalls Trail Excursion',
        slug: '/activities/waterfalls',
        description: 'Guided day tour covering Magod and Sathodi twin falls.',
      },
      travelPackage: {
        id: 'river-jungle-experience',
        title: 'River & Jungle Complete Experience',
        slug: '/packages/river-jungle-experience',
        price: 3199,
        duration: '3 Days / 2 Nights',
      },
      tripPlan: {
        id: 'family',
        title: 'Family Scenic Waterfalls Circuit',
        slug: '/trip-plans/family',
        spirit: 'Secure viewpoints, easy paved walks, and majestic nature cascades.',
      },
    },
  },
  {
    id: 'kulgi-botanical-trail',
    slug: 'kulgi-botanical-trail',
    name: 'Kulgi Medicinal Botanical Trail',
    category: 'Nature',
    secondaryCategories: ['Jungle', 'Peaceful Escapes'],
    shortDescription:
      'A shaded sensory nature trail led by native forest naturalists, showcasing over 150 rare medicinal herbs, wild cinnamon, and ancient grandmother trees.',
    usefulHighlight:
      'Gentle, flat walking terrain suitable for elders and children; taste wild forest berries and learn indigenous tribal remedies used for centuries.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    ],
    location: 'Kulgi Nature Camp, Dandeli Forest Division',
    zone: 'Zone III • Tiger Canopy',
    duration: '1.5 – 2 Hours',
    bestTime: 'All year round (Morning: 07:00 AM & Evening: 04:30 PM)',
    difficulty: 'Easy',
    suitableFor: 'Families with Children, Seniors, Botany Enthusiasts, Quiet Walkers',
    keyBadge: 'Native Herbal Sanctuary',
    isCuratorPick: false,
    intro:
      'Away from adrenaline sports, the Kulgi Nature Trail offers a peaceful, grounding communion with the living rainforest. Led by a local village elder and herbal naturalist, you stroll through ancient moist deciduous forest. You will touch aromatic medicinal bark, crush wild ginger leaves between your fingers, and discover how indigenous communities have lived in harmony with these forests for generations.',
    whatToExpect: [
      'Gently paced walking along soft, leaf-strewn trails with zero steep inclines.',
      'Smelling wild cinnamon, touching strangler fig roots, and tasting edible forest herbs.',
      'Learning the traditional uses of forest flora for healing, immunity, and snakebite remedies.',
      'Spotting colorful forest butterflies, stick insects, and tree-dwelling lizards.',
    ],
    detailedHighlights: [
      'Over 150 documented species of medicinal Western Ghats trees and herbs',
      'Interactive herbal demonstrations led by indigenous village herbalists',
      'Gentle, level walking trails completely accessible for grandparents and toddlers',
      'Fresh forest oxygen with rich negative ions that reduce stress and tension',
    ],
    thingsToKnow: [
      'Comfortable walking shoes and light cotton clothing are recommended.',
      'Eco-sensitive zone: plucking leaves or littering is strictly forbidden.',
      'Natural herbal tea is served at the Kulgi interpretation center after the walk.',
    ],
    journeyBridge: {
      activity: {
        id: 'syntheri-trek',
        title: 'Botanical & Medicinal Walk',
        slug: '/activities/syntheri-trek',
        description: 'Gentle morning guided plant walk with indigenous naturalists.',
      },
      travelPackage: {
        id: 'pkg-family-rainforest',
        title: 'Family Rainforest & River Escape',
        slug: '/packages/pkg-family-rainforest',
        price: 2899,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'family',
        title: 'Family Eco-Learning Walk',
        slug: '/trip-plans/family',
        spirit: 'Wholesome sensory discoveries for children and easy walking for elders.',
      },
    },
  },
  {
    id: 'riverside-starlight-camping',
    slug: 'riverside-starlight-camping',
    name: 'Riverside Starlight & Campfire Meadows',
    category: 'Adventure',
    secondaryCategories: ['Peaceful Escapes', 'River & Water'],
    shortDescription:
      'Pitch weather-sealed alpine dome tents right beside the flowing Kali River under pristine dark skies, complete with crackling bonfires and barbecue.',
    usefulHighlight:
      'Zero city light pollution reveals the arc of the Milky Way; includes barbecue snacks, permanent masonry restrooms, and morning river dips.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_resort_cabins_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Barchi & Ganeshgudi River Meadows',
    zone: 'Zone I • River Canyon',
    duration: 'Overnight Stay (Check-in 04:30 PM, Check-out 10:30 AM)',
    bestTime: 'October to May (Crisp clear skies and pleasant nights)',
    difficulty: 'Easy',
    suitableFor: 'Friend Groups, Backpackers, Couples, Stargazers & Campers',
    keyBadge: 'Milky Way Stargazing',
    isCuratorPick: true,
    intro:
      'Dandeli after sunset is an unforgettable wilderness experience. Located directly along the riverbank framed by soaring teak trees, our starlight camping site sits beneath an ink-black sky untouched by urban light pollution. As evening falls, a teak wood bonfire crackles to life, barbecue skewers are roasted over hot charcoal, and conversations flow under a diamond blanket of stars.',
    whatToExpect: [
      'Checking into comfortable alpine dome tents equipped with foam mattresses, clean linens, and pillows.',
      'Evening acoustic bonfire with roasted barbecue snacks and home-style Karnataka buffet dinner.',
      'Watching the Milky Way galaxy rise over the Kali River with visible constellations.',
      'Waking up to cool river mist, birdsong, and slipping straight into a morning kayak float.',
    ],
    detailedHighlights: [
      'Tents pitched right along the grassy riverbank with unobstructed water views',
      'Charcoal barbecue and traditional buffet dinner included in your stay',
      'Clean permanent masonry restrooms with running water and hot showers located nearby',
      '24x7 solar perimeter lighting and trained local camp caretakers for absolute security',
    ],
    thingsToKnow: [
      'Bring a light fleece jacket as river meadows cool down significantly after midnight.',
      'Loud speakers are prohibited after 10:00 PM to respect forest wildlife and sanctuary rules.',
      'Charging points are available in the central covered camp pavilion.',
    ],
    journeyBridge: {
      activity: {
        id: 'jungle-camping',
        title: 'Riverbank Starlight Camping',
        slug: '/activities/jungle-camping',
        description: 'All-inclusive overnight dome tent stay with campfire and barbecue.',
      },
      travelPackage: {
        id: 'camping-under-the-stars',
        title: 'Camping Under the Stars',
        slug: '/packages/camping-under-the-stars',
        price: 2199,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'friends',
        title: 'Friends Starlight & Campfire Party',
        slug: '/trip-plans/friends',
        spirit: 'Acoustic songs, crackling bonfires, nighttime laughs, and starry skies.',
      },
    },
  },
  {
    id: 'moulangi-ecopark',
    slug: 'moulangi-ecopark',
    name: 'Moulangi Eco-Park & Bamboo Groves',
    category: 'Peaceful Escapes',
    secondaryCategories: ['Nature', 'Places to Visit'],
    shortDescription:
      'A peaceful forest picnic sanctuary nestled amidst massive natural granite formations, gentle river streams, and shady towering bamboo groves.',
    usefulHighlight:
      'Ideal open grassy spaces for children to play, riverbank sitting decks, and shady giant bamboo groves; entry open daily 09:00 AM – 06:00 PM.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_pool_deck_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottage_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    location: 'Moulangi Hamlet (11 km from Dandeli Town)',
    zone: 'Zone I • River Canyon',
    duration: '2 – 3 Hours',
    bestTime: 'All year round',
    difficulty: 'Relaxed',
    suitableFor: 'Families with Children, Leisure Picnickers, Book Readers, Couples',
    keyBadge: 'Riverside Bamboo Sanctuary',
    isCuratorPick: false,
    intro:
      'Surrounded by imposing natural granite rock cliffs and lush bamboo jungles, Moulangi Eco-Park is Dandeli’s favorite natural riverside leisure spot. The gentle river flows right alongside grassy shaded lawns, making it the ideal location to lay down a picnic mat, read a book under giant bamboo canopies, or watch children splash in safe, shallow water edges.',
    whatToExpect: [
      'Relaxing on manicured river lawns beneath towering bamboo arches.',
      'Dipping feet into shallow, gentle river currents with no steep drop-offs.',
      'Short walks along paved perimeter paths beneath massive granite cliff faces.',
      'Safe, tranquil atmosphere with ample natural shade even during midday.',
    ],
    detailedHighlights: [
      'Scenic riverbank location flanked by dramatic natural granite rock cliffs',
      'Expansive bamboo groves that keep the park naturally cool and shaded',
      'Shallow river edges ideal for gentle wading under supervision',
      'Clean park grounds equipped with stone benches and picnic gazebos',
    ],
    thingsToKnow: [
      'Nominal entry fee collected at the forest gate by local eco-tourism development committees.',
      'Carry your own picnic snacks; remember to take all trash back with you (zero plastic zone).',
      'Open daily from 09:00 AM to 06:00 PM.',
    ],
    journeyBridge: {
      activity: {
        id: 'kayaking',
        title: 'Gentle River Float & Kayaking',
        slug: '/activities/kayaking',
        description: 'Relaxed paddling along gentle calm-water stretches.',
      },
      travelPackage: {
        id: 'pkg-family-rainforest',
        title: 'Family Rainforest & River Escape',
        slug: '/packages/pkg-family-rainforest',
        price: 2899,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'family',
        title: 'Family Leisure Picnic & Splash',
        slug: '/trip-plans/family',
        spirit: 'Unhurried downtime, children playing on grass, and gentle river breezes.',
      },
    },
  },
  {
    id: 'coracle-drift',
    slug: 'coracle-drift',
    name: 'Artisanal Coracle River Float',
    category: 'River & Water',
    secondaryCategories: ['Peaceful Escapes', 'Nature'],
    shortDescription:
      'Drift silently down emerald backwaters in an artisanal round bamboo coracle boat steered by a single paddle in the hands of native fishermen.',
    usefulHighlight:
      'Exceptional proximity to the water surface; spot kingfishers, river otters, and freshwater turtles basking on sunken logs; life jackets mandatory.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png',
    ],
    location: 'Ganeshgudi Coracle Bay, Upper Kali River',
    zone: 'Zone I • River Canyon',
    duration: '1 Hour',
    bestTime: '07:00 AM – 10:00 AM & 04:00 PM – 06:00 PM',
    difficulty: 'Relaxed',
    suitableFor: 'Couples, Elders, Families with Young Children, First-Time Water Travelers',
    keyBadge: 'Artisanal Bamboo Craft',
    isCuratorPick: false,
    intro:
      'The coracle is a traditional circular watercraft woven from pliable bamboo strips and sealed with waterproof resin, used across South Indian river basins for over a thousand years. Sitting low inside the bowl-shaped boat just inches above the water, your local boatman uses a single rhythmic paddle stroke to spin and steer you down the peaceful bends of the Kali River.',
    whatToExpect: [
      'Stepping into the lightweight woven coracle from a gentle riverbank ramp.',
      'Gliding silently through mirror-smooth water with 360-degree panoramic views.',
      'Experiencing a playful gentle 360-degree spin orchestrated by your skilled boatman.',
      'Spotting river otters swimming near reed banks and kingfishers diving for fish.',
    ],
    detailedHighlights: [
      'Traditional indigenous craft steered with ancient single-oar technique',
      'Silent movement allows you to approach river wildlife without scaring them away',
      'Suitable for travelers of all ages from 4 to 80 years old',
      'Life jackets provided and fitted before boarding for complete peace of mind',
    ],
    thingsToKnow: [
      'Each coracle typically accommodates 4 to 5 guests plus the boatman.',
      'Keep balance by sitting steadily in the center; your boatman will guide your boarding.',
      'Morning sessions between 07:00 AM and 09:30 AM offer the calmest mist-shrouded waters.',
    ],
    journeyBridge: {
      activity: {
        id: 'natural-jacuzzi',
        title: 'Coracle Float & River Activities',
        slug: '/activities/natural-jacuzzi',
        description: 'Authentic circular bamboo boat ride down calm river backwaters.',
      },
      travelPackage: {
        id: 'weekend-dandeli-escape',
        title: 'Weekend Dandeli Wilderness Escape',
        slug: '/packages/weekend-dandeli-escape',
        price: 2699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'duo',
        title: 'Romantic Sunset Water Float',
        slug: '/trip-plans/duo',
        spirit: 'Drifting into the sunset, gentle ripples, and deep river quiet.',
      },
    },
  },
  {
    id: 'malabar-squirrel-trail',
    slug: 'malabar-squirrel-trail',
    name: 'Malabar Giant Squirrel & Canopy Trail',
    category: 'Wildlife',
    secondaryCategories: ['Jungle', 'Nature'],
    shortDescription:
      'An arboreal canopy trail focused on tracking the colorful, three-foot-long Malabar Giant Squirrel leaping between sixty-foot teak branches.',
    usefulHighlight:
      'Spot their massive spherical twig nests in the canopy and hear their loud chuckling alarm calls; guided walks provide high-power binoculars.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    ],
    location: 'Phansoli Forest Range, Kali Reserve Buffer',
    zone: 'Zone III • Tiger Canopy',
    duration: '2 – 2.5 Hours',
    bestTime: 'Early Morning (06:30 AM – 09:30 AM)',
    difficulty: 'Easy',
    suitableFor: 'Wildlife Enthusiasts, Children, Photographers & Nature Walkers',
    keyBadge: 'Arboreal Giant Squirrels',
    isCuratorPick: false,
    intro:
      'One of the true icons of the Western Ghats is the Shekru, or Malabar Giant Squirrel (Ratufa indica). Measuring up to three feet from nose to tail with striking maroon, buff, and black fur, these agile mammals spend their entire lives in the high tree canopy. On this guided trail, you will learn to spot their spherical leaf nests and observe them making breathtaking twenty-foot leaps between canopy trees.',
    whatToExpect: [
      'Walking along quiet, shaded canopy trails accompanied by a native naturalist.',
      'Scanning high branches where giant squirrels sunbathe with their long bushy tails dangling.',
      'Listening to their distinctive loud staccato territorial alarm calls.',
      'Learning about their diet of wild tree seeds, fruit kernels, and tree bark.',
    ],
    detailedHighlights: [
      'High sighting frequency of one of India’s most charismatic endemic arboreal species',
      'Educational focus on rainforest canopy ecology and nesting habits',
      'Naturalist provides spotting binoculars and identifies secondary canopy wildlife',
      'Gentle forest walking trail with minimal elevation change',
    ],
    thingsToKnow: [
      'Look for moving tree branches high above—squirrels announce themselves with shaking leaves.',
      'Keep cameras equipped with telephoto zoom lenses ready; they move swiftly between trees.',
      'Early mornings offer the most active feeding and foraging behavior.',
    ],
    journeyBridge: {
      activity: {
        id: 'wildlife-experiences',
        title: 'Canopy Wildlife Experience',
        slug: '/activities/wildlife-experiences',
        description: 'Guided arboreal canopy tracking session with naturalists.',
      },
      travelPackage: {
        id: 'pkg-wildlife-hornbill',
        title: 'Wildlife & Hornbill Expedition',
        slug: '/packages/pkg-wildlife-hornbill',
        price: 3699,
        duration: '2 Days / 1 Night',
      },
      tripPlan: {
        id: 'solo',
        title: 'Solo Wildlife Watcher',
        slug: '/trip-plans/solo',
        spirit: 'Quiet observation, telephoto zoom, and undisturbed animal tracking.',
      },
    },
  },
  {
    id: 'ancient-rainforest-canopy',
    slug: 'ancient-rainforest-canopy',
    name: 'Ancient Teak & Bamboo Rainforest Canopy',
    category: 'Jungle',
    secondaryCategories: ['Nature', 'Peaceful Escapes'],
    shortDescription:
      'A vast, contiguous rainforest biosphere older than the Himalayas, where hundred-foot teak trees interlace with climbing bamboo and wild orchids.',
    usefulHighlight:
      'Creates an authentic natural microclimate 3-4°C cooler than open plains; rich in medicinal plants, endemic butterflies, and pure negative ions.',
    image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_resort_cabins_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
    ],
    location: 'Anshi National Park & Kulgi Buffer Zone',
    zone: 'Zone III • Tiger Canopy',
    duration: 'Full-Day Immersion',
    bestTime: 'All year round (Winter: Oct–Feb, Vibrant Monsoon: Jun–Sep)',
    difficulty: 'Moderate',
    suitableFor: 'Nature Photographers, Digital Detoxers, Writers & Eco-Travelers',
    keyBadge: 'Ancient Western Ghats Biome',
    isCuratorPick: true,
    intro:
      'The Western Ghats of Dandeli represent a primordial tropical forest ecosystem that has evolved uninterrupted for over 150 million years. Towering teak, rosewood, and white cedar trees form a multi-layered canopy that filters sunlight into golden beams. Walking under this dense green vault envelops you in profound quiet, broken only by cicada symphonies and the breeze stirring high bamboo clumps.',
    whatToExpect: [
      'Wandering through deep triple-canopy forest where midday sun barely reaches the floor.',
      'Admiring massive grandmother teak trees that were alive during British colonial times.',
      'Spotting rare forest butterflies including the giant Southern Birdwing and Blue Mormon.',
      'Deep digital detox as cellular signals fade into soothing rainforest sounds.',
    ],
    detailedHighlights: [
      'Uninterrupted 1,300 sq km contiguous rainforest biosphere stretching into Goa',
      'Remarkable cooling microclimate providing immediate relief from urban heat',
      'Over 200 endemic tree species, wild orchids, and medicinal forest vines',
      'Enriched natural oxygen levels and soothing acoustic environment',
    ],
    thingsToKnow: [
      'Cellular coverage is deliberately minimal—embrace the rare digital peace.',
      'Apply natural insect repellent before venturing into dense understory trails.',
      'Stay strictly on established paths to preserve delicate mosses and ground flora.',
    ],
    journeyBridge: {
      activity: {
        id: 'syntheri-trek',
        title: 'Deep Rainforest Trek',
        slug: '/activities/syntheri-trek',
        description: 'Guided forest trek through ancient teak and bamboo canopies.',
      },
      travelPackage: {
        id: 'river-jungle-experience',
        title: 'River & Jungle Complete Experience',
        slug: '/packages/river-jungle-experience',
        price: 3199,
        duration: '3 Days / 2 Nights',
      },
      tripPlan: {
        id: 'solo',
        title: 'Deep Forest Digital Detox',
        slug: '/trip-plans/solo',
        spirit: 'Silent footsteps, forest reading, and total mental restoration.',
      },
    },
  },
];
