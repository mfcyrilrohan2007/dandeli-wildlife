import React from 'react';
import {
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Trees,
  Waves,
  Users,
  Eye,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface AboutUsProps {
  onOpenEnquiry: (preselectedItem?: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-32 bg-[#FAF7F2] text-[#14231B] relative overflow-hidden">
      {/* Decorative Subtle Background Texture / Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#285E47]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-24 lg:space-y-32">
        
        {/* HERO SECTION: Authentic, warm & human */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5DFD5] text-[#285E47] text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>The Native Team • Dandeli, Karnataka</span>
          </div>

          <h1 className="font-condensed text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#0D2117] leading-[1.05]">
            KNOW THE PEOPLE BEHIND YOUR DANDELI EXPERIENCE
          </h1>

          <p className="text-lg sm:text-2xl text-[#2F4539] font-sans font-light leading-relaxed max-w-3xl mx-auto italic">
            "We don’t just sell trips to Dandeli. We know the place, the river, the forests and the experiences that make a visit worth remembering."
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-stone-500 uppercase tracking-wider">
            <span>Born on the Kali River</span>
            <span>•</span>
            <span>Local Naturalists & River Masters</span>
            <span>•</span>
            <span>Direct Community Roots</span>
          </div>
        </div>

        {/* HERO IMAGE SHOWCASE: Authentic photography of Dandeli guides & landscape */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Main Primary Image: Local Guides on River Deck */}
          <div className="md:col-span-7 rounded-3xl overflow-hidden shadow-xl bg-stone-200 relative min-h-[360px] sm:min-h-[460px] group">
            <img
              src="/images/local-guides.jpg"
              alt="Local naturalists and guides on the Kali river deck in Dandeli"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                Native Coordinates • Ganeshgudi Riverbank
              </span>
              <p className="text-sm font-sans text-stone-200">
                Our forest naturalists and river crew live here year-round, tracking dam discharge and canopy seasons.
              </p>
            </div>
          </div>

          {/* Secondary Stack: River Briefing & Wildlife */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-stone-200 relative min-h-[220px] group">
              <img
                src="/images/river-briefing.jpg"
                alt="River rafting crew and travelers preparing on the Kali riverbank"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block">
                  River Captains & Safety Crew
                </span>
                <p className="text-xs font-sans text-stone-200">
                  Every rapid run is navigated by certified river masters with rescue kayakers.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl bg-stone-200 relative min-h-[220px] group">
              <img
                src="/images/hornbill-wildlife.jpg"
                alt="Hornbill wildlife in Dandeli canopy"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block">
                  Western Ghats Canopy
                </span>
                <p className="text-xs font-sans text-stone-200">
                  Home to all 4 species of South Indian hornbills and rich bio-corridors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: OUR STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#285E47]">
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter 01</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0D2117] leading-none">
              OUR STORY
            </h2>
            <div className="h-1 w-16 bg-[#285E47] rounded-full" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#293B32] font-sans text-base sm:text-lg leading-relaxed">
            <p>
              We didn’t start this as a boardroom business or a venture-backed tour marketplace. We grew up along the Kali River in the forested borderlands of Uttara Kannada. As kids, we swam in the quiet backwater shallows, learned to spot crocodile sunning spots from a safe distance, and listened for the heavy beating wings of Great Pied Hornbills in the tall fig trees.
            </p>
            <p>
              When visitors first began trickling into Dandeli in search of white-water rafting and jungle safaris, they often ended up dealing with generic travel brokers hundreds of miles away in Bengaluru or Mumbai. Those brokers had never paddled through the <em>Bison Surge</em> rapid, didn't know which resort actually had hot water running on chilly mornings, and treated Dandeli as just another commodity on a checklist.
            </p>
            <p>
              More than a decade ago, a small group of local river kayakers, birding naturalists, and homestay families came together with a clear resolve: <strong>to organize Dandeli travel from within Dandeli</strong>. Today, we remain exactly that—a tight-knit team of native coordinators who personally test every raft route, audit every lodge, and greet our guests like old friends arriving at our home river.
            </p>
          </div>
        </div>

        {/* SECTION 2: WHY DANDELI */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F2318] text-white space-y-8 relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <Trees className="w-3.5 h-3.5" />
              <span>Chapter 02</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              WHY DANDELI
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
              Dandeli is unlike anywhere else in Peninsular India. It is not a manicured colonial tea estate or a crowded tourist hill station. It is a raw, breathing forest and river corridor that demands genuine presence.
            </p>
          </div>

          {/* 3 Pillars of Dandeli's Rare Magic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                A Living River Engine
              </h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Fed by the Western Ghats catchment and governed by scheduled Supa Dam releases, the Kali River offers the only sustained Class III-IV white-water rapids in Southern India almost year-round.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                The Hornbill Capital
              </h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                One of the very few habitats where all four species of South Indian hornbills—Great Pied, Malabar Pied, Malabar Grey, and Indian Grey—nest in the old-growth fruit-bearing canopy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                Pristine Quiet & Clean Skies
              </h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Because there are no industrial city lights or highway thoroughfares, the night skies reveal dense star fields and nocturnal soundscapes of cicadas and flowing water.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHY TRAVEL WITH US */}
        <div className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#285E47]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Chapter 03</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0D2117] leading-none">
              WHY TRAVEL WITH US
            </h2>
            <p className="text-[#384F43] text-base sm:text-lg font-sans leading-relaxed">
              We know travel planning can feel overwhelming with inflated promises and hidden caveats. Here is how we operate differently:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Reason 1 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7E2D8] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBF4EE] text-[#285E47] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#0D2117]">
                  You Speak Directly to Locals, Not a Call Center
                </h3>
              </div>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                When you enquire, you don't get a scripted telemarketer in a distant city. You talk directly with coordinators who physically live in Dandeli and Ganeshgudi. We know if a road had a tree fall this morning or which stretch of river has the highest water levels today.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7E2D8] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBF4EE] text-[#285E47] flex items-center justify-center">
                  <Waves className="w-4 h-4" />
                </div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#0D2117]">
                  Real-Time Dam Timetable Coordination
                </h3>
              </div>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                White-water rafting depends on water discharge from Supa Dam upstream. Other agencies book travelers blindly only to cancel when water levels drop. We coordinate with the dam authorities daily to sequence your activities when rapids are at peak thrill.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7E2D8] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBF4EE] text-[#285E47] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#0D2117]">
                  Honest, No-Nonsense Recommendations
                </h3>
              </div>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                If a resort has 40 steep stone steps that would be tough for your grandmother, we will tell you upfront and suggest a level cottage instead. If monsoon rains make a trail muddy or if a safari gate is closed for wildlife calving, we tell you the truth.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7E2D8] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBF4EE] text-[#285E47] flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-condensed text-2xl font-bold uppercase text-[#0D2117]">
                  Direct Community Economy
                </h3>
              </div>
              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                Your money doesn't disappear into distant corporate overheads. We hire native boatmen, certified local naturalists, organic farmsteads, and family homestays. When you travel with us, your presence genuinely sustains the forest villages of Dandeli.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: OUR LOCAL KNOWLEDGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#285E47]">
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter 04</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0D2117] leading-none">
              OUR LOCAL KNOWLEDGE
            </h2>
            <p className="text-[#384F43] text-sm sm:text-base font-sans leading-relaxed">
              Local knowledge is not a slogan—it is the accumulation of hundreds of early mornings on the river and deep walks through the teak undergrowth.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#285E47] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-stone-700 font-sans">
                  <strong>Reading River Rapids:</strong> Knowing how water surges through the <em>Stag Head</em> and <em>Adi's Beard</em> rapids at 9:00 AM vs 1:30 PM.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#285E47] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-stone-700 font-sans">
                  <strong>Hornbill Nesting Routes:</strong> Knowing the exact fruiting ficus trees where Malabar Pied Hornbills congregate before dawn.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#285E47] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-stone-700 font-sans">
                  <strong>Seasonal Forest Windows:</strong> Knowing when post-monsoon waterfalls are roaring clear without heavy silt runoff.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#285E47] mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-stone-700 font-sans">
                  <strong>Authentic Regional Dining:</strong> Guiding you to the best village kitchens for hot <em>akki rotti</em>, bamboo shoot pickle, and fresh wild honey.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Pair on Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-stone-300 h-80 relative group">
              <img
                src="/images/nature-walks.jpg"
                alt="Local naturalist guiding a forest walk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white">
                Quiet reserve footpaths
              </span>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg bg-stone-300 h-80 relative group">
              <img
                src="/images/kali-kayak.jpg"
                alt="Kayaking on calm Kali River water"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white">
                Supa backwater dawn paddling
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 5: SAFETY & SUPPORT */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ECE7DE] border border-[#DDD6C9] space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#285E47]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Chapter 05</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0D2117] leading-none">
              SAFETY & LOCAL SUPPORT
            </h2>
            <p className="text-stone-700 text-sm sm:text-base font-sans leading-relaxed">
              Adventure without rigorous safety is negligence. The Kali River is powerful, and the Western Ghats are a wild ecosystem. We adhere to non-negotiable safety standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/80 border border-[#DDD6C9] space-y-2.5">
              <div className="flex items-center gap-2 text-[#285E47] font-mono text-xs uppercase font-bold tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified River Masters</span>
              </div>
              <p className="text-xs text-stone-700 font-sans leading-relaxed">
                All white-water expeditions are piloted by certified river captains with international rescue qualifications. A dedicated safety kayaker paddles ahead through all major Class III and IV rapids.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-[#DDD6C9] space-y-2.5">
              <div className="flex items-center gap-2 text-[#285E47] font-mono text-xs uppercase font-bold tracking-wider">
                <Award className="w-4 h-4" />
                <span>CE-Approved River Gear</span>
              </div>
              <p className="text-xs text-stone-700 font-sans leading-relaxed">
                We use high-buoyancy CE-certified life jackets and hard-shell white-water helmets. Every piece of equipment is checked daily for seam integrity and harness retention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-[#DDD6C9] space-y-2.5">
              <div className="flex items-center gap-2 text-[#285E47] font-mono text-xs uppercase font-bold tracking-wider">
                <Phone className="w-4 h-4" />
                <span>24x7 Ground Contact</span>
              </div>
              <p className="text-xs text-stone-700 font-sans leading-relaxed">
                From the moment your train or flight lands until you return home, you have the direct personal mobile number of a native Dandeli coordinator on your WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: WHAT WE BELIEVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#285E47]">
              <Heart className="w-3.5 h-3.5" />
              <span>Chapter 06</span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0D2117] leading-none">
              WHAT WE BELIEVE
            </h2>
            <div className="h-1 w-16 bg-[#285E47] rounded-full" />
          </div>

          <div className="lg:col-span-8 space-y-5 text-[#293B32] font-sans text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] space-y-2">
              <h3 className="font-condensed text-xl font-bold uppercase text-[#0D2117]">
                1. Leave the Forest & River Cleaner Than You Found It
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                We enforce a zero single-use plastic ethic on all our water expeditions and trail walks. Our team routinely runs voluntary river cleanup paddles along the Supa reservoir banks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] space-y-2">
              <h3 className="font-condensed text-xl font-bold uppercase text-[#0D2117]">
                2. Respect Wildlife Corridors & Quiet Hours
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Wild animals do not operate on human schedules. We do not chase animals for photos, we do not support late-night amplified DJ parties in jungle buffers, and we honor strict forest department entry protocols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] space-y-2">
              <h3 className="font-condensed text-xl font-bold uppercase text-[#0D2117]">
                3. True Hospitality is Built on Trust, Not Transactions
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                We believe travel should feel human. We want you to return home from Dandeli with tired muscles, calm minds, memories of river spray, and local friends you can message whenever you want to visit again.
              </p>
            </div>
          </div>
        </div>

        {/* SIMPLE, COMPELLING CTA: "Let's Plan Your Dandeli Trip" */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0D2016] text-white text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Direct Local Consultation
            </span>
            <h2 className="font-condensed text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              LET’S PLAN YOUR DANDELI TRIP
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-sans">
              Tell us who is traveling, how many days you have, and what kind of pace you enjoy. We’ll design an honest, grounded itinerary that fits your group.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => onOpenEnquiry('About Us - Let\'s Plan Your Dandeli Trip')}
              className="w-full sm:w-auto min-h-[48px] py-4 px-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#091510] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Let's Plan Your Dandeli Trip</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919481245890?text=Hello%20Dandeli%20team%2C%20I%20read%20your%20story%20and%20would%20like%20to%20plan%20a%20trip"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-h-[48px] py-4 px-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="text-[11px] font-mono text-stone-400 pt-2">
            No booking fees • Direct local rates • Real-time dam level checks
          </div>
        </div>

      </div>
    </section>
  );
};
