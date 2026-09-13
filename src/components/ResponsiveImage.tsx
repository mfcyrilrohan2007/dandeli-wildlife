import React, { useState } from 'react';
import { optimizeCloudinaryUrl, getCloudinarySrcSet, IMAGE_SIZES, CloudinaryUrlOptions } from '../utils/imageOptimization';

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
  sizes?: string;
  priority?: boolean;
  targetWidth?: number;
  widths?: number[];
  crop?: CloudinaryUrlOptions['crop'];
  quality?: CloudinaryUrlOptions['quality'];
  objectPosition?: string;
  onImageLoad?: () => void;
}

/**
 * ResponsiveImage: High-performance, zero-CLS image component
 * - Employs Cloudinary responsive transformations with AVIF/WebP auto-negotiation
 * - Uses native async decoding and eager/lazy prioritization
 * - Pre-allocates dimensions and background tones to eliminate Cumulative Layout Shift (CLS)
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatioClass = '',
  sizes = IMAGE_SIZES.card,
  priority = false,
  targetWidth = 720,
  widths = [400, 640, 960, 1200],
  crop = 'fill',
  quality = 'auto',
  objectPosition,
  style,
  onImageLoad,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isCloudinary = src && src.includes('res.cloudinary.com');

  const optimizedSrc = isCloudinary
    ? optimizeCloudinaryUrl(src, targetWidth, { crop, quality })
    : src;

  const srcSet = isCloudinary
    ? getCloudinarySrcSet(src, widths, { crop, quality })
    : undefined;

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(objectPosition ? { objectPosition } : {}),
  };

  return (
    <div
      className={`relative overflow-hidden bg-stone-200/50 ${aspectRatioClass} ${containerClassName}`}
    >
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => {
          setIsLoaded(true);
          onImageLoad?.();
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded || priority ? 'opacity-100' : 'opacity-90'
        } ${className}`}
        style={combinedStyle}
        {...rest}
      />
    </div>
  );
};
