import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#141517] text-stone-300 pt-16 sm:pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Callout Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#1C1D1F] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-sans uppercase tracking-widest text-[#EAE3D8] font-medium">
              The Kali River Awaits You
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-snug">
              Ready to slow down and explore Dandeli?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Talk directly with a local river guide. We check dam water release levels, cottage availability, and suggest the ideal dates for your group.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="py-3.5 px-6 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Plan Your Trip with Locals</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20would%20like%20to%20know%20about%20river%20rafting%20and%20stays"
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-medium text-xs uppercase tracking-wider transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          {/* Col 1 & 2: Agency Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white">
                <Waves className="w-5 h-5 text-[#EAE3D8]" />
              </div>
              <div>
                <h4 className="font-serif text-base text-white tracking-wider font-medium">
                  DANDELI WILDS
                </h4>
                <p className="text-[10px] font-sans text-stone-400 uppercase tracking-wider">
                  Kali River & Rainforest Expeditions
                </p>
              </div>
            </Link>

            <p className="text-stone-400 leading-relaxed max-w-sm font-sans">
              A community-rooted travel agency based in Ganeshgudi & Dandeli, Karnataka.
              Run by licensed white-water river captains, tribal forest trackers, and local hospitality families since 2014.
            </p>

            <div className="pt-2 text-[11px] text-stone-400 space-y-2 font-sans">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />
                <span>Kali Riverbank Road, Ganeshgudi, Dandeli, Karnataka 581325</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />
                <span className="font-mono">River Desk: +91 94812 45890 / +91 82842 34110</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#EAE3D8] shrink-0" />
                <span>expeditions@dandeliwilds.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Pages */}
          <div className="space-y-3">
            <h5 className="font-sans font-semibold text-white uppercase tracking-wider text-[11px]">
              Pages
            </h5>
            <ul className="space-y-2.5 text-stone-400 font-sans">
              <li><Link to="/explore" className="hover:text-white transition-colors">Explore Dandeli</Link></li>
              <li><Link to="/activities" className="hover:text-white transition-colors">All Activities</Link></li>
              <li><Link to="/trip-plans" className="hover:text-white transition-colors">Trip Plans</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Travel Packages</Link></li>
              <li><Link to="/resorts" className="hover:text-white transition-colors">Resorts & Stays</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Enquiry</Link></li>
            </ul>
          </div>

          {/* Col 4: Top Activities */}
          <div className="space-y-3">
            <h5 className="font-sans font-semibold text-white uppercase tracking-wider text-[11px]">
              Activities
            </h5>
            <ul className="space-y-2.5 text-stone-400 font-sans">
              <li><Link to="/activities/white-water-rafting" className="hover:text-white transition-colors">White Water Rafting</Link></li>
              <li><Link to="/activities/jungle-safari" className="hover:text-white transition-colors">Jungle Safari</Link></li>
              <li><Link to="/activities/kayaking" className="hover:text-white transition-colors">Backwater Kayaking</Link></li>
              <li><Link to="/activities/camping" className="hover:text-white transition-colors">Wilderness Camping</Link></li>
              <li><Link to="/activities/coracle-ride" className="hover:text-white transition-colors">River Coracle Ride</Link></li>
              <li><Link to="/activities/natural-jacuzzi" className="hover:text-white transition-colors">Natural Jacuzzi</Link></li>
            </ul>
          </div>

          {/* Col 5: Trip Plans & Guides */}
          <div className="space-y-3">
            <h5 className="font-sans font-semibold text-white uppercase tracking-wider text-[11px]">
              Trip Plans
            </h5>
            <ul className="space-y-2.5 text-stone-400 font-sans">
              <li><Link to="/trip-plans/solo" className="hover:text-white transition-colors">Solo Explorer Plan</Link></li>
              <li><Link to="/trip-plans/duo" className="hover:text-white transition-colors">Duo & Couples Plan</Link></li>
              <li><Link to="/trip-plans/friends" className="hover:text-white transition-colors">Friends Adventure Plan</Link></li>
              <li><Link to="/trip-plans/family" className="hover:text-white transition-colors">Family Vacation Plan</Link></li>
              <li><Link to="/trip-plans/group" className="hover:text-white transition-colors">Large Group (4+) Plan</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Safety Standards</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Local Note */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px] font-sans">
          <p>© {new Date().getFullYear()} Dandeli Wilds Expeditions. All rights reserved.</p>
          <p className="text-stone-400">
            Certified by Karnataka Eco-Tourism Development Board (KEDB) partners.
          </p>
        </div>
      </div>
    </footer>
  );
};
