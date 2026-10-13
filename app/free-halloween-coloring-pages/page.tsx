import React, { useEffect } from 'react';
import {
  Check,
  GraduationCap,
  Heart,
  Home,
  Printer,
  School,
  Sunrise,
  Zap,
} from 'lucide-react';
import { usePageSEO } from '../../src/lib/seo';
import { CTAButton } from '../../src/components/CTAButton';
import { AdSlot } from '../../src/components/landing/AdSlot';
import { MobileStickyDownload } from '../../src/components/landing/MobileStickyDownload';
import { FaqAccordion, FaqItem } from '../../src/components/landing/FaqAccordion';
import {
  HALLOWEEN_LANDING_PATH,
  PAGES_COUNT,
  PDF_URL,
} from '../../src/lib/halloweenLanding';

const PURPLE = '#6D4D8F';
const PURPLE_TINT_BG = '#EFE8F6';
const PURPLE_TINT_BORDER = '#D9CBE8';

const BENEFITS = [
  {
    icon: Heart,
    title: 'Cute & kid-friendly',
    text: 'Spooky-cute designs (not scary).',
  },
  {
    icon: Printer,
    title: 'Easy to print',
    text: 'Clean bold outlines + big spaces for coloring.',
  },
  {
    icon: Zap,
    title: 'Instant fun',
    text: 'Download, print, and start coloring today.',
  },
];

const INSIDE_BULLETS = [
  'Ghost, pumpkin, witch + cat, cauldron, bats & moon (and more)',
  'Bold outlines, big coloring spaces (great for kids)',
  'Printable PDF (US Letter)',
];

const PREVIEWS = [
  {
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791848085/Cute_ghost_coloring_page.jpg',
    caption: 'Cute ghost coloring page',
    alt: 'Cute ghost Halloween coloring page with bold outlines',
  },
  {
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791848086/Happy_pumpkin_coloring_page.jpg',
    caption: 'Happy pumpkin coloring page',
    alt: 'Happy jack-o-lantern pumpkin Halloween coloring page',
  },
  {
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791848086/Witch_cat_coloring_page.jpg',
    caption: 'Witch + cat coloring page',
    alt: 'Cute black cat wearing a witch hat coloring page',
  },
  {
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791848086/Cauldron_potion_coloring_page.jpg',
    caption: 'Cauldron potion coloring page',
    alt: 'Witch cauldron potion Halloween coloring page with bubbles',
  },
  {
    src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791848086/Bats_moon_coloring_page.jpg',
    caption: 'Bats & moon coloring page',
    alt: 'Bats flying around a crescent moon Halloween coloring page',
  },
];

const GREAT_FOR = [
  { icon: Home, text: 'Quiet time / screen-free time at home' },
  { icon: School, text: 'Preschool & Pre-K centers and small groups' },
  { icon: GraduationCap, text: 'Homeschool preschool lessons and themed units' },
  { icon: Sunrise, text: 'Morning work, early finishers, sub plans' },
];

const PRINT_TIPS = [
  'Print at 100% / Actual size',
  'Works best single-sided',
  'Use crayons, markers, or colored pencils',
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this a physical product?',
    answer: 'No—this is a free digital download (PDF).',
  },
  {
    question: 'What paper size is it?',
    answer: 'US Letter (8.5×11).',
  },
  {
    question: 'Are these coloring pages for kids?',
    answer: 'Yes—cute, simple designs that are kid-friendly.',
  },
  {
    question: 'Can I print more than once?',
    answer: 'Yes—print as many times as you like for personal/classroom use.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No—just click download.',
  },
];

