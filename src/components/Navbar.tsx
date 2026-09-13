import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { prefetchRoute, RouteKey } from '../utils/routePrefetch';

interface NavbarProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

const routeKeyMap: Record<string, RouteKey> = {
  '/explore': 'explore',
  '/activities': 'activities',
  '/packages': 'packages',
  '/trip-plans': 'tripPlans',
  '/resorts': 'resorts',
  '/gallery': 'gallery',
  '/about': 'about',
  '/contact': 'contact',
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const currentScrolled = window.scrollY > 25;
      if (currentScrolled !== lastScrolled) {
        lastScrolled = currentScrolled;
        setIsScrolled(currentScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkPrefetch = (href: string) => {
    const key = routeKeyMap[href];
    if (key) {
      prefetchRoute(key);
    }
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open & listen for Escape
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { label: 'Explore', href: '/explore' },
    { label: 'Activities', href: '/activities' },
    { label: 'Packages', href: '/packages' },
    { label: 'Trip Plans', href: '/trip-plans' },
    { label: 'Resorts', href: '/resorts' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '/', subtitle: 'Kali River & Rainforests' },
    { label: 'Explore', href: '/explore', subtitle: '8 Distinct Wilderness Realms' },
    { label: 'Activities', href: '/activities', subtitle: '14 River, Safari & Aerial Adventures' },
    { label: 'Packages', href: '/packages', subtitle: 'All-Inclusive Stays with Meals & Rafting' },
    { label: 'Trip Plans', href: '/trip-plans', subtitle: 'Tailored for Solo, Couple, Friends & Family' },
    { label: 'Resorts', href: '/resorts', subtitle: 'Curated Guide • Forest, River & Camps' },
    { label: 'Gallery', href: '/gallery', subtitle: '48 Authentic Dandeli Moments & Stays' },
    { label: 'About', href: '/about', subtitle: 'Native River Guides & Safety Credentials' },
    { label: 'Contact', href: '/contact', subtitle: 'Talk to Ganeshgudi Desk & WhatsApp' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#18191B]/95 backdrop-blur-md shadow-md border-b border-white/10 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Left side: Logo & Navigation Bar */}
            <div className="flex items-center gap-6 lg:gap-10 min-w-0">
              {/* Logo / Brand with River & Ridge line */}
              <Link
                to="/"
                className="flex items-center gap-2.5 sm:gap-3 group select-none shrink-0"
                aria-label="Dandeli Wilds Home"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 44 44" className="w-8 h-8 sm:w-10 sm:h-10" fill="none">
                    {/* Natural Mountain Peak outlines */}
                    <path
                      d="M6 31L17 13L25 24L29 18L38 31"
                      stroke="#FAF7F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 31L19 21L23 27"
                      stroke="#EAE3D8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.8"
                    />
                    {/* Subtle River Wave */}
                    <path
                      d="M8 35C13 33 16 37 21 34C26 31 30 36 36 34"
                      stroke="#2E6B68"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-serif tracking-wider text-base sm:text-xl text-white leading-tight font-medium truncate">
                    DANDELI WILDS
                  </span>
                  <span className="text-[7.5px] sm:text-[9px] font-sans font-light tracking-widest text-stone-300 uppercase leading-tight truncate">
                    KALI RIVER EXPEDITIONS
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links aligned to the left */}
              <nav className="hidden xl:flex items-center gap-5 lg:gap-6">
                {desktopNavLinks.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <div key={link.label} className="relative py-1">
                      <Link
                        to={link.href}
                        onMouseEnter={() => handleLinkPrefetch(link.href)}
                        onFocus={() => handleLinkPrefetch(link.href)}
                        onTouchStart={() => handleLinkPrefetch(link.href)}
                        className={`text-xs font-sans font-medium uppercase tracking-wider transition-colors pb-1 ${
                          active
                            ? 'text-white border-b-2 border-[#2E6B68]'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Desktop Right Action: Phone Desk & Plan Your Trip Button */}
            <div className="hidden xl:flex items-center gap-3 shrink-0 ml-auto">
              <a
                href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20am%20planning%20a%20trip%20to%20Dandeli"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-stone-200 transition-all"
                title="Direct call / WhatsApp with native Dandeli guide"
              >
                <div className="w-6 h-6 rounded-full bg-[#2E6B68]/30 flex items-center justify-center text-[#EAE3D8]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono font-semibold text-white tracking-wide leading-tight">
                    +91 94812 45890
                  </span>
                  <span className="text-[9px] font-sans text-stone-300 leading-tight">
                    River Desk
                  </span>
                </div>
              </a>

              {/* Muted River Teal Button */}
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all duration-200 shadow-md active:scale-98 cursor-pointer shrink-0"
              >
                PLAN YOUR TRIP
              </Link>
            </div>

            {/* Mobile Header Right */}
            <div className="flex xl:hidden items-center shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-black/40 hover:bg-black/60 active:scale-95 border border-white/20 text-stone-100 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[60] bg-[#141517]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto text-white page-transition-enter"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Header inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 interactive-tap"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
                  <path
                    d="M6 31L17 13L25 24L29 18L38 31"
                    stroke="#FAF7F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 35C13 33 16 37 21 34C26 31 30 36 36 34"
                    stroke="#2E6B68"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-wider text-base text-white font-medium">
                  DANDELI WILDS
                </span>
                <span className="text-[8px] font-sans tracking-widest text-stone-300 uppercase">
                  NATIVE EXPEDITIONS
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-stone-200 hover:text-white border border-white/15 flex items-center justify-center cursor-pointer transition-transform duration-100"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="py-6 space-y-1.5 my-auto">
            {mobileNavLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onMouseEnter={() => handleLinkPrefetch(link.href)}
                  onTouchStart={() => handleLinkPrefetch(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-150 min-h-[52px] interactive-tap ${
                    active
                      ? 'bg-white/15 text-white border-l-2 border-[#2E6B68]'
                      : 'text-stone-300 active:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-base sm:text-lg font-serif tracking-wide text-white font-normal">
                      {link.label}
                    </span>
                    {link.subtitle && (
                      <span className="text-[10px] sm:text-[11px] font-sans text-stone-400 font-light">
                        {link.subtitle}
                      </span>
                    )}
                  </div>
                  {active ? (
                    <span className="w-2 h-2 rounded-full bg-[#2E6B68] shrink-0" />
                  ) : (
                    <span className="text-stone-500 text-xs shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Drawer Bottom Actions */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('Mobile Nav Drawer');
              }}
              className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] active:scale-[0.98] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer interactive-tap"
            >
              <span>PLAN YOUR TRIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-xs text-stone-300">
              <a
                href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-stone-200 hover:text-white active:opacity-80 transition-opacity min-h-[44px]"
              >
                <div className="w-7 h-7 rounded-full bg-[#2E6B68]/40 text-[#EAE3D8] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono font-semibold text-white text-xs">+91 94812 45890</span>
                  <span className="text-[10px] font-sans text-stone-400">Ganeshgudi Desk</span>
                </div>
              </a>
              <span className="text-[10px] font-sans text-stone-400 px-2 py-1 rounded bg-white/5 border border-white/10">
                24x7 Support
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
