/**
 * Profitablerate ad slot config for the /free-halloween-coloring-pages landing page.
 *
 * Flip `enabled: true` and paste a slot's `scriptSrc` / `containerId` / `scriptId`
 * to turn a placeholder into a real ad. Ad code is only ever injected by components
 * that read this config on the Halloween page — never globally.
 */

export interface ProfitablerateSlot {
  readonly enabled?: boolean;
  readonly scriptSrc?: string;
  readonly containerId?: string;
  readonly scriptId?: string;
}

export const HALLOWEEN_AD_SLOTS = {
  top: {
    enabled: true,
    scriptSrc:
      'https://pl31807387.profitableratecpmnetwork.com/7f0a991091a5cf7039528314192d6e32/invoke.js',
    containerId: 'container-7f0a991091a5cf7039528314192d6e32',
    scriptId: 'pr-7f0a991091a5cf7039528314192d6e32',
  },
  mid: { enabled: false },
  bottom: { enabled: false },
} as const satisfies Record<'top' | 'mid' | 'bottom', ProfitablerateSlot>;
