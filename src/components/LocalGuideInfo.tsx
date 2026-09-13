import React, { useState } from 'react';
import { Compass, Calendar, Luggage, Navigation, Star, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/dandeliData';

export const LocalGuideInfo: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need swimming skills to do white-water rafting on the Kali River?',
      a: 'No! Swimming is not mandatory for white-water rafting. You are fitted with high-buoyancy CE-certified river vests designed to keep you effortlessly afloat even in rough currents. Each raft is steered by an International Rafting Federation (IRF) certified river master with an accompanying safety rescue kayaker on the rapids.',
    },
    {
      q: 'When is the best season for white-water rafting in Dandeli?',
      a: 'The Kali River white-water rafting is regulated by water releases from the Supa Dam reservoir. The peak rafting season runs from October through June, with steady Class III and IV rapids. Even in summer months (March - May), daily dam water releases guarantee thrilling rapids.',
    },
    {
      q: 'How do we reach Dandeli from major cities?',
      a: 'Nearest airports are Hubballi (HBX - 75 km), Belagavi (IXG - 90 km), and Goa Dabolim/Mopa (130 km). Nearest railway stations are Alnavar (32 km), Londa (35 km), and Hubballi. We can arrange direct pickup cabs from any of these hubs directly to your resort.',
    },
    {
      q: 'Is Dandeli suitable for children and senior citizens?',
      a: 'Yes, absolutely. While white-water rafting has an age restriction of 11+ years, younger children and seniors love the gentle Supa backwaters coracle boat drift, Anshi open-top jungle safari, birdwatching trails, and riverside pool resorts.',
    },
    {
      q: 'What should we pack for a trip to Dandeli?',
      a: 'Bring quick-drying synthetic or athletic t-shirts and shorts for water activities, secure strap sandals or water shoes (crocs or old sneakers), a light jacket for cool jungle evenings, sunscreen, and waterproof mobile pouches.',
    },
  ];

  return (
    <section id="travel-guide" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#192420] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top: Seasons & Packing Essentials */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
              <Compass className="w-3.5 h-3.5" />
              <span>Native Knowledge & Travel Advice</span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#0F2419]">
              PLANNING YOUR DANDELI EXPEDITION
            </h2>
            <p className="text-stone-600 text-base sm:text-lg font-sans">
              Straightforward, honest tips from our local team so you arrive prepared for the wilderness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Seasons */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#247565] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0F2419]">
                Seasons & Climate
              </h3>
              <ul className="text-xs text-[#526058] space-y-2.5">
                <li>
                  <strong className="text-[#142C21] font-display">Oct – Feb (Peak & Pleasant): </strong>
                  Misty mornings, active rapids, prime birdwatching for Hornbills.
                </li>
                <li>
                  <strong className="text-[#142C21] font-display">Mar – May (Warm & Water Fun): </strong>
                  Warm days, refreshing cold mountain river swims, daily dam surge.
                </li>
                <li>
                  <strong className="text-[#142C21] font-display">Jun – Sep (Monsoon Green): </strong>
                  Lush waterfalls, emerald Western Ghats, coracle drifts, and mist.
                </li>
              </ul>
            </div>

            {/* Box 2: Packing */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#247565] flex items-center justify-center">
                <Luggage className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0F2419]">
                What to Pack
              </h3>
              <ul className="text-xs text-[#526058] space-y-2">
                <li>• 2-3 pairs of quick-dry nylon/polyester clothing for river</li>
                <li>• Water-grip sandals or strap footwear (no flip-flops on rapids)</li>
                <li>• Waterproof pouch or dry bag for mobile phones</li>
                <li>• Mosquito repellent & light evening sweatshirt</li>
                <li>• Valid Govt ID (Aadhaar / Passport for forest safari permits)</li>
              </ul>
            </div>

            {/* Box 3: Getting Here */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#247565] flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0F2419]">
                Reaching Dandeli
              </h3>
              <ul className="text-xs text-[#526058] space-y-2">
                <li>• <strong>From Goa:</strong> 2.5 hrs (120 km) via Mollem / Anmod Ghat</li>
                <li>• <strong>From Hubballi:</strong> 1.5 hrs (75 km) scenic forest highway</li>
                <li>• <strong>From Belagavi:</strong> 2 hrs (90 km) via Khanapur</li>
                <li>• <strong>From Bengaluru:</strong> Overnight KSRTC sleeper bus or 460 km drive via NH48</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guest Stories / Testimonials */}
        <div className="pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#247565]">
              Real Travelers • Real River Memories
            </span>
            <h3 className="font-condensed text-3xl sm:text-5xl font-bold uppercase text-[#0F2419]">
              STORIES FROM THE RIVERBANK
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[#F2EDE4] border border-stone-200/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#38463F] font-serif italic leading-relaxed">
                    “{t.text}”
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-300/60 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.guestName}
                    className="w-10 h-10 rounded-full object-cover border border-stone-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-display font-bold text-xs text-[#142C21]">
                      {t.guestName}
                    </h5>
                    <p className="text-[10px] text-stone-500 font-mono">
                      {t.hometown} • {t.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 border-t border-stone-200 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#247565]">
              Got Questions?
            </span>
            <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-[#0F2419]">
              FREQUENTLY ASKED ABOUT DANDELI
            </h3>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-stone-200/90 overflow-hidden shadow-sm transition-colors duration-150"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-[#142C21] hover:bg-stone-50/80 active:bg-stone-100/60 transition-colors duration-150 cursor-pointer min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#247565] shrink-0 transition-transform duration-200 ease-out ${
                        isOpen ? 'rotate-180' : 'text-stone-400 rotate-0'
                      }`}
                    />
                  </button>
                  <div className={`accordion-content-grid ${isOpen ? 'open' : 'closed'}`}>
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
