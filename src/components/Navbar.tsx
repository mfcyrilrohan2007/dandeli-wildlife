import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Explore', href: '/explore' },
    { label: 'Activities', href: '/activities' },
    { label: 'Trip Plans', href: '/trip-plans' },
    { label: 'Packages', href: '/packages' },
    { label: 'Resorts', href: '/resorts' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#18191B]/95 backdrop-blur-md shadow-md border-b border-white/10 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Brand with River & Ridge line */}
            <Link
              to="/"
              className="flex items-center gap-3 group select-none shrink-0"
              aria-label="Dandeli Wilds Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 44 44" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
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
              <div className="flex flex-col">
                <span className="font-serif tracking-wider text-lg sm:text-xl text-white leading-tight font-medium">
                  DANDELI WILDS
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans font-light tracking-widest text-stone-300 uppercase leading-tight truncate max-w-[190px] sm:max-w-none">
                  KALI RIVER & RAINFOREST EXPEDITIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <div key={link.label} className="relative py-1">
                    <Link
                      to={link.href}
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

            {/* Desktop Right Action: Phone Desk & Plan Your Trip Button */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
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
            <div className="flex xl:hidden items-center gap-2">
              <Link
                to="/contact"
                className="py-2 px-3.5 rounded-lg bg-[#2E6B68] text-white font-sans font-medium text-[11px] uppercase tracking-wider shrink-0"
              >
                Plan Trip
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-lg bg-black/40 hover:bg-black/60 active:scale-95 border border-white/20 text-stone-100 flex items-center justify-center transition-all cursor-pointer"
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
          className="xl:hidden fixed inset-0 z-[60] bg-[#18191B]/98 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200 text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Header inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
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
                <span className="font-serif tracking-wider text-base text-white">
                  DANDELI WILDS
                </span>
                <span className="text-[9px] font-sans tracking-widest text-[#EAE3D8] uppercase">
                  NATIVE EXPEDITIONS
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-stone-200 hover:text-white border border-white/15 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="py-6 space-y-2 my-auto">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg text-lg font-serif tracking-wide transition-all min-h-[48px] ${
                    active
                      ? 'bg-white/5 text-white border-l-2 border-[#2E6B68]'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B68]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Drawer Bottom Actions */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>PLAN YOUR TRIP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-xs text-stone-300">
              <a
                href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-stone-200 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#2E6B68]/30 text-[#EAE3D8] flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-semibold">+91 94812 45890</span>
              </a>
              <span className="text-[10px] font-sans text-stone-400">Ganeshgudi Desk</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
