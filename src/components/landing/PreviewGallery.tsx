import React from 'react';

interface PreviewItem {
  src: string;
  caption: string;
  alt: string;
}

/**
 * Swap `src` paths for real page scans/mockups whenever you have them —
 * the placeholder SVGs live in public/images/preview/.
 */
const PREVIEW_ITEMS: PreviewItem[] = [
  {
    src: '/images/preview/tracing-practice.svg',
    caption: 'Fine-motor tracing + pre-writing practice',
    alt: 'Sample page with dashed tracing paths for pre-writing practice',
  },
  {
    src: '/images/preview/counting-numbers.svg',
    caption: 'Counting & number matching (1–10)',
    alt: 'Sample page with pumpkin counting and number matching from 1 to 10',
  },
  {
    src: '/images/preview/cut-and-paste.svg',
    caption: 'Cut-and-paste activities with big pieces',
    alt: 'Sample cut-and-paste page with large dashed shapes for safe cutting',
  },
  {
    src: '/images/preview/fall-games.svg',
    caption: 'Fall games (Bingo, I‑Spy, memory)',
    alt: 'Sample Fall Bingo game board page from the activity pack',
  },
];

export function PreviewGallery() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {PREVIEW_ITEMS.map((item, index) => (
        <figure key={item.src} className="min-w-0">
          <div className="bg-white border border-[#E6E0D4] rounded-xl p-2 sm:p-2.5 shadow-sm transition-shadow hover:shadow-md">
            <img
              src={item.src}
              alt={item.alt}
              loading={index > 1 ? 'lazy' : 'eager'}
              className="block w-full h-auto rounded-lg"
            />
          </div>
          <figcaption className="mt-2.5 text-xs sm:text-sm text-[#5C554E] leading-snug">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
