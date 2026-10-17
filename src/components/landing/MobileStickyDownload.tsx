import React from 'react';
import { CTAButton } from '../CTAButton';
import { PAGES_COUNT } from '../../lib/halloweenLanding';

/**
 * Mobile-only sticky bottom download bar for the free Halloween landing page.
 * `body.lp-sticky-cta` (see src/index.css) keeps page content clear of it.
 */
export function MobileStickyDownload({
  onDownloadClick,
}: {
  onDownloadClick?: () => void;
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-[#E6E0D4] bg-white/95 backdrop-blur-xs px-4 py-2.5 shadow-[0_-4px_16px_rgba(30,27,24,0.07)]"
      role="region"
      aria-label="Download free Halloween coloring pages"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-[#1E1B18] leading-tight">
            Free
          </div>
          <div className="text-[11px] text-[#5C554E] leading-tight mt-0.5">
            {PAGES_COUNT}-page PDF
          </div>
        </div>

        <CTAButton
          onClick={onDownloadClick}
          variant="primary"
          size="sm"
          className="shrink-0"
        >
          Download Free PDF
        </CTAButton>
      </div>
    </div>
  );
}
