import React from 'react';
import {
  ArrowRight,
  Check,
  Gift,
  Home,
  Palette,
  School,
  Scissors,
  Sparkles,
  Sunrise,
  Users,
} from 'lucide-react';
import { usePageSEO } from '../../src/lib/seo';
import { CTAButton } from '../../src/components/CTAButton';
import { EmailSignupForm } from '../../src/components/EmailSignupForm';
import { FaqAccordion, FaqItem } from '../../src/components/landing/FaqAccordion';
import { Link } from '../../src/lib/router';
import {
  CHRISTMAS_COVER_IMAGE,
  CHRISTMAS_EMAIL_SOURCE,
  CHRISTMAS_LANDING_PATH,
  CHRISTMAS_PAGES_COUNT,
  CHRISTMAS_PDF_FILENAME,
  CHRISTMAS_PDF_URL,
} from '../../src/lib/christmasLanding';

const ACCENT = '#3F624D';
const ACCENT_TINT_BG = '#EBF1ED';
const ACCENT_TINT_BORDER = '#CFDDD3';

const BULLETS = [
  '2 cozy coloring pages (snowman friends + Christmas tree and presents)',
  'Print-and-go Build-a-Christmas Tree craft (color already added)',
  'Gift tags, stickers, and mini cards kids can make for family & friends',
];

const INSIDE_ITEMS = [
  {
    icon: Palette,
    title: '2 cozy coloring pages',
    text: 'Snowman friends plus a Christmas tree and presents—big shapes, bold outlines, easy for small hands.',
  },
  {
    icon: Scissors,
    title: 'Build-a-Christmas Tree craft',
    text: 'Print-and-go cut-and-paste craft with the color already added, so there is nothing extra to prep.',
  },
  {
    icon: Gift,
    title: 'Gift tags, stickers & mini cards',
    text: 'Little things kids can make themselves and hand to family, friends, and teachers.',
  },
];

const GREAT_FOR = [
  { icon: Home, text: 'Busy December days at home' },
  { icon: School, text: 'Preschool & Pre-K party stations' },
  { icon: Users, text: 'Handmade gifts for grandparents & family' },
  { icon: Sunrise, text: 'Quiet time, early finishers & sub plans' },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this really free?',
    answer:
      'Yes—completely free. Pop in your email, confirm you are happy to hear from us, and the download unlocks straight away.',
  },
  {
    question: 'What is inside the 6-page PDF?',
    answer:
      'Two cozy coloring pages, a print-and-go Build-a-Christmas Tree craft with the color already added, plus gift tags, stickers, and mini cards kids can make.',
  },
  {
    question: 'What ages is it for?',
    answer:
      'Ages 3–5. The shapes are big, the lines are thick, and every page works for preschool, Pre-K, and homeschool learners.',
  },
  {
    question: 'What paper do I need?',
    answer:
      'Standard US Letter paper (8.5×11). Print at 100% / Actual size, single-sided, and use crayons, markers, or colored pencils.',
  },
  {
    question: 'Will you email me anything else?',
    answer:
      'Occasionally—only when I add new free printables or activity packs. Unsubscribe with one click anytime.',
  },
  {
    question: 'Can I use it in my classroom?',
    answer:
      'Yes. It is licensed for personal family use or single-classroom use by the original purchaser. Please do not resell or re-upload the files.',
  },
];

