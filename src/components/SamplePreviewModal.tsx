import React from 'react';
import { X, Download, ExternalLink, Check } from 'lucide-react';
import { FALL_ACTIVITY_PACK, FREE_SAMPLE_PDF_URL, PAYHIP_PRODUCT_URL } from '../lib/posts';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SamplePreviewModal({ isOpen, onClose }: SamplePreviewModalProps) {
  if (!isOpen) return null;

  const samplePages = [
    {
      page: 'Page 1 of 3',
      title: 'Pumpkin Patch Ten-Frame Counting (1–10)',
      skill: 'Early Math · One-to-One Correspondence',
      description: 'Children count the pumpkins in the ten-frame and trace or clip the matching numeral.',
    },
    {
      page: 'Page 2 of 3',
      title: 'Falling Autumn Leaves Pre-Writing Line Paths',
      skill: 'Fine Motor · Pencil Control',
      description: 'Horizontal, wavy, and zig-zag dotted lines guiding falling oak and maple leaves.',
    },
    {
      page: 'Page 3 of 3',
      title: 'Harvest Scissor Cutting & Pattern Strips',
      skill: 'Bilateral Coordination · AB Sequencing',
      description: 'Sturdy straight-line snip strips plus an AB pumpkin-and-acorn pattern puzzle.',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E6E0D4]">
          <div>
            <div className="text-xs font-medium text-[#3F624D] font-mono-tabular mb-1">
              Free Printable Sample · 3 Pages · US Letter &amp; A4
            </div>
            <h2 id="sample-modal-title" className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18]">
              Inside Your Free 3-Page Fall Printable Sample
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sample preview"
            className="p-2 rounded-lg text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#F3EFE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-5 overflow-hidden rounded-xl border border-[#E6E0D4] bg-white aspect-[16/9]">
          <img
            src={FALL_ACTIVITY_PACK.sampleImage}
            alt="Three sample preschool fall printable worksheets"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-3 mb-6">
          {samplePages.map((item) => (
            <div
              key={item.page}
              className="bg-white border border-[#E6E0D4] rounded-xl p-4 flex items-start gap-3"
            >
              <Check className="w-4 h-4 text-[#3F624D] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <div className="text-xs text-[#5C554E] font-mono-tabular">
                  {item.page} · {item.skill}
                </div>
                <div className="text-sm font-semibold text-[#1E1B18] mt-0.5">{item.title}</div>
                <p className="text-xs text-[#5C554E] mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#E6E0D4]">
          <a
            href={FREE_SAMPLE_PDF_URL}
            download="Kids-Printables-Fall-Sample-Ages-3-5.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#3F624D] text-white hover:bg-[#32503E] transition-colors min-h-[44px] whitespace-nowrap"
          >
            <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Download Free 3-Page PDF</span>
          </a>

          <a
            href={PAYHIP_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#C85A17] text-white hover:bg-[#B04B0E] transition-colors min-h-[44px] whitespace-nowrap"
          >
            <span>Get Full 58-Page Pack ($7)</span>
            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
