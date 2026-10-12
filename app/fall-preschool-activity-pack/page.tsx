import React, { useEffect } from 'react';
import {
  Baby,
  Download,
  Eye,
  Grid2x2,
  Hash,
  PenLine,
  Play,
  Printer,
  Scissors,
  Smile,
  Sparkles,
  Timer,
  Type,
  Zap,
} from 'lucide-react';
import { FALL_ACTIVITY_PACK } from '../../src/lib/posts';
import { buildProductJsonLd, usePageSEO } from '../../src/lib/seo';
import { CTAButton } from '../../src/components/CTAButton';
import { MobileStickyCta } from '../../src/components/landing/MobileStickyCta';
import { FaqAccordion, FaqItem } from '../../src/components/landing/FaqAccordion';
import { PreviewGallery } from '../../src/components/landing/PreviewGallery';
import { Testimonials } from '../../src/components/landing/Testimonials';
import {
  CHECKOUT_URL,
  FINAL_CTA_LABEL,
  HERO_CTA_LABEL,
  LANDING_PATH,
  MID_CTA_LABEL,
  PACK_PRICE,
  PACK_PRICE_VALUE,
  SAMPLE_URL,
  SUPPORT_EMAIL,
} from '../../src/lib/landing';

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
    text: 'Low-prep: Print-and-go activities for busy days',
  },
  {
    icon: Sparkles,
    text: 'Skill-building: Numbers, letters, patterns, scissors & pre-writing',
  },
  {
    icon: Smile,
    text: 'Kid-approved: Variety of games + hands-on pages (not just coloring)',
  },
];

const INSIDE_ITEMS = [
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791837744/Coloring_Fall_themes_pumpkin.png',
    alt: 'Fall coloring worksheet with a pumpkin theme from the activity pack',
    text: 'Coloring (Fall themes): pumpkin, apple, leaf, acorn, squirrel, scarecrow, tree, fall basket',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791838044/ChatGPT_Image_Oct_6_2026_08_37_06_AM.png',
    alt: 'Tracing and fine-motor worksheet with lines, shapes, and paths',
    text: 'Tracing & fine-motor: lines, shapes, paths, simple maze',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791837842/Preschool_math_worksheet_with_ac__2K_20261006084706.jpg',
    alt: 'Preschool math worksheet practicing counting and numbers 1–10',
    text: 'Counting & numbers: counting, number matching, missing numbers, number tracing (1–10)',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791837895/Create_preschool_memory_game_cards_2K_20261006093822.jpg',
    alt: 'Preschool memory game cards for matching and visual skills',
    text: 'Matching & visual skills: picture match, shadows, same/different, “find the different one”',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791837959/what_comes_next.jpg',
    alt: 'Pattern recognition worksheet asking what comes next',
    text: 'Patterns: AB, AAB, ABC, “what comes next?”',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791838007/Alphabet_practice.jpg',
    alt: 'Fall-themed alphabet practice worksheet with letters and beginning sounds',
    text: 'Alphabet practice: fall-themed letters + beginning sounds',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791838081/Cut.png',
    alt: 'Cut and paste worksheet with big kid-friendly pieces',
    text: 'Cut & paste: simple cut-and-glue activities with big, kid-friendly pieces',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791838172/Games.jpg',
    alt: 'Fall games pages including Bingo, I-Spy, and memory cards',
    text: 'Games: I-Spy, Bingo, Roll-and-Cover, board game, memory cards',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791838171/Creative_pages.jpg',
    alt: 'Creative fall pages for designing a pumpkin and drawing fall scenes',
    text: 'Creative pages: design a pumpkin, draw fall scenes',
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
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791839433/Quiet_time.jpg',
    alt: 'Preschooler doing a quiet-time printable activity at home',
    text: 'Quiet time / screen-free time at home',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791839433/Preschool.jpg',
    alt: 'Preschool classroom center with children using printable worksheets',
    text: 'Preschool & Pre-K centers and small groups',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791839432/Homeschool_preschool_lessons.jpg',
    alt: 'Homeschool preschool lesson with fall printable activities',
    text: 'Homeschool preschool lessons and themed units',
  },
  {
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791839432/Morning_work.jpg',
    alt: 'Morning work printable pages laid out for early finishers',
    text: 'Morning work, early finishers, sub plans',
  },
];

