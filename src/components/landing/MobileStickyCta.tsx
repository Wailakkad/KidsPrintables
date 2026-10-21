import React from 'react';
import { CTAButton } from '../CTAButton';
import { CHECKOUT_URL, PACK_PRICE } from '../../lib/landing';

/**
 * Mobile-only sticky bottom conversion bar (button + price).
 * `body.lp-sticky-cta` (see src/index.css) keeps page content clear of it.
 * Optional props let other pack pages reuse it (defaults = Fall pack).
 */
interface MobileStickyCtaProps {
  checkoutUrl?: string;
  price?: string;
  buttonLabel?: string;
  ariaLabel?: string;
}

export function MobileStickyCta({
  checkoutUrl = CHECKOUT_URL,
  price = PACK_PRICE,
  buttonLabel = 'Get the Fall Pack',
  ariaLabel = 'Purchase Fall Preschool Activity Pack',
}: MobileStickyCtaProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-[#E6E0D4] bg-white/95 backdrop-blur-xs px-4 py-2.5 shadow-[0_-4px_16px_rgba(30,27,24,0.07)]"
      role="region"
      aria-label={ariaLabel}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-[#1E1B18] leading-tight font-mono-tabular">
            {price}
          </div>
          <div className="text-[11px] text-[#5C554E] leading-tight mt-0.5">
            Instant PDF download
          </div>
        </div>

        <CTAButton
          href={checkoutUrl}
          variant="primary"
          size="sm"
          externalIcon
          className="shrink-0"
        >
          {buttonLabel}
        </CTAButton>
      </div>
    </div>
  );
}
