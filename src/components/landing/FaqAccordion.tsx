import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  idPrefix?: string;
}

export function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${idPrefix}-trigger-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div
            key={item.question}
            className="bg-white border border-[#E6E0D4] rounded-2xl overflow-hidden"
          >
            <h3 className="font-display">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 px-5 sm:px-6 py-4 text-left cursor-pointer transition-colors hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C85A17]"
              >
                <span className="text-base sm:text-lg font-semibold text-[#1E1B18] leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 mt-0.5 text-[#C85A17] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="px-5 sm:px-6 pb-5"
            >
              <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
