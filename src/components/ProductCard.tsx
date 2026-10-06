import React from 'react';
import { Check } from 'lucide-react';
import { FALL_ACTIVITY_PACK, PAYHIP_PRODUCT_URL } from '../lib/posts';
import { CTAButton } from './CTAButton';

interface ProductCardProps {
  compact?: boolean;
  headingText?: string;
  ctaLabel?: string;
}

export function ProductCard({
  compact = false,
  headingText = 'Want everything in one print-and-go pack?',
  ctaLabel = 'Get the Fall Activity Pack',
}: ProductCardProps) {
  return (
    <section
      aria-label="Fall Preschool Activity Pack Product Highlight"
      className="bg-white border border-[#E6E0D4] rounded-2xl p-6 sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Product Image Column */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl bg-[#F3EFE6] border border-[#E6E0D4] aspect-[4/3]">
            <img
              src={FALL_ACTIVITY_PACK.coverImage}
              alt="58-page Fall Preschool Activity Pack printed sheets with crayons and autumn leaves"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-[#5C554E] font-mono-tabular">
            <span>58 Printable Pages</span>
            <span aria-hidden="true">·</span>
            <span>Ages 3–5</span>
            <span aria-hidden="true">·</span>
            <span>US Letter &amp; A4 PDF</span>
          </div>
        </div>

        {/* Product Details & Conversion Column */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="text-xs font-medium text-[#C85A17] mb-2">
            Fall Preschool Activity Pack · Ages 3–5 · Instant PDF
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight mb-3">
            {headingText}
          </h2>

          <p className="text-[#5C554E] text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            Skip hours of searching Pinterest for separate worksheets. Get all 58 developmentally sequenced autumn activities—covering coloring, fine-motor tracing, ten-frame counting, scissors practice, alphabet games, and Fall Bingo—in one cohesive, print-and-go bundle.
          </p>

          {/* Bullet Benefits */}
          <ul className="space-y-2.5 mb-6" aria-label="Activity pack benefits">
            {FALL_ACTIVITY_PACK.highlights.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#1E1B18]">
                <Check className="w-4 h-4 text-[#3F624D] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {!compact && (
            <div className="pt-4 pb-6 border-t border-[#E6E0D4]">
              <div className="text-xs font-semibold text-[#1E1B18] mb-2">
                Core Preschool Skills Included:
              </div>
              <p className="text-xs text-[#5C554E] leading-relaxed">
                {FALL_ACTIVITY_PACK.skillsIncluded.join(' · ')}
              </p>
            </div>
          )}

          {/* CTA + Mandatory Disclosure */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <CTAButton
              href={PAYHIP_PRODUCT_URL}
              variant="primary"
              size="lg"
              externalIcon
            >
              {ctaLabel} — {FALL_ACTIVITY_PACK.price}
            </CTAButton>
            <div className="text-xs text-[#5C554E] leading-snug">
              <p className="font-medium text-[#1E1B18]">This is a digital download.</p>
              <p>Instant PDF access via Payhip · Personal &amp; single-classroom use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
