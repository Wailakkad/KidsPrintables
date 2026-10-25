import React from 'react';
import { Printer, Gift, BookOpen, ArrowRight } from 'lucide-react';
import { freeProducts } from '../../src/data/products';
import { usePageSEO } from '../../src/lib/seo';
import { ProductGridCard } from '../../src/components/ProductGridCard';
import { CTAButton } from '../../src/components/CTAButton';
import { Link } from '../../src/lib/router';

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: BookOpen,
    title: 'Pick a freebie',
    text: 'Choose a coloring pack or printable sample.',
  },
  {
    step: '02',
    icon: Printer,
    title: 'Print it',
    text: 'US Letter PDF, ready in minutes at home.',
  },
  {
    step: '03',
    icon: Gift,
    title: 'Play & learn',
    text: 'Low-prep fun for ages 3–5, no screens needed.',
  },
];

export default function FreePrintablesPage() {
  usePageSEO({
    title: 'Free Kids Printables Library – Coloring Pages & Preschool Activities',
    description:
      'Free preschool printables, coloring pages and free printable activities for kids ages 3–5. Download instant PDF samples and mini-packs for home, classroom and homeschool.',
    canonicalPath: '/free-printables',
    ogType: 'website',
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Hero */}
      <header className="max-w-3xl mb-10">
        <div className="text-xs font-medium text-[#3F624D] mb-2 font-mono-tabular">
          Free Resources · Coloring Pages, Samples &amp; Mini-Packs
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1E1B18] tracking-tight mb-3">
          Free Printables Library
        </h1>
        <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
          A growing library of free coloring pages, printable samples, and mini-packs for parents
          and preschool teachers—download, print, and use them today at home or in the classroom.
        </p>

        <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-[#3F624D]/10 border border-[#3F624D]/20 px-4 py-2">
          <span className="text-xs font-semibold text-[#3F624D]">100% free</span>
          <span aria-hidden="true" className="text-[#8A8178]">·</span>
          <span className="text-xs text-[#5C554E]">No checkout</span>
          <span aria-hidden="true" className="text-[#8A8178]">·</span>
          <span className="text-xs text-[#5C554E]">Instant PDF download</span>
          <span aria-hidden="true" className="text-[#8A8178]">·</span>
          <span className="text-xs text-[#5C554E]">Ages 3–5</span>
        </div>
      </header>

      {/* Free product grid */}
      <section aria-labelledby="free-grid-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-medium text-[#3F624D] mb-1.5 font-mono-tabular">
              01. Download Now · Free
            </div>
            <h2
              id="free-grid-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight"
            >
              Free Coloring Pages &amp; Samples
            </h2>
          </div>
          <Link
            href="/store"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#B04B0E] whitespace-nowrap"
          >
            <span>Need a full activity pack?</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {freeProducts.map((product) => (
            <ProductGridCard key={product.slug} product={product} variant="free" />
          ))}

          {/* Cross-link card to the paid shop */}
          <aside className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tabular text-[#C85A17] mb-2">Want more?</div>
              <h3 className="font-display text-xl font-semibold text-[#1E1B18] mb-3">
                Ready for 26–58 Page Activity Packs?
              </h3>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
                Our paid packs bundle full seasons of tracing, counting, cutting, and coloring
                pages—same style as the freebies, just a lot more of them.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-[#E6E0D4]">
              <CTAButton href="/store" variant="primary" size="md" showArrow className="w-full">
                Visit the Printables Shop
              </CTAButton>
            </div>
          </aside>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-12 sm:mt-16 pt-8 border-t border-[#E6E0D4]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step}>
              <div className="flex items-center gap-2 mb-1.5">
                <item.icon className="w-4 h-4 text-[#3F624D]" aria-hidden="true" />
                <span className="text-xs font-mono-tabular text-[#8A8178]">{item.step}</span>
                <span className="text-sm font-semibold text-[#1E1B18]">{item.title}</span>
              </div>
              <p className="text-sm text-[#5C554E] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#5C554E] leading-relaxed max-w-3xl">
          All free printables are digital PDF downloads for personal family use or single-classroom
          use. Looking for seasonal worksheets? Browse the{' '}
          <Link href="/store" className="font-semibold text-[#C85A17] hover:text-[#B04B0E]">
            Printables Shop
          </Link>{' '}
          or read more ideas on the{' '}
          <Link href="/blog" className="font-semibold text-[#C85A17] hover:text-[#B04B0E]">
            blog
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
