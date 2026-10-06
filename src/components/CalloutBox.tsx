import React, { useState } from 'react';
import { Download, Eye, Check } from 'lucide-react';
import { FALL_ACTIVITY_PACK, FREE_SAMPLE_PDF_URL } from '../lib/posts';
import { useRouter } from '../lib/router';

interface CalloutBoxProps {
  title?: string;
  description?: string;
  variant?: 'sample' | 'tip';
}

export function CalloutBox({
  title = 'Free Printable Sample: Try 3 Fall Pages Today',
  description = 'Want to test the paper quality and age level with your preschooler first? Download our free 3-page Fall Sampler PDF featuring the Pumpkin Patch Counting Sheet, Falling Leaf Line Tracing, and Autumn Scissor Cutting Strips.',
  variant = 'sample',
}: CalloutBoxProps) {
  const { openSampleModal } = useRouter();
  const [downloaded, setDownloaded] = useState(false);

  if (variant === 'tip') {
    return (
      <aside
        aria-label="Teacher and parent printing tip"
        className="my-8 bg-[#F3EFE6] border-l-4 border-[#3F624D] rounded-r-xl p-5 sm:p-6"
      >
        <div className="text-xs font-semibold text-[#3F624D] mb-1">
          Teacher &amp; Homeschool Prep Tip
        </div>
        <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-[#5C554E] leading-relaxed">{description}</p>
      </aside>
    );
  }

  return (
    <aside
      id="free-sample"
      aria-label="Free printable sample download"
      className="my-10 bg-[#F3EFE6] border border-[#DED6C6] rounded-2xl p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-xl bg-white border border-[#E6E0D4] aspect-[4/3]">
            <img
              src={FALL_ACTIVITY_PACK.sampleImage}
              alt="Preview of 3 free sample preschool fall printable worksheets"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="text-xs font-medium text-[#3F624D] mb-1.5 font-mono-tabular">
            Free Printable Sample · 3 Pages · Ages 3–5 · PDF
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2">
            {title}
          </h3>

          <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={FREE_SAMPLE_PDF_URL}
              download="Kids-Printables-Fall-Sample-Ages-3-5.pdf"
              onClick={() => setDownloaded(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#3F624D] text-white hover:bg-[#32503E] transition-colors min-h-[44px] whitespace-nowrap"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Sample PDF Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Download Free Sample PDF</span>
                </>
              )}
            </a>

            <button
              type="button"
              onClick={openSampleModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-white text-[#1E1B18] border border-[#D8D0C2] hover:bg-[#FAF7F2] transition-colors min-h-[44px] whitespace-nowrap"
            >
              <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Preview Sample Pages</span>
            </button>
          </div>

          <p className="mt-3 text-xs text-[#5C554E]">
            Direct instant download (<code className="font-mono-tabular text-[#1E1B18]">/Free Fall Printable Sample.pdf</code>) — no email wall required.
          </p>
        </div>
      </div>
    </aside>
  );
}
