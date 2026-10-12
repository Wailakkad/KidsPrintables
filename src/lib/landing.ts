import { PAYHIP_PRODUCT_URL, FREE_SAMPLE_PDF_URL } from './posts';

/**
 * Conversion constants for the /fall-preschool-activity-pack landing page.
 * Change CHECKOUT_URL / PACK_PRICE here to update every CTA on the page.
 */

/** Primary checkout URL (Payhip). Replace with your own checkout if needed. */
export const CHECKOUT_URL = PAYHIP_PRODUCT_URL;

/** Free sample PDF used by every "Try the Free Sample" CTA. */
export const SAMPLE_URL = FREE_SAMPLE_PDF_URL;

export const LANDING_PATH = '/fall-preschool-activity-pack';

export const PACK_PRICE = '$5.99';
export const PACK_PRICE_VALUE = '5.99';

export const NAV_CTA_LABEL = `Get the Fall Pack — ${PACK_PRICE}`;
export const HERO_CTA_LABEL = `Get Instant Download — ${PACK_PRICE}`;
export const MID_CTA_LABEL = `Get the Pack — ${PACK_PRICE}`;
export const FINAL_CTA_LABEL = `Buy Now & Download Instantly — ${PACK_PRICE}`;

/** TODO: replace with your real support/contact email. */
export const SUPPORT_EMAIL = 'support@example.com';
