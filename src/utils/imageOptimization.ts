/**
 * Centralized Image Performance & Cloudinary Optimization Engine
 * 
 * Implements high-efficiency automatic format selection (AVIF/WebP),
 * intelligent responsive downscaling, quality tuning, and standard
 * srcSet/sizes generation to prevent heavy payloads on mobile networks.
 */

export interface CloudinaryUrlOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'limit' | 'scale' | 'thumb' | 'fit';
  quality?: 'auto' | 'auto:good' | 'auto:eco' | 'auto:low' | string;
  format?: 'auto' | string;
}

/**
 * Transforms any Cloudinary image URL into an optimized version
 * with requested width, crop, format, and compression.
 */
export function optimizeCloudinaryUrl(
  url: string,
  width?: number,
  options: CloudinaryUrlOptions = {}
): string {
  if (!url || !url.includes('res.cloudinary.com')) {
    return url;
  }

  const quality = options.quality || 'auto';
  const format = options.format || 'auto';
  const crop = options.crop || (options.height && width ? 'fill' : 'limit');

  const transformParts: string[] = [`f_${format}`, `q_${quality}`];

  if (width && options.height) {
    transformParts.push(`c_${crop},w_${width},h_${options.height}`);
  } else if (width) {
    transformParts.push(`c_${crop},w_${width}`);
  } else if (options.height) {
    transformParts.push(`c_${crop},h_${options.height}`);
  }

  const transformString = transformParts.join(',');

  // Regex matches: https://res.cloudinary.com/<cloud>/image/upload/[existing-transforms/][v<version>/]<publicId>
  const match = url.match(/(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(?:[^/]+\/)?(v\d+\/.+)/);
  if (match) {
    return `${match[1]}${transformString}/${match[2]}`;
  }

  // Fallback match if no explicit version prefix
  const matchNoVersion = url.match(/(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(?:[^/]+\/)?([^/]+(?:\.[a-zA-Z0-9]+)?)$/);
  if (matchNoVersion) {
    return `${matchNoVersion[1]}${transformString}/${matchNoVersion[2]}`;
  }

  return url;
}

/**
 * Builds a standards-compliant responsive srcSet string for Cloudinary images.
 */
export function getCloudinarySrcSet(
  url: string,
  widths: number[] = [400, 640, 960, 1200, 1600],
  options: CloudinaryUrlOptions = {}
): string {
  if (!url || !url.includes('res.cloudinary.com')) {
    return '';
  }

  return widths
    .map((w) => `${optimizeCloudinaryUrl(url, w, options)} ${w}w`)
    .join(', ');
}

/**
 * Standard sizes presets for optimal responsive layout targeting
 */
export const IMAGE_SIZES = {
  hero: '100vw',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 400px',
  cardWide: '(max-width: 768px) 100vw, 50vw',
  gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw',
  thumbnail: '(max-width: 640px) 50vw, 20vw',
  banner: '(max-width: 1280px) 100vw, 1280px',
} as const;
