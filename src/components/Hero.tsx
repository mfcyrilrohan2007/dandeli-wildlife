import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, Compass, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: (preselectedItem?: string) => void;
  onFilterGroup?: (groupType: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToNext = () => {
    const packagesEl = document.getElementById('packages-section');
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/packages');
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden text-white select-none"
    >
      {/* Background Video & Fallback Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#121416]">
        {/* Seamless looping HTML5 video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,c_fill,w_1600/v1788989523/dandeli_rafting_4k.png"
          className="w-full h-full object-cover object-center scale-[1.01] transition-opacity duration-700"
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/fuqocwx8/video/upload/v1789283058/watermark-removed_jovl9p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Natural Vignette Overlays: Balanced to keep river, rapids, and forest vibrant while securing WCAG contrast */}
        {/* Top bar vignette for header legibility */}
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none" />

        {/* Soft radial/linear scrim across text area (not an aggressive full blackout) */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/45 sm:via-black/30 to-transparent pointer-events-none" />

        {/* Gentle bottom transition into the following page section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#141618] via-[#141618]/60 to-transparent pointer-events-none" />
      </div>

      {/* Top spacer to account for sticky navbar */}
      <div className="pt-24 sm:pt-28 md:pt-32" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-[#FAF7F2] text-xs font-manrope font-semibold tracking-wider uppercase shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
            <span>Dandeli, Karnataka</span>
          </div>

          {/* Primary Editorial Display Heading */}
          <h1 className="font-serif text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-normal tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
            Experience Dandeli
          </h1>

          {/* Supporting Text: Adventure + Nature Destination */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200/95 font-sans font-light max-w-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            South India’s untamed adventure capital. Roaring Kali River rapids, dense Western Ghats rainforests, wildlife safaris, and secluded riverside stays.
          </p>

          {/* Action CTAs: Mobile-First, min 44px touch targets */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            {/* Primary CTA: Explore Packages */}
            <button
              type="button"
              onClick={() => navigate('/packages')}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-8 py-3.5 rounded-xl bg-[#2E6B68] hover:bg-[#245754] text-white font-manrope font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-black/30 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Secondary CTA: Plan Your Trip */}
            <button
              type="button"
              onClick={() => navigate('/trip-plans')}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-7 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white font-manrope font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#EAE3D8]" />
              <span>Plan Your Trip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="relative z-10 w-full flex justify-center pb-5 sm:pb-6 pt-2">
        <button
          type="button"
          onClick={scrollToNext}
          className="flex flex-col items-center justify-center gap-1.5 cursor-pointer text-stone-300 hover:text-white transition-colors group"
          aria-label="Scroll down to view packages"
        >
          <span className="text-[11px] font-manrope font-medium tracking-widest uppercase text-stone-300 group-hover:text-white">
            Explore Packages
          </span>
          <ArrowDown className="w-4 h-4 text-stone-300 group-hover:text-white transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};
