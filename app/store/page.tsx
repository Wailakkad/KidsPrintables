import React from 'react';
import { Download, Printer, ShieldCheck, Sparkles } from 'lucide-react';
import { paidProducts } from '../../src/data/products';
import { usePageSEO } from '../../src/lib/seo';
import { ProductGridCard } from '../../src/components/ProductGridCard';
import { CTAButton } from '../../src/components/CTAButton';
import { Link } from '../../src/lib/router';

const STORE_PERKS = [
  {
    icon: Download,
    label: 'Instant download',
    detail: 'PDF right after checkout',
  },
  {
    icon: Printer,
    label: 'Print at home',
    detail: 'US Letter & A4 friendly',
  },
  {
    icon: ShieldCheck,
    label: 'Ages 3–5 approved',
    detail: 'Low-prep, classroom tested',
  },
];

export default function StorePage() {
  usePageSEO({
    title: 'Printables Shop | Kids Printables – Preschool Activity Packs & Worksheets',
    description:
      'Shop instant-download preschool printables, activity packs and holiday crafts for ages 3–5. Low-prep PDF activity packs for parents, teachers and homeschool families.',
    canonicalPath: '/store',
    ogType: 'website',
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Hero */}
      <header className="max-w-3xl mb-10">
        <div className="text-xs font-medium text-[#C85A17] mb-2 font-mono-tabular">
          Instant Download · Ages 3–5 · Print &amp; Go
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1E1B18] tracking-tight mb-3">
          Printables Shop
        </h1>
        <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
          Instant-download preschool printables, activity packs, and holiday crafts for ages 3–5.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {STORE_PERKS.map((perk) => (
            <div
              key={perk.label}
              className="inline-flex items-center gap-2 rounded-xl border border-[#E6E0D4] bg-white px-3 py-2"
            >
              <perk.icon className="w-4 h-4 text-[#3F624D] shrink-0" aria-hidden="true" />
              <span className="text-xs text-[#1E1B18] font-medium">{perk.label}</span>
              <span className="text-xs text-[#8A8178] hidden sm:inline">· {perk.detail}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Paid product grid */}
      <section aria-labelledby="store-grid-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-medium text-[#3F624D] mb-1.5 font-mono-tabular">
              01. All Activity Packs
            </div>
            <h2
              id="store-grid-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight"
            >
              Preschool Activity Packs
            </h2>
          </div>
          <Link
            href="/free-printables"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#B04B0E] whitespace-nowrap"
          >
            <span>Prefer something free?</span>
            <Sparkles className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {paidProducts.map((product) => (
            <ProductGridCard key={product.slug} product={product} variant="paid" />
          ))}

          {/* Cross-link card keeps the 3-column rhythm and points to the free library */}
          <aside className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tabular text-[#3F624D] mb-2">
                Not ready to buy?
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1E1B18] mb-3">
                Start With Our Free Printables
              </h3>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
                Grab a free coloring pack or a 3-page activity sample first—no checkout required.
                Every freebie uses the same print-and-go style as our full packs.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-[#E6E0D4]">
              <CTAButton href="/free-printables" variant="secondary" size="md" showArrow className="w-full">
                Browse Free Printables
              </CTAButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Store assurances */}
      <section className="mt-12 sm:mt-16 pt-8 border-t border-[#E6E0D4]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STORE_PERKS.map((perk) => (
            <div key={perk.label}>
              <div className="flex items-center gap-2 mb-1.5">
                <perk.icon className="w-4 h-4 text-[#C85A17]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[#1E1B18]">{perk.label}</span>
              </div>
              <p className="text-sm text-[#5C554E] leading-relaxed">{perk.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#5C554E] leading-relaxed max-w-3xl">
          <strong className="text-[#1E1B18]">All products are digital downloads (PDF).</strong>{' '}
          No physical items ship. Licensed for personal family use or single-classroom use by the
          original purchaser.
        </p>
      </section>
    </div>
  );
}
