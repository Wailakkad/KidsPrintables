import React, { useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { EMAIL_FORM_URL, EMAIL_REGEX } from '../lib/emailCapture';
import { FREE_SAMPLE_PDF_URL } from '../lib/posts';

interface EmailSignupFormProps {
  idPrefix: string;
  source: 'popup' | 'newsletter';
  ctaLabel?: string;
  variant?: 'dark' | 'accent';
  successMessage?: React.ReactNode;
  onSubmitted?: () => void;
}

export function EmailSignupForm({
  idPrefix,
  source,
  ctaLabel = 'Send Free Printables',
  variant = 'dark',
  successMessage,
  onSubmitted,
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const pendingRef = useRef(false);

  const iframeName = `${idPrefix}-capture-frame`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

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

    if (!EMAIL_FORM_URL) {
      console.warn(
        '[email-capture] VITE_EMAIL_FORM_URL is not set — email was not stored anywhere.'
      );
      setStatus('success');
      onSubmitted?.();
      return;
    }

    setStatus('submitting');
    pendingRef.current = true;
    window.setTimeout(() => formRef.current?.submit(), 0);
  };

  const handleFrameLoad = () => {
    if (!pendingRef.current) return;
    pendingRef.current = false;
    setStatus('success');
    onSubmitted?.();
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex items-start gap-2.5 bg-white border border-[#3F624D]/30 text-[#1E1B18] px-4 py-3 rounded-xl text-sm"
      >
        <Check className="w-4 h-4 text-[#3F624D] shrink-0 mt-0.5" aria-hidden="true" />
        <span>
          {successMessage ?? (
            <>
              You are on the list! Check <strong>{email}</strong> for your welcome note —
              and grab your instant sample below.
            </>
          )}
          <a
            href={FREE_SAMPLE_PDF_URL}
            download="Kids-Printables-Fall-Sample-Ages-3-5.pdf"
            className="block mt-1.5 font-semibold text-[#C85A17] hover:underline"
          >
            Download the free 3-page sample PDF →
          </a>
        </span>
      </div>
    );
  }

  const buttonClass =
    variant === 'accent'
      ? 'px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#C85A17] text-white hover:bg-[#B04B0E] transition-colors min-h-[44px] whitespace-nowrap shrink-0 disabled:opacity-70'
      : 'px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#1E1B18] text-white hover:bg-[#332E2A] transition-colors min-h-[44px] whitespace-nowrap shrink-0 disabled:opacity-70';

  return (
    <form
      ref={formRef}
      action={EMAIL_FORM_URL}
      method="POST"
      target={iframeName}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3"
    >
      <input type="hidden" name="source" value={source} />
      <input
        type="hidden"
        name="page"
        value={typeof window !== 'undefined' ? window.location.pathname : '/'}
      />
      <input
        type="hidden"
        name="referrer"
        value={typeof document !== 'undefined' ? document.referrer : ''}
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
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your email address..."
            className="w-full px-4 py-2.5 text-sm bg-white border border-[#D8D0C2] rounded-xl text-[#1E1B18] placeholder:text-[#8A8178] focus:outline-none focus:ring-2 focus:ring-[#C85A17] min-h-[44px]"
          />
        </div>
        <button type="submit" disabled={status === 'submitting'} className={buttonClass}>
          {status === 'submitting' ? 'Sending…' : ctaLabel}
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
          Yes, email me free printables and preschool activity ideas. I can unsubscribe
          anytime.
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
  );
}
