import React, { useState } from 'react';
import { Check } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Seasonal free printables newsletter"
      className="bg-[#F3EFE6] border border-[#E6E0D4] rounded-2xl p-6 sm:p-8"
    >
      <div className="max-w-2xl">
        <div className="text-xs font-medium text-[#3F624D] mb-1.5">
          Free Monthly Preschool Printables · Ages 3–5
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2">
          Get Seasonal Print-and-Go Freebies Sent to Your Inbox
        </h3>
        <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
          Join 14,000+ preschool parents, teachers, and homeschoolers. Every month we send one free seasonal printable sampler plus low-prep morning basket ideas.
        </p>

        {submitted ? (
          <div
            role="status"
            className="flex items-center gap-2.5 bg-white border border-[#3F624D]/30 text-[#1E1B18] px-4 py-3 rounded-xl text-sm"
          >
            <Check className="w-4 h-4 text-[#3F624D] shrink-0" aria-hidden="true" />
            <span>
              You are on the list! Check <strong>{email}</strong> for your welcome printable link, or grab the instant PDF sample above.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email address..."
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#D8D0C2] rounded-xl text-[#1E1B18] placeholder:text-[#8A8178] focus:outline-none focus:ring-2 focus:ring-[#C85A17] min-h-[44px]"
              />
              {error && (
                <p role="alert" className="mt-1.5 text-xs text-[#B91C1C]">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#1E1B18] text-white hover:bg-[#332E2A] transition-colors min-h-[44px] whitespace-nowrap shrink-0"
            >
              Send Free Printables
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
