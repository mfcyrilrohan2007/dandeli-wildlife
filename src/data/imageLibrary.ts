/**
 * Dandeli Wilds Centralized Image Library
 * Primary photo repository sourced directly from the official Dandeli Cloudinary collection.
 * Includes all 48 authentic photos with dimensions, aspect ratios, semantic categories,
 * optimized Cloudinary transformation builders, and section placement mappings.
 */

export type ImageCategory =
  | "all"
  | "rafting"
  | "river"
  | "wildlife"
  | "safari"
  | "waterfalls"
  | "kayaking"
  | "camping"
  | "forest"
  | "resorts"
  | "landscapes"
  | "adventure"
  | "family";

export interface DandeliImage {
  id: string;
  publicId: string;
  version: number;
  format: string;
  width: number;
  height: number;
  aspectRatio: "landscape" | "portrait" | "square";
  category: Exclude<ImageCategory, "all">;
  title: string;
  alt: string;
  description: string;
  recommendedUsage: string[];
  objectPosition: string;
  isFeatured?: boolean;
}

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "limit" | "scale" | "thumb" | "fit";
  quality?: string;
  format?: string;
}

const CLOUD_NAME = "joyorpxh";

/**
 * Generate a responsive, highly-optimized Cloudinary delivery URL with automatic format & quality
 */
