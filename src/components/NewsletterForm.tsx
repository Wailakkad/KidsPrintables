import React from 'react';
import { EmailSignupForm } from './EmailSignupForm';

export function NewsletterForm() {
  return (
    <section
      aria-label="Seasonal free printables newsletter"
      className="bg-[#F3EFE6] border border-[#DED6C6] rounded-2xl p-6 sm:p-8"
    >
      <div className="max-w-2xl">
        <div className="text-xs font-medium text-[#3F624D] mb-1.5">
          Free Monthly Preschool Printables · Ages 3–5
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1B18] mb-2">
          Get Seasonal Print-and-Go Freebies Sent to Your Inbox
        </h3>
        <p className="text-sm text-[#5C554E] leading-relaxed mb-5">
          Join preschool parents, teachers, and homeschoolers. Every month we send one free
          seasonal printable sampler plus low-prep morning basket ideas.
        </p>

        <EmailSignupForm
          idPrefix="newsletter"
          source="newsletter"
          ctaLabel="Send Free Printables"
        />
      </div>
    </section>
  );
}
