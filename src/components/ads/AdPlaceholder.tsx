import React from 'react';

/**
 * Reserved-height placeholder box that reserves ad space to prevent CLS.
 * Shared visual language with the Halloween landing page ad slots.
 */
export function AdPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`flex items-center justify-center rounded-2xl border border-dashed border-[#D8D0C2] bg-[#F3EFE6] min-h-[160px] sm:min-h-[220px] ${className}`}
    >
      <span className="text-xs font-mono-tabular text-[#8A8178]">
        Ad placeholder
      </span>
    </div>
  );
}
