import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  FALL_ACTIVITY_PACK,
  POPULAR_CATEGORIES,
  getAllPosts,
  PAYHIP_PRODUCT_URL,
} from '../src/lib/posts';
import { buildWebsiteJsonLd, usePageSEO } from '../src/lib/seo';
import { CTAButton } from '../src/components/CTAButton';
import { ProductCard } from '../src/components/ProductCard';
import { PostCard } from '../src/components/PostCard';
import { NewsletterForm } from '../src/components/NewsletterForm';
import { Link } from '../src/lib/router';

export default function HomePage() {
  const posts = getAllPosts();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  usePageSEO({
    title: 'Kids Printables | Coloring & Activities — Preschool Learning (Ages 3–5)',
    description:
      'Low-prep fall activities for preschoolers, free printable worksheets, fine motor tracing, counting games, and our 58-page Fall Preschool Activity Pack for ages 3–5.',
    canonicalPath: '/',
    ogType: 'website',
  });

  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Section 1: Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-medium text-[#C85A17] mb-3 font-mono-tabular">
              Kids Printables | Coloring &amp; Activities · Ages 3–5
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1E1B18] tracking-tight leading-[1.12] mb-5">
              Low-Prep Preschool Printables for Cozy, Screen-Free Learning
            </h1>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-7 max-w-xl">
              Created for busy parents, preschool teachers, and homeschool families. Turn morning baskets and classroom centers into joyful hands-on practice with our 58-page Fall Preschool Activity Pack.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
              <CTAButton
                href={PAYHIP_PRODUCT_URL}
                variant="primary"
                size="lg"
                externalIcon
              >
                Get the Fall Activity Pack
              </CTAButton>

              <CTAButton
                href="/blog/fall-activities-for-preschoolers"
                variant="secondary"
                size="lg"
                showArrow
              >
                Read the Fall Activities Blog Post
              </CTAButton>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5C554E] font-mono-tabular">
              <span>This is a digital download.</span>
              <span aria-hidden="true">·</span>
              <span>58 Printable Pages</span>
              <span aria-hidden="true">·</span>
              <span>Ages 3–5</span>
              <span aria-hidden="true">·</span>
              <span>Print &amp; Go PDF</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl bg-[#F3EFE6]">
                <img
                  src={FALL_ACTIVITY_PACK.heroImage}
                  alt="Autumn preschool printable worksheets for counting pumpkins, tracing leaves, and fine motor activities on a birch table"
                  referrerPolicy="no-referrer"
                  className="block w-full h-auto max-w-full"
                />
              </div>
              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E]">
                <span>Inside the Fall Preschool Activity Pack (Ages 3–5)</span>
                <Link
                  href="/blog/fall-activities-for-preschoolers#free-sample"
                  className="font-semibold text-[#3F624D] hover:underline whitespace-nowrap"
                >
                  Try the free 3-page sample →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Popular Categories Grid */}
      <section
        aria-labelledby="popular-categories-heading"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-medium text-[#3F624D] mb-1.5 font-mono-tabular">
              01. Developmental Skill Areas · Ages 3–5
            </div>
            <h2
              id="popular-categories-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight"
            >
              Popular Preschool Printable Categories
            </h2>
          </div>

          {/* Interactive category filter control */}
          <div
            role="group"
            aria-label="Highlight category focus"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F3EFE6] border border-[#E6E0D4] rounded-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedCategoryId('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategoryId === 'all'
                  ? 'bg-white text-[#1E1B18] shadow-xs font-semibold'
                  : 'text-[#5C554E] hover:text-[#1E1B18]'
              }`}
            >
              All 6 Categories
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryId('fine-motor')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategoryId === 'fine-motor'
                  ? 'bg-white text-[#1E1B18] shadow-xs font-semibold'
                  : 'text-[#5C554E] hover:text-[#1E1B18]'
              }`}
            >
              Fine Motor Focus
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryId('counting')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategoryId === 'counting'
                  ? 'bg-white text-[#1E1B18] shadow-xs font-semibold'
                  : 'text-[#5C554E] hover:text-[#1E1B18]'
              }`}
            >
              Math &amp; Counting
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_CATEGORIES.map((cat, idx) => {
            const isHighlighted =
              selectedCategoryId === 'all' || selectedCategoryId === cat.id;
            return (
              <div
                key={cat.id}
                className={`bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  isHighlighted
                    ? 'border-[#E6E0D4] opacity-100'
                    : 'border-[#E6E0D4]/60 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5C554E] font-mono-tabular mb-2">
                    <span>0{idx + 1}. Skill Track</span>
                    <span>{cat.count}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1E1B18] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F3EFE6] flex items-center justify-between text-xs">
                  <Link
                    href={`/blog/fall-activities-for-preschoolers#${cat.sectionAnchor}`}
                    className="font-semibold text-[#C85A17] hover:text-[#B04B0E] inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>See {cat.name} Ideas</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/blog?category=${encodeURIComponent(cat.filterTag)}`}
                    className="text-[#5C554E] hover:text-[#1E1B18] whitespace-nowrap"
                  >
                    Browse Blog
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Product Highlight Card (Fall Preschool Activity Pack) */}
      <section
        id="fall-pack"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]"
      >
        <div className="mb-6">
          <div className="text-xs font-medium text-[#C85A17] mb-1.5 font-mono-tabular">
            02. Featured Printable Bundle · 58 Pages · Ages 3–5
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight">
            Everything You Need for Fall Preschool Learning in One Download
          </h2>
        </div>

        <ProductCard
          headingText="Fall Preschool Activity Pack (58 Print-and-Go Pages)"
          ctaLabel="Get the Fall Activity Pack"
        />
      </section>

      {/* Section 4: Featured Blog Posts Section */}
      <section
        aria-labelledby="featured-blog-heading"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-medium text-[#3F624D] mb-1.5 font-mono-tabular">
              03. Free Activity Guides &amp; Printable Samplers
            </div>
            <h2
              id="featured-blog-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight"
            >
              Featured Preschool Activity Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#B04B0E] whitespace-nowrap"
          >
            <span>View All Blog Posts</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="lg:col-span-4 bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tabular text-[#3F624D] mb-2">
                Why Parents &amp; Teachers Love Our Packs
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1E1B18] mb-3">
                Designed by Early Childhood Educators for Real 3–5 Year Olds
              </h3>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
                Many printable worksheets online are too crowded or require advanced reading skills. Every page in our Fall Activity Pack uses uncluttered layouts, thick cutting lines, and visual instructions so preschoolers feel proud and capable.
              </p>
              <blockquote className="border-l-2 border-[#D99B26] pl-4 py-1 text-xs text-[#1E1B18] italic leading-relaxed mb-6">
                “I printed the 58-page Fall Pack on Sunday evening and placed five sheets in dry-erase sleeves for my 4-year-old’s morning basket. Zero prep all week, and his scissor confidence has grown so much!”
                <footer className="not-italic font-semibold text-[#5C554E] mt-1.5">
                  — Hannah M., Pre-K Teacher &amp; Homeschool Mom of 2
                </footer>
              </blockquote>
            </div>

            <CTAButton
              href="/blog/fall-activities-for-preschoolers"
              variant="secondary"
              size="md"
              showArrow
              className="w-full"
            >
              Read the 25 Fall Activities Guide
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
