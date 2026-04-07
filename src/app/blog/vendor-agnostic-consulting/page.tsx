import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Why Vendor-Agnostic Consulting Saves You Money',
  description:
    'How vendor partnerships inflate IT costs by 20-40%, and why an independent consulting approach delivers better-fit solutions for less money.',
};

export default function VendorAgnosticArticle() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(0,153,255,0.08) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0099FF] text-sm font-semibold uppercase tracking-wider mb-8 hover:text-white transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Blog
            </Link>
            <div className="mb-6">
              <span
                className="inline-block text-[#0099FF] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,153,255,0.15)' }}
              >
                Strategy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6">
              Why Vendor-Agnostic Consulting{' '}
              <span className="gradient-text">Saves You Money</span>
            </h1>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span>March 15, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>7 min read</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Cameron Waage</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-[#020817]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-dark">
            <ScrollReveal>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Early in my career, I worked at Shandam Consulting, a vendor-agnostic firm that did HIPAA assessments and network security work for California state agencies. It was my first exposure to a consultancy that genuinely did not care which vendor&apos;s logo was on the box. Every recommendation was based on fit, cost, and operational reality. When I left and started working alongside vendor-aligned consultancies, the difference was immediate and jarring.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                That experience is why I founded Mazel Solutions with a strict rule: no reseller agreements, no vendor quotas, no referral kickbacks. After 27 years in enterprise networking and security, I can tell you with certainty that vendor relationships are the single largest hidden driver of inflated IT costs. Not incompetence. Not complexity. Incentives.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mt-12 mb-6">
                How the Vendor-Partner Model Actually Works
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Most IT consultancies operate as authorized resellers or partners for one or more major vendors — Cisco, Palo Alto, Fortinet, Microsoft, VMware, and so on. These partnerships come with tiered incentive structures. The more product a consultancy sells, the higher their discount tier, the bigger their rebates, and the more co-marketing dollars they receive. Some tiers require minimum annual sales targets.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                This creates an incentive that is perfectly rational for the consultancy and perfectly misaligned with your interests. When your consultant earns a 20% margin on Vendor A&apos;s firewall and a 5% margin on Vendor B&apos;s, the recommendation is tilted before the first meeting starts. They do not need to lie to you. They just need to frame the comparison in a way that favors the product that pays them more.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mt-12 mb-6">
                Real Examples I Have Seen
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                <strong className="text-white">The oversized firewall.</strong> A mid-size healthcare company was sold a pair of enterprise-grade next-generation firewalls with a five-year support contract totaling over $180,000. Their traffic volume and feature requirements could have been met by a model two tiers down at roughly $65,000 for the same contract term. The consultancy was a Platinum partner for that vendor. The client had no way to know they were paying for throughput capacity they would never use.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                <strong className="text-white">The unnecessary platform migration.</strong> A state agency was advised to migrate from a stable, well-understood switching platform to a newer software-defined networking solution. The justification was &quot;future-proofing.&quot; The real driver was that the consulting firm had just achieved a new partner tier with the SDN vendor and needed to hit an annual sales target. The migration introduced 14 months of instability and required additional consulting hours to resolve. The original platform would have served them for another five years.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                <strong className="text-white">The feature bundle upsell.</strong> A logistics company needed basic network monitoring. They were sold a full SIEM platform with advanced threat analytics, user behavior analytics, and a machine learning module — a $120,000 annual subscription. What they actually needed was a $15,000 monitoring solution with SNMP polling and syslog alerting. The SIEM sat at 8% utilization for two years before they called me to audit it.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mt-12 mb-6">
                What Vendor-Agnostic Means in Practice
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                When I walk into an engagement, I have no inventory to move, no quota to hit, and no rebate to protect. My only financial incentive is that you are satisfied enough to call me again or refer me to someone else. That changes every conversation.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                It means I can recommend Palo Alto for one client and Fortinet for another based purely on their traffic patterns, staff expertise, integration requirements, and budget. It means I can tell you that the equipment you already own is sufficient and that you should spend money on training your team instead of replacing hardware. It means I can recommend open-source tools where they genuinely fit, without worrying about losing a sales commission.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I have deployed Cisco ACI fabrics, Palo Alto firewalls, Juniper SRX clusters, F5 load balancers, and VMware NSX environments in production. I have also told clients not to buy any of those products when a simpler solution was the right answer. That is only possible when the consultant has no financial relationship with the vendor.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mt-12 mb-6">
                How to Protect Yourself
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Whether you work with me or someone else, here are four questions that will save you money on every technology purchase:
              </p>
              <ol className="space-y-4 mb-8">
                <li className="text-white/80 text-lg leading-relaxed pl-2">
                  <strong className="text-white">1. &quot;Do you hold a reseller agreement or partner status with any vendor you are recommending?&quot;</strong> If the answer is yes, you need an independent second opinion on the sizing and product selection. Not necessarily a different vendor — just a different perspective on whether you need the specific model and license tier being proposed.
                </li>
                <li className="text-white/80 text-lg leading-relaxed pl-2">
                  <strong className="text-white">2. &quot;What is the least expensive option that meets our actual requirements?&quot;</strong> Vendor-aligned consultants rarely volunteer the cheapest path. Make them justify the gap between the minimum viable solution and what they are proposing.
                </li>
                <li className="text-white/80 text-lg leading-relaxed pl-2">
                  <strong className="text-white">3. &quot;What would you recommend if we could only spend half this budget?&quot;</strong> This forces creative thinking and often reveals that the &quot;essential&quot; features in the original proposal were actually optional.
                </li>
                <li className="text-white/80 text-lg leading-relaxed pl-2">
                  <strong className="text-white">4. &quot;Can we phase this deployment over 18 months instead of doing everything at once?&quot;</strong> Phased rollouts let you validate the solution at smaller scale before committing the full budget. Consultants with sales quotas prefer big one-time purchases. Consultants focused on your outcome prefer phased approaches that reduce risk.
                </li>
              </ol>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mt-12 mb-6">
                The Bottom Line
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I have been on both sides of this. I have seen the internal emails about partner tier targets. I have sat in meetings where the recommendation was decided before the client&apos;s requirements were fully understood. And I have spent the last seven years at Mazel Solutions doing it differently — recommending the right tool for the job regardless of who makes it, and sleeping well because of it.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                If your technology budget feels bloated, the first place to look is not your team&apos;s efficiency or your infrastructure&apos;s complexity. It is the incentive structure of the people advising you. Fix that, and the savings follow.
              </p>
            </ScrollReveal>
          </article>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 p-8 bg-[#0F172A] border border-white/[0.08] rounded-3xl text-center">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
                Want a vendor-agnostic second opinion?
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                I will review your current technology stack and tell you honestly whether you are overpaying. No sales pitch, no vendor agenda.
              </p>
              <Link
                href="/contact"
                className="btn-warm inline-block text-white font-semibold text-lg px-8 py-4 rounded-full"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </ScrollReveal>

          {/* Back to Blog */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#0099FF] font-semibold hover:text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
