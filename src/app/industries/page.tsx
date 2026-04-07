import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Mazel Solutions serves healthcare, financial services, manufacturing, technology, government, and professional services organizations with specialized IT consulting, cybersecurity, and development.',
};

const industries = [
  {
    name: 'Healthcare',
    challenges: [
      'HIPAA compliance and security rule enforcement across all systems',
      'EHR integration and clinical data interoperability',
      'Secure telehealth infrastructure with zero-downtime requirements',
    ],
    services: [
      { label: 'Cybersecurity', anchor: 'security' },
      { label: 'HIPAA & Compliance', anchor: 'compliance' },
      { label: 'Network Architecture', anchor: 'network' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="24" height="24" rx="5" stroke="#0099FF" strokeWidth="1.75" fill="none" />
        <path d="M15 9v12M9 15h12" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Financial Services',
    challenges: [
      'PCI-DSS compliance for payment and card data processing',
      'Fraud detection systems and real-time threat monitoring',
      'Secure transaction processing and data sovereignty controls',
    ],
    services: [
      { label: 'Cybersecurity', anchor: 'security' },
      { label: 'Application Development', anchor: 'development' },
      { label: 'HIPAA & Compliance', anchor: 'compliance' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="24" height="17" rx="3" stroke="#0099FF" strokeWidth="1.75" fill="none" />
        <path d="M9 10V8a6 6 0 0112 0v2" stroke="#0099FF" strokeWidth="1.75" fill="none" />
        <circle cx="15" cy="18" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M15 15v6" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    challenges: [
      'OT/IT network convergence and secure segmentation',
      'IoT device security management across the factory floor',
      'Supply chain digitization without disrupting production',
    ],
    services: [
      { label: 'Network Architecture', anchor: 'network' },
      { label: 'Cybersecurity', anchor: 'security' },
      { label: 'IT Consulting', anchor: 'consulting' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="3" y="18" width="7" height="9" rx="1.5" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <rect x="11.5" y="13" width="7" height="14" rx="1.5" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <rect x="20" y="8" width="7" height="19" rx="1.5" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M6.5 18l4-5M15 13l4-5" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Technology / SaaS',
    challenges: [
      'Scalable cloud-native architecture for rapid user growth',
      'CI/CD pipeline maturity and DevOps transformation',
      'SOC 2 readiness to unlock enterprise sales cycles',
    ],
    services: [
      { label: 'Application Development', anchor: 'development' },
      { label: 'IT Consulting', anchor: 'consulting' },
      { label: 'Vendor Evaluation', anchor: 'evaluation' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M7 10l-4 5 4 5" stroke="#0099FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M23 10l4 5-4 5" stroke="#0099FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M18 6L12 24" stroke="#0099FF" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Government',
    challenges: [
      'FedRAMP and FISMA compliance for cloud systems',
      'Secure communications infrastructure and classified network design',
      'Legacy system modernization and citizen-facing service delivery',
    ],
    services: [
      { label: 'Cybersecurity', anchor: 'security' },
      { label: 'HIPAA & Compliance', anchor: 'compliance' },
      { label: 'Application Development', anchor: 'development' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M15 3l13 6.5v2.5H2V9.5L15 3z" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M5 12v13M10 12v13M15 12v13M20 12v13M25 12v13" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 25h26" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M1 28h28" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Professional Services',
    challenges: [
      'Client data protection and attorney-client / patient confidentiality',
      'Workflow automation and practice management integration',
      'Secure cloud migration for distributed or remote teams',
    ],
    services: [
      { label: 'IT Consulting', anchor: 'consulting' },
      { label: 'Application Development', anchor: 'development' },
      { label: 'Cybersecurity', anchor: 'security' },
    ],
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="10" r="5" stroke="#0099FF" strokeWidth="1.75" fill="none" />
        <path d="M5 27c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#0099FF" strokeWidth="1.75" fill="none" strokeLinecap="round" />
        <circle cx="25" cy="9" r="3.5" stroke="#0099FF" strokeWidth="1.25" fill="none" />
        <path d="M28.5 20c0-3-2-5-4-6" stroke="#0099FF" strokeWidth="1.25" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(0,153,255,0.10) 0%, transparent 65%)' }}
        />
        {/* Decorative mesh */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] mesh-animate pointer-events-none"
          viewBox="0 0 900 500"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="80"  cy="80"  r="2.5" fill="#0099FF" />
          <circle cx="300" cy="140" r="2"   fill="#0099FF" />
          <circle cx="500" cy="60"  r="3"   fill="#0099FF" />
          <circle cx="720" cy="180" r="2"   fill="#0099FF" />
          <circle cx="860" cy="90"  r="2.5" fill="#0099FF" />
          <circle cx="180" cy="320" r="2"   fill="#0099FF" />
          <circle cx="420" cy="280" r="3"   fill="#0099FF" />
          <circle cx="620" cy="380" r="2"   fill="#0099FF" />
          <circle cx="800" cy="300" r="2.5" fill="#0099FF" />
          <line x1="80"  y1="80"  x2="300" y2="140" stroke="#0099FF" strokeWidth="0.4" />
          <line x1="300" y1="140" x2="500" y2="60"  stroke="#0099FF" strokeWidth="0.4" />
          <line x1="500" y1="60"  x2="720" y2="180" stroke="#0099FF" strokeWidth="0.4" />
          <line x1="720" y1="180" x2="860" y2="90"  stroke="#0099FF" strokeWidth="0.4" />
          <line x1="180" y1="320" x2="420" y2="280" stroke="#0099FF" strokeWidth="0.4" />
          <line x1="420" y1="280" x2="620" y2="380" stroke="#0099FF" strokeWidth="0.4" />
          <line x1="620" y1="380" x2="800" y2="300" stroke="#0099FF" strokeWidth="0.4" />
          <line x1="80"  y1="80"  x2="180" y2="320" stroke="#0099FF" strokeWidth="0.25" />
          <line x1="500" y1="60"  x2="420" y2="280" stroke="#0099FF" strokeWidth="0.25" />
          <line x1="860" y1="90"  x2="800" y2="300" stroke="#0099FF" strokeWidth="0.25" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
              Sector Expertise
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-[-0.5px]">
              Industries<br />
              <span className="gradient-text">We Serve</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="mt-6 text-xl text-white/70 max-w-2xl leading-relaxed">
              Deep domain knowledge meets enterprise engineering. We address the specific compliance burdens, security requirements, and infrastructure challenges that define your industry.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-warm inline-flex items-center text-white font-semibold px-8 py-4 rounded-3xl text-base"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center text-white/70 hover:text-white font-semibold px-8 py-4 rounded-3xl border border-white/[0.12] hover:border-white/[0.25] transition-colors text-base"
              >
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-semibold font-display text-center mb-4">
              Specialized for Your Sector
            </h2>
            <p className="text-center text-white/50 max-w-xl mx-auto mb-16 leading-relaxed">
              Each engagement starts with understanding your regulatory environment and operational constraints — not a generic playbook.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <ScrollReveal
                key={industry.name}
                delay={Math.min((i % 3) + 1, 5) as 1 | 2 | 3 | 4 | 5}
              >
                <div className="bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 h-full card-hover group relative overflow-hidden flex flex-col">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(0,153,255,0.07) 0%, transparent 65%)' }}
                  />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="mb-5 p-3 inline-flex rounded-2xl bg-[rgba(0,153,255,0.08)] w-fit">
                      {industry.icon}
                    </div>

                    {/* Industry name */}
                    <h3 className="text-2xl font-semibold font-display text-white mb-5">
                      {industry.name}
                    </h3>

                    {/* Challenges */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3">
                          <span className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0099FF] opacity-70" />
                          <span className="text-white/60 text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Services */}
                    <div className="pt-5 border-t border-white/[0.06]">
                      <p className="text-[11px] uppercase tracking-widest text-white/35 mb-3 font-semibold">
                        Relevant Services
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service) => (
                          <Link
                            key={service.anchor}
                            href={`/services#${service.anchor}`}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/[0.06] text-white/60 hover:bg-[rgba(0,153,255,0.15)] hover:text-[#0099FF] border border-transparent hover:border-[rgba(0,153,255,0.25)] transition-all duration-200"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domain Expertise Matters */}
      <section className="py-24 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,153,255,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">Our Approach</p>
            <h2 className="text-4xl sm:text-5xl font-semibold font-display leading-tight">
              Generic advice is a{' '}
              <span className="gradient-text">liability</span>.
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              A hospital and a hedge fund both need "cybersecurity" — but HIPAA security rules and PCI-DSS requirements are fundamentally different compliance landscapes. We know the difference before we walk in the door.
            </p>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Our team has deployed solutions at Kaiser Permanente, Verizon, and ClearCaptions — environments where compliance failures carry real legal and operational consequences.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center text-[#0099FF] font-semibold hover:text-white transition-colors gap-2 group"
              >
                About the team
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { label: 'Regulatory Fluency', desc: 'HIPAA, PCI-DSS, FedRAMP, SOC 2 — frameworks applied in production, not studied from a textbook.' },
              { label: 'Vendor-Agnostic', desc: 'No reseller agreements. We recommend what fits your industry, not what pays the highest margin.' },
              { label: 'Built for Scale', desc: 'Solutions architected to grow with your business without requiring a rebuild at the next inflection point.' },
              { label: 'Full-Lifecycle Partner', desc: 'From discovery through deployment and ongoing management — one relationship across the stack.' },
            ].map((point, i) => (
              <ScrollReveal key={point.label} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <div className="card-hover flex items-start gap-4 bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-5">
                  <div className="mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#0099FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-white">{point.label}</h3>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,153,255,0.09) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-semibold font-display leading-tight">
              Don&apos;t see your industry?
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Our expertise travels across verticals. Let&apos;s discuss how we can address your specific technology, compliance, and infrastructure challenges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-warm inline-flex items-center text-white font-semibold px-8 py-4 rounded-3xl text-base"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-white/70 hover:text-white font-semibold px-8 py-4 rounded-3xl border border-white/[0.12] hover:border-white/[0.25] transition-colors text-base"
              >
                View Case Studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
