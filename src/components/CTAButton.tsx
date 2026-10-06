import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from '../lib/router';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'sage';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
  externalIcon?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  children,
  showArrow = false,
  externalIcon = false,
  className = '',
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]';

  const variantClasses = {
    primary:
      'bg-[#C85A17] text-white hover:bg-[#B04B0E] active:translate-y-[1px] shadow-sm',
    secondary:
      'bg-white text-[#1E1B18] border border-[#D8D0C2] hover:bg-[#F3EFE6] hover:border-[#C2B8A6] active:translate-y-[1px]',
    sage:
      'bg-[#3F624D] text-white hover:bg-[#32503E] active:translate-y-[1px] shadow-sm',
  }[variant];

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs min-h-[38px]',
    md: 'px-5 py-2.5 text-sm min-h-[44px]',
    lg: 'px-6 py-3.5 text-base min-h-[48px]',
  }[size];

  return (
    <Link
      href={href}
      ariaLabel={ariaLabel}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
      {externalIcon && <ExternalLink className="w-4 h-4 shrink-0 opacity-85" aria-hidden="true" />}
    </Link>
  );
}
