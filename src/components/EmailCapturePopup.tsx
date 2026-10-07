import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { EmailSignupForm } from './EmailSignupForm';
import {
  EMAIL_POPUP_COOLDOWN_MS,
  EMAIL_POPUP_STORAGE_KEY,
} from '../lib/emailCapture';

export function EmailCapturePopup() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const lastSeen = Number(localStorage.getItem(EMAIL_POPUP_STORAGE_KEY) || 0);
      if (Date.now() - lastSeen < EMAIL_POPUP_COOLDOWN_MS) return;
    } catch {
      /* storage unavailable — still allow the popup */
    }

    const show = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      setOpen(true);
    };

    const timerId = window.setTimeout(show, 9000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.relatedTarget === null && e.clientY <= 0) show();
    };
    const isDesktop =
      typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.clearTimeout(timerId);
      if (isDesktop) document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(EMAIL_POPUP_STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  const markCaptured = () => {
    try {
      localStorage.setItem(EMAIL_POPUP_STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => {
      document.getElementById('email-capture-email')?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
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
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-capture-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs"
      onClick={dismiss}
    >
      <div
        ref={panelRef}
        className="relative bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close newsletter signup"
          className="absolute top-4 right-4 p-2 rounded-lg text-[#5C554E] hover:text-[#1E1B18] hover:bg-[#F3EFE6] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-medium text-[#C85A17] mb-2 font-mono-tabular pr-8">
          Free Monthly Preschool Printables · Ages 3–5
        </div>
        <h2
          id="email-capture-title"
          className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2"
        >
          Want Fresh Free Printables Every Month?
        </h2>
        <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
          Join preschool parents and teachers who get one free seasonal printable sampler
          plus low-prep morning basket ideas — straight to their inbox. No spam, ever.
        </p>

        <EmailSignupForm
          idPrefix="email-capture"
          source="popup"
          ctaLabel="Send My Free Printables"
          variant="accent"
          onSubmitted={markCaptured}
        />

        <p className="mt-4 text-[11px] text-[#8A8178]">
          We use your email only for our newsletter. Unsubscribe with one click anytime.
        </p>
      </div>
    </div>
  );
}