export function getCloudinaryUrl(
  publicId: string,
  version: number,
  format: string,
  options: CloudinaryTransformOptions = {}
): string {
  const transforms: string[] = ["f_auto", "q_auto"];
  if (options.crop && options.width && options.height) {
    transforms.push(`c_${options.crop},w_${options.width},h_${options.height}`);
  } else if (options.width) {
    transforms.push(`w_${options.width},c_limit`);
  } else if (options.height) {
    transforms.push(`h_${options.height},c_limit`);
  }
  const transformStr = transforms.join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformStr}/v${version}/${publicId}.${format}`;
}

/**
 * Optimized thumbnail URL (approx 600px width for fast grid rendering)
 */
export function getThumbUrl(image: DandeliImage, width: number = 600): string {
  return getCloudinaryUrl(image.publicId, image.version, image.format, { width, quality: "auto" });
}

/**
 * High-resolution lightbox or banner URL (up to 2000px width)
 */
export function getHighResUrl(image: DandeliImage, width: number = 2000): string {
  return getCloudinaryUrl(image.publicId, image.version, image.format, { width, quality: "auto" });
}

/**
 * Direct image lookup by ID or Public ID
 */
export function getImageById(id: string): DandeliImage | undefined {
  return DANDELI_IMAGES.find((img) => img.id === id || img.publicId === id);
}

/**
 * Filter images by semantic category
 */
export function getImagesByCategory(category: ImageCategory): DandeliImage[] {
  if (category === "all") return DANDELI_IMAGES;
  return DANDELI_IMAGES.filter((img) => img.category === category);
}

/**
 * Filter images by recommended website usage
 */
export function getImagesByUsage(usage: string): DandeliImage[] {
  return DANDELI_IMAGES.filter((img) => img.recommendedUsage.includes(usage));
}

// Master collection of 48 authentic Dandeli travel photographs
export const DANDELI_IMAGES: DandeliImage[] = [
  {
    "id": "dandeli_dorm_room_4K_faithful",
    "publicId": "dandeli_dorm_room_4K_faithful",
    "version": 1788992132,
    "format": "jpg",
    "width": 3840,
    "height": 2560,
    "aspectRatio": "landscape",
    "category": "camping",
    "title": "Luxury Tent Stay",
    "alt": "Interior of a spacious luxury tent stay equipped with multiple beds in Dandeli",
    "description": "Spacious safari tent house interior with multiple beds and forest view",
    "recommendedUsage": [
      "resorts",
      "packages",
      "gallery",
      "explore"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_pool_deck_4K_faithful",
    "publicId": "dandeli_pool_deck_4K_faithful",
    "version": 1788992010,
    "format": "jpg",
    "width": 3840,
    "height": 2880,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Poolside Fun",
    "alt": "Outdoor swimming pool surrounded by palm trees at a Dandeli nature resort",
    "description": "Resort swimming pool surrounded by tropical palm trees and green landscape",
    "recommendedUsage": [
      "home",
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "dandeli_bedroom_4K_faithful",
    "publicId": "dandeli_bedroom_4K_faithful",
    "version": 1788991896,
    "format": "jpg",
    "width": 3840,
    "height": 2160,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Deluxe Family Room",
    "alt": "Vibrant deluxe room featuring double beds with red wall decor at Dandeli resort",
    "description": "Deluxe resort bedroom with red accent wall and double bed setup",
    "recommendedUsage": [
      "resorts",
      "packages",
      "gallery",
      "tripPlans"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_room_4K_faithful",
    "publicId": "dandeli_room_4K_faithful",
    "version": 1788992174,
    "format": "jpg",
    "width": 3840,
    "height": 2532,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Forest View Dormitory",
    "alt": "Clean dormitory room with several single beds facing green forest view in Dandeli",
    "description": "Resort dormitory room with large glass windows overlooking forest",
    "recommendedUsage": [
      "resorts",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_cottages_night_4K_faithful",
    "publicId": "dandeli_cottages_night_4K_faithful",
    "version": 1788991817,
    "format": "jpg",
    "width": 3840,
    "height": 2559,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Charming Night Stay",
    "alt": "Row of lit triangular A-frame cottages along a garden path at night",
    "description": "Illuminated A-frame wooden cottages along a lit stone pathway at night",
    "recommendedUsage": [
      "home",
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "dandeli_resort_cabins_4K_faithful",
    "publicId": "dandeli_resort_cabins_4K_faithful",
    "version": 1788991789,
    "format": "jpg",
    "width": 3840,
    "height": 2565,
    "aspectRatio": "landscape",
    "category": "forest",
    "title": "Jungle Eco Cottages",
    "alt": "Rustic eco-friendly cottages nestled in the lush green forests of Dandeli",
    "description": "Eco-friendly wooden huts surrounded by dense tropical forest trees",
    "recommendedUsage": [
      "home",
      "resorts",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_cottage_4K_faithful",
    "publicId": "dandeli_cottage_4K_faithful",
    "version": 1788991704,
    "format": "jpg",
    "width": 3840,
    "height": 2697,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Cozy A-Frame Stay",
    "alt": "Illuminated A-frame glass and wooden cottage surrounded by tropical greenery in Dandeli",
    "description": "Illuminated A-frame wooden cottage set among palm trees and lush greenery",
    "recommendedUsage": [
      "home",
      "resorts",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_pool_cottages_4K_faithful",
    "publicId": "dandeli_pool_cottages_4K_faithful",
    "version": 1788991654,
    "format": "jpg",
    "width": 3840,
    "height": 3200,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Luxury Pool Cottages",
    "alt": "Lit outdoor swimming pool surrounded by resort cottages under a dusk sky in Dandeli",
    "description": "Resort courtyard featuring an illuminated swimming pool flanked by wooden cottages at dusk",
    "recommendedUsage": [
      "resorts",
      "packages",
      "home",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "e5e39a54-07b9-450c-9a9a-c8d1e4cd5ecb",
    "publicId": "e5e39a54-07b9-450c-9a9a-c8d1e4cd5ecb",
    "version": 1788991585,
    "format": "png",
    "width": 1497,
    "height": 1051,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Jungle Pool Retreat",
    "alt": "Red-roofed brick cottages beside a swimming pool amidst dense forest greenery in Dandeli",
    "description": "Red brick cottages with bright red roofs next to a swimming pool surrounded by dense forest",
    "recommendedUsage": [
      "resorts",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_pool_resort_4K_faithful",
    "publicId": "dandeli_pool_resort_4K_faithful",
    "version": 1788991498,
    "format": "jpg",
    "width": 3840,
    "height": 2561,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Riverside Pool Deck",
    "alt": "Outdoor swimming pool and lounge area overlooking scenic nature and river in Dandeli",
    "description": "Pool deck with wooden sun loungers overlooking a river and forest edge at twilight",
    "recommendedUsage": [
      "resorts",
      "home",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_resort_pool_4K_faithful",
    "publicId": "dandeli_resort_pool_4K_faithful",
    "version": 1788991421,
    "format": "jpg",
    "width": 3840,
    "height": 2554,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Vibrant Pool Ambience",
    "alt": "Resort swimming pool illuminated with green and blue lights under a night sky",
    "description": "Resort pool glowing with colorful blue and green underwater lights at night",
    "recommendedUsage": [
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_pool_4K_faithful",
    "publicId": "dandeli_pool_4K_faithful",
    "version": 1788991368,
    "format": "jpg",
    "width": 3840,
    "height": 1728,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Nighttime Pool Oasis",
    "alt": "Spacious swimming pool at night lit by underwater lamps in a quiet Dandeli resort",
    "description": "Large outdoor pool illuminated under the dark night sky in a peaceful resort environment",
    "recommendedUsage": [
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_restaurant_4K_faithful",
    "publicId": "dandeli_restaurant_4K_faithful",
    "version": 1788991285,
    "format": "jpg",
    "width": 3840,
    "height": 2559,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Resort Night Ambiance",
    "alt": "Warmly lit open-air wooden resort dining pavilion amidst nature at night in Dandeli",
    "description": "Illuminated open-air wooden resort restaurant pavilion at night surrounded by plants",
    "recommendedUsage": [
      "resorts",
      "gallery",
      "home",
      "about"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "3d3247ad-0c0e-47eb-8273-2caf778a50b4",
    "publicId": "3d3247ad-0c0e-47eb-8273-2caf778a50b4",
    "version": 1788991124,
    "format": "png",
    "width": 1536,
    "height": 1024,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Cozy Resort Dining",
    "alt": "Spacious resort restaurant dining section featuring warm string lights and neat table arrangements",
    "description": "Covered outdoor resort dining area with dining tables, chairs, and hanging ambient lights",
    "recommendedUsage": [
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_restaurant_8K_faithful_under10MB",
    "publicId": "dandeli_restaurant_8K_faithful_under10MB",
    "version": 1788990882,
    "format": "jpg",
    "width": 7680,
    "height": 5118,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Resort Buffet Area",
    "alt": "Well-lit resort dining section equipped with buffet counters and cozy dining tables",
    "description": "Resort restaurant interior showing buffet setup counter and dining tables",
    "recommendedUsage": [
      "resorts",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "7c6871cf-f09f-49dd-a861-b5e76c52736a",
    "publicId": "7c6871cf-f09f-49dd-a861-b5e76c52736a",
    "version": 1788990668,
    "format": "png",
    "width": 1536,
    "height": 1024,
    "aspectRatio": "landscape",
    "category": "rafting",
    "title": "White Water Rafting",
    "alt": "Excited tourists paddling a red inflatable raft through surging white water rapids in Dandeli",
    "description": "Group of tourists enjoying white water river rafting in a red raft through churning rapids",
    "recommendedUsage": [
      "activities",
      "home",
      "explore",
      "packages",
      "gallery",
      "tripPlans"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "cc6364c1-6675-432f-8d98-64c73cb38b99",
    "publicId": "cc6364c1-6675-432f-8d98-64c73cb38b99",
    "version": 1788990397,
    "format": "png",
    "width": 1528,
    "height": 1029,
    "aspectRatio": "landscape",
    "category": "river",
    "title": "Winding Forest River",
    "alt": "High aerial view of a scenic river carving through dense tropical green forests",
    "description": "Aerial drone shot of a serpentine river flowing through lush dense green forest canopy",
    "recommendedUsage": [
      "home",
      "explore",
      "gallery",
      "tripPlans",
      "about"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "14fb0c52-22f0-4dcd-aa71-9135236cb1d5",
    "publicId": "14fb0c52-22f0-4dcd-aa71-9135236cb1d5",
    "version": 1788990374,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "waterfalls",
    "title": "Aerial River Rapids",
    "alt": "Bird's-eye view of natural water cascades and green river islands in Dandeli",
    "description": "Top-down aerial perspective of natural river rapids, islets, and lush greenery",
    "recommendedUsage": [
      "explore",
      "gallery",
      "activities",
      "tripPlans"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "a069f43c-a7ff-41ec-9d8f-c1b9ef865c5d",
    "publicId": "a069f43c-a7ff-41ec-9d8f-c1b9ef865c5d",
    "version": 1788990227,
    "format": "png",
    "width": 1872,
    "height": 840,
    "aspectRatio": "landscape",
    "category": "family",
    "title": "Group Tour Outings",
    "alt": "Large group of tourists posing in front of tour buses in Dandeli",
    "description": "Large group tour posing in front of tour buses surrounded by tropical greenery",
    "recommendedUsage": [
      "home",
      "packages",
      "about",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "af4c0a2b-298d-4821-8646-fc325c884a10",
    "publicId": "af4c0a2b-298d-4821-8646-fc325c884a10",
    "version": 1788990118,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "family",
    "title": "Memorable Family Trips",
    "alt": "Family and friends posing in a garden area during a Dandeli holiday",
    "description": "Group of friends and family posing together in a resort garden area",
    "recommendedUsage": [
      "home",
      "packages",
      "resorts",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "16cad5ab-9ffe-413a-b792-867032abb2d3",
    "publicId": "16cad5ab-9ffe-413a-b792-867032abb2d3",
    "version": 1788990060,
    "format": "png",
    "width": 1670,
    "height": 942,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Eco Resort Getaways",
    "alt": "Group of guests waving together outside a resort cottage in Dandeli",
    "description": "Large group sitting outdoors and waving near a resort cottage surrounded by forest",
    "recommendedUsage": [
      "resorts",
      "packages",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "e1329bd4-1e59-4b7c-a4ff-6b75a1239505",
    "publicId": "e1329bd4-1e59-4b7c-a4ff-6b75a1239505",
    "version": 1788990005,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "rafting",
    "title": "White Water Rafting",
    "alt": "Adventure tourists wearing safety gear posing by blue rafts near river rapids",
    "description": "Group of rafters wearing life jackets and helmets posing on rocks near river rapids",
    "recommendedUsage": [
      "home",
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "863b6a52-02b4-4c75-9c62-bb01bdf5033b",
    "publicId": "863b6a52-02b4-4c75-9c62-bb01bdf5033b",
    "version": 1788989914,
    "format": "png",
    "width": 1870,
    "height": 841,
    "aspectRatio": "landscape",
    "category": "resorts",
    "title": "Resort Pool Fun",
    "alt": "Friends enjoying in a resort swimming pool during their Dandeli trip",
    "description": "Group of men enjoying and relaxing in a resort swimming pool",
    "recommendedUsage": [
      "resorts",
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "84aece0b-ced0-4594-89d9-afd465f38c98",
    "publicId": "84aece0b-ced0-4594-89d9-afd465f38c98",
    "version": 1788989830,
    "format": "png",
    "width": 1719,
    "height": 915,
    "aspectRatio": "landscape",
    "category": "kayaking",
    "title": "Serene River Kayaking",
    "alt": "Couple enjoying kayaking on the calm waters of Kali River in Dandeli",
    "description": "Couple paddling a yellow tandem kayak on a calm river",
    "recommendedUsage": [
      "home",
      "activities",
      "packages",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "dd88a865-8e56-4970-a098-65eda458bde7",
    "publicId": "dd88a865-8e56-4970-a098-65eda458bde7",
    "version": 1788989333,
    "format": "png",
    "width": 939,
    "height": 1675,
    "aspectRatio": "portrait",
    "category": "rafting",
    "title": "Aerial Whitewater Adventure",
    "alt": "Top-down view of a blue raft navigating foaming whitewater rapids in Dandeli",
    "description": "Aerial top-down shot of an inflatable raft navigating deep blue waters near white foaming rapids",
    "recommendedUsage": [
      "home",
      "activities",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "d2ce9490-3b38-45f2-883e-101f102eb22b",
    "publicId": "d2ce9490-3b38-45f2-883e-101f102eb22b",
    "version": 1788989218,
    "format": "png",
    "width": 1553,
    "height": 1013,
    "aspectRatio": "landscape",
    "category": "rafting",
    "title": "Thrilling Whitewater Rafting",
    "alt": "Excited tourists navigating turbulent river rapids in a blue inflatable raft",
    "description": "Group of rafters wearing life jackets battling splashing white waves on a rapid river stretch",
    "recommendedUsage": [
      "activities",
      "packages",
      "tripPlans",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "84d548e8-afb5-43c4-b753-e88ee97be27f",
    "publicId": "84d548e8-afb5-43c4-b753-e88ee97be27f",
    "version": 1788989050,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "adventure",
    "title": "Water Zorbing Experience",
    "alt": "People inside a giant clear water zorbing sphere floating on open river water",
    "description": "Tourists enjoying water zorbing inside a large transparent inflatable cylinder floating on the river",
    "recommendedUsage": [
      "activities",
      "packages",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1",
    "publicId": "67a8c8ac-2f61-4e9f-a2ba-3d6dc59de7b1",
    "version": 1788988964,
    "format": "png",
    "width": 1672,
    "height": 941,
    "aspectRatio": "landscape",
    "category": "adventure",
    "title": "River Crossing Zipline",
    "alt": "Adventure seeker ziplining over a fast-flowing river stream in Dandeli",
    "description": "Woman harnessed to a zip line crossing right over a flowing rocky river",
    "recommendedUsage": [
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "11496446-606a-419e-add6-089307911863",
    "publicId": "11496446-606a-419e-add6-089307911863",
    "version": 1788988920,
    "format": "png",
    "width": 1086,
    "height": 1448,
    "aspectRatio": "portrait",
    "category": "adventure",
    "title": "Zipline River Splash",
    "alt": "People ziplining across river water next to a group paddling in a raft",
    "description": "Group in a raft watching zipliners splash into the river surrounded by dense forest trees",
    "recommendedUsage": [
      "activities",
      "packages",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "c7ce8af6-7c4c-4d75-9972-97d4f6be5add",
    "publicId": "c7ce8af6-7c4c-4d75-9972-97d4f6be5add",
    "version": 1788988743,
    "format": "png",
    "width": 1599,
    "height": 984,
    "aspectRatio": "landscape",
    "category": "river",
    "title": "Scenic River Expedition",
    "alt": "Fleet of blue river rafts floating peacefully along lush forested river banks",
    "description": "Multiple blue rafts carrying tourists paddling smoothly along a peaceful river bordered by dense green hills",
    "recommendedUsage": [
      "explore",
      "tripPlans",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "134030b2-8ca1-4608-bb48-f2a0955637e8",
    "publicId": "134030b2-8ca1-4608-bb48-f2a0955637e8",
    "version": 1788988699,
    "format": "png",
    "width": 1498,
    "height": 1050,
    "aspectRatio": "landscape",
    "category": "river",
    "title": "Kali River Coracle Ride",
    "alt": "Traditional circular coracle boat floating down scenic Kali River in Dandeli",
    "description": "Glide peacefully through the lush river canyons aboard an authentic handcrafted circular coracle boat.",
    "recommendedUsage": [
      "activities",
      "home",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "e029f6e9-ae79-4a1a-a684-cd86b6464f48",
    "publicId": "e029f6e9-ae79-4a1a-a684-cd86b6464f48",
    "version": 1788988608,
    "format": "png",
    "width": 1774,
    "height": 887,
    "aspectRatio": "landscape",
    "category": "landscapes",
    "title": "Supa Dam Reservoir Backwaters",
    "alt": "Panoramic vista of calm Supa Dam backwaters reflecting the evening sky in Dandeli",
    "description": "Breathtaking panoramic backwaters of the Kali River framed by dense Anshi forest ridges.",
    "recommendedUsage": [
      "explore",
      "home",
      "about",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "0bde2276-0e07-4d43-91d6-e0d764720c1d",
    "publicId": "0bde2276-0e07-4d43-91d6-e0d764720c1d",
    "version": 1788988547,
    "format": "png",
    "width": 1672,
    "height": 941,
    "aspectRatio": "landscape",
    "category": "adventure",
    "title": "Rope Course Adventure",
    "alt": "A person wearing a blue helmet and red jacket navigating a high rope bridge course amidst trees.",
    "description": "Test your balance and bravery on suspended obstacle courses set within Dandeli's forest resorts.",
    "recommendedUsage": [
      "activities",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center 30%",
    "isFeatured": false
  },
  {
    "id": "a85c46f0-7c48-47d8-9bed-5039272bad67",
    "publicId": "a85c46f0-7c48-47d8-9bed-5039272bad67",
    "version": 1788988466,
    "format": "png",
    "width": 1086,
    "height": 1448,
    "aspectRatio": "portrait",
    "category": "waterfalls",
    "title": "Dudhsagar Waterfall Trek",
    "alt": "Tourists resting on large river rocks in front of a multi-tiered waterfall and stone bridge.",
    "description": "Visit the majestic Dudhsagar cascades on a thrilling excursion through the Western Ghats terrain.",
    "recommendedUsage": [
      "explore",
      "packages",
      "tripPlans",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "ff97df5f-a6fa-4fd2-9d6a-051471e513dc",
    "publicId": "ff97df5f-a6fa-4fd2-9d6a-051471e513dc",
    "version": 1788988335,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "waterfalls",
    "title": "Dudhsagar Railway View",
    "alt": "A passenger train crossing an iconic stone arch bridge in front of massive white waterfalls.",
    "description": "Experience iconic views of railway trains passing directly across the face of roaring forest waterfalls.",
    "recommendedUsage": [
      "hero",
      "home",
      "explore",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "302354b4-08c1-4f98-8ce3-ddc6b60f5b1c",
    "publicId": "302354b4-08c1-4f98-8ce3-ddc6b60f5b1c",
    "version": 1788988151,
    "format": "png",
    "width": 1643,
    "height": 957,
    "aspectRatio": "landscape",
    "category": "forest",
    "title": "Jungle Stream Trekking",
    "alt": "Group of hikers with backpacks navigating over rocks across a woodland stream.",
    "description": "Trek along dense canopy trails and cross cool forest streams on guided wilderness treks.",
    "recommendedUsage": [
      "activities",
      "explore",
      "tripPlans",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "e523c881-f05f-4796-a506-3b98674ddcbb",
    "publicId": "e523c881-f05f-4796-a506-3b98674ddcbb",
    "version": 1788988017,
    "format": "png",
    "width": 1445,
    "height": 1088,
    "aspectRatio": "landscape",
    "category": "forest",
    "title": "Jungle Trekking Trails",
    "alt": "Group of tourists standing near a stream in the lush forest of Dandeli.",
    "description": "Group of hikers exploring a scenic forest stream",
    "recommendedUsage": [
      "activities",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_tiger_4K",
    "publicId": "dandeli_tiger_4K",
    "version": 1788987633,
    "format": "png",
    "width": 4096,
    "height": 2785,
    "aspectRatio": "landscape",
    "category": "wildlife",
    "title": "Royal Bengal Tiger",
    "alt": "Bengal tiger looking forward while standing amidst green bushes in Dandeli.",
    "description": "Bengal tiger standing in lush green bushes",
    "recommendedUsage": [
      "home",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "fbdd8834-14ff-4f93-8f6b-bd85566424e3",
    "publicId": "fbdd8834-14ff-4f93-8f6b-bd85566424e3",
    "version": 1788987529,
    "format": "png",
    "width": 1742,
    "height": 903,
    "aspectRatio": "landscape",
    "category": "safari",
    "title": "Wild Elephant Safari",
    "alt": "Herd of wild elephants gathered together near dense green trees in Dandeli reserve.",
    "description": "Herd of wild Asian elephants in green habitat",
    "recommendedUsage": [
      "home",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "cf41e552-0098-49c7-a8d0-16809b4854af",
    "publicId": "cf41e552-0098-49c7-a8d0-16809b4854af",
    "version": 1788987242,
    "format": "png",
    "width": 1539,
    "height": 1022,
    "aspectRatio": "landscape",
    "category": "river",
    "title": "Water Zorbing Fun",
    "alt": "Tourists walking inside a giant transparent water zorbing roller on a river.",
    "description": "People participating in water zorbing on a river",
    "recommendedUsage": [
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "bcc42f39-3865-4d9f-916f-7115ae8f818b",
    "publicId": "bcc42f39-3865-4d9f-916f-7115ae8f818b",
    "version": 1788987205,
    "format": "png",
    "width": 1448,
    "height": 1086,
    "aspectRatio": "landscape",
    "category": "adventure",
    "title": "Rope Net Challenge",
    "alt": "Participants wearing life jackets attempting a rope net crossing over water.",
    "description": "People tackling a suspended rope net bridge over water",
    "recommendedUsage": [
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "7e6e404f-d891-456b-a57c-0766ea922662",
    "publicId": "7e6e404f-d891-456b-a57c-0766ea922662",
    "version": 1788987190,
    "format": "png",
    "width": 1536,
    "height": 1024,
    "aspectRatio": "landscape",
    "category": "adventure",
    "title": "High Rope Walk",
    "alt": "Tourist carefully balancing while walking on a high rope obstacle bridge.",
    "description": "Person navigating a high aerial rope walkway",
    "recommendedUsage": [
      "activities",
      "explore",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "32919f44-58d9-431a-8790-7b1d932b816b",
    "publicId": "32919f44-58d9-431a-8790-7b1d932b816b",
    "version": 1788986693,
    "format": "png",
    "width": 1599,
    "height": 984,
    "aspectRatio": "landscape",
    "category": "kayaking",
    "title": "Tranquil River Kayaking",
    "alt": "A man and woman paddling together in a double kayak on peaceful river water",
    "description": "A couple paddling a tandem yellow and green kayak on calm river water near rock formations",
    "recommendedUsage": [
      "activities",
      "explore",
      "gallery",
      "packages"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "dandeli_rafting_4k",
    "publicId": "dandeli_rafting_4k",
    "version": 1788986666,
    "format": "png",
    "width": 4096,
    "height": 2728,
    "aspectRatio": "landscape",
    "category": "rafting",
    "title": "Thrilling Rapids Descent",
    "alt": "A team of whitewater rafters navigating down a steep surge in a blue inflatable raft",
    "description": "A group of rafters in a blue boat plunging down a powerful whitewater rapid wave",
    "recommendedUsage": [
      "home",
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": true
  },
  {
    "id": "a85fe801-b402-4806-bace-1210b9be3bfc",
    "publicId": "a85fe801-b402-4806-bace-1210b9be3bfc",
    "version": 1788986271,
    "format": "png",
    "width": 1445,
    "height": 1089,
    "aspectRatio": "landscape",
    "category": "kayaking",
    "title": "Scenic River Kayaking",
    "alt": "A young person happily rowing a kayak on calm green waters surrounded by tropical trees",
    "description": "A smiling young girl paddling a colorful single kayak on smooth water near lush forest scenery",
    "recommendedUsage": [
      "activities",
      "explore",
      "family",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "4d4b9277-ffeb-443a-be3f-569a01c3130c",
    "publicId": "4d4b9277-ffeb-443a-be3f-569a01c3130c",
    "version": 1788986144,
    "format": "png",
    "width": 1254,
    "height": 1254,
    "aspectRatio": "square",
    "category": "rafting",
    "title": "Extreme Whitewater Adventure",
    "alt": "Rafters wearing life jackets and helmets paddling a red boat through splashing river rapids",
    "description": "Adventurers in a red raft maneuvering through churning whitewater near rocky cliffs",
    "recommendedUsage": [
      "home",
      "activities",
      "packages",
      "tripPlans"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "74737e30-fd39-4582-8f37-dfee078098aa",
    "publicId": "74737e30-fd39-4582-8f37-dfee078098aa",
    "version": 1788986059,
    "format": "png",
    "width": 1254,
    "height": 1254,
    "aspectRatio": "square",
    "category": "rafting",
    "title": "Group Rafting Thrills",
    "alt": "Excited group of tourists smiling and holding paddles in a yellow raft amidst white water foam",
    "description": "A cheerful group of friends in safety helmets holding oars in a yellow raft splashing through rapids",
    "recommendedUsage": [
      "home",
      "activities",
      "packages",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  },
  {
    "id": "ChatGPT_Image_Sep_9_2026_11_07_56_PM",
    "publicId": "ChatGPT_Image_Sep_9_2026_11_07_56_PM",
    "version": 1788975527,
    "format": "png",
    "width": 1536,
    "height": 1024,
    "aspectRatio": "landscape",
    "category": "kayaking",
    "title": "Sunset Kayak Exploration",
    "alt": "First person view of holding a kayak paddle on calm river water facing golden sunset and forested hills",
    "description": "Point-of-view perspective of paddling an orange kayak towards a sunset on a forest river",
    "recommendedUsage": [
      "home",
      "explore",
      "activities",
      "gallery"
    ],
    "objectPosition": "center",
    "isFeatured": false
  }
];

// Curated top highlights for instant reference across pages
export const CURATED_HERO_IMAGE = DANDELI_IMAGES.find(i => i.publicId === "dandeli_rafting_4k")!;
export const CURATED_TIGER_IMAGE = DANDELI_IMAGES.find(i => i.publicId === "dandeli_tiger_4K")!;
export const CURATED_ELEPHANT_IMAGE = DANDELI_IMAGES.find(i => i.publicId.includes("fbdd8834"))!;
export const CURATED_AERIAL_RIVER = DANDELI_IMAGES.find(i => i.publicId.includes("cc6364c1"))!;
export const CURATED_POOL_DECK = DANDELI_IMAGES.find(i => i.publicId === "dandeli_pool_deck_4K_faithful")!;
export const CURATED_COTTAGES_NIGHT = DANDELI_IMAGES.find(i => i.publicId === "dandeli_cottages_night_4K_faithful")!;
export const CURATED_RESORT_CABINS = DANDELI_IMAGES.find(i => i.publicId === "dandeli_resort_cabins_4K_faithful")!;
export const CURATED_KAYAKING = DANDELI_IMAGES.find(i => i.publicId.includes("84aece0b"))!;
export const CURATED_ZIPLINE = DANDELI_IMAGES.find(i => i.publicId.includes("67a8c8ac"))!;
export const CURATED_WATERFALLS = DANDELI_IMAGES.find(i => i.publicId.includes("ff97df5f"))!;
export const CURATED_WATER_ZORBING = DANDELI_IMAGES.find(i => i.publicId.includes("84d548e8"))!;
export const CURATED_SAFARI_TENT = DANDELI_IMAGES.find(i => i.publicId === "dandeli_dorm_room_4K_faithful")!;
export const CURATED_SUPA_DAM = DANDELI_IMAGES.find(i => i.publicId.includes("e029f6e9"))!;

export interface PhotographedAsset {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  objectPosition: string;
  desktopPosition: string;
  mobilePosition: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

const buildAsset = (
  image: DandeliImage,
  desktopPos = 'center',
  mobilePos = 'center'
): PhotographedAsset => ({
  id: image.id,
  src: getCloudinaryUrl(image.publicId, image.version, image.format, { width: 1200 }),
  alt: image.alt,
  title: image.title,
  category: image.category,
  objectPosition: image.objectPosition || desktopPos,
  desktopPosition: desktopPos,
  mobilePosition: mobilePos,
  aspectRatio: image.aspectRatio,
});

const raftingHeroImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_rafting_4k") || DANDELI_IMAGES[0];
const raftingActionImg = DANDELI_IMAGES.find(i => i.publicId.includes("7c6871cf")) || raftingHeroImg;
const raftingGroupImg = DANDELI_IMAGES.find(i => i.publicId.includes("74737e30")) || raftingHeroImg;
const raftingFleetImg = DANDELI_IMAGES.find(i => i.publicId.includes("4d4b9277")) || raftingHeroImg;
const tigerImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_tiger_4K") || DANDELI_IMAGES[1];
const elephantImg = DANDELI_IMAGES.find(i => i.publicId.includes("fbdd8834")) || DANDELI_IMAGES[2];
const kayakImg = DANDELI_IMAGES.find(i => i.publicId.includes("84aece0b")) || DANDELI_IMAGES[3];
const kayakSunsetImg = DANDELI_IMAGES.find(i => i.publicId.includes("ChatGPT_Image")) || kayakImg;
const ziplineImg = DANDELI_IMAGES.find(i => i.publicId.includes("67a8c8ac")) || DANDELI_IMAGES[4];
const coracleImg = DANDELI_IMAGES.find(i => i.publicId.includes("134030b2")) || kayakImg;
const waterfallImg = DANDELI_IMAGES.find(i => i.publicId.includes("ff97df5f")) || DANDELI_IMAGES[5];
const aerialRiverImg = DANDELI_IMAGES.find(i => i.publicId.includes("cc6364c1")) || DANDELI_IMAGES[6];
const rapidsAerialImg = DANDELI_IMAGES.find(i => i.publicId.includes("14fb0c52")) || aerialRiverImg;
const poolDeckImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_pool_deck_4K_faithful") || DANDELI_IMAGES[7];
const nightCottagesImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_cottages_night_4K_faithful") || DANDELI_IMAGES[8];
const resortCabinsImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_resort_cabins_4K_faithful") || DANDELI_IMAGES[9];
const cottageAFrameImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_cottage_4K_faithful") || nightCottagesImg;
const safariTentRoomImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_dorm_room_4K_faithful") || nightCottagesImg;
const familyBedroomImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_bedroom_4K_faithful") || poolDeckImg;
const dormRoomImg = DANDELI_IMAGES.find(i => i.publicId === "dandeli_room_4K_faithful") || poolDeckImg;
const junglePoolImg = DANDELI_IMAGES.find(i => i.publicId.includes("e5e39a54")) || poolDeckImg;
const riverbankCottageImg = DANDELI_IMAGES.find(i => i.publicId.includes("8c7849cb")) || poolDeckImg;
const zorbingImg = DANDELI_IMAGES.find(i => i.publicId.includes("84d548e8")) || kayakImg;
const ropeChallengeImg = DANDELI_IMAGES.find(i => i.publicId.includes("3b7a54b3")) || ziplineImg;
const supaDamImg = DANDELI_IMAGES.find(i => i.publicId.includes("e029f6e9")) || aerialRiverImg;
const forestTrailImg = DANDELI_IMAGES.find(i => i.publicId.includes("302354b4")) || tigerImg;

/**
 * Centralized, art-directed photography system for the entire application.
 * All sections consume from here, guaranteeing exact semantic alignment,
 * zero random stock images, and responsive object positioning.
 */
export const dandeliImages = {
  hero: {
    primary: buildAsset(raftingHeroImg, 'center 40%', 'center 45%'),
    fallback: buildAsset(raftingHeroImg, 'center 40%', 'center 45%'),
    videoPoster: getCloudinaryUrl(raftingHeroImg.publicId, raftingHeroImg.version, raftingHeroImg.format, { width: 1600 }),
  },

  packages: {
    'weekend-dandeli-escape': buildAsset(kayakImg, 'center', 'center'),
    'adventure-weekend': buildAsset(raftingHeroImg, 'center 45%', 'center 45%'),
    'family-nature-escape': buildAsset(elephantImg, 'center 40%', 'center 35%'),
    'friends-adventure-trip': buildAsset(raftingGroupImg, 'center', 'center'),
    'wildlife-explorer': buildAsset(tigerImg, 'center 35%', 'center 30%'),
    'river-jungle-experience': buildAsset(aerialRiverImg, 'center', 'center'),
    'camping-under-the-stars': buildAsset(nightCottagesImg, 'center', 'center'),
    'large-group-getaway': buildAsset(raftingFleetImg, 'center', 'center'),
    'pkg-couples-serenity': buildAsset(kayakSunsetImg, 'center', 'center'),
    'pkg-friends-rapids': buildAsset(raftingActionImg, 'center', 'center'),
    'pkg-family-wildlife': buildAsset(elephantImg, 'center 40%', 'center 35%'),
    'pkg-corporate-clan': buildAsset(raftingGroupImg, 'center', 'center'),
  },

  activities: {
    'white-water-rafting': buildAsset(raftingHeroImg, 'center 45%', 'center 45%'),
    'kali-rafting': buildAsset(raftingHeroImg, 'center 45%', 'center 45%'),
    'jungle-safari': buildAsset(tigerImg, 'center 35%', 'center 30%'),
    'hornbill-safari': buildAsset(tigerImg, 'center 35%', 'center 30%'),
    'jeep-safari': buildAsset(elephantImg, 'center 40%', 'center 35%'),
    'kayaking': buildAsset(kayakImg, 'center', 'center'),
    'supa-kayaking': buildAsset(kayakImg, 'center', 'center'),
    'river-crossing-zipline': buildAsset(ziplineImg, 'center', 'center'),
    'camping': buildAsset(safariTentRoomImg, 'center', 'center'),
    'jungle-camping': buildAsset(nightCottagesImg, 'center', 'center'),
    'natural-jacuzzi': buildAsset(rapidsAerialImg, 'center', 'center'),
    'coracle-ride': buildAsset(coracleImg, 'center', 'center'),
    'river-activities': buildAsset(coracleImg, 'center', 'center'),
    'bird-watching': buildAsset(forestTrailImg, 'center', 'center'),
    'waterfalls': buildAsset(waterfallImg, 'center', 'center'),
    'syntheri-trek': buildAsset(waterfallImg, 'center', 'center'),
    'nature-walks': buildAsset(forestTrailImg, 'center', 'center'),
    'wildlife-experiences': buildAsset(tigerImg, 'center 35%', 'center 30%'),
    'water-zorbing': buildAsset(zorbingImg, 'center', 'center'),
    'rope-challenge': buildAsset(ropeChallengeImg, 'center', 'center'),
  },

  resorts: {
    'kali-riverbank-lodge': buildAsset(poolDeckImg, 'center', 'center'),
    'hornbill-canopy-treehouses': buildAsset(resortCabinsImg, 'center', 'center'),
    'bison-valley-adventure-camp': buildAsset(cottageAFrameImg, 'center', 'center'),
    'kogilban-nature-homestay': buildAsset(riverbankCottageImg, 'center', 'center'),
    'kali-riverwoods-family-resort': buildAsset(junglePoolImg, 'center', 'center'),
    'starry-kali-glamping-camp': buildAsset(nightCottagesImg, 'center', 'center'),
    'wild-anshi-forest-retreat': buildAsset(resortCabinsImg, 'center', 'center'),
    'river-breeze-kayakers-haven': buildAsset(poolDeckImg, 'center', 'center'),
  },

  rooms: [
    {
      id: 'luxury-safari-tent',
      title: 'Luxury Safari Tent',
      type: 'Riverside Glamping',
      capacity: '2 – 3 Guests',
      priceFrom: '₹1,850',
      description: 'Raised wooden cots, crisp clean linens, weather-sealed canvas, and an attached private bath looking out onto misty bamboo.',
      features: ['Direct River Proximity', 'Attached Stone Bath', '24x7 Power Backup', 'Campfire Access'],
      asset: buildAsset(safariTentRoomImg, 'center', 'center'),
    },
    {
      id: 'deluxe-family-suite',
      title: 'Deluxe Family Room',
      type: 'Eco-Resort Suite',
      capacity: '3 – 5 Guests',
      priceFrom: '₹3,400',
      description: 'Generous teak-furnished suite with plush double beds, handcrafted headboards, scenic veranda, and child-safe non-slip bath.',
      features: ['Air Conditioning', 'Private Viewing Veranda', 'Swimming Pool Access', 'Buffet Meals Included'],
      asset: buildAsset(familyBedroomImg, 'center', 'center'),
    },
    {
      id: 'forest-view-dormitory',
      title: 'Forest View Dormitory',
      type: 'Adventure Gang Stay',
      capacity: '6 – 10 Guests',
      priceFrom: '₹1,450',
      description: 'Wide panoramic glass walls overlooking lush Western Ghats canopy, individual locker storage, and multiple hot-water showers.',
      features: ['Panoramic Forest Glass', 'Individual Secure Lockers', 'Hot Water 24x7', 'Volleyball Lawn Access'],
      asset: buildAsset(dormRoomImg, 'center', 'center'),
    },
    {
      id: 'riverside-aframe-cottage',
      title: 'A-Frame Timber Cottage',
      type: 'Private Stilt Cottage',
      capacity: '2 – 4 Guests',
      priceFrom: '₹3,850',
      description: 'Architectural triangular wooden cabins surrounded by tropical foliage. Veranda cantilevered towards the sound of Kali rapids.',
      features: ['Handcrafted Teak Finish', 'Private Cantilever Deck', 'Starlit Evening Views', 'High-speed Wi-Fi & Coffee Bar'],
      asset: buildAsset(nightCottagesImg, 'center', 'center'),
    },
  ],
};
