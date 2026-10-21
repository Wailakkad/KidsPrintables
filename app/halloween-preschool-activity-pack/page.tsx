import React, { useEffect } from 'react';
import {
  Baby,
  Download,
  Eye,
  Grid2x2,
  Hash,
  PenLine,
  Printer,
  Scissors,
  Smile,
  Sparkles,
  Timer,
  Type,
  Zap,
} from 'lucide-react';
import { buildProductJsonLd, usePageSEO } from '../../src/lib/seo';
import { CTAButton } from '../../src/components/CTAButton';
import { MobileStickyCta } from '../../src/components/landing/MobileStickyCta';
import { FaqAccordion, FaqItem } from '../../src/components/landing/FaqAccordion';
import { Testimonials } from '../../src/components/landing/Testimonials';
import {
  HALLOWEEN_CHECKOUT_URL,
  HALLOWEEN_FINAL_CTA_LABEL,
  HALLOWEEN_HERO_CTA_LABEL,
  HALLOWEEN_HOW_IT_WORKS_IMAGE,
  HALLOWEEN_MID_CTA_LABEL,
  HALLOWEEN_PACK_IMAGE,
  HALLOWEEN_PACK_PAGES,
  HALLOWEEN_PACK_PATH,
  HALLOWEEN_PACK_PRICE,
  HALLOWEEN_PACK_PRICE_VALUE,
  HALLOWEEN_SAMPLE_URL,
} from '../../src/lib/halloweenPack';
import { SUPPORT_EMAIL } from '../../src/lib/landing';

const KEY_BENEFITS = [
  {
    icon: Zap,
    label: 'Instant download',
    detail: 'Right after checkout',
  },
  {
    icon: Printer,
    label: 'Printable PDF',
    detail: 'US Letter 8.5×11',
  },
  {
    icon: Timer,
    label: 'Low-prep',
    detail: 'Print & go',
  },
  {
    icon: Baby,
    label: 'Ages 3–5',
    detail: 'Preschool & Pre-K',
  },
];

const HERO_BENEFITS = [
  {
    icon: Timer,
    text: 'Low-prep: Print-and-go Halloween activities for busy days',
  },
  {
    icon: Sparkles,
    text: 'Skill-building: Tracing, counting, matching, patterns & cutting',
  },
  {
    icon: Smile,
    text: 'Kid-approved: Spooky-cute (not scary) pages kids love',
  },
];

const INSIDE_ITEMS = [
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792620000/26_black-and-white_printable_pages.jpg',
    alt: 'Sample of the black-and-white printable Halloween activity pages',
    text: '26 black-and-white printable pages',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792620000/Tracing_pre-writing_practice.jpg',
    alt: 'Tracing and pre-writing practice worksheet',
    text: 'Tracing & pre-writing practice',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792620000/Counting_matching_which_has_more_activities.jpg',
    alt: 'Counting, matching, and “which has more?” worksheet',
    text: 'Counting, matching & ‘which has more?’ activities',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792620000/Cut-and-paste_Halloween_crafts.jpg',
    alt: 'Cut-and-paste Halloween craft worksheet',
    text: 'Cut-and-paste Halloween crafts',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792620000/Cute_Halloween_coloring_pages.jpg',
    alt: 'Cute Halloween coloring page',
    text: 'Cute Halloween coloring pages',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619999/Patterns_shadow_matching.jpg',
    alt: 'Patterns and shadow matching worksheet',
    text: 'Patterns & shadow matching',
  },
];

const SKILL_ITEMS = [
  { icon: PenLine, text: 'Fine motor strength & pre-writing practice' },
  { icon: Scissors, text: 'Scissor skills (cutting confidence)' },
  { icon: Hash, text: 'Early math: counting 1–10, number recognition' },
  { icon: Eye, text: 'Visual discrimination, matching, and logic' },
  { icon: Grid2x2, text: 'Pattern recognition' },
  { icon: Type, text: 'Early literacy: letters & beginning sounds' },
];

