import React from 'react';
import { Product } from '../data/products';
import { Link } from '../lib/router';
import { CTAButton } from './CTAButton';

interface ProductGridCardProps {
  product: Product;
  variant?: 'paid' | 'free';
}

/**
 * Shared product tile used by the /store and /free-printables grids.
 * Top: cover image · Middle: title, tagline, age range · Bottom: price + CTA.
 */
export function ProductGridCard({ product, variant = 'paid' }: ProductGridCardProps) {
  const isFree = variant === 'free';
  const ctaLabel = product.ctaLabel ?? (isFree ? 'Get Free Download' : 'View Details');

  return (
    <article className="group flex h-full flex-col bg-white border border-[#E6E0D4] rounded-2xl overflow-hidden shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={product.href}
        ariaLabel={`View ${product.title}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#F3EFE6] border-b border-[#E6E0D4]"
      >
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="block w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide shadow-xs ${
              isFree ? 'bg-[#3F624D] text-white' : 'bg-[#1E1B18] text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {product.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mb-3" aria-label={`${product.title} categories`}>
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg bg-[#F3EFE6] border border-[#E6E0D4] px-2 py-0.5 text-[11px] font-medium text-[#5C554E]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <h3 className="font-display text-xl font-semibold text-[#1E1B18] leading-snug mb-2 group-hover:text-[#C85A17] transition-colors">
          <Link href={product.href}>{product.title}</Link>
        </h3>

        <p className="text-sm text-[#5C554E] leading-relaxed mb-3">{product.tagline}</p>

        <p className="text-xs text-[#8A8178] font-mono-tabular">{product.ageRange}</p>

        <div className="mt-auto pt-4 border-t border-[#F3EFE6] flex items-center justify-between gap-3">
          {isFree ? (
            <span className="inline-flex items-center rounded-full bg-[#3F624D]/10 text-[#3F624D] px-3 py-1 text-sm font-semibold">
              {product.priceLabel}
            </span>
          ) : (
            <span className="font-display text-lg font-semibold text-[#1E1B18]">
              {product.priceLabel}
            </span>
          )}

          <CTAButton href={product.href} variant="primary" size="sm">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
