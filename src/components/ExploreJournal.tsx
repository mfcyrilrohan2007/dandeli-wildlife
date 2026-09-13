import React from 'react';
import { ArrowUpRight, Compass, Sparkles, MapPin } from 'lucide-react';

interface ExploreJournalProps {
  onSelectCategory?: (categoryTitle: string) => void;
  onOpenEnquiry: (categoryTitle: string) => void;
}

export const ExploreJournal: React.FC<ExploreJournalProps> = ({ onSelectCategory, onOpenEnquiry }) => {
  const handleExplore = (targetId: string, title: string) => {
    if (onSelectCategory) {
      onSelectCategory(title);
    }
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onOpenEnquiry(title);
    }
  };

  return (
    <section id="explore" className="py-24 sm:py-32 bg-[#F6F2EC] text-[#1A2420] relative overflow-hidden">
      {/* Journal Texture & Watermark */}
      <div className="absolute top-12 right-12 select-none pointer-events-none opacity-[0.03] font-serif text-[180px] leading-none text-stone-900 hidden lg:block">
        DANDELI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Journal Header */}
        <div className="border-b border-stone-300/70 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
              <Compass className="w-3.5 h-3.5" />
              <span>Field Journal • Chapter I — The Western Ghats</span>
            </div>
            <h2 className="font-condensed text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#0F2419]">
              EXPLORE DANDELI
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
              Six ways to step off the highway and let the wilderness take over. Open a chapter, follow the river, and lose track of the hours.
            </p>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-stone-500 space-y-1">
            <div>Coordinates: 15.2427° N, 74.6247° E</div>
            <div className="text-emerald-700">Elevation: 473m • Kali River Basin</div>
          </div>
        </div>

        {/* Editorial Layout: Varied, Asymmetrical Proportions Echoing a Travel Journal */}
        <div className="space-y-10">
          {/* Row 1: 01 River Adventures (Expansive Feature) */}
          <div
            onClick={() => handleExplore('#activities', '01 — River Adventures')}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-stone-900/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 relative h-80 sm:h-[420px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_rafting_4k.png"
                  alt="Rafting on the Kali River rapids"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-4 left-4 lg:hidden text-white">
                  <span className="font-mono text-xs text-emerald-300">01 / EXPEDITION</span>
                  <h3 className="font-condensed text-2xl uppercase font-bold">River Adventures</h3>
                </div>
              </div>

              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#FCFBF8]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <span className="font-mono text-xs tracking-widest uppercase text-emerald-800 font-bold">
                      01 — River Adventures
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">Class III–IV</span>
                  </div>

                  <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Follow the Kali River through the forest.
                  </h3>

                  <p className="text-sm text-stone-600 font-sans leading-relaxed">
                    Nine kilometers of foaming, untamed white water flanked by 60-foot teak canopies.
                    Carved by continuous mountain current, it is Karnataka’s rawest river run.
                  </p>

                  <div className="pt-2 text-xs font-serif italic text-stone-500">
                    "When the raft enters the first drop at Stanley’s Fall, the sound of the world drops away."
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Explore River Expeditions</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 02 Jungle & Wildlife (Tall Portrait) + 03 Camping (Balanced Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 02 — Jungle & Wildlife */}
            <div
              onClick={() => handleExplore('#activities', '02 — Jungle & Wildlife')}
              className="lg:col-span-6 group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988775/fbdd8834-14ff-4f93-8f6b-bd85566424e3.png"
                  alt="Great Indian Hornbill perched in Dandeli rainforest canopy"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                    02 — Jungle & Wildlife
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-6 bg-[#FCFBF8]">
                <div className="space-y-3">
                  <span className="text-xs font-serif italic text-emerald-800">Canopy Bird Trails & Ancient Flora</span>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Wake up to birdsong instead of an alarm.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Over 300 bird species nest here, including all four South Indian hornbill species.
                    Walk along old timber lines where the forest floor smells of moist bark and wild cinnamon.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Explore Bird Trails</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* 03 — Camping */}
            <div
              onClick={() => handleExplore('#activities', '03 — Camping')}
              className="lg:col-span-6 group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_resort_cabins_4K_faithful.png"
                  alt="Riverside camping tents under starry forest sky in Dandeli"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                    03 — Camping
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-6 bg-[#FCFBF8]">
                <div className="space-y-3">
                  <span className="text-xs font-serif italic text-emerald-800">Under the Western Ghats Stars</span>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Trade headlights for a crackling wood fire by the river.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Pitched on sandy riverbanks and secluded fruit orchards. Spend nights listening to the
                    gurgle of water, crickets in the bamboo thickets, and woodsmoke curling into the stars.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Explore Night Camps</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 04 Waterfalls & 05 Safaris (Asymmetrical Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 04 — Waterfalls */}
            <div
              onClick={() => handleExplore('#activities', '04 — Waterfalls')}
              className="lg:col-span-5 group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988950/14fb0c52-22f0-4fe7-8898-8ec073fa8ff1.png"
                  alt="Syntheri Rocks 300ft monolithic limestone canyon and waterfall"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                    04 — Waterfalls & Canyons
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4 bg-[#FCFBF8] flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-serif italic text-emerald-800">300-Foot Monolith & Kaner River</span>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Listen to water cutting ancient granite.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Syntheri Rocks is a breathtaking monolithic rock formation hollowed out over thousands of years
                    by the furious Kaner River, home to thousands of rock pigeons and wild honeybee colonies.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Discover Canyon Treks</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* 05 — Safaris */}
            <div
              onClick={() => handleExplore('#activities', '05 — Safaris')}
              className="lg:col-span-7 group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788989523/dandeli_tiger_4K.png"
                  alt="Anshi National Park open top 4x4 jungle safari in Dandeli"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                    05 — Safaris
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4 bg-[#FCFBF8] flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-serif italic text-emerald-800">Kali Tiger Reserve & Anshi Corridor</span>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Go deeper into the jungle.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Early morning open-top 4x4 tracks traversing dense semi-evergreen forests. Spot black panthers,
                    spotted deer herds, Malabar giant squirrels, and wild elephants feeding at natural salt licks.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Explore Safari Tracks</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: 06 Nature Experiences (Wide Panoramic Invitation to Slow Down) */}
          <div
            onClick={() => handleExplore('#resorts', '06 — Nature Experiences')}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-stone-300/80 hover:border-emerald-700/50 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988909/84aece0b-ced0-4594-89d9-afd465f38c98.png"
                  alt="Dawn coracle boat ride and kayaking on calm Kali river"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                    06 — Nature Experiences & Stays
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#FCFBF8]">
                <div className="space-y-3">
                  <span className="text-xs font-serif italic text-emerald-800">
                    The Art of Doing Nothing By The River
                  </span>
                  <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase text-[#0F2419] tracking-tight">
                    Slow down on still morning waters.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Dandeli isn't just about adrenaline; it’s about quiet coracle boat floats on misty dawn waters,
                    resting in teak-pole treehouses, and watching kingfishers dive while sipping hot local filter coffee.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#0F2419] group-hover:text-emerald-700">
                  <span>Discover Quiet Stays & Floats</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
