import React from 'react';

interface PackageCardMetadataProps {
  badge?: string;
  duration?: string;
  className?: string;
}

/**
 * Parses package duration like "2 Days / 1 Night" into natural editorial travel structure:
 * "2 Days  ·  1 Night" with proportional numerals and an understated centered dot separator.
 */
export const parseEditorialDuration = (rawDuration?: string) => {
  if (!rawDuration) return null;
  const parts = rawDuration.split(/\s*\/\s*/);
  if (parts.length === 2) {
    return {
      days: parts[0].trim(),
      nights: parts[1].trim(),
    };
  }
  return { single: rawDuration.trim() };
};

export const PackageCardMetadata: React.FC<PackageCardMetadataProps> = ({
  badge,
  duration,
  className = '',
}) => {
  const durationInfo = parseEditorialDuration(duration);

  return (
    <div
      className={`absolute top-3 sm:top-3.5 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 pointer-events-none z-10 ${className}`}
    >
      {/* Editorial Travel Label: Warm muted terracotta printed-magazine tag */}
      {badge ? (
        <span
          className="inline-flex items-center font-manrope font-bold text-[10px] sm:text-[11.5px] text-[#FAF7F2] tracking-[0.035em] uppercase px-2.5 sm:px-3 py-1 sm:py-[6.5px] rounded-[7px] select-none whitespace-nowrap shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
          style={{ backgroundColor: '#9E4E32' }}
        >
          {badge}
        </span>
      ) : (
        <span />
      )}

      {/* Clean Editorial Duration: Proportional numerals, no clock icon, natural centered dot */}
      {durationInfo && (
        <div
          className="inline-flex items-center font-manrope font-semibold text-[12px] sm:text-[13.5px] leading-none text-[#FAF7F2] tracking-[-0.01em] whitespace-nowrap shrink-0 select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
        >
          {'single' in durationInfo ? (
            <span>{durationInfo.single}</span>
          ) : (
            <>
              <span>{durationInfo.days}</span>
              <span
                className="mx-1.5 opacity-60 font-normal text-[10px] sm:text-[11px] select-none"
                aria-hidden="true"
              >
                ·
              </span>
              <span>{durationInfo.nights}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
