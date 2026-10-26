/**
 * Conversion constants for the /free-christmas-crafts-pack landing page.
 * The page reuses the same Google Apps Script email capture as every other freebie
 * (see src/lib/emailCapture.ts) and unlocks this PDF on success.
 */

/** Route path of the Christmas freebie landing page. */
export const CHRISTMAS_LANDING_PATH = '/free-christmas-crafts-pack';

/** Public URL of the freebie PDF (file lives in public/downloads/). */
export const CHRISTMAS_PDF_URL = '/downloads/Free-Christmas-Crafts-Starter-Pack-Ages-3-5.pdf';

/** Filename used for the `download` attribute. */
export const CHRISTMAS_PDF_FILENAME = 'Free-Christmas-Crafts-Starter-Pack-Ages-3-5.pdf';

/**
 * Value sent as the hidden `source` field so each signup can be traced
 * back to this freebie inside the Google Sheet.
 */
export const CHRISTMAS_EMAIL_SOURCE = 'Free Christmas Crafts Starter Pack';

/** Number of pages in the freebie PDF. */
export const CHRISTMAS_PAGES_COUNT = 6;

/** Cover artwork shown in the hero card and the Free Printables hub card. */
export const CHRISTMAS_COVER_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793002884/cover_free_chritmas.jpg';