const STEPS = [
  { icon: Download, text: 'Download your PDF instantly after purchase' },
  { icon: Printer, text: 'Print the pages you want (recommended single-sided)' },
  { icon: Play, text: 'Play & learn—rotate activities all season long' },
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
    answer: 'A printer + paper. For some pages: scissors, glue, crayons/markers.',
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

export default function FallPackLandingPage() {
  usePageSEO({
    title: 'Fall Preschool Activity Pack (Printable, Ages 3–5) — 58 Pages for $5.99',
    description:
      '58 fun, low-prep fall worksheets, games & crafts for ages 3–5. Instant PDF download for $5.99—print-and-go activities that build math, literacy & fine-motor skills.',
    canonicalPath: LANDING_PATH,
    ogType: 'website',
  });

  useEffect(() => {
    document.body.classList.add('lp-sticky-cta');
    return () => document.body.classList.remove('lp-sticky-cta');
  }, []);

  const productJsonLd = buildProductJsonLd({
    name: 'Fall Preschool Activity Pack Printable (Ages 3–5) — 58 Fun Low-Prep Worksheets, Games & Crafts',
    description:
      '58-page printable PDF activity pack for preschoolers ages 3–5: coloring, tracing, counting 1–10, patterns, alphabet, cut & paste, and fall games. Instant digital download.',
    url: CHECKOUT_URL,
    image: FALL_ACTIVITY_PACK.heroImage,
    price: PACK_PRICE_VALUE,
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
              Fall Preschool Activity Pack (Printable, Ages 3–5)
            </h1>

            <p className="text-lg sm:text-xl text-[#1E1B18] font-medium leading-snug mb-3">
              58 fun, low-prep worksheets, games & crafts that build early math,
              literacy, and fine-motor skills—without screens.
            </p>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-6 max-w-xl">
              Press print, hand it to your child, and enjoy cozy fall learning in
              minutes. Perfect for home, preschool centers, or homeschool.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              <CTAButton href={CHECKOUT_URL} variant="primary" size="lg" externalIcon>
                {HERO_CTA_LABEL}
              </CTAButton>
              <CTAButton href={SAMPLE_URL} variant="secondary" size="lg">
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
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1791839433/Preschool.jpg"
                  alt="Preschool classroom center with children using printable worksheets"
                  referrerPolicy="no-referrer"
                  className="block h-auto max-w-full"
                />
              </div>

              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#C85A17] text-white text-sm font-semibold rounded-full px-3.5 py-1.5 shadow-sm font-mono-tabular">
                {PACK_PRICE}
              </div>

              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E]">
                <span>58 print-and-go pages · US Letter PDF</span>
                <a
                  href="#preview"
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
            Need an easy fall activity that's fun and educational?
          </h2>
          <p className="lg:col-span-7 text-base sm:text-lg text-[#5C554E] leading-relaxed">
            When you're juggling a busy day, planning activities can feel like a
            lot. This pack gives you a ready-to-use set of fall printables that
            keeps preschoolers learning through play—at home or in the classroom.
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
          eyebrow="01. Inside the pack · 58 pages"
          title="What's inside the 58-page pack"
          intro="A full variety of fall preschool activities—designed for ages 3–5."
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
          <CTAButton href={CHECKOUT_URL} variant="primary" size="lg" externalIcon>
            {MID_CTA_LABEL}
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

      {/* ============ GREAT FOR ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]">
        <SectionHeading
          eyebrow="03. Where it fits"
          title="Great for home, classroom, and homeschool"
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

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
      </section>

      {/* ============ PREVIEW ============ */}
      <section
        id="preview"
        aria-labelledby="preview-heading"
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4] ${SECTION_ANCHOR_CLASS}`}
      >
        <SectionHeading
          eyebrow="05. Preview"
          title="Peek inside the pack"
          intro="A look at real pages from the pack—so you can see the style and activity variety before you buy."
          id="preview-heading"
        />

        <PreviewGallery />

        <div className="mt-8 flex flex-col items-center text-center gap-2">
          <CTAButton href={CHECKOUT_URL} variant="primary" size="lg" externalIcon>
            {MID_CTA_LABEL}
          </CTAButton>
          <p className="text-xs text-[#5C554E]">
            Want to see more first?{' '}
            <a href={SAMPLE_URL} className="font-semibold text-[#3F624D] hover:underline">
              Try the free 3-page sample
            </a>
          </p>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#E6E0D4]">
        <SectionHeading
          eyebrow="06. What buyers say"
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
          eyebrow="07. FAQ"
          title="Frequently asked questions"
          id="faq-heading"
        />
        <FaqAccordion items={FAQ_ITEMS} idPrefix="fall-pack-faq" />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F8E7D8] via-[#FAF1E6] to-[#F3EFE6] border border-[#E6D9C8] rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center">
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#1E1B18] tracking-tight mb-3">
            Ready for cozy fall learning?
          </h2>

          <p className="text-base sm:text-lg text-[#1E1B18] font-medium mb-1.5">
            Fall Preschool Activity Pack Printable (Ages 3–5) — {PACK_PRICE}
          </p>
          <p className="text-sm sm:text-base text-[#5C554E] mb-7 font-mono-tabular">
            58-page PDF • Instant download • Low-prep activities & games
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-4">
            <CTAButton href={CHECKOUT_URL} variant="primary" size="lg" externalIcon>
              {FINAL_CTA_LABEL}
            </CTAButton>
            <CTAButton href={SAMPLE_URL} variant="secondary" size="lg">
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

      <MobileStickyCta />
    </div>
  );
}
