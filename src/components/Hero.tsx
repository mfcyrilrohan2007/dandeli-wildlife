import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  ArrowUpRight,
  Play,
  ArrowDown,
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
  onFilterGroup?: (groupType: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = (target: string) => {
    if (target.startsWith('/')) {
      navigate(target);
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        navigate('/explore');
      }
    }
  };

  const exploreCategories = [
    {
      id: 'rafting',
      label: 'Rafting',
      target: '/activities/white-water-rafting',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M5 12C9 10 13 14 17 12C21 10 25 14 27 12" strokeLinecap="round" />
          <path d="M5 17C9 15 13 19 17 17C21 15 25 19 27 17" strokeLinecap="round" />
          <path d="M5 22C9 20 13 24 17 22C21 20 25 24 27 22" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'safari',
      label: 'Jungle Safari',
      target: '/activities/jungle-safari',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="10" cy="11" r="2.25" fill="currentColor" />
          <circle cx="16" cy="9" r="2.25" fill="currentColor" />
          <circle cx="22" cy="11" r="2.25" fill="currentColor" />
          <ellipse cx="16" cy="20" rx="5.5" ry="4.5" />
        </svg>
      ),
    },
    {
      id: 'camping',
      label: 'Camping',
      target: '/packages/camping',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M16 6L6 26H26L16 6Z" strokeLinejoin="round" />
          <path d="M16 6V26" />
          <path d="M12 26L16 18L20 26" />
        </svg>
      ),
    },
    {
      id: 'wildlife',
      label: 'Wildlife',
      target: '/explore/wildlife',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M9 21C7 19 6 15 8 11C10 7 15 7 18 10C21 13 25 13 27 12C26 16 23 18 20 19C17 23 13 23 9 21Z" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M14 21V26M18 20V26" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'waterfalls',
      label: 'Waterfalls',
      target: '/explore/waterfalls',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M8 7H24M8 25H24" strokeLinecap="round" />
          <path d="M11 7V25M16 7V25M21 7V25" strokeLinecap="round" strokeDasharray="3 2" />
        </svg>
      ),
    },
    {
      id: 'resorts',
      label: 'Resorts',
      target: '/resorts',
      icon: (
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M5 24V11M5 19H27M27 24V16C27 14.3431 25.6569 13 24 13H15V19" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="15" r="2" />
        </svg>
      ),
    },
  ];

  // Gentle parallax offset for the background photo
  const imageTranslateY = Math.min(scrollY * 0.22, 100);

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden text-white select-none">
      {/* Background Image: Vivid, photographic backdrop of Kali River rapids intentionally preserved with natural tones */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#141618]">
        <div
          className="w-full h-[112%] absolute -top-[4%] left-0 transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${imageTranslateY}px, 0) scale(1.01)`,
          }}
        >
          <img
            src="/images/kali-rafting-hero.jpg"
            alt="Kali River white water rafting rapids in Dandeli, Western Ghats Karnataka"
            className="w-full h-full object-cover object-[65%_35%] sm:object-center brightness-[0.98] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Natural neutral gradient overlays: Keep the blue sky, turquoise river, and forest visible */}
        {/* Top vignette for clean navbar visibility */}
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

        {/* Left/center soft neutral shading behind typography for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/45 sm:via-black/35 to-transparent pointer-events-none" />

        {/* Bottom subtle neutral blend */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#141618] via-[#141618]/60 to-transparent pointer-events-none" />
      </div>

      {/* Top spacer for fixed navbar */}
      <div className="pt-24 sm:pt-28 lg:pt-32" />

      {/* Main Hero Content: Editorial Travel Magazine Hierarchy */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          {/* Location & Region Editorial Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#EAE3D8] text-[11px] font-sans font-medium tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#EAE3D8]" />
            <span>KARNATAKA, INDIA • WESTERN GHATS</span>
          </div>

          {/* Distinguished Travel Masthead: DANDELI */}
          <div className="pt-1">
            <span className="font-serif text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-normal tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] block leading-[0.95]">
              DANDELI
            </span>
          </div>

          {/* Editorial Serif Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-white/95 leading-[1.18] drop-shadow-md">
            Some places are better{' '}
            <span className="font-sans not-italic font-semibold text-[#EAE3D8]">
              experienced
            </span>{' '}
            than explained.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-stone-200/90 font-sans font-light max-w-xl leading-relaxed drop-shadow">
            Roaring Kali River rapids, deep teak rainforests, quiet campfire evenings, and misty Western Ghats mornings. Handcrafted journeys guided by local rivermen who know every rock and bend.
          </p>

          {/* CTA Buttons: Premium Travel Brand Design */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-2 w-full xs:w-auto">
            {/* Primary Muted River Teal Button */}
            <button
              type="button"
              onClick={() => onOpenEnquiry('Plan Your Trip - Hero CTA')}
              className="min-h-[48px] sm:min-h-[50px] px-7 py-3.5 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-black/30 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>PLAN YOUR TRIP</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Secondary Outline Button */}
            <button
              type="button"
              onClick={() => handleExploreClick('/explore')}
              className="min-h-[48px] sm:min-h-[50px] px-6 py-3.5 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/35 text-white font-sans font-medium text-xs uppercase tracking-wider transition-all duration-200 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>EXPLORE DANDELI</span>
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center py-2 sm:py-3">
        <button
          type="button"
          onClick={() => handleExploreClick('/explore')}
          className="flex flex-col items-center justify-center gap-1.5 cursor-pointer text-stone-300 hover:text-white transition-colors group"
          aria-label="Scroll to explore"
        >
          <div className="w-4 sm:w-5 h-7 sm:h-8 rounded-full border border-white/50 flex items-start justify-center p-1 bg-black/20 backdrop-blur-sm group-hover:border-white transition-colors">
            <div className="w-1 h-2 rounded-full bg-white/90 animate-bounce" />
          </div>
          <span className="text-[10px] font-sans font-medium tracking-widest uppercase text-stone-300 group-hover:text-white">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-3 h-3 text-stone-300 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>

      {/* Bottom Hero Strip: Understated Natural Travel Journal Discovery Rail */}
      <div className="relative z-10 w-full bg-[#18191B]/90 backdrop-blur-md border-t border-white/10 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth">
          {/* Subtle Editorial Label */}
          <div className="shrink-0 flex items-center gap-2 select-none pr-4 border-r border-white/15">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#EAE3D8]">
              DISCOVER
            </span>
          </div>

          {/* Horizontally scrollable navigation items with tactile touch target */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 shrink-0 pb-0.5 pr-4">
            {exploreCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleExploreClick(item.target)}
                className="group flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none transition-all duration-200 active:scale-95 shrink-0 min-h-[44px] py-1 px-2.5 rounded-lg hover:bg-white/5"
              >
                {/* Minimalist icon frame */}
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-stone-300 transition-colors group-hover:text-white group-hover:border-[#EAE3D8] shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs font-sans font-medium text-stone-300 group-hover:text-white whitespace-nowrap transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
