import React, { useMemo, useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { getAllPosts, PAYHIP_PRODUCT_URL } from '../../src/lib/posts';
import { usePageSEO } from '../../src/lib/seo';
import { PostCard } from '../../src/components/PostCard';
import { CTAButton } from '../../src/components/CTAButton';
import { Link, useRouter } from '../../src/lib/router';

const FILTER_TAGS = [
  'All',
  'Fall Printables',
  'Preschool Worksheets',
  'Fine Motor',
  'Counting',
  'Alphabet',
  'Games',
];

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const { searchQuery: urlSearch } = useRouter();
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(urlSearch);
    const catParam = params.get('category');
    if (catParam && FILTER_TAGS.includes(catParam)) {
      setActiveTag(catParam);
    }
  }, [urlSearch]);

  usePageSEO({
    title: 'Preschool Activities & Printables Blog (Ages 3–5) | Kids Printables',
    description:
      'Browse low-prep preschool activity guides, seasonal coloring and tracing tips, free printable samples, and hands-on learning ideas for ages 3–5.',
    canonicalPath: '/blog',
    ogType: 'website',
  });

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = activeTag === 'All' || post.tags.includes(activeTag);
      const q = query.trim().toLowerCase();
      if (!q) return matchesTag;

      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = post.excerpt.toLowerCase().includes(q);
      const inTags = post.tags.some((t) => t.toLowerCase().includes(q));
      const inSections = post.sections.some(
        (sec) =>
          sec.title.toLowerCase().includes(q) ||
          sec.items.some(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q)
          )
      );

      return matchesTag && (inTitle || inExcerpt || inTags || inSections);
    });
  }, [posts, query, activeTag]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <header className="max-w-3xl mb-10">
        <div className="text-xs font-medium text-[#C85A17] mb-2 font-mono-tabular">
          Kids Printables Blog · Preschool Guides &amp; Freebies (Ages 3–5)
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1E1B18] tracking-tight mb-3">
          Preschool Activities, Printable Tips &amp; Seasonal Guides
        </h1>
        <p className="text-base text-[#5C554E] leading-relaxed">
          Practical, low-prep activity ideas for parents, preschool teachers, and homeschool families. Every guide includes hands-on learning variations and print-and-go resources.
        </p>
      </header>

      {/* Search & Category Filter Controls */}
      <div className="bg-white border border-[#E6E0D4] rounded-2xl p-4 sm:p-5 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <label htmlFor="blog-search-input" className="sr-only">
              Search preschool blog posts and activities
            </label>
            <Search
              className="w-4 h-4 text-[#8A8178] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="blog-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search activities (e.g. pumpkin, tracing, counting)..."
              className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#FAF7F2] border border-[#D8D0C2] rounded-xl text-[#1E1B18] placeholder:text-[#8A8178] focus:outline-none focus:ring-2 focus:ring-[#C85A17] min-h-[42px]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#5C554E] hover:text-[#1E1B18]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="flex flex-wrap items-center gap-1.5"
          >
            {FILTER_TAGS.map((tag) => {
              const active = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-[#1E1B18] text-white'
                      : 'bg-[#F3EFE6] text-[#5C554E] hover:text-[#1E1B18]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid or Empty State */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="md:col-span-2 lg:col-span-2">
              <PostCard post={post} />
            </div>
          ))}

          {/* Upcoming Seasonal Guides Card */}
          <aside className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tabular text-[#3F624D] mb-2">
                Editorial Calendar · Coming Soon
              </div>
              <h2 className="font-display text-xl font-semibold text-[#1E1B18] mb-3">
                More Preschool Guides Coming Soon
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
                We are currently illustrating our next low-prep activity guides for ages 3–5:
              </p>
              <ul className="space-y-3 text-sm text-[#1E1B18] border-t border-[#E6E0D4] pt-4">
                <li>
                  <div className="text-xs text-[#5C554E] font-mono-tabular">
                    Fine Motor · Ages 3–5
                  </div>
                  <div className="font-medium">
                    15 Scissor Cutting Games for Beginning Preschool Cutters
                  </div>
                </li>
                <li>
                  <div className="text-xs text-[#5C554E] font-mono-tabular">
                    Early Math · Numbers 1–10
                  </div>
                  <div className="font-medium">
                    How to Use Ten-Frame Counting Mats in Morning Baskets
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E6E0D4]">
              <p className="text-xs text-[#5C554E] mb-3">
                Want all 58 autumn pages right now?
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
        </div>
      ) : (
        <div className="bg-white border border-[#E6E0D4] rounded-2xl p-10 text-center max-w-xl mx-auto">
          <h2 className="font-display text-xl font-semibold text-[#1E1B18] mb-2">
            No matching preschool guides found
          </h2>
          <p className="text-sm text-[#5C554E] mb-6">
            We couldn’t find any articles matching “{query}” in {activeTag}. Try resetting your search or explore our 25 Fall Activities guide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveTag('All');
              }}
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-[#1E1B18] text-white hover:bg-[#332E2A] transition-colors"
            >
              Clear Search &amp; Filters
            </button>
            <Link
              href="/blog/fall-activities-for-preschoolers"
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-[#F3EFE6] text-[#1E1B18] hover:bg-[#E6E0D4] transition-colors"
            >
              Read 25 Fall Activities Post
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
