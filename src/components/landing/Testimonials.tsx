import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  attribution: string;
}

/**
 * PLACEHOLDER TESTIMONIALS — replace with verified customer reviews
 * (and real names/roles) before launch.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '“Exactly what I needed for my Pre‑K center time—print and done.”',
    attribution: '— Preschool Teacher',
  },
  {
    quote:
      '“My 4‑year‑old stayed engaged, and I loved the mix of games and learning pages.”',
    attribution: '— Parent',
  },
  {
    quote:
      '“Perfect for homeschool mornings when I need something structured but fun.”',
    attribution: '— Homeschool Parent',
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {TESTIMONIALS.map((item) => (
        <figure
          key={item.attribution}
          className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-[#D99B26] fill-[#D99B26]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base text-[#1E1B18] leading-relaxed">
              {item.quote}
            </blockquote>
          </div>
          <figcaption className="mt-4 text-xs font-semibold text-[#5C554E] font-mono-tabular">
            {item.attribution}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
