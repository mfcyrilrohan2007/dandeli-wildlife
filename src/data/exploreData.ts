import { DandeliDestination, DestinationJourneyBridge } from './destinationsData';

export interface ExploreCategory {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  intro: string;
  whatToExpect: string[];
  duration: string;
  suitableFor: string;
  bestSeason: string;
  timing: string;
  highlights: string[];
  thingsToKnow: string[];
  relatedSlugs: string[];
  accentColor: string;
  elevationOrArea: string;
  destination?: DandeliDestination;
  journeyBridge?: DestinationJourneyBridge;
}

export const EXPLORE_CATEGORIES: Record<string, ExploreCategory> = {
  rafting: {
    slug: 'rafting',
    title: 'White Water Rafting',
    subtitle: 'Kali River Rapids • Ganeshgudi Gorge',
    tagline: 'Nine named mountain rapids churning through deep Western Ghats teak forests',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
    ],
    intro:
      'Dandeli is South India’s premier white-water river hub. Fed by timed mountain water surges from the Supa Dam reservoir, the Kali River transforms into a foaming 9.5-kilometer playground of Class III and IV rapids. Accompanied by certified International Rafting Federation (IRF) river captains, crews navigate adrenaline-pumping drops before floating past tranquil emerald backwaters and leaping into safe cliff-jump pools.',
    whatToExpect: [
      'A comprehensive 20-minute dry-land safety drill, paddle instruction, and buoyancy equipment fitting at the Ganeshgudi base.',
      'Navigating iconic named rapids including Adi’s Delirium, The Stitch, Stanley’s Squeeze, and Smugglers’ Corner.',
      'A thrilling 15-foot deep-water cliff jump under strict river marshal supervision.',
      'A serene 1-kilometer calm float where you can slip into the river in your life jacket and drift beneath forest canopies.',
    ],
    duration: '3.5 to 4 Hours (including briefing & transit)',
    suitableFor: 'Swimmers & non-swimmers aged 12 to 60 with moderate physical fitness',
    bestSeason: 'October through June (regulated dam water releases operate daily)',
    timing: '8:30 AM (Morning Surge) & 1:30 PM (Afternoon Surge)',
    elevationOrArea: 'Ganeshgudi Gorge, Upper Kali River',
    highlights: [
      '9 exhilarating rapids surging over ancient basalt riverbeds',
      'Certified rescue kayakers accompanying every expedition raft',
      'CE-approved high-buoyancy life jackets and impact helmets provided',
      'High vantage points to spot white-bellied sea eagles overhead',
    ],
    thingsToKnow: [
      'Non-swimmers are fully welcome; safety vests provide 150N buoyant flotation.',
      'Wear synthetic quick-drying clothing or swimwear; avoid heavy cotton or denim.',
      'Secure footwear (strap sandals or water booties) is mandatory; flip-flops are prohibited.',
      'Waterproof action cameras are allowed if securely helmet-mounted.',
    ],
    relatedSlugs: ['river', 'camping', 'wildlife'],
    accentColor: '#247565',
  },
  'jungle-safari': {
    slug: 'jungle-safari',
    title: 'Jungle Safari',
    subtitle: 'Anshi National Park & Dandeli Wildlife Sanctuary',
    tagline: 'Quiet tracking through moist deciduous Western Ghats canopy with forest department rangers',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    intro:
      'The Dandeli-Anshi Tiger Reserve spans over 1,300 square kilometers of contiguous Western Ghats forest. As your open-top safari vehicle winds along red-laterite logging tracks, native forest department trackers read fresh tracks, alarm calls, and broken bamboo twigs. Home to elusive black panthers, tigers, leopards, Indian gaurs, and over 300 bird species, every safari turn holds natural suspense.',
    whatToExpect: [
      'Early morning mist parting over dense bamboo groves as daylight filters through 100-year-old teak stands.',
      'Stopping quietly at forest salt licks and watering holes frequented by herds of spotted deer and wild boars.',
      'Birdwatching from open vantage points for Malabar pied hornbills, crested serpent eagles, and emerald doves.',
      'Deep insights into tribal conservation lore and anti-poaching patrol stations from indigenous guides.',
    ],
    duration: '2.5 to 3 Hours per safari run',
    suitableFor: 'All age groups, families, photographers, and wildlife conservation enthusiasts',
    bestSeason: 'October to May (dry season increases sightings around watering holes)',
    timing: '6:00 AM (Dawn Safari) & 4:00 PM (Dusk Safari)',
    elevationOrArea: 'Kulgi & Phansoli Core Forest Ranges',
    highlights: [
      'Permitted access into restricted forest reserve buffer zones',
      'Frequent sightings of Indian gaur (bison), barking deer, and giant squirrels',
      'Vantage points at elevated forest watchtowers overlooking sweeping valleys',
      'Small vehicle passenger limits ensuring quiet, respectful tracking',
    ],
    thingsToKnow: [
      'Forest department permits are strictly limited per slot; early advance booking is recommended.',
      'Wear neutral, muted forest tones (olive, khaki, brown); avoid bright fluorescent colors.',
      'Maintain complete silence inside the sanctuary so animals are not startled.',
      'Carry binoculars and cameras with long telephoto lenses (200mm+ recommended).',
    ],
    relatedSlugs: ['wildlife', 'forest', 'nature'],
    accentColor: '#1B4D3E',
  },
  camping: {
    slug: 'camping',
    title: 'Wilderness Camping',
    subtitle: 'Riverbank Starlight Camps & Forest Clearings',
    tagline: 'Fall asleep to cicada choruses and waking river mists under pristine dark skies',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottages_night_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_resort_cabins_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    ],
    intro:
      'Experience the magic of Dandeli after sunset. Far away from city glare, our riverbank campsites sit beneath towering teak trees and bamboo stands. Gather around crackling teak bonfires, enjoy charcoal grilled barbecue skewers, gaze at the shimmering arc of the Milky Way, and wake up to emerald river waters shrouded in cool morning vapor.',
    whatToExpect: [
      'Weatherproof alpine dome tents equipped with comfortable foam mattresses, pillows, and clean linens.',
      'Evening acoustic bonfires with roasted barbecue snacks and authentic local Karnataka dinners.',
      'Crystal-clear celestial stargazing with zero light pollution and visible constellation tracks.',
      'Waking up to birdsong and slipping straight into a morning kayak or coracle boat on the river.',
    ],
    duration: 'Overnight experience (Check-in 4:30 PM, Check-out 10:30 AM)',
    suitableFor: 'Friend squads, couples, backpackers, stargazers, and adventurous families',
    bestSeason: 'October through May (crisp clear nights with pleasant morning temperatures)',
    timing: 'Evening check-in to next morning checkout',
    elevationOrArea: 'Ganeshgudi & Barchi Riverside Meadows',
    highlights: [
      'Tents pitched right beside the riverbank with direct water views',
      'Charcoal barbecue and traditional home-style buffet dinners included',
      'Clean permanent masonry restrooms with running water and hot showers nearby',
      '24x7 solar perimeter lighting and trained local camp custodians',
    ],
    thingsToKnow: [
      'Bring warm layers or light jackets as forest riverbanks cool down significantly after midnight.',
      'Personal toiletries and towels should be packed by guests.',
      'Loud speakers are forbidden after 10 PM to protect forest wildlife and serenity.',
      'Charging points are available in common camp pavilions.',
    ],
    relatedSlugs: ['rafting', 'river', 'forest'],
    accentColor: '#C86D2C',
  },
  wildlife: {
    slug: 'wildlife',
    title: 'Wildlife & Hornbill Trails',
    subtitle: 'Western Ghats Biodiversity Hotspot',
    tagline: 'Home to four species of hornbills, flying squirrels, and the legendary black panther',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png',
    ],
    intro:
      'Dandeli is celebrated globally by ornithologists and nature photographers as the Hornbill Capital of South India. The dense canopy hosts all four South Indian hornbill species—the Great Indian Hornbill, Malabar Pied Hornbill, Malabar Grey Hornbill, and the Common Grey Hornbill. Early mornings along the Kali riverbank reveal feeding flocks swooping between fruiting fig trees.',
    whatToExpect: [
      'Guided dawn bird walks led by native naturalists who locate rare species by their calls.',
      'Watching majestic Malabar Pied Hornbills feast on wild fig clusters along Ganeshgudi bridges.',
      'Spotting arboreal Malabar giant squirrels leaping between sixty-foot forest canopies.',
      'Discovering nocturnal creatures like flying squirrels and bioluminescent fungi on night nature trails.',
    ],
    duration: '2 to 3 Hours per guided naturalist trail',
    suitableFor: 'Birdwatchers, macro photographers, researchers, and quiet nature lovers',
    bestSeason: 'November to April (peak fruit season attracts the largest bird congregations)',
    timing: '6:30 AM – 9:30 AM (Peak Bird Activity) & 6:30 PM (Night Walk)',
    elevationOrArea: 'Old Magazine House & Ganeshgudi River Corridor',
    highlights: [
      'Over 300 documented bird species in a 25-kilometer radius',
      'High-probability viewing of the iconic Malabar Pied Hornbill',
      'Native certified bird guides with high-power spotting scopes',
      'Rare butterfly species including the Southern Birdwing, India’s largest butterfly',
    ],
    thingsToKnow: [
      'Silence and slow movement are essential for successful bird sightings.',
      'Field guides and bird checklist sheets are provided for your session.',
      'A camera tripod or monopod is helpful for high-canopy zoom lenses.',
    ],
    relatedSlugs: ['forest', 'jungle-safari', 'nature'],
    accentColor: '#1E6F5C',
  },
  waterfalls: {
    slug: 'waterfalls',
    title: 'Waterfalls & Hidden Canyons',
    subtitle: 'Sathodi, Magod & Syntheri Rocks',
    tagline: 'Thundering cascades dropping into emerald granite plunge pools nestled in virgin rainforests',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988789/ff97df5f-a6fa-4fd2-9d6a-051471e513dc.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    ],
    intro:
      'The rugged topography around Dandeli is carved by dramatic river canyons and plunging cascades. From the 300-foot ancient monolithic granite face of Syntheri Rocks to the spectacular multi-tiered drops of Sathodi and Magod falls, the region offers some of the most untouched waterfall ecosystems in Karnataka.',
    whatToExpect: [
      'Scenic forest drives winding through thick bamboo and ironwood reserves to reach secluded gorge trails.',
      'Walking down paved and natural forest stone stairways to mist-drenched viewing terraces.',
      'Marveling at millions of years of river erosion carved into the basalt caverns of Syntheri Rocks.',
      'Dipping feet into cool, clean mountain streams flowing over smooth river pebbles.',
    ],
    duration: 'Half-Day to Full-Day excursions (3 to 6 Hours)',
    suitableFor: 'Trekkers, families, photography enthusiasts, and nature explorers',
    bestSeason: 'August through January (waterfalls thunder with monsoon rainwater through early winter)',
    timing: '8:30 AM to 4:00 PM (Best light for photography)',
    elevationOrArea: 'Kaneri River Gorge & Yellapur Forest Valleys',
    highlights: [
      'Syntheri Rocks: A breathtaking 300ft monolithic granite wonder with wild beehives',
      'Sathodi Falls: A spectacular gorge-flanked waterfall often called Karnataka’s mini-Niagara',
      'Magod Falls: Two-tiered 600-foot cascade into the deep Bedti River chasm',
      'Cool forest shade and refreshing mountain spray year-round',
    ],
    thingsToKnow: [
      'Wear sturdy footwear with reliable grip; wet river stones can be slippery.',
      'Swimming in deep plunge pools is prohibited in certain zones due to strong undercurrents.',
      'Forest department ticket counters operate at entry gates (included in our packages).',
    ],
    relatedSlugs: ['nature', 'river', 'rafting'],
    accentColor: '#2B7A78',
  },
  nature: {
    slug: 'nature',
    title: 'Nature & Botanical Walks',
    subtitle: 'Canopy Trails & Medicinal Flora',
    tagline: 'Slow, sensory journeys through ancient moist deciduous rainforests and medicinal groves',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
    ],
    intro:
      'Step away from mechanized travel and walk along trails tread by generations of indigenous forest communities. Dandeli’s rainforests harbor rare medicinal herbs, strangler figs, wild cinnamon, and towering rosewood trees. Led by a local botanist and native tracker, every walk unveils the intricate interdependence of fungi, insects, and towering forest giants.',
    whatToExpect: [
      'Gently paced walking along shaded leaf-strewn trails with minimal physical strain.',
      'Touching aromatic forest tree bark, smelling wild ginger, and tasting wild forest berries.',
      'Learning the traditional remedies and wildlife warning signs used by local forest dwellers.',
      'Spotting vibrant forest butterflies, praying mantises, and unique fungi varieties.',
    ],
    duration: '1.5 to 2 Hours',
    suitableFor: 'Travellers of all ages, elders, children, and curious learners',
    bestSeason: 'All year round (Monsoons bring lush greenery; winter brings optimal pleasant weather)',
    timing: '7:00 AM & 4:30 PM',
    elevationOrArea: 'Kulgi Timber Route & Kali Forest Riverbanks',
    highlights: [
      'Centuries-old grandmother trees and strangler fig networks',
      'Interactive herbal demonstrations by native village naturalists',
      'Gentle flat trails suitable for grandparents and young children alike',
      'Fresh forest oxygen and soothing natural negative ions',
    ],
    thingsToKnow: [
      'Light cotton clothing and comfortable walking shoes are recommended.',
      'Eco-sensitive trail: no littering or plucking of wild flora is permitted.',
      'Mosquito repellent is handy during late afternoon walks.',
    ],
    relatedSlugs: ['forest', 'wildlife', 'waterfalls'],
    accentColor: '#3A7D44',
  },
  river: {
    slug: 'river',
    title: 'River Expeditions & Floats',
    subtitle: 'Kali Backwaters & Natural Jacuzzis',
    tagline: 'Artisanal coracle floats, bubbling boulder whirlpools, and peaceful kayak drifts',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988819/67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png',
    ],
    intro:
      'For those who want to experience the healing spirit of the Kali River without committing to extreme rapids, Dandeli offers serene water journeys. Spin gently across sunlit backwaters in an artisanal bamboo coracle, paddle sit-on-top kayaks along mirror-flat inlets, or wedge into natural boulder channels where foamy river currents provide a therapeutic hydro-massage.',
    whatToExpect: [
      'A peaceful glide on handcrafted round coracles steered by skilled local fishermen.',
      'Sitting in natural jacuzzi stone pools while cool mountain water massages tired back muscles.',
      'Paddling tandem or solo kayaks into secluded river inlets alive with kingfishers and river otters.',
      'Open-water floating in certified life vests under the watchful supervision of river marshals.',
    ],
    duration: '2 to 2.5 Hours',
    suitableFor: 'Families with children, couples, first-time water explorers, and relaxed groups',
    bestSeason: 'October through May',
    timing: '9:30 AM to 5:00 PM',
    elevationOrArea: 'Ganeshgudi Island Stretch & Supa Backwaters',
    highlights: [
      'Traditional circular coracle boat rides piloted with a single paddle',
      'Invigorating natural jacuzzi boulder bath with pure unpolluted mountain current',
      'Mirror-smooth morning kayaking suitable even for complete beginners',
      'Safe, life-jacket-supported swimming areas with rope safety anchors',
    ],
    thingsToKnow: [
      'Life jackets are provided and mandatory during all river activities.',
      'Carry a spare change of dry clothes and towels.',
      'Changing rooms and secure lockers are provided at our river staging bay.',
    ],
    relatedSlugs: ['rafting', 'camping', 'nature'],
    accentColor: '#187795',
  },
  forest: {
    slug: 'forest',
    title: 'Ancient Rainforest Canopies',
    subtitle: 'Dandeli Forest Reserves & Bamboo Jungles',
    tagline: 'Vast expanses of teak, rosewood, and bamboo sustaining one of India’s richest biospheres',
    heroImage: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
    gallery: [
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_resort_cabins_4K_faithful.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988796/302354b4-08c1-4f98-8ce3-ddc6b60f5b1c.png',
      'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png',
    ],
    intro:
      'The Western Ghats of Dandeli represent an ancient rainforest ecosystem older than the Himalayas. Towering teak trees planted during colonial times interlace with wild bamboo clumps and dense evergreen undergrowth. Walking under this dense canopy creates a natural microclimate—cooler, humid, and perpetually reverberating with the sounds of cicadas, woodpeckers, and rustling deer.',
    whatToExpect: [
      'Immense natural stillness broken only by wind through bamboo canopies and bird calls.',
      'Historic timber depot trails where elephants once hauled giant forest logs.',
      'Dramatic sunbeams piercing through triple-layer forest canopies in golden shafts.',
      'Overnight glamping and treehouse stays perched twenty feet above the forest floor.',
    ],
    duration: 'Full-day or multi-day retreat immersion',
    suitableFor: 'Nature photographers, digital detoxers, writers, and eco-travelers',
    bestSeason: 'All year round (Pleasant winters, vibrant monsoons, and golden summers)',
    timing: 'Sunrise to Sunset',
    elevationOrArea: 'Anshi National Park Buffer & Dandeli Reserve',
    highlights: [
      'Dense contiguous forest stretching uninterrupted across state borders to Goa',
      'Treehouse retreats with open-air balconies overlooking bird feeding stations',
      'Rich biodiversity with over 200 endemic tree species',
      'Night-time sounds of owl calls, cicadas, and gentle forest breezes',
    ],
    thingsToKnow: [
      'Cellular reception is delightfully weak inside the deep forest—embrace the digital detox.',
      'Carry eco-friendly insect repellent for forest excursions.',
      'Stay on designated trails to preserve delicate understory vegetation.',
    ],
    relatedSlugs: ['wildlife', 'jungle-safari', 'nature'],
    accentColor: '#1B4931',
  },
};
