import { FALL_ACTIVITY_PACK } from '../lib/posts';
import { PACK_PRICE } from '../lib/landing';
import { HALLOWEEN_PACK_IMAGE, HALLOWEEN_PACK_PRICE } from '../lib/halloweenPack';
import { CHRISTMAS_COVER_IMAGE, CHRISTMAS_LANDING_PATH } from '../lib/christmasLanding';

/**
 * Single source of truth for every sellable / free resource on the site.
 * The /store and /free-printables pages are rendered from these arrays.
 *
 * IMPORTANT: `href` must always point at an existing landing page that is
 * already shared on Pinterest or elsewhere — never rename or remove them.
 */
export interface Product {
  /** Stable identifier (also used as the URL path where one exists). */
  slug: string;
  /** Absolute path of the existing landing page (may include a #section anchor). */
  href: string;
  title: string;
  /** One-sentence description shown on the card. */
  tagline: string;
  /** e.g. "$5.99", "$3.99" or "Free". */
  priceLabel: string;
  ageRange: string;
  /** Optional corner ribbon, e.g. "New", "Best Seller", "Seasonal". */
  badge?: string;
  /** Small filter/summary chips shown on the card. */
  tags: string[];
  /** Cover image already used on the product landing page. */
  image: string;
  alt: string;
  /**
   * CSS aspect-ratio for the card image, e.g. "1792 / 2400" for portrait covers.
   * Defaults to "4 / 3" when omitted.
   */
  imageAspect?: string;
  /** Card button label (defaults per grid: "View Details" / "Get Free Download"). */
  ctaLabel?: string;
}

/** Paid products — rendered on /store. */
export const paidProducts: Product[] = [
  {
    slug: 'fall-preschool-activity-pack',
    href: '/fall-preschool-activity-pack',
    title: 'Fall Preschool Activity Pack',
    tagline:
      '58 print-and-go autumn pages covering coloring, tracing, counting 1–10, scissor skills, alphabet and Fall Bingo.',
    priceLabel: PACK_PRICE,
    ageRange: 'Ages 3–5',
    badge: 'Best Seller',
    tags: ['Fall', 'Preschool Pack', '58 Pages'],
    image: FALL_ACTIVITY_PACK.coverImage,
    alt: 'Printed Fall Preschool Activity Pack worksheets with crayons and autumn leaves',
  },
  {
    slug: 'halloween-preschool-activity-pack',
    href: '/halloween-preschool-activity-pack',
    title: 'Halloween Preschool Activity Pack',
    tagline:
      '26 low-prep Halloween pages with tracing, counting, matching, cut-and-paste crafts, patterns and coloring.',
    priceLabel: HALLOWEEN_PACK_PRICE,
    ageRange: 'Ages 3–5',
    badge: 'Seasonal',
    tags: ['Halloween', 'Preschool Pack', '26 Pages'],
    image: HALLOWEEN_PACK_IMAGE,
    alt: 'Halloween Preschool Activity Pack cover with playful pumpkin and ghost illustrations',
  },
];

/** Completely free resources — rendered on /free-printables. */
export const freeProducts: Product[] = [
  {
    slug: 'free-halloween-coloring-pages',
    href: '/free-halloween-coloring-pages',
    title: 'Free Halloween Coloring Pages',
    tagline:
      '10 spooky-cute coloring sheets with bold outlines—ghosts, pumpkins, witch cats, cauldrons and bats.',
    priceLabel: 'Free',
    ageRange: 'Ages 3–5',
    badge: 'Free',
    tags: ['Halloween', 'Coloring Pages', '10 Pages'],
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791883711/halloweenHeroImage.jpg',
    alt: 'Free printable Halloween coloring pages showing a friendly ghost, pumpkin and witch cat',
  },
  {
    slug: 'free-christmas-crafts-pack',
    href: CHRISTMAS_LANDING_PATH,
    title: 'Free Christmas Crafts Starter Pack',
    tagline: '6 easy Christmas crafts and printables for preschoolers.',
    priceLabel: 'Free',
    ageRange: 'Ages 3–5',
    badge: 'New',
    tags: ['Christmas', 'Crafts', '6 Pages'],
    image: CHRISTMAS_COVER_IMAGE,
    alt: 'Parent and preschooler doing the free Christmas printables together at a table',
    imageAspect: '1792 / 2400',
  },
  {
    slug: 'free-fall-printable-sample',
    href: '/blog/fall-activities-for-preschoolers#free-sample',
    title: 'Free Fall Printable Sample',
    tagline:
      'A 3-page sampler from the Fall Preschool Activity Pack so you can try the print-and-go style before you buy.',
    priceLabel: 'Free',
    ageRange: 'Ages 3–5',
    badge: 'Free Sample',
    tags: ['Fall', 'Free Sample', '3 Pages'],
    image: FALL_ACTIVITY_PACK.heroImage,
    alt: 'Preview of the free 3-page fall printable sample worksheets',
    ctaLabel: 'View Freebie',
  },
];
