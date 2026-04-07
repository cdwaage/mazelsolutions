import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and resources from Mazel Solutions on IT strategy, compliance, and technology decisions.',
};

const posts = [
  {
    title: 'Why Vendor-Agnostic Consulting Saves You Money',
    date: 'March 15, 2026',
    category: 'Strategy',
    excerpt:
      'Most IT consultancies have vendor partnerships that influence their recommendations. Here\u2019s how an independent approach can cut your technology spending by 20\u201340% while getting better-fit solutions.',
    readTime: '8 min read',
  },
  {
    title: 'HIPAA Security Checklist for 2026',
    date: 'February 28, 2026',
    category: 'Compliance',
    excerpt:
      'The regulatory landscape is shifting. From updated encryption requirements to new telehealth provisions, here\u2019s your complete checklist for HIPAA security compliance in 2026.',
    readTime: '12 min read',
  },
  {
    title: 'When to Build Custom vs. Buy SaaS',
    date: 'February 10, 2026',
    category: 'Development',
    excerpt:
      'The build vs. buy decision can make or break your technology budget. We break down the real costs, hidden risks, and decision framework we use with our clients.',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(0,153,255,0.08) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[#0099FF] font-semibold text-sm uppercase tracking-widest mb-4">
              Knowledge Base
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight">
              Insights &amp;{' '}
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Practical guidance on IT strategy, compliance, and technology decisions — written from
              the front lines of enterprise consulting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#020817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <article className="bg-[#0F172A] border border-white/[0.08] rounded-3xl p-8 flex flex-col h-full card-hover">
                  {/* Category badge */}
                  <div className="mb-5">
                    <span
                      className="inline-block text-[#0099FF] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: 'rgba(0,153,255,0.15)' }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-white/50 text-sm mb-3">{post.date}</p>

                  {/* Title */}
                  <h2 className="text-[24px] font-bold font-[family-name:var(--font-display)] leading-snug text-white mb-4">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/70 leading-relaxed flex-1">{post.excerpt}</p>

                  {/* Read time */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-2 text-white/50 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,153,255,0.10) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold font-[family-name:var(--font-display)] mb-6">
              Have a technology challenge?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Skip the articles — talk directly with a senior consultant who has solved it before.
            </p>
            <a
              href="/contact"
              className="btn-warm inline-block text-white font-semibold text-lg px-8 py-4 rounded-full"
            >
              Schedule a Free Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