const GREAT_FOR_ITEMS = [
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619615/Parents_wanting_low-prep_Halloween_activities.jpg',
    alt: 'Preschooler doing a quiet-time printable activity at home',
    text: 'Parents wanting low-prep Halloween activities',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619622/Preschool_Pre-K_teachers_ages_3_5.jpg',
    alt: 'Preschool classroom center with children using printable worksheets',
    text: 'Preschool & Pre-K teachers (ages 3–5)',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619612/Homeschool_families.jpg',
    alt: 'Homeschool preschool lesson with printable activities',
    text: 'Homeschool families',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792619613/Fall_party_stations_and_quiet_table_work.jpg',
    alt: 'Printable activity pages laid out on a table for a fall party station',
    text: 'Fall party stations and quiet table work',
  },
];

const STEPS = [
  { icon: Download, text: 'Download the PDF instantly after purchase.' },
  {
    icon: Printer,
    text: 'Print the pages you need on US Letter (8.5 x 11) paper.',
  },
  {
    icon: Scissors,
    text: 'Add crayons, pencils, child-safe scissors and glue.',
  },
  { icon: Smile, text: 'Enjoy screen-free Halloween fun for ages 3–5.' },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this a physical product?',
    answer: 'No—this is a digital download. You’ll receive a printable PDF file.',
  },
  {
    question: 'What age is this for?',
    answer: 'Designed for ages 3–5 (Preschool / Pre-K). Many kinders can enjoy it too.',
  },
  {
    question: 'What size is the PDF?',
    answer: 'US Letter (8.5×11).',
  },
  {
    question: 'Can I print it more than once?',
    answer: 'Yes—print as many times as you like for personal use or single classroom use.',
  },
  {
    question: 'Can I share/resell/upload the file?',
    answer: 'No. The file is not for resale or sharing.',
  },
  {
    question: 'What do I need?',
    answer:
      'A printer + paper. For some pages: crayons, pencils, child-safe scissors and glue.',
  },
];

const SECTION_ANCHOR_CLASS = 'scroll-mt-20 sm:scroll-mt-24';

