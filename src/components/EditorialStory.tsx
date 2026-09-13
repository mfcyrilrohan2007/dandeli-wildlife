import React from 'react';
import { Compass, Feather, Waves, Trees, Shield } from 'lucide-react';
import { DANDELI_FACTS } from '../data/dandeliData';

export const EditorialStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A2420] relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with generous negative space and refined typography */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#247565]">
            <Compass className="w-3.5 h-3.5" />
            <span>The Dandeli Sanctuary • Western Ghats</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0F2419] leading-[1.1]">
            Not a commercial hill station. <br />
            <span className="font-editorial italic font-normal text-[#247565]">
              An untamed river sanctuary where the forest commands the tempo.
            </span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Story Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Human-Voiced Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#4A5550]">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#163627]">
              Tucked into the rugged rainforest slopes of Karnataka’s Western Ghats, Dandeli does not offer paved mall roads or tourist crowds.
              Here, life is calibrated to the morning whistle of the Malabar Grey Hornbill and the thunderous rush of the Kali River as it surges past granite boulders.
            </p>

            <p>
              When you push your raft into the churning foam at Ganeshgudi, time slows down.
              Your paddle dips into mountain water so clear you can see the riverbed stones. Around you, ancient teak and bamboo trees form an emerald canopy that shields you from the noise of the outside world.
            </p>

            {/* Pull Quote Box with Earth Tones */}
            <div className="p-6 rounded-2xl bg-[#F2EDE4] border-l-4 border-[#247565] my-8 space-y-3">
              <blockquote className="font-editorial text-xl sm:text-2xl text-[#142C21] italic leading-snug">
                “In Dandeli, adventure isn’t an adrenaline rush you purchase in a queue. It’s an immersion. You smell the wet teak bark, feel the river’s pulse, and leave with soil on your shoes and calm in your chest.”
              </blockquote>
              <div className="flex items-center gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-[#247565] text-white flex items-center justify-center font-display text-xs font-bold">
                  MG
                </div>
                <div>
                  <div className="text-xs font-display font-bold uppercase tracking-wider text-[#163627]">
                    Mahesh Gaonkar
                  </div>
                  <div className="text-[11px] font-mono text-[#6A7870]">
                    Chief River Master & Naturalist, Dandeli Native
                  </div>
                </div>
              </div>
            </div>

            <p>
              We founded Dandeli Wilds with a straightforward promise: to connect travelers with the genuine soul of our homeland.
              We do not employ third-party booking agents. Every expedition is guided by our local village crew—young men and women who grew up fishing, swimming, and tracking in these valleys.
            </p>
          </div>

          {/* Right Column: Layered Photography & Real Dandeli Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="https://res.cloudinary.com/joyorpxh/image/upload/f_auto,q_auto,w_1200/v1788988959/cc6364c1-6675-432f-8d98-64c73cb38b99.png"
                alt="Dense teak and bamboo canopy of Dandeli Western Ghats"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300">
                  Dandeli Biosphere
                </span>
                <h4 className="font-display font-bold text-lg">
                  Kulgi Bamboo & Teak Shallows
                </h4>
                <p className="text-xs text-stone-200 line-clamp-2">
                  One of the densest biodiversity zones in peninsular India, harboring over 300 bird species and the shy black panther.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Accent Card (Asymmetrical Layout) */}
            <div className="hidden sm:flex absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-stone-200/80 max-w-[240px] items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#247565] flex items-center justify-center shrink-0">
                <Feather className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-display font-bold text-[#142C21]">
                  Hornbill Capital
                </div>
                <div className="text-[11px] text-[#55635C]">
                  4 rare hornbill species nest along our river corridors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Facts Row */}
        <div className="mt-20 pt-12 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {DANDELI_FACTS.map((fact, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="font-condensed text-4xl sm:text-5xl font-bold tracking-tight text-[#163627]">
                {fact.stat}
              </div>
              <div className="font-display text-sm font-bold uppercase tracking-wider text-[#247565]">
                {fact.label}
              </div>
              <p className="text-xs text-[#5E6B65] leading-relaxed">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
