import React from 'react';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import {
  getPostBySlug,
  FALL_ACTIVITY_PACK,
  PAYHIP_PRODUCT_URL,
} from '../../../src/lib/posts';
import { buildBlogPostingJsonLd, usePageSEO } from '../../../src/lib/seo';
import { CTAButton } from '../../../src/components/CTAButton';
import { ProductCard } from '../../../src/components/ProductCard';
import { CalloutBox } from '../../../src/components/CalloutBox';
import { TableOfContents } from '../../../src/components/TableOfContents';
import { NewsletterForm } from '../../../src/components/NewsletterForm';
import { Link } from '../../../src/lib/router';

interface BlogPostPageProps {
  slug?: string;
}

export default function BlogPostPage({
  slug = 'fall-activities-for-preschoolers',
}: BlogPostPageProps) {
  const post = getPostBySlug(slug) || getPostBySlug('fall-activities-for-preschoolers')!;

  usePageSEO({
    title: `${post.title} | Kids Printables`,
    description: post.metaDescription,
    canonicalPath: `/blog/${post.slug}`,
    ogType: 'article',
  });

  const jsonLd = buildBlogPostingJsonLd(post);

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* JSON-LD Structured Data for BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Internal Navigation Links */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5C554E] mb-6">
        <Link href="/" className="hover:text-[#1E1B18] inline-flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Home</span>
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/blog" className="hover:text-[#1E1B18]">
          Blog
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[#1E1B18] font-medium truncate">
          25 Easy Fall Activities for Preschoolers
        </span>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mb-8 sm:mb-10">
        {/* Unboxed clean metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C554E] font-mono-tabular mb-3">
          <span className="font-semibold text-[#C85A17]">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.ageRange}</span>
          <span aria-hidden="true">·</span>
          <span>Low-Prep Print &amp; Go</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.datePublished}>Updated October 2026</time>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E1B18] tracking-tight leading-[1.15] mb-5">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#1E1B18] leading-relaxed bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-5 sm:p-6">
          {post.introParagraph}
        </p>
      </header>

      {/* Featured Image */}
      <div className="mb-10 sm:mb-12 bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4">
        <div className="overflow-hidden rounded-xl bg-[#F3EFE6] aspect-[16/9]">
          <img
            src={post.featuredImage}
            alt="25 Easy Fall Activities for Preschoolers (Ages 3-5) — printable autumn worksheets, coloring pages, and counting games"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E]">
          <span>
            Topics covered: {post.tags.join(' · ')}
          </span>
          <a
            href={PAYHIP_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C85A17] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>Skip straight to the 58-page Fall Activity Pack</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Main Two-Column Reading Layout (Wide on Desktop with Sticky TOC, Single-Column on Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Desktop Sticky Sidebar: Table of Contents + Quick Pack Card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-20 space-y-6 order-1 lg:order-2">
          <TableOfContents sections={post.sections} />

          <div className="hidden lg:block bg-white border border-[#E6E0D4] rounded-2xl p-5">
            <div className="text-xs font-mono-tabular text-[#C85A17] mb-1">
              58 Pages · Ages 3–5 · Instant PDF
            </div>
            <h2 className="font-display text-lg font-semibold text-[#1E1B18] mb-2">
              Want All 58 Fall Printable Pages Ready Today?
            </h2>
            <p className="text-xs text-[#5C554E] leading-relaxed mb-4">
              Download the complete Fall Preschool Activity Pack and print unlimited copies for your home or classroom.
            </p>
            <CTAButton
              href={PAYHIP_PRODUCT_URL}
              variant="primary"
              size="md"
              externalIcon
              className="w-full"
            >
              Get the Fall Activity Pack ($7)
            </CTAButton>
            <p className="text-[11px] text-[#5C554E] mt-2 text-center">
              This is a digital download.
            </p>
          </div>
        </aside>

        {/* Primary Article Body */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          {post.sections.map((section, sectionIdx) => (
            <React.Fragment key={section.id}>
              <section
                id={section.id}
                className="scroll-mt-20 pb-10 mb-10 border-b border-[#E6E0D4]"
              >
                <div className="text-xs font-mono-tabular text-[#3F624D] mb-1.5">
                  Section 0{sectionIdx + 1} · {section.skillFocus}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight mb-2">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed mb-6">
                  {section.summary}
                </p>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.number}
                      className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6"
                    >
                      <div className="flex items-baseline gap-2.5 mb-2">
                        <span className="font-mono-tabular text-xs font-semibold text-[#C85A17]">
                          Idea #{item.number}
                        </span>
                        <span aria-hidden="true" className="text-xs text-[#8A8178]">·</span>
                        <span className="text-xs text-[#5C554E]">{section.title}</span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1E1B18] mb-2">
                        {item.number}. {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Free Printable Sample Callout Box after Section 3 (Counting & Numbers) */}
              {sectionIdx === 2 && <CalloutBox variant="sample" />}

              {/* Mid-Post CTA Block after Section 5 (Patterns) */}
              {sectionIdx === 4 && (
                <aside
                  aria-label="Mid-post Fall Activity Pack promotion"
                  className="my-10 bg-white border-2 border-[#C85A17]/30 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="text-xs font-mono-tabular font-semibold text-[#C85A17] mb-1.5">
                        Save Hours of Prep Time · Ages 3–5
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2">
                        Love these low-prep fall ideas? Get the full 58-page pack!
                      </h3>
                      <p className="text-sm text-[#5C554E] leading-relaxed mb-3">
                        Includes ready-to-print worksheets for all 9 skill areas—coloring, line tracing, ten-frame counting, shadow matching, patterns, letters, scissor strips, and Fall Bingo.
                      </p>
                      <p className="text-xs text-[#5C554E]">
                        <strong>Disclosure:</strong> This is a digital download. Instant PDF delivery via Payhip.
                      </p>
                    </div>

                    <div className="shrink-0">
                      <CTAButton
                        href={PAYHIP_PRODUCT_URL}
                        variant="primary"
                        size="lg"
                        externalIcon
                      >
                        Get the full 58-page pack
                      </CTAButton>
                    </div>
                  </div>
                </aside>
              )}
            </React.Fragment>
          ))}

          {/* Teacher & Parent Printing Tip Callout */}
          <CalloutBox
            variant="tip"
            title="How to Make Your Fall Printables Last All Season"
            description="Slide your favorite tracing paths, ten-frame counting mats, and shadow matching sheets into clear dry-erase pocket sleeves. Pair with low-odor dry-erase markers or playdough balls so your 3- to 5-year-old can revisit the activities every morning without re-printing!"
          />

          {/* Required Product Promo Section / End CTA with Benefits List */}
          <div id="full-activity-pack" className="scroll-mt-20 my-12">
            <ProductCard
              headingText="Want everything in one print-and-go pack?"
              ctaLabel="Get the Full 58-Page Fall Pack"
            />
          </div>

          {/* FAQ Section */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="scroll-mt-20 pt-10 mt-12 border-t border-[#E6E0D4]"
          >
            <div className="text-xs font-mono-tabular text-[#3F624D] mb-1.5">
              Common Questions · Parents &amp; Teachers
            </div>
            <h2
              id="faq-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight mb-6"
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {post.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white border border-[#E6E0D4] rounded-2xl p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* End Conversion Banner */}
          <section
            aria-label="Final call to action"
            className="mt-12 bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 sm:p-8"
          >
            <div className="text-xs font-mono-tabular text-[#C85A17] mb-1.5">
              Ready to Print &amp; Play?
            </div>
            <h2 className="font-display text-2xl font-semibold text-[#1E1B18] mb-3">
              Download the 58-Page Fall Preschool Activity Pack Today
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-[#1E1B18]">
              {FALL_ACTIVITY_PACK.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#3F624D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <CTAButton
                href={PAYHIP_PRODUCT_URL}
                variant="primary"
                size="lg"
                externalIcon
              >
                Get the Full 58-Page Pack — {FALL_ACTIVITY_PACK.price}
              </CTAButton>
              <span className="text-xs text-[#5C554E]">
                This is a digital download. Instant PDF access after checkout.
              </span>
            </div>
          </section>

          {/* Related Posts Section */}
          <section
            aria-labelledby="related-posts-heading"
            className="mt-14 pt-10 border-t border-[#E6E0D4]"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono-tabular text-[#5C554E] mb-1">
                  Keep Exploring
                </div>
                <h2
                  id="related-posts-heading"
                  className="font-display text-2xl font-semibold text-[#1E1B18]"
                >
                  Related Preschool Guides
                </h2>
              </div>
              <Link
                href="/"
                className="text-sm font-semibold text-[#C85A17] hover:text-[#B04B0E] whitespace-nowrap"
              >
                ← Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono-tabular text-[#3F624D] mb-2">
                    More Coming Soon · Fine Motor Skills
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-2">
                    15 Easy Scissor Cutting Activities for Preschoolers (Ages 3–5)
                  </h3>
                  <p className="text-sm text-[#5C554E] leading-relaxed">
                    Step-by-step snipping strips, playdough cutting invitations, and autumn collage crafts for beginning scissor users.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F3EFE6] text-xs text-[#5C554E] font-mono-tabular">
                  Publishing Soon · Included in the 58-Page Fall Pack
                </div>
              </div>

              <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono-tabular text-[#3F624D] mb-2">
                    More Coming Soon · Early Math
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-2">
                    10 Hands-On Ten-Frame Counting Games for Morning Baskets
                  </h3>
                  <p className="text-sm text-[#5C554E] leading-relaxed">
                    How to pair printable ten-frame mats with acorns, pumpkin seeds, and mini erasers to build number sense 1–10.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F3EFE6] text-xs text-[#5C554E] font-mono-tabular">
                  Publishing Soon · Included in the 58-Page Fall Pack
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Opt-in */}
          <div className="mt-12">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </article>
  );
}