function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="mb-7 sm:mb-9 max-w-3xl">
      <div className="text-xs font-medium text-[#C85A17] mb-2 font-mono-tabular">
        {eyebrow}
      </div>
      <h2
        id={id}
        className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-base sm:text-lg text-[#5C554E] leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}

export default function HalloweenPackLandingPage() {
  usePageSEO({
    title: 'Halloween Preschool Activity Pack (Ages 3–5) | Kids Printables',
    description:
      'A 26-page Halloween Preschool Activity Pack for ages 3–5. Printable tracing, counting, matching, cut-and-paste crafts, patterns, and cute Halloween coloring pages. Perfect for home, preschool, and homeschool.',
    canonicalPath: HALLOWEEN_PACK_PATH,
    ogType: 'website',
  });

  useEffect(() => {
    document.body.classList.add('lp-sticky-cta');
    return () => document.body.classList.remove('lp-sticky-cta');
  }, []);

  const productJsonLd = buildProductJsonLd({
    name: 'Halloween Preschool Activity Pack Printable (Ages 3–5) — 26 Print-and-Go Pages',
    description:
      '26-page printable PDF activity pack for preschoolers ages 3–5: tracing, counting, matching, cut-and-paste crafts, patterns, and cute Halloween coloring pages. Instant digital download.',
    url: HALLOWEEN_CHECKOUT_URL,
    image: HALLOWEEN_PACK_IMAGE,
    price: HALLOWEEN_PACK_PRICE_VALUE,
  });

  return (
    <div className="pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#3F624D] bg-[#E4EEE7] border border-[#CFE0D5] rounded-full px-3 py-1.5 mb-4 font-mono-tabular">
              <span>Instant digital download</span>
              <span aria-hidden="true" className="text-[#8A8178]">·</span>
              <span>Ages 3–5</span>
            </div>

            <h1 className="font-display text-[1.75rem] leading-[1.14] sm:text-4xl lg:text-5xl font-semibold text-[#1E1B18] tracking-tight mb-4">
              Halloween Preschool Activity Pack
            </h1>

            <p className="text-lg sm:text-xl text-[#1E1B18] font-medium leading-snug mb-3">
              26 print-and-go pages for home, homeschool &amp; classroom centers.
            </p>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-6 max-w-xl">
              Press print, hand it to your child, and enjoy spooky-cute Halloween
              learning in minutes. Perfect for home, preschool centers, or
              homeschool.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <CTAButton
                href={HALLOWEEN_CHECKOUT_URL}
                variant="primary"
                size="lg"
                externalIcon
              >
                {HALLOWEEN_HERO_CTA_LABEL}
              </CTAButton>
              <CTAButton href={HALLOWEEN_SAMPLE_URL} variant="secondary" size="lg">
                Try the Free Sample
              </CTAButton>
            </div>

            <p className="text-xs text-[#5C554E] leading-relaxed mb-6 font-mono-tabular max-w-xl">
              Instant digital download • 1 PDF (US Letter 8.5×11) • Print as many
              times as you like (personal / single classroom use)
            </p>

            <ul className="space-y-2.5" aria-label="Activity pack key benefits">
              {HERO_BENEFITS.map((benefit) => (
                <li
                  key={benefit.text}
                  className="flex items-start gap-3 bg-white border border-[#E6E0D4] rounded-xl px-4 py-3"
                >
                  <benefit.icon
                    className="w-[18px] h-[18px] mt-0.5 text-[#C85A17] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#1E1B18] leading-snug">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl bg-[#F3EFE6]">
                <img
                  src={HALLOWEEN_PACK_IMAGE}
                  alt="Halloween Preschool Activity Pack — printable pages preview"
                  referrerPolicy="no-referrer"
                  className="block h-auto max-w-full"
                />
              </div>

              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#C85A17] text-white text-sm font-semibold rounded-full px-3.5 py-1.5 shadow-sm font-mono-tabular">
                {HALLOWEEN_PACK_PRICE}
              </div>

              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E]">
                <span>26 print-and-go pages · US Letter PDF</span>
                <a
                  href="#whats-inside"
                  className="font-semibold text-[#3F624D] hover:underline whitespace-nowrap"
                >
                  Peek inside the pack →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KEY BENEFIT ICON STRIP ============ */}
      <section
        aria-label="Product highlights"
        className="bg-[#F3EFE6] border-y border-[#E6E0D4]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4">
          {KEY_BENEFITS.map((benefit) => (
            <div key={benefit.label} className="flex items-center gap-3 min-w-0">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#E6E0D4] shrink-0">
                <benefit.icon className="w-[18px] h-[18px] text-[#C85A17]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[#1E1B18] leading-tight">
                  {benefit.label}
                </span>
                <span className="block text-xs text-[#5C554E] leading-tight mt-0.5">
                  {benefit.detail}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 sm:p-9 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
          <h2 className="lg:col-span-5 font-display text-2xl sm:text-3xl font-semibold text-[#1E1B18] tracking-tight">
            Need an easy Halloween activity that's fun and educational?
          </h2>
          <p className="lg:col-span-7 text-base sm:text-lg text-[#5C554E] leading-relaxed">
            When you're juggling a busy day, planning activities can feel like a
            lot. This pack gives you a ready-to-use set of Halloween printables
            that keeps preschoolers learning through play—at home or in the
            classroom.
          </p>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section
        id="whats-inside"
        aria-labelledby="whats-inside-heading"
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4] ${SECTION_ANCHOR_CLASS}`}
      >
        <SectionHeading
          eyebrow={`01. Inside the pack · ${HALLOWEEN_PACK_PAGES} pages`}
          title={`What's inside the ${HALLOWEEN_PACK_PAGES}-page pack`}
          intro="A full variety of Halloween preschool activities—designed for ages 3–5."
          id="whats-inside-heading"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 items-start">
          {INSIDE_ITEMS.map((item) => (
            <li
              key={item.text}
              className="bg-white border border-[#E6E0D4] rounded-2xl p-4 sm:p-5 flex flex-col shadow-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="block w-full h-auto rounded-lg border border-[#E6E0D4]/60 bg-[#FAF7F2]"
              />
              <p className="text-sm text-[#1E1B18] leading-relaxed mt-3.5">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center text-center gap-2">
          <CTAButton
            href={HALLOWEEN_CHECKOUT_URL}
            variant="primary"
            size="lg"
            externalIcon
          >
            {HALLOWEEN_MID_CTA_LABEL}
          </CTAButton>
          <p className="text-xs text-[#5C554E] font-mono-tabular">
            Instant PDF download · Print at home today
          </p>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4] ${SECTION_ANCHOR_CLASS}`}
      >
        <SectionHeading
          eyebrow="02. Developmental skills"
          title="Skills your preschooler builds while they play"
          id="skills-heading"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_ITEMS.map((item) => (
            <li
              key={item.text}
              className="bg-white border border-[#E6E0D4] rounded-2xl p-5 flex items-start gap-3.5 shadow-sm"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#E4EEE7] shrink-0">
                <item.icon className="w-[18px] h-[18px] text-[#3F624D]" aria-hidden="true" />
              </span>
              <span className="text-sm text-[#1E1B18] leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ PERFECT FOR ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]">
        <SectionHeading
          eyebrow="03. Where it fits"
          title="Perfect for home, classroom, and parties"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {GREAT_FOR_ITEMS.map((item) => (
            <li
              key={item.text}
              className="bg-white border border-[#E6E0D4] rounded-2xl p-4 sm:p-5 flex flex-col shadow-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="block w-full h-auto rounded-lg border border-[#E6E0D4]/60 bg-[#FAF7F2]"
              />
              <p className="text-sm text-[#1E1B18] leading-relaxed mt-3.5">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]">
        <SectionHeading
          eyebrow="04. How it works"
          title="Print → Play → Learn (in minutes)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl bg-[#F3EFE6]">
                <img
                  src={HALLOWEEN_HOW_IT_WORKS_IMAGE}
                  alt="Printed Halloween activity pages with crayons, pencils, scissors and glue"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="block h-auto max-w-full"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {STEPS.map((step, index) => (
                <li
                  key={step.text}
                  className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#C85A17] text-white">
                      <step.icon className="w-[18px] h-[18px]" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-semibold text-[#E6E0D4]">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1E1B18] leading-relaxed">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="bg-[#E4EEE7] border border-[#CFE0D5] rounded-2xl px-5 py-4">
              <p className="text-sm text-[#1E1B18] leading-relaxed">
                <strong className="font-semibold">Printing tips:</strong> Print at 100% /
                actual size. Single-sided works best for cut-and-paste + game pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]">
        <SectionHeading
          eyebrow="05. What buyers say"
          title="Loved by parents and teachers"
        />
        <Testimonials />
      </section>

      {/* ============ FAQ ============ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4] ${SECTION_ANCHOR_CLASS}`}
      >
        <SectionHeading
          eyebrow="06. FAQ"
          title="Frequently asked questions"
          id="faq-heading"
        />
        <FaqAccordion items={FAQ_ITEMS} idPrefix="halloween-pack-faq" />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F8E7D8] via-[#FAF1E6] to-[#F3EFE6] border border-[#E6D9C8] rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#1E1B18] tracking-tight mb-3">
            Ready for spooky-fun learning?
          </h2>

          <p className="text-base sm:text-lg text-[#1E1B18] font-medium mb-1.5">
            Halloween Preschool Activity Pack (Ages 3–5) — {HALLOWEEN_PACK_PRICE}
          </p>
          <p className="text-sm sm:text-base text-[#5C554E] mb-7 font-mono-tabular">
            26-page PDF • Instant download • Low-prep activities &amp; crafts
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-4">
            <CTAButton
              href={HALLOWEEN_CHECKOUT_URL}
              variant="primary"
              size="lg"
              externalIcon
            >
              {HALLOWEEN_FINAL_CTA_LABEL}
            </CTAButton>
            <CTAButton href={HALLOWEEN_SAMPLE_URL} variant="secondary" size="lg">
              Try the Free Sample
            </CTAButton>
          </div>

          <p className="text-xs sm:text-sm text-[#5C554E] font-mono-tabular">
            Secure checkout • Instant access • Print-and-go
          </p>
        </div>

        {/* Footer notes */}
        <div className="mt-6 text-center space-y-1.5">
          <p className="text-xs text-[#5C554E]">
            Digital download—no physical item shipped.
          </p>
          <p className="text-xs text-[#5C554E]">
            Personal use / single classroom use only. Not for resale, sharing, or
            uploading.
          </p>
          <p className="text-xs text-[#5C554E]">
            Support:{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-[#3F624D] hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      <MobileStickyCta
        checkoutUrl={HALLOWEEN_CHECKOUT_URL}
        price={HALLOWEEN_PACK_PRICE}
        buttonLabel="Get the Halloween Pack"
        ariaLabel="Purchase Halloween Preschool Activity Pack"
      />
    </div>
  );
}
