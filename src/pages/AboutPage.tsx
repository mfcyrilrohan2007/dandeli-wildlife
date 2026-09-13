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
import { HeroPanoramicMontage } from '../components/HeroPanoramicMontage';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1D1F]">
      {/* 1. Signature 4-Panel Panoramic Hero Montage */}
      <HeroPanoramicMontage
        badgeIcon={Heart}
        badgeText="COMMUNITY-ROOTED TRAVEL COLLECTIVE"
        title="About Dandeli Wilds"
        tagline="We are not an algorithm, a faceless travel portal, or a metro marketing desk. We are licensed Kali River white-water captains, Anshi forest trackers, and family homestay custodians who grew up swimming in these currents."
        bullets={[
          { icon: MapPin, text: 'Ganeshgudi & Dandeli, Karnataka' },
          { icon: Waves, text: 'Licensed Kali River Marshals since 2014' },
          { icon: ShieldCheck, text: 'Zero Middlemen • 100% Local Community' },
        ]}
        panels={[
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png', alt: 'River Guides on Kali River' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png', alt: 'Dandeli Rainforest Canopy' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_cottage_4K_faithful.png', alt: 'Local Family Homestay' },
          { image: 'https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png', alt: 'Kali River Valley' },
        ]}
      />

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* 1. Our Story */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
              Chapter 01 • Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1D1F]">
              Our Story: Born by the Kali River
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-light">
              <p>
                In 2014, three native river guides and a local homestay owner in Ganeshgudi noticed a troubling trend: large online travel aggregators were selling Dandeli trips as generic, hurried commodity packages. Travelers were being rushed into overcrowded rubber rafts, housed in concrete hotels far away from the river, and left without any understanding of the delicate rainforest ecosystem.
              </p>
              <p>
                We founded <strong>Dandeli Wilds</strong> with a simple, stubborn promise: to share our home exactly as we experience it. That meant introducing travellers to the living pulse of the river—waiting for the precise morning dam water release when rapids churn with optimal volume, identifying hornbill feeding trees in silence, and eating piping-hot Jolada Rotti made by our own families.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] shadow-sm text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F] block">12+</span>
                  <p className="text-[10px] text-stone-500 font-sans uppercase tracking-wider">Years on River</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] shadow-sm text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-[#2E6B68] block">18,000+</span>
                  <p className="text-[10px] text-stone-500 font-sans uppercase tracking-wider">Safe Descents</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] shadow-sm text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1F] block">100%</span>
                  <p className="text-[10px] text-stone-500 font-sans uppercase tracking-wider">Local Native Team</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#E5DFD7] shadow-sm">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988863/d2ce9490-3b38-45f2-883e-101f102eb22b.png"
                  alt="Native river captains and guides at Ganeshgudi"
                  className="w-full h-full object-cover brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-stone-500 font-sans italic text-center">
                Our river captains inspecting morning gear on the Kali riverbank
              </p>
            </div>
          </div>
        </section>

        {/* 2. Why Dandeli */}
        <section className="bg-[#F4EFEA] p-6 sm:p-10 rounded-3xl border border-[#E5DFD7] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-sans uppercase text-[#C25E3E] tracking-wider block font-medium">
                Chapter 02 • The Wilderness
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1F]">
                Why Dandeli is unlike anywhere else
              </h2>
              <div className="space-y-3 text-stone-700 text-xs sm:text-sm leading-relaxed font-sans font-light">
                <p>
                  Most hill stations in South India have been transformed into crowded commercial towns. Dandeli remains rugged because it is guarded by over 1,300 square kilometers of protected forest—the Dandeli Wildlife Sanctuary and Anshi National Park (together forming the Kali Tiger Reserve).
                </p>
                <p>
                  The Kali River is one of the few rivers in the country whose white water volume is sustained year-round by hydroelectric dam releases from Supa Dam. This creates reliable Class III and Class IV rapids even in months when other rivers across the continent run dry.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-[#E5DFD7] shadow-sm">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988975/7c6871cf-f09f-49dd-a861-b5e76c52736a.png"
                  alt="Kali River gorge in Dandeli"
                  className="w-full h-full object-cover brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-stone-500 font-sans italic text-center">
                The perennial Kali River gorge cutting through pristine Western Ghats forest
              </p>
            </div>
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
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-light">
            You cannot learn the Kali River from a manual. The river shifts with seasonal silt deposits, underwater basalt formations, and dam gate schedules:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                Water Release Timing
              </h4>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                We maintain direct phone communication with Supa power station engineers to verify water discharge timings before putting rafts on the river.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                Canopy Birding Corridors
              </h4>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                Our bird guides know which wild fig and berry trees are fruiting each week along the Ganeshgudi timber corridor, maximizing hornbill sightings.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                Homestay Partnerships
              </h4>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                We inspect cottage kitchens personally. You eat authentic regional food prepared by local families who treat you as personal houseguests.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] shadow-sm space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#1C1D1F]">
                Sanctuary Forest Quotas
              </h4>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                Safari vehicle entry into Anshi core zones is strictly capped by the forestry department. We secure genuine official permits in advance.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Safety: Our Non-Negotiable Foundation */}
        <section className="space-y-6 bg-[#1C1D1F] text-white p-6 sm:p-10 rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2E6B68]" />
                <span className="text-xs font-sans uppercase text-[#EAE3D8] tracking-wider font-medium">
                  Chapter 04 • Protocols
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Safety: Our Non-Negotiable Foundation
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                Adventure is only thrilling when safety is absolute. Over twelve years of operation, our river safety record is unblemished because we refuse to cut corners:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-sans">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Certified River Captains:</strong> Every raft is steered by a licensed captain with Swiftwater Rescue credentials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Independent Safety Kayakers:</strong> A dedicated single-kayak rescue marshal paddles alongside every multi-raft convoy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B68] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">CE 150N Flotation Gear:</strong> High-buoyancy jackets and high-impact white-water helmets tested annually.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-md">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png"
                  alt="Certified rafting captains guiding through white water"
                  className="w-full h-full object-cover brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] text-stone-400 font-sans italic text-center">
                CE-certified gear & rescue kayaker on every Kali descent
              </p>
            </div>
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
              className="w-full sm:w-auto min-h-[48px] py-3.5 px-8 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Plan Your Trip With Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#EAE3D8]" />
            </Link>
            <a
              href="https://wa.me/919481245890"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-h-[48px] py-3.5 px-6 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7] hover:bg-stone-100 text-[#1C1D1F] font-sans font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
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
