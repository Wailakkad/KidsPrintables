import React, { useEffect, useRef, useState } from 'react';
import { Check, Lock } from 'lucide-react';
import { EMAIL_FORM_URL, EMAIL_REGEX } from '../lib/emailCapture';
import {
  HALLOWEEN_PDF_UNLOCK_STORAGE_KEY,
  PAGES_COUNT,
  PDF_URL,
} from '../lib/halloweenLanding';

const PURPLE = '#6D4D8F';

/** Returns true when this browser has already submitted an email on the Halloween page. */
export function isHalloweenPdfUnlocked(): boolean {
  try {
    return localStorage.getItem(HALLOWEEN_PDF_UNLOCK_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function markHalloweenPdfUnlocked(): void {
  try {
    localStorage.setItem(HALLOWEEN_PDF_UNLOCK_STORAGE_KEY, '1');
  } catch {
    /* ignore */
  }
}

/** Triggers a browser download of the gated PDF. */
function triggerPdfDownload(): void {
  const anchor = document.createElement('a');
  anchor.href = PDF_URL;
  anchor.download = 'Free-Halloween-Coloring-Pages-for-Kids.pdf';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

/**
 * Email-gated download modal for /free-halloween-coloring-pages.
 * Opens when a locked user clicks any Download CTA. On successful email
 * submit it unlocks (localStorage) and triggers the PDF download.
 */
export function EmailGatedDownloadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(false);

  const iframeName = 'halloween-gated-download-frame';

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => {
      document.getElementById('halloween-gated-email')?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([type="hidden"]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    const trimmed = email.trim();
    if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setError('Please confirm you are happy to receive emails from us.');
      return;
    }
    setError('');

    const finish = () => {
      markHalloweenPdfUnlocked();
      setStatus('success');
      triggerPdfDownload();
    };

    if (!EMAIL_FORM_URL) {
      console.warn(
        '[email-capture] VITE_EMAIL_FORM_URL is not set — email was not stored anywhere.'
      );
      finish();
      return;
    }

    setStatus('submitting');
    pendingRef.current = true;
    window.setTimeout(() => formRef.current?.submit(), 0);
  };

  const handleFrameLoad = () => {
    if (!pendingRef.current) return;
    pendingRef.current = false;
    markHalloweenPdfUnlocked();
    setStatus('success');
    triggerPdfDownload();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="halloween-gated-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="relative bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download dialog"
          className="absolute top-4 right-4 p-2 rounded-lg text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#F3EFE6] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div
          className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-3 font-mono-tabular"
          style={{
            color: PURPLE,
            backgroundColor: '#EFE8F6',
            border: '1px solid #D9CBE8',
          }}
        >
          <Lock className="w-3 h-3" aria-hidden="true" />
          <span>Free · {PAGES_COUNT}-page PDF</span>
        </div>

        <h2
          id="halloween-gated-title"
          className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2"
        >
          Enter your email to download
        </h2>
        <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
          Pop in your email below and we'll unlock your free{' '}
          {PAGES_COUNT}-page Halloween coloring PDF instantly — no account needed.
        </p>

        {status === 'success' ? (
          <div
            role="status"
            className="flex items-start gap-2.5 bg-white border border-[#3F624D]/30 text-[#1E1B18] px-4 py-3 rounded-xl text-sm"
          >
            <Check
              className="w-4 h-4 text-[#3F624D] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>
              You're all set! Your download should have started automatically.
            </span>
          </div>
        ) : (
          <form
            ref={formRef}
            action={EMAIL_FORM_URL}
            method="POST"
            target={iframeName}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-3"
          >
            <input type="hidden" name="source" value="halloween-download" />
            <input
              type="hidden"
              name="page"
              value={
                typeof window !== 'undefined' ? window.location.pathname : '/'
              }
            />
            <input
              type="hidden"
              name="referrer"
              value={
                typeof document !== 'undefined' ? document.referrer : ''
              }
            />
            {/* Honeypot — humans leave this empty */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="halloween-gated-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="halloween-gated-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#D8D0C2] rounded-xl text-[#1E1B18] placeholder:text-[#8A8178] focus:outline-none focus:ring-2 focus:ring-[#6D4D8F] min-h-[44px]"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-colors min-h-[44px] whitespace-nowrap shrink-0 disabled:opacity-70"
                style={{ backgroundColor: PURPLE }}
              >
                {status === 'submitting' ? 'Sending…' : 'Unlock My PDF'}
              </button>
            </div>

            <label className="flex items-start gap-2 text-xs text-[#5C554E] leading-relaxed">
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (error) setError('');
                }}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#3F624D]"
              />
              <span>
                Yes, email me free printables and preschool activity ideas. I can
                unsubscribe anytime.
              </span>
            </label>

            {error && (
              <p role="alert" className="text-xs text-[#B91C1C]">
                {error}
              </p>
            )}

            <iframe
              name={iframeName}
              title="Email signup response"
              aria-hidden="true"
              tabIndex={-1}
              className="hidden"
              onLoad={handleFrameLoad}
            />
          </form>
        )}

        <p className="mt-4 text-[11px] text-[#8A8178]">
          We use your email only for our newsletter. Unsubscribe with one click
          anytime.
        </p>
      </div>
    </div>
  );
}
