import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DetailBackButtonProps {
  label: string;
  fallbackPath: string;
  className?: string;
  variant?: 'dark-hero' | 'light';
}

export const DetailBackButton: React.FC<DetailBackButtonProps> = ({
  label,
  fallbackPath,
  className = '',
  variant = 'dark-hero',
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Smart context-aware navigation:
    // If the user came from within the SPA session (React Router history state index > 0),
    // use navigate(-1) so their previous scroll position and route are naturally restored.
    // If they arrived directly from a bookmark or external link, safely fall back to the listing page.
    if (typeof window !== 'undefined' && window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  const isDark = variant === 'dark-hero';

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label={label}
      className={`inline-flex items-center gap-2.5 min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.98] cursor-pointer text-xs sm:text-[13px] font-manrope font-semibold tracking-[-0.01em] group select-none shadow-xs ${
        isDark
          ? 'bg-black/45 hover:bg-black/65 text-stone-100 hover:text-white border border-white/20 backdrop-blur-md'
          : 'bg-white hover:bg-stone-50 text-[#1C1D1F] hover:text-[#2E6B68] border border-[#E5DFD7] shadow-sm'
      } ${className}`}
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 shrink-0" />
      <span>{label}</span>
    </button>
  );
};
