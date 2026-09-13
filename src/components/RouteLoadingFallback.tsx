import React from 'react';

/**
 * Lightweight, non-intrusive route transition fallback.
 * Uses a thin top-edge progress pulse and subtle skeleton backdrop
 * to guarantee instantaneous tactile feedback without layout disruption.
 */
export const RouteLoadingFallback: React.FC = () => {
  return (
    <div className="flex-1 w-full min-h-[60vh] flex flex-col items-center justify-start py-12 px-4 sm:px-6">
      {/* Sleek top edge indeterminate pulse */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#2E6B68]/20 z-50 overflow-hidden">
        <div className="h-full bg-[#2E6B68] animate-pulse w-full" />
      </div>

      {/* Lightweight, zero-shift content skeleton */}
      <div className="max-w-5xl w-full space-y-6 animate-pulse opacity-40">
        <div className="h-8 bg-stone-200 rounded-lg w-1/3 max-w-xs" />
        <div className="h-4 bg-stone-200 rounded-md w-2/3 max-w-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="h-64 bg-stone-200/80 rounded-2xl" />
          <div className="h-64 bg-stone-200/80 rounded-2xl hidden sm:block" />
          <div className="h-64 bg-stone-200/80 rounded-2xl hidden lg:block" />
        </div>
      </div>
    </div>
  );
};
