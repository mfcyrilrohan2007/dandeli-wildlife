import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Heart,
  Compass,
  ArrowUpRight,
  MapPin,
  Users,
  Waves,
  CheckCircle2,
  TreePine,
  Sparkles,
  Phone,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#18191B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/forest-canopy.jpg"
            alt="Dandeli Rainforest Canopy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B]/95 via-[#18191B]/85 to-[#FAF7F2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#EAE3D8] text-xs font-sans tracking-wider uppercase font-medium">
            <Heart className="w-3.5 h-3.5" />
            <span>Community-Rooted Travel Collective</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl">
            About Dandeli Wilds
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-light">
            We are not an algorithm, a faceless travel portal, or a metro marketing desk. We are licensed Kali River white-water captains, Anshi forest trackers, and family homestay custodians who grew up swimming in these currents.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans text-stone-400">
            <span className="flex items-center gap-1.5 text-[#EAE3D8]">
              <MapPin className="w-3.5 h-3.5" />
              Ganeshgudi & Dandeli, Karnataka
            </span>
            <span>•</span>
            <span>Guiding since 2014</span>
            <span>•</span>
            <span className="text-[#FAF7F2]">Zero Middlemen • 100% Local</span>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* 1. Our Story */}
        <section className="space-y-6">
          <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
            Chapter 01 • Origin
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1D1F]">
            Our Story: Born by the Kali River
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              In 2014, three native river guides and a local homestay owner in Ganeshgudi noticed a troubling trend: large online travel aggregators were selling Dandeli trips as generic, hurried commodity packages. Travelers were being rushed into overcrowded rubber rafts, housed in concrete hotels far away from the river, and left without any understanding of the delicate rainforest ecosystem.
            </p>
            <p>
              We founded <strong>Dandeli Wilds</strong> with a simple, stubborn promise: to share our home exactly as we experience it. That meant introducing travellers to the living pulse of the river—waiting for the precise morning dam water release when rapids churn with optimal volume, identifying hornbill feeding trees in silence, and eating piping-hot Jolada Rotti made by our own families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm">
              <span className="font-serif text-4xl font-normal text-[#1C1D1F]">12+</span>
              <p className="text-xs text-stone-500 font-sans uppercase mt-1 tracking-wider">Years on the River</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm">
              <span className="font-serif text-4xl font-normal text-[#2E6B68]">18,000+</span>
              <p className="text-xs text-stone-500 font-sans uppercase mt-1 tracking-wider">Safe Rafting Expeditions</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm">
              <span className="font-serif text-4xl font-normal text-[#1C1D1F]">100%</span>
              <p className="text-xs text-stone-500 font-sans uppercase mt-1 tracking-wider">Local Family Network</p>
            </div>
          </div>
        </section>

        {/* 2. Why Dandeli */}
        <section className="space-y-6 bg-[#F4EFEA] p-8 sm:p-12 rounded-2xl border border-[#E5DFD7]">
          <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
            Chapter 02 • The Wilderness
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
            Why Dandeli is unlike anywhere else
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Most hill stations in South India have been transformed into crowded commercial towns. Dandeli remains rugged because it is guarded by over 1,300 square kilometers of protected forest—the Dandeli Wildlife Sanctuary and Anshi National Park (together forming the Kali Tiger Reserve).
            </p>
            <p>
              The Kali River is one of the few rivers in the country whose white water volume is sustained year-round by hydroelectric dam releases from Supa Dam. This creates reliable Class III and Class IV rapids even in months when other rivers across the continent run dry. When combined with ancient monoliths like Syntheri Rocks and the highest concentration of hornbills in South India, Dandeli is a wilderness sanctuary in the truest sense.
            </p>
          </div>
        </section>

        {/* 3. Our Local Knowledge */}
        <section className="space-y-6">
          <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
            Chapter 03 • The Native Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
            Our Local Knowledge: Reading the Current
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              You cannot learn the Kali River from a manual. The river shifts with seasonal silt deposits, underwater basalt formations, and dam gate schedules:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  Water Release Timing
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans">
                  We maintain daily phone communication with the Supa power station engineers to verify water discharge timings before putting rafts on the river.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  Canopy Birding Corridors
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans">
                  Our bird guides know which wild fig and berry trees are fruiting each week along the Ganeshgudi timber corridor, maximizing hornbill sightings.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  Direct Homestay Partnerships
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans">
                  We inspect cottage kitchens personally. You eat authentic regional food prepared by families who treat you as personal houseguests.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
                <h4 className="font-serif text-xl font-normal text-[#1C1D1F]">
                  Sanctuary Forest Quotas
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans">
                  Safari vehicle entry into Anshi core zones is strictly capped by the forestry department. We secure genuine official permits in advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Safety: Our Non-Negotiable Foundation */}
        <section className="space-y-6 bg-[#1C1D1F] text-white p-8 sm:p-12 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C25E3E]" />
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider font-medium">
              Chapter 04 • Protocols
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            Safety: Our Non-Negotiable Foundation
          </h2>
          <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
            <p>
              Adventure is only thrilling when safety is absolute. Over twelve years of operation, our river safety record is unblemished because we refuse to cut corners:
            </p>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-stone-200 font-sans">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">IRF Certified River Captains:</strong> Every raft is piloted by a guide certified by the International Rafting Federation with First Aid and Swiftwater Rescue credentials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Independent Safety Kayakers:</strong> A dedicated single-kayak rescue marshal paddles alongside every multi-raft convoy to handle immediate recoveries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">CE / ISO Certified Flotation Gear:</strong> We provide 150N high-buoyancy life jackets and high-impact white-water helmets tested annually for structural integrity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B68] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Zero-Tolerance Alcohol Policy:</strong> No participant under the influence of alcohol is ever permitted onto our rafts or safari jeeps.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Our Approach */}
        <section className="space-y-6">
          <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
            Chapter 05 • Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
            Our Approach: Slow, Respectful & Real
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              We do not treat travel as a checklist of selfie points. We encourage travellers to turn off their phones, listen to the river murmuring against the boulders, and converse with the forest watchers.
            </p>
            <p>
              Every rupee spent through Dandeli Wilds directly supports local boatmen, river guides, village cooks, and eco-homestays in Ganeshgudi, Barchi, and Kulgi. When you travel with us, you are not just taking a trip; you are sustaining the living human community of the Western Ghats.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto py-3 px-8 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Plan Your Trip With Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
            <a
              href="https://wa.me/919481245890"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] hover:bg-stone-100 text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#2E6B68]" />
              <span>Talk to Our Local Desk</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
