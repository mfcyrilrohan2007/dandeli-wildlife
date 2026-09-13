import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenEnquiry: (source?: string) => void;
  isVisible?: boolean;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenEnquiry,
  isVisible = true,
}) => {
  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#18191B]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl transition-transform duration-300"
      style={{
        paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))',
      }}
    >
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        {/* WhatsApp / Call Direct Link */}
        <a
          href="https://wa.me/919481245890?text=Hello%20Dandeli%20Wilds%2C%20I%20am%20planning%20a%20trip%20to%20Dandeli"
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-h-[46px] px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-stone-200 flex items-center justify-center gap-2 active:scale-[0.97] transition-all duration-150 text-xs font-mono font-medium interactive-tap"
          title="Direct WhatsApp & Call Support"
        >
          <div className="w-5 h-5 rounded-full bg-[#2E6B68]/40 text-[#EAE3D8] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <span className="truncate">WhatsApp / Call</span>
        </a>

        {/* Primary Plan Your Trip CTA */}
        <button
          type="button"
          onClick={() => onOpenEnquiry('Sticky Mobile Bar CTA')}
          className="flex-1 min-h-[46px] px-4 py-2 rounded-xl bg-[#2E6B68] hover:bg-[#235452] text-white font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.97] transition-all duration-150 cursor-pointer interactive-tap"
        >
          <span>PLAN TRIP</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2]" />
        </button>
      </div>
    </aside>
  );
};
