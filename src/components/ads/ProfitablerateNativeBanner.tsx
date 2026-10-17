import React, { useEffect } from 'react';
import type { ProfitablerateSlot } from '../../config/halloweenAds';

/**
 * Profitablerate CPM banner.
 *
 * Renders a reserved-height container div first, then injects the network's
 * invoke.js programmatically in useEffect (once per scriptId) so the script is
 * guaranteed to find its container and never runs twice.
 */
export function ProfitablerateNativeBanner({
  scriptSrc,
  containerId,
  scriptId,
  className = '',
}: ProfitablerateSlot & { className?: string }) {
  useEffect(() => {
    if (!scriptSrc || !containerId || !scriptId) return;

    // Guard: one script element per scriptId, ever.
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptSrc;
    document.body.appendChild(script);

    return () => {
      // Keep the injected script (network relies on it); nothing to tear down.
    };
  }, [scriptSrc, containerId, scriptId]);

  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`min-h-[160px] sm:min-h-[220px] ${className}`}
    >
      <div id={containerId} className="min-h-[160px] sm:min-h-[220px]" />
    </div>
  );
}
