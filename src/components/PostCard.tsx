import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../lib/posts';
import { Link } from '../lib/router';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-white border border-[#E6E0D4] rounded-2xl overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5">
      <div>
        <Link
          href={`/blog/${post.slug}`}
          ariaLabel={`Read article: ${post.title}`}
          className="block overflow-hidden bg-[#F3EFE6] aspect-[16/9] border-b border-[#E6E0D4]"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        <div className="p-6">
          {/* Unboxed clean metadata with typographic separators (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C554E] mb-2.5 font-mono-tabular">
            <span className="font-medium text-[#C85A17]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.ageRange}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-display text-xl font-semibold text-[#1E1B18] leading-snug mb-2.5 group-hover:text-[#C85A17] transition-colors">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-sm text-[#5C554E] leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-[#F3EFE6] flex items-center justify-between text-xs text-[#5C554E]">
        <span>Topics: {post.tags.slice(0, 3).join(' · ')}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-[#C85A17] hover:text-[#B04B0E] whitespace-nowrap"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
