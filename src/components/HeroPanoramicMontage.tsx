import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface HeroPanel {
  image: string;
  alt: string;
}

export interface HeroBullet {
  icon?: LucideIcon;
  text: string;
}

interface HeroPanoramicMontageProps {
  badgeIcon?: LucideIcon;
  badgeText: string;
  title: string;
  tagline: string;
  bullets: HeroBullet[];
  panels: [HeroPanel, HeroPanel, HeroPanel, HeroPanel];
}

export const HeroPanoramicMontage: React.FC<HeroPanoramicMontageProps> = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  tagline,
  bullets,
  panels,
}) => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[64vh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-36 pb-10 sm:pb-18 bg-[#141517]">
      {/* Desktop & Tablet: 4-Panel Angled Panoramic Montage matching Dandeli Wilds signature */}
      <div className="absolute inset-0 z-0 hidden sm:flex w-[114%] -left-[7%] h-full pointer-events-none overflow-hidden select-none">
        {panels.map((p, idx) => (
          <div
            key={idx}
            className="relative flex-1 h-full overflow-hidden transform -skew-x-6 border-r border-white/20 origin-bottom shadow-2xl"
          >
            <div className="w-[130%] h-full -left-[15%] relative transform skew-x-6">
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover object-center scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-black/15" />
          </div>
        ))}
      </div>

      {/* Mobile: Cinematic Featured Landscape with natural photo composition */}
      <div className="absolute inset-0 z-0 sm:hidden pointer-events-none select-none overflow-hidden">
        <img
          src={panels[0].image}
          alt={panels[0].alt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Natural balanced vignette: clean readability without muddying the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      </div>

      {/* High-Contrast Vignette for Desktop */}
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-[#141517] via-[#141517]/60 to-black/70 pointer-events-none z-[1]" />
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5 text-left w-full">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-[#EAE3D8] text-[11px] sm:text-xs font-sans tracking-wider uppercase font-medium shadow-sm">
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />}
          <span className="truncate">{badgeText}</span>
        </div>

        {/* Heading: Responsive clamp-style typography (approx 32-44px on mobile, avoiding awkward 5-line blocks) */}
        <h1 className="font-serif text-[30px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-[1.14] sm:leading-[1.08]">
          {title}
        </h1>

        {/* Tagline */}
        <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-sans font-light">
          {tagline}
        </p>

        {/* Bullet Trust Points */}
        <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-sans text-stone-300">
          {bullets.map((b, bIdx) => {
            const Icon = b.icon;
            return (
              <React.Fragment key={bIdx}>
                <span className="inline-flex items-center gap-1.5 font-sans bg-black/30 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md sm:rounded-none border border-white/10 sm:border-0">
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />}
                  <span>{b.text}</span>
                </span>
                {bIdx < bullets.length - 1 && (
                  <span className="hidden sm:inline text-stone-500 select-none">•</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
