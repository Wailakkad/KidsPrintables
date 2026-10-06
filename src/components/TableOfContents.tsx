import React, { useEffect, useState } from 'react';
import { ActivitySection } from '../lib/posts';

interface TableOfContentsProps {
  sections: ActivitySection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-100px 0px -65% 0px', threshold: 0.1 }
    );

    const targets = [
      ...sections.map((s) => document.getElementById(s.id)),
      document.getElementById('free-sample'),
      document.getElementById('full-activity-pack'),
      document.getElementById('faq'),
    ];

    targets.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="bg-white border border-[#E6E0D4] rounded-2xl p-5"
    >
      <div className="text-xs font-semibold text-[#1E1B18] mb-3 pb-2.5 border-b border-[#E6E0D4]">
        In This Activity Guide (25 Ideas)
      </div>
      <ol className="space-y-1.5 text-xs">
        {sections.map((section, idx) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between gap-2 ${
                  isActive
                    ? 'bg-[#F3EFE6] text-[#C85A17] font-semibold'
                    : 'text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#FAF7F2]'
                }`}
              >
                <span className="truncate">
                  <span className="font-mono-tabular mr-1.5 opacity-75">
                    0{idx + 1}.
                  </span>
                  {section.title}
                </span>
                <span className="font-mono-tabular text-[11px] opacity-70 shrink-0">
                  ({section.items.length})
                </span>
              </button>
            </li>
          );
        })}

        <li className="pt-2 mt-2 border-t border-[#E6E0D4]">
          <button
            type="button"
            onClick={() => scrollToSection('free-sample')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
              activeId === 'free-sample'
                ? 'bg-[#F3EFE6] text-[#3F624D] font-semibold'
                : 'text-[#3F624D] hover:bg-[#FAF7F2]'
            }`}
          >
            Free 3-Page Printable Sample
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => scrollToSection('full-activity-pack')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
              activeId === 'full-activity-pack'
                ? 'bg-[#F3EFE6] text-[#C85A17] font-semibold'
                : 'text-[#C85A17] hover:bg-[#FAF7F2]'
            }`}
          >
            58-Page Fall Activity Pack
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => scrollToSection('faq')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors ${
              activeId === 'faq'
                ? 'bg-[#F3EFE6] text-[#1E1B18] font-semibold'
                : 'text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#FAF7F2]'
            }`}
          >
            Frequently Asked Questions
          </button>
        </li>
      </ol>
    </nav>
  );
}
