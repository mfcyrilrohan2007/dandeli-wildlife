import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Waves, Phone, Mail, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="bg-[#141517] text-stone-300 pt-12 sm:pt-16 pb-24 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Top Callout Banner: Mobile-First Responsive Container */}
        <div className="p-5 sm:p-10 rounded-2xl bg-[#1C1D1F] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-manrope uppercase tracking-widest text-[#EAE3D8] font-semibold">
              The Kali River Awaits You
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-snug">
              Ready to slow down and explore Dandeli?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed font-light">
              Talk directly with a local river guide. We check dam water release levels, cottage availability, and suggest the ideal dates for your group.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-[46px] py-3 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-manrope font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plan Your Trip with Locals</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20know%20about%20river%20rafting%20and%20stays"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-h-[46px] py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-manrope font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Agency Identity & Direct Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 text-xs">
          {/* Col 1: Dandeli Wilds Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                <Waves className="w-5 h-5 text-[#EAE3D8]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-serif text-base sm:text-lg text-white tracking-wider font-medium">
                  DANDELI WILDS
                </h4>
                <p className="text-[10px] font-sans text-stone-400 uppercase tracking-wider truncate">
                  Kali River & Rainforest Expeditions
                </p>
              </div>
            </Link>

            <p className="text-stone-400 leading-relaxed font-sans font-light">
              A community-rooted travel agency based in Ganeshgudi & Dandeli, Karnataka.
              Run by licensed white-water river captains, tribal forest trackers, and local hospitality families since 2014.
            </p>

            <div className="pt-2 text-xs text-stone-300 space-y-2.5 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EAE3D8] shrink-0 mt-0.5" />
                <span>Kali Riverbank Road, Ganeshgudi, Dandeli, Karnataka 581325</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EAE3D8] shrink-0" />
                <a href="tel:+919481245890" className="hover:text-white font-mono text-stone-200">
                  River Desk: +91 94812 45890
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EAE3D8] shrink-0" />
                <a href="mailto:expeditions@dandeliwilds.in" className="hover:text-white text-stone-200">
                  expeditions@dandeliwilds.in
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links (Visible on md+) */}
          <div className="hidden md:grid md:col-span-8 grid-cols-3 gap-8">
            {/* Navigation */}
            <div className="space-y-3">
              <h5 className="font-manrope font-semibold text-white uppercase tracking-wider text-[11px]">
                Navigation
              </h5>
              <ul className="space-y-2 text-stone-400 font-sans">
                <li><Link to="/" className="hover:text-white transition-colors block py-0.5">Home</Link></li>
                <li><Link to="/explore" className="hover:text-white transition-colors block py-0.5">Explore</Link></li>
                <li><Link to="/activities" className="hover:text-white transition-colors block py-0.5">Activities</Link></li>
                <li><Link to="/packages" className="hover:text-white transition-colors block py-0.5">Packages</Link></li>
                <li><Link to="/trip-plans" className="hover:text-white transition-colors block py-0.5">Trip Plans</Link></li>
                <li><Link to="/resorts" className="hover:text-white transition-colors block py-0.5">Resorts</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors block py-0.5">Gallery</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors block py-0.5">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors block py-0.5">Contact</Link></li>
              </ul>
            </div>

            {/* Explore Dandeli */}
            <div className="space-y-3">
              <h5 className="font-manrope font-semibold text-white uppercase tracking-wider text-[11px]">
                Explore Dandeli
              </h5>
              <ul className="space-y-2 text-stone-400 font-sans">
                <li><Link to="/explore/kali-river" className="hover:text-white transition-colors block py-0.5">Kali River Rapids</Link></li>
                <li><Link to="/explore/dandeli-wildlife-sanctuary" className="hover:text-white transition-colors block py-0.5">Dandeli Wildlife</Link></li>
                <li><Link to="/explore/syntheri-rock" className="hover:text-white transition-colors block py-0.5">Syntheri Rocks</Link></li>
                <li><Link to="/explore/shiroli-peak" className="hover:text-white transition-colors block py-0.5">Shiroli Sunset Peak</Link></li>
                <li><Link to="/explore/supa-dam-backwaters" className="hover:text-white transition-colors block py-0.5">Supa Dam Backwaters</Link></li>
                <li><Link to="/explore/kavala-caves" className="hover:text-white transition-colors block py-0.5">Kavala Caves</Link></li>
              </ul>
            </div>

            {/* Adventure Activities */}
            <div className="space-y-3">
              <h5 className="font-manrope font-semibold text-white uppercase tracking-wider text-[11px]">
                Activities
              </h5>
              <ul className="space-y-2 text-stone-400 font-sans">
                <li><Link to="/activities/white-water-rafting" className="hover:text-white transition-colors block py-0.5">White Water Rafting</Link></li>
                <li><Link to="/activities/jungle-safari" className="hover:text-white transition-colors block py-0.5">Jungle Safari</Link></li>
                <li><Link to="/activities/kayaking" className="hover:text-white transition-colors block py-0.5">Backwater Kayaking</Link></li>
                <li><Link to="/activities/camping" className="hover:text-white transition-colors block py-0.5">Riverside Camping</Link></li>
                <li><Link to="/activities/coracle-ride" className="hover:text-white transition-colors block py-0.5">River Coracle Ride</Link></li>
                <li><Link to="/activities/natural-jacuzzi" className="hover:text-white transition-colors block py-0.5">Natural Jacuzzi</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion Navigation (Visible strictly on mobile < md to prevent wall of text) */}
          <div className="md:hidden space-y-2 border-t border-white/10 pt-4">
            {/* Mobile Accordion 1: Navigation */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection('navigation')}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left text-xs font-manrope font-semibold text-white uppercase tracking-wider cursor-pointer"
                aria-expanded={openSection === 'navigation'}
              >
                <span>Navigation</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${openSection === 'navigation' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'navigation' && (
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-white/5 text-xs text-stone-300 font-sans">
                  <Link to="/" className="block py-1.5 hover:text-white">Home</Link>
                  <Link to="/explore" className="block py-1.5 hover:text-white">Explore</Link>
                  <Link to="/activities" className="block py-1.5 hover:text-white">Activities</Link>
                  <Link to="/packages" className="block py-1.5 hover:text-white">Packages</Link>
                  <Link to="/trip-plans" className="block py-1.5 hover:text-white">Trip Plans</Link>
                  <Link to="/resorts" className="block py-1.5 hover:text-white">Resorts</Link>
                  <Link to="/gallery" className="block py-1.5 hover:text-white">Gallery</Link>
                  <Link to="/about" className="block py-1.5 hover:text-white">About</Link>
                  <Link to="/contact" className="block py-1.5 hover:text-white">Contact</Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion 2: Explore Dandeli */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection('explore')}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left text-xs font-manrope font-semibold text-white uppercase tracking-wider cursor-pointer"
                aria-expanded={openSection === 'explore'}
              >
                <span>Explore Dandeli</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${openSection === 'explore' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'explore' && (
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-white/5 text-xs text-stone-300 font-sans">
                  <Link to="/explore/kali-river" className="block py-1.5 hover:text-white">Kali River Rapids</Link>
                  <Link to="/explore/dandeli-wildlife-sanctuary" className="block py-1.5 hover:text-white">Dandeli Wildlife</Link>
                  <Link to="/explore/syntheri-rock" className="block py-1.5 hover:text-white">Syntheri Rocks</Link>
                  <Link to="/explore/shiroli-peak" className="block py-1.5 hover:text-white">Shiroli Sunset Peak</Link>
                  <Link to="/explore/supa-dam-backwaters" className="block py-1.5 hover:text-white">Supa Dam Backwaters</Link>
                  <Link to="/explore/kavala-caves" className="block py-1.5 hover:text-white">Kavala Caves</Link>
                </div>
              )}
            </div>

            {/* Mobile Accordion 3: Top Activities */}
            <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection('activities')}
                className="w-full min-h-[48px] px-4 py-3 flex items-center justify-between text-left text-xs font-manrope font-semibold text-white uppercase tracking-wider cursor-pointer"
                aria-expanded={openSection === 'activities'}
              >
                <span>Adventure Activities</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${openSection === 'activities' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'activities' && (
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-white/5 text-xs text-stone-300 font-sans">
                  <Link to="/activities/white-water-rafting" className="block py-1.5 hover:text-white">White Water Rafting</Link>
                  <Link to="/activities/jungle-safari" className="block py-1.5 hover:text-white">Jungle Safari</Link>
                  <Link to="/activities/kayaking" className="block py-1.5 hover:text-white">Backwater Kayaking</Link>
                  <Link to="/activities/camping" className="block py-1.5 hover:text-white">Riverside Camping</Link>
                  <Link to="/activities/coracle-ride" className="block py-1.5 hover:text-white">River Coracle Ride</Link>
                  <Link to="/activities/natural-jacuzzi" className="block py-1.5 hover:text-white">Natural Jacuzzi</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-stone-400 text-[11px] font-sans text-center sm:text-left">
          <p>© {new Date().getFullYear()} Dandeli Wilds Expeditions. All rights reserved.</p>
          <p className="text-stone-400">
            Certified by Karnataka Eco-Tourism Development Board (KEDB) partners.
          </p>
        </div>
      </div>
    </footer>
  );
};
