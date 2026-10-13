import React, { useEffect } from 'react';

/**
 * AdSense client ID. Vite only exposes VITE_* variables to the client bundle.
 * Set VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX in .env to enable ads.
 * When unset, AdSlot renders a harmless placeholder instead of throwing.
 */
const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

let adsenseScriptRequested = false;

/** Injects the AdSense script once, only when a client ID is configured. */
export function ensureAdsenseScript() {
  if (!ADSENSE_CLIENT || adsenseScriptRequested) return;
  if (document.querySelector('script[data-adsbygoogle-loader]')) {
    adsenseScriptRequested = true;
    return;
  }
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.setAttribute('data-adsbygoogle-loader', '');
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
  adsenseScriptRequested = true;
}

type AdFormat = 'auto' | 'rectangle' | 'leaderboard';

interface AdSlotProps {
  /** AdSense slot ID (data-ad-slot). */
  slot: string;
  /** Reserves layout height to prevent CLS. */
  format?: AdFormat;
  className?: string;
}

const HEIGHT_CLASS: Record<AdFormat, string> = {
  auto: 'min-h-[250px]',
  rectangle: 'min-h-[280px]',
  leaderboard: 'min-h-[90px] sm:min-h-[110px]',
};

export function AdSlot({ slot, format = 'rectangle', className = '' }: AdSlotProps) {
  const hasClient = Boolean(ADSENSE_CLIENT);

  useEffect(() => {
    if (!hasClient) return;
    ensureAdsenseScript();
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad script blocked or not ready — fail silently.
    }
  }, [hasClient, slot]);

  if (!hasClient) {
    return (
      <div
        role="complementary"
        aria-label="Advertisement"
        className={`flex items-center justify-center rounded-2xl border border-dashed border-[#D8D0C2] bg-[#F3EFE6] ${HEIGHT_CLASS[format]} ${className}`}
      >
        <span className="text-xs font-mono-tabular text-[#8A8178]">Ad placeholder</span>
      </div>
    );
  }

  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`flex items-center justify-center ${HEIGHT_CLASS[format]} ${className}`}
    >
      <ins
        className="adsbygoogle block w-full"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format === 'leaderboard' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      />
    </div>
  );
}
