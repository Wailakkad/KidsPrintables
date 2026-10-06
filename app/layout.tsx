import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Link, useRouter } from '../src/lib/router';
import { PAYHIP_PRODUCT_URL, FREE_SAMPLE_PDF_URL } from '../src/lib/posts';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { pathname, openSampleModal } = useRouter();
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1B18]">
      {/* Dismissible Top Announcement Bar (scrolls away naturally so sticky cap stays minimal) */}
      {showAnnouncement && (
        <div
          role="region"
          aria-label="Seasonal announcement"
          className="bg-[#F3EFE6] border-b border-[#E6E0D4] px-4 py-2 text-xs text-[#1E1B18]"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-semibold text-[#C85A17]">
                New: Fall Preschool Activity Pack (Ages 3–5)
              </span>
              <span aria-hidden="true" className="text-[#8A8178]">·</span>
              <span className="text-[#5C554E] hidden sm:inline">
                58 print-and-go pages for home, homeschool &amp; classroom centers.
              </span>
              <Link
                href="/blog/fall-activities-for-preschoolers"
                className="font-semibold underline underline-offset-2 text-[#1E1B18] hover:text-[#C85A17] whitespace-nowrap"
              >
                Explore 25 Fall Ideas + Free Sample
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setShowAnnouncement(false)}
              aria-label="Dismiss announcement bar"
              className="p-1 rounded-md text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#E6E0D4]/50 transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Header — Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 h-14 sm:h-16 bg-[#FAF7F2]/95 backdrop-blur-xs border-b border-[#E6E0D4] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#1E1B18] whitespace-nowrap"
          >
            Kids Printables
          </Link>

          {/* Zone 2: Clean text navigation links */}
          <nav aria-label="Primary navigation" className="flex items-center gap-5 sm:gap-7 text-sm font-medium text-[#5C554E]">
            <Link
              href="/"
              className={`hover:text-[#1E1B18] hover:underline underline-offset-4 transition-colors whitespace-nowrap ${
                pathname === '/' ? 'text-[#1E1B18] font-semibold underline' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`hover:text-[#1E1B18] hover:underline underline-offset-4 transition-colors whitespace-nowrap ${
                pathname.startsWith('/blog') ? 'text-[#1E1B18] font-semibold underline' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              href="/blog/fall-activities-for-preschoolers"
              className="hidden md:inline hover:text-[#1E1B18] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              25 Fall Activities
            </Link>
            <button
              type="button"
              onClick={openSampleModal}
              className="hidden sm:inline hover:text-[#1E1B18] hover:underline underline-offset-4 transition-colors whitespace-nowrap cursor-pointer"
            >
              Free Sample
            </button>
          </nav>

          {/* Zone 3: Single primary action */}
          <div className="flex items-center">
            <a
              href={PAYHIP_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C85A17] hover:bg-[#B04B0E] rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              <span>Get the Fall Pack</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-85 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Quiet Editorial Footer with Required Disclaimer */}
      <footer className="bg-[#F3EFE6] border-t border-[#E6E0D4] mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E6E0D4]">
            <div className="md:col-span-5">
              <div className="font-display text-xl font-semibold text-[#1E1B18] mb-2">
                Kids Printables | Coloring &amp; Activities
              </div>
              <p className="text-sm text-[#5C554E] leading-relaxed max-w-md">
                Thoughtfully illustrated, low-prep preschool printables and seasonal activity packs for parents, preschool teachers, and homeschool families with children ages 3–5.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs font-semibold text-[#1E1B18] mb-3">
                Explore &amp; Navigation
              </div>
              <ul className="space-y-2 text-sm text-[#5C554E]">
                <li>
                  <Link href="/" className="hover:text-[#1E1B18] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#1E1B18] transition-colors">
                    Blog Index
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/fall-activities-for-preschoolers"
                    className="hover:text-[#1E1B18] transition-colors"
                  >
                    25 Fall Activities for Preschoolers
                  </Link>
                </li>
                <li>
                  <a
                    href={FREE_SAMPLE_PDF_URL}
                    download="Kids-Printables-Fall-Sample-Ages-3-5.pdf"
                    className="hover:text-[#1E1B18] transition-colors"
                  >
                    Download Free Sample (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="text-xs font-semibold text-[#1E1B18] mb-3">
                Featured Printable Bundle
              </div>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-3">
                58 print-and-go autumn worksheets covering coloring, fine motor tracing, counting 1–10, scissor skills, alphabet, and Fall Bingo.
              </p>
              <a
                href={PAYHIP_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#B04B0E]"
              >
                <span>Fall Preschool Activity Pack on Payhip</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#5C554E]">
            <div>
              © {new Date().getFullYear()} Kids Printables | Coloring &amp; Activities. All rights reserved.
            </div>
            <div className="max-w-xl sm:text-right leading-relaxed">
              <strong>Disclaimer:</strong> All products are digital downloads (PDF format); no physical items will be shipped. Licensed strictly for personal family use or single-classroom use by the original purchaser.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
