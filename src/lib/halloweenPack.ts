import { FREE_SAMPLE_PDF_URL } from './posts';

/**
 * Conversion constants for the /halloween-preschool-activity-pack landing page.
 * Change HALLOWEEN_CHECKOUT_URL / HALLOWEEN_PACK_PRICE here to update every CTA on the page.
 */

/** Primary checkout URL (Payhip) for the Halloween pack. */
export const HALLOWEEN_CHECKOUT_URL = 'https://payhip.com/b/Ptizn';

/** Free sample PDF used by every "Try the Free Sample" CTA (same behaviour as the Fall pack page). */
export const HALLOWEEN_SAMPLE_URL = FREE_SAMPLE_PDF_URL;

export const HALLOWEEN_PACK_PATH = '/halloween-preschool-activity-pack';

export const HALLOWEEN_PACK_PAGES = 26;
export const HALLOWEEN_PACK_PRICE = '$3.99';
export const HALLOWEEN_PACK_PRICE_VALUE = '3.99';

export const HALLOWEEN_NAV_CTA_LABEL = `Get the Halloween Pack — ${HALLOWEEN_PACK_PRICE}`;
export const HALLOWEEN_HERO_CTA_LABEL = 'Get the Halloween Pack';
export const HALLOWEEN_MID_CTA_LABEL = `Get the Pack — ${HALLOWEEN_PACK_PRICE}`;
export const HALLOWEEN_FINAL_CTA_LABEL = `Buy Now & Download Instantly — ${HALLOWEEN_PACK_PRICE}`;

/** Cover/hero image used for the page hero card and Product JSON-LD. */
export const HALLOWEEN_PACK_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619611/newheroimg.jpg';

/** Illustration shown on the left of the "How it works" section. */
export const HALLOWEEN_HOW_IT_WORKS_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619611/How_it_works.jpg';