const SECONDARY_BTN_CLASS =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] bg-white text-[#1E1B18] border border-[#D8D0C2] hover:bg-[#F3EFE6] hover:border-[#C2B8A6] active:translate-y-[1px] px-6 py-3.5 text-base min-h-[48px]';

export default function FreeHalloweenColoringPagesPage() {
  usePageSEO({
    title: `Free Printable Halloween Coloring Pages for Kids (PDF, ${PAGES_COUNT} Pages)`,
    description:
      'Cute + easy free Halloween coloring pages for kids. Instant PDF download—US Letter pages with ghosts, pumpkins, witch cats, cauldrons & bats. Print at home or classroom.',
    canonicalPath: HALLOWEEN_LANDING_PATH,
    ogType: 'website',
  });

  useEffect(() => {
    document.body.classList.add('lp-sticky-cta');
    return () => document.body.classList.remove('lp-sticky-cta');
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-4 font-mono-tabular"
              style={{ color: PURPLE, backgroundColor: PURPLE_TINT_BG, borderColor: PURPLE_TINT_BORDER, border: '1px solid' }}
            >
              <span>FREE printable PDF</span>
              <span aria-hidden="true" className="text-[#8A8178]">·</span>
              <span>Kids activity</span>
            </div>

            <h1 className="font-display text-[1.75rem] leading-[1.14] sm:text-4xl lg:text-5xl font-semibold text-[#1E1B18] tracking-tight mb-4">
              Free Printable Halloween Coloring Pages for Kids
            </h1>

            <p className="text-lg sm:text-xl text-[#1E1B18] font-medium leading-snug mb-3">
              Cute + easy Halloween coloring pages you can print in seconds (PDF
              download).
            </p>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-6 max-w-xl">
              Perfect for quiet time, classrooms, parties, and screen-free
              fun—simple designs that kids love.
            </p>

            <div
              id="download"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4 scroll-mt-24"
            >
              <CTAButton href={PDF_URL} variant="primary" size="lg">
                Download Free PDF
              </CTAButton>
              <a href="#preview" className={SECONDARY_BTN_CLASS}>
                Preview the Pages
              </a>
            </div>

            <p className="text-xs text-[#5C554E] leading-relaxed mb-2 font-mono-tabular max-w-xl">
              Instant download • US Letter 8.5×11 • {PAGES_COUNT} pages • No
              physical item shipped
            </p>

            <p className="text-xs text-[#5C554E]">
              <a href={PDF_URL} className="font-semibold text-[#3F624D] hover:underline">
                Or download the PDF directly
              </a>
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl bg-[#F3EFE6]">
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791883711/halloweenHeroImage.jpg"
                  alt="10 free Halloween coloring pages for kids: cute ghost holding a pumpkin candy bag, witch cat, bubbling cauldron, and moon designs"
                  referrerPolicy="no-referrer"
                  className="block h-auto max-w-full"
                />
              </div>
              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E]">
                <span>{PAGES_COUNT} free coloring pages · US Letter PDF</span>
                <a
                  href="#preview"
                  className="font-semibold text-[#3F624D] hover:underline whitespace-nowrap"
                >
                  Preview the pages →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AD: after hero ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
        <AdSlot slot="halloween-after-hero" format="leaderboard" />
      </div>

      {/* ============ BENEFITS ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-3"
                style={{ backgroundColor: PURPLE_TINT_BG }}
              >
                <benefit.icon className="w-[18px] h-[18px]" style={{ color: PURPLE }} aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-semibold text-[#1E1B18] mb-1.5">
                {benefit.title}
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                {benefit.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div
            className="text-xs font-medium mb-2 font-mono-tabular"
            style={{ color: PURPLE }}
          >
            01. Free printable
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            What's inside the free printable
          </h2>
        </div>

        <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 sm:p-8 max-w-3xl">
          <ul className="space-y-3 mb-6" aria-label="What's included">
            {INSIDE_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <Check
                  className="w-4.5 h-4.5 mt-0.5 shrink-0"
                  style={{ color: PURPLE }}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base text-[#1E1B18] leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <CTAButton href={PDF_URL} variant="primary" size="md">
            Download Free PDF
          </CTAButton>
        </div>
      </section>

      {/* ============ PREVIEW ============ */}
      <section
        id="preview"
        aria-labelledby="preview-heading"
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 scroll-mt-24"
      >
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div
            className="text-xs font-medium mb-2 font-mono-tabular"
            style={{ color: PURPLE }}
          >
            02. Preview
          </div>
          <h2
            id="preview-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight"
          >
            Preview the Halloween coloring pages
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-start">
          {PREVIEWS.map((item, index) => (
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
      </section>

      {/* ============ AD: mid-page ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <AdSlot slot="halloween-mid-page" format="rectangle" />
      </div>

      {/* ============ GREAT FOR ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div
            className="text-xs font-medium mb-2 font-mono-tabular"
            style={{ color: PURPLE }}
          >
            03. Where it fits
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            Great for home, classroom, and parties
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {GREAT_FOR.map((item) => (
            <li
              key={item.text}
              className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-5 flex items-start gap-3.5"
            >
              <item.icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: PURPLE }} aria-hidden="true" />
              <span className="text-sm text-[#1E1B18] leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ HOW TO PRINT ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div
            className="text-xs font-medium mb-2 font-mono-tabular"
            style={{ color: PURPLE }}
          >
            04. How to print
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            Printing tips
          </h2>
        </div>

        <div
          className="rounded-2xl border px-5 py-4 max-w-3xl"
          style={{ backgroundColor: PURPLE_TINT_BG, borderColor: PURPLE_TINT_BORDER }}
        >
          <ul className="space-y-2">
            {PRINT_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2.5 text-sm text-[#1E1B18]">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: PURPLE }} aria-hidden="true" />
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ CROSS-SELL ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-1.5">
              Want more print-and-go activities?
            </h2>
            <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
              Check out our full activity packs for preschool learning.
            </p>
          </div>
          <CTAButton
            href="/fall-preschool-activity-pack"
            variant="secondary"
            size="md"
            showArrow
            className="shrink-0"
          >
            See the Fall Preschool Activity Pack
          </CTAButton>
        </div>
      </section>

      {/* ============ AD: near bottom ============ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-14">
        <AdSlot slot="halloween-before-faq" format="rectangle" />
      </div>

      {/* ============ FAQ ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div
            className="text-xs font-medium mb-2 font-mono-tabular"
            style={{ color: PURPLE }}
          >
            05. FAQ
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            Frequently asked questions
          </h2>
        </div>
        <FaqAccordion items={FAQ_ITEMS} idPrefix="halloween-faq" />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center bg-gradient-to-br from-[#2B2433] via-[#241F2B] to-[#1E1B18]">
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
            Download your free Halloween coloring pages
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <CTAButton href={PDF_URL} variant="primary" size="lg">
              Download Free PDF
            </CTAButton>
          </div>

          <p className="text-xs sm:text-sm text-[#B8AFC4] mt-5 font-mono-tabular">
            Instant download. No physical item shipped.
          </p>
        </div>

        <div className="mt-6 text-center space-y-1.5">
          <p className="text-xs text-[#5C554E]">
            Free printable PDF for personal/classroom use.
          </p>
          <p className="text-xs text-[#5C554E]">No resale or re-uploading.</p>
        </div>
      </section>

      <MobileStickyDownload />
    </div>
  );
}