export default function FreeChristmasCraftsPackPage() {
  usePageSEO({
    title: 'Free Christmas Crafts for Kids (Ages 3–5) – Printable Starter Pack',
    description:
      'Grab this free Christmas crafts starter pack for preschoolers. Includes coloring pages, cut-and-paste tree craft, and printable gift tags for ages 3–5. Instant PDF download.',
    canonicalPath: CHRISTMAS_LANDING_PATH,
    ogType: 'website',
  });

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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-4 font-mono-tabular"
              style={{
                color: ACCENT,
                backgroundColor: ACCENT_TINT_BG,
                border: `1px solid ${ACCENT_TINT_BORDER}`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Free printable PDF · Ages 3–5</span>
            </div>

            <h1 className="font-display text-[1.75rem] leading-[1.14] sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1E1B18] tracking-tight mb-4">
              Free Christmas Crafts Starter Pack (Ages 3–5)
            </h1>

            <p className="text-lg sm:text-xl text-[#1E1B18] font-medium leading-snug mb-3">
              Cute + easy Christmas crafts you can print in minutes. Perfect for busy December
              days with preschoolers—at home, in the classroom, or for grandparents’ gifts.
            </p>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-6 max-w-xl">
              Pop in your email to get an instant-download PDF with 6 simple, kid-friendly pages.
              You’ll also get occasional updates when I add new free printables and activity
              packs. Unsubscribe anytime.
            </p>

            <ul className="space-y-3 mb-7" aria-label="What's included in the free pack">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check
                    className="w-4.5 h-4.5 mt-0.5 shrink-0"
                    style={{ color: ACCENT }}
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base text-[#1E1B18] leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* ============ EMAIL FORM (same Google Sheets capture as every other freebie) ============ */}
            <div
              id="get-pack"
              className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6 shadow-sm scroll-mt-24"
            >
              <div
                className="text-xs font-medium font-mono-tabular mb-1.5"
                style={{ color: ACCENT }}
              >
                Instant download · No cost
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-1.5">
                Get the free pack by email
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
                Enter your email and I’ll send the download link straight to your inbox—plus the
                button below unlocks instantly.
              </p>

              <EmailSignupForm
                idPrefix="christmas-pack"
                source={CHRISTMAS_EMAIL_SOURCE}
                ctaLabel="Get the Free Pack"
                variant="dark"
                successTitle="Your free pack is ready!"
                successMessage="Thanks for signing up. Click the button below to download your free Christmas Crafts Starter Pack. I’ve also sent the link to your inbox."
                successDownloadUrl={CHRISTMAS_PDF_URL}
                successDownloadLabel="Download the PDF"
                successDownloadName={CHRISTMAS_PDF_FILENAME}
              />
            </div>
          </div>

          {/* Hero cover card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E6E0D4] rounded-2xl p-3 sm:p-4 shadow-sm lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-xl bg-[#F3EFE6]">
                <img
                  src={CHRISTMAS_COVER_IMAGE}
                  alt="Free Christmas Crafts Starter Pack cover with a Christmas tree, snowman, and wrapped gift"
                  className="block h-auto max-w-full"
                />
              </div>
              <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C554E] font-mono-tabular">
                <span>
                  {`${CHRISTMAS_PAGES_COUNT} free print-and-go pages · US Letter PDF · Ages 3–5`}
                </span>
                <a
                  href="#get-pack"
                  className="font-semibold hover:underline whitespace-nowrap"
                  style={{ color: ACCENT }}
                >
                  Get the pack →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div className="text-xs font-medium mb-2 font-mono-tabular" style={{ color: ACCENT }}>
            01. Inside the pack
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            {`${CHRISTMAS_PAGES_COUNT} simple, kid-friendly pages`}
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {INSIDE_ITEMS.map((item) => (
            <li
              key={item.title}
              className="bg-white border border-[#E6E0D4] rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-3"
                style={{ backgroundColor: ACCENT_TINT_BG }}
              >
                <item.icon
                  className="w-[18px] h-[18px]"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-[#5C554E] leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ GREAT FOR ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div className="text-xs font-medium mb-2 font-mono-tabular" style={{ color: ACCENT }}>
            02. Where it fits
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            Made for real December days
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {GREAT_FOR.map((item) => (
            <li
              key={item.text}
              className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-5 flex items-start gap-3.5"
            >
              <item.icon
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
              <span className="text-sm text-[#1E1B18] leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ CROSS-LINKS ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-1.5">
                More free printables
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                Coloring pages, samples, and mini-packs—all free, all print-and-go.
              </p>
            </div>
            <div className="pt-5">
              <CTAButton href="/free-printables" variant="secondary" size="md" showArrow>
                Open the Free Library
              </CTAButton>
            </div>
          </div>

          <div className="bg-white border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-1.5">
                Need a full activity pack?
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                Browse 26–58 page preschool packs for fall and Halloween in the Printables Shop.
              </p>
            </div>
            <div className="pt-5">
              <CTAButton href="/store" variant="primary" size="md" showArrow>
                Visit the Printables Shop
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="mb-7 sm:mb-9 max-w-3xl">
          <div className="text-xs font-medium mb-2 font-mono-tabular" style={{ color: ACCENT }}>
            03. FAQ
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E1B18] tracking-tight">
            Frequently asked questions
          </h2>
        </div>
        <FaqAccordion items={FAQ_ITEMS} idPrefix="christmas-faq" />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center bg-gradient-to-br from-[#2F4A3B] via-[#274032] to-[#1E1B18]">
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Get your free Christmas crafts starter pack
          </h2>
          <p className="text-sm sm:text-base text-[#C7D4CC] mb-6 max-w-xl mx-auto">
            {`${CHRISTMAS_PAGES_COUNT} print-and-go pages for ages 3–5, delivered to your inbox in minutes.`}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="#get-pack"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-white text-[#1E1B18] hover:bg-[#F3EFE6] transition-colors min-h-[48px]"
            >
              Get the Free Pack
            </a>
            <Link
              href="/free-printables"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl border border-white/35 text-white hover:bg-white/10 transition-colors min-h-[48px]"
            >
              <span>Browse Free Printables</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-[#A8B8AE] mt-5 font-mono-tabular">
            Instant download · No physical item shipped
          </p>
        </div>

        <div className="mt-6 text-center space-y-1.5">
          <p className="text-xs text-[#5C554E]">
            Free printable PDF for personal/classroom use.
          </p>
          <p className="text-xs text-[#5C554E]">No resale or re-uploading.</p>
        </div>
      </section>
    </div>
  );
}
