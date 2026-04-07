import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Mazel Solutions offers IT consulting, application development, network architecture, cybersecurity, HIPAA compliance, and vendor-agnostic technology evaluation.',
};

const services = [
  {
    id: 'consulting',
    title: 'IT Consulting & Strategy',
    subtitle: 'Fractional CTO / VCIO Services',
    bg: '#020817',
    description:
      'Strategic technology leadership without the full-time overhead. Whether you need a Fractional CTO to guide your roadmap or a Virtual CIO to align IT with business objectives, Mazel Solutions delivers enterprise-grade thinking scaled to your organization.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    bullets: [
      'Fractional CTO and VCIO engagements',
      'IT roadmap development and digital transformation planning',
      'Tech stack assessment and modernization strategy',
      'Cloud strategy (AWS, Azure, GCP) and migration planning',
      'IT budget optimization and spend analysis',
      'Vendor management and contract negotiation',
    ],
  },
  {
    id: 'development',
    title: 'Application Development',
    subtitle: 'Full-Stack, Mobile & AI/ML',
    bg: '#0F172A',
    description:
      'From greenfield web applications to legacy modernization and AI integrations, our development practice delivers production-grade software built for scale, maintainability, and real-world reliability.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    bullets: [
      'Custom web applications (React, Next.js, Node.js, Python)',
      'Mobile app development (iOS, Android, cross-platform)',
      'API design, development, and third-party integration',
      'Legacy system modernization and re-platforming',
      'Database architecture and data modeling',
      'AI/ML integration and intelligent feature development',
      'DevOps pipeline setup: CI/CD, containerization, and Infrastructure as Code',
    ],
  },
  {
    id: 'network',
    title: 'Network Architecture',
    subtitle: 'Enterprise Design & Engineering',
    bg: '#020817',
    description:
      'Drawing on hands-on experience at Kaiser Permanente, Verizon, and ClearCaptions, we design and engineer networks that are resilient, secure, and built to grow — from campus LANs to multi-site data center fabrics.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1"/>
        <rect x="16" y="2" width="6" height="6" rx="1"/>
        <rect x="9" y="16" width="6" height="6" rx="1"/>
        <path d="M5 8v3c0 1.1.9 2 2 2h10a2 2 0 002-2V8"/>
        <path d="M12 14v2"/>
      </svg>
    ),
    bullets: [
      'Enterprise network design and baseline assessments',
      'Data center network engineering and fabric architecture',
      'SD-WAN implementation and hybrid cloud networking',
      'Network modernization and technology migration',
      'Performance optimization and capacity planning',
      'Wireless infrastructure design and deployment',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    subtitle: 'Assessment, Architecture & Response',
    bg: '#0F172A',
    description:
      'Security is not a product you buy — it is a posture you build. Mazel Solutions helps organizations identify gaps, design layered defenses, and develop the operational capabilities to detect and respond to threats before they become incidents.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    bullets: [
      'Security audits and vulnerability assessments',
      'Penetration testing coordination and scoping',
      'Incident response planning and tabletop exercises',
      'Zero Trust architecture design and implementation',
      'Firewall, IDS/IPS, and SIEM design and deployment',
      'Security awareness training programs',
      'Threat modeling and enterprise risk assessment',
    ],
  },
  {
    id: 'compliance',
    title: 'HIPAA & Compliance',
    subtitle: 'Healthcare, PCI-DSS & SOC 2',
    bg: '#020817',
    description:
      'Compliance requirements are not checkbox exercises — non-compliance carries real liability. With deep experience at Kaiser Permanente and other regulated environments, we help organizations build compliance programs that are both audit-ready and operationally sustainable.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    bullets: [
      'HIPAA Security Rule auditing and gap analysis',
      'Risk analysis and risk management plan development',
      'Security policy and procedure development',
      'PCI-DSS compliance assessment and remediation',
      'SOC 2 Type I and Type II readiness preparation',
      'Ongoing compliance monitoring and reporting',
    ],
  },
  {
    id: 'evaluation',
    title: 'Vendor-Agnostic Evaluation',
    subtitle: 'Unbiased Technology Selection',
    bg: '#0F172A',
    description:
      'Most technology consultants have vendor relationships that color their recommendations. Mazel Solutions maintains zero vendor partnerships and accepts no referral fees or kickbacks — ever. Our evaluation process is built on structured analysis, not incentive structures.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    bullets: [
      'Multi-vendor comparison matrices with weighted scoring',
      'RFP development and proposal evaluation',
      'Current tech stack assessment and rationalization',
      'Contract and SLA review and negotiation support',
      'Unbiased, documented recommendations',
      'No vendor partnerships, referral fees, or kickbacks — guaranteed',
    ],
  },
];

const engagementModels = [
  {
    title: 'Project-Based',
    desc: 'Defined scope, fixed timeline, clear deliverables. Best for one-time assessments, migrations, or builds where the end state is well understood.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Retainer',
    desc: 'Ongoing monthly support with a dedicated block of hours. Ideal for organizations that need consistent technical guidance without hiring full-time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Fractional CTO',
    desc: 'Embedded technical leadership at a fraction of a full-time executive cost. You get a seasoned CTO driving architecture, team, and strategy without the full-time price tag.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Assessment-Only',
    desc: 'A focused audit with a detailed findings report and recommendations — no obligation to engage further. Perfect for a second opinion or due diligence before a major initiative.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
];

const technologies = [
  'React', 'Next.js', 'Python', 'Node.js',
  'AWS', 'Azure', 'GCP',
  'Cisco', 'Palo Alto', 'Fortinet',
  'Docker', 'Kubernetes', 'Terraform',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(0,153,255,0.09) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[#0099FF] text-sm font-semibold uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6">
              Services Built for<br />
              <span className="gradient-text">Real Outcomes</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
              From strategic IT leadership to hands-on engineering, Mazel Solutions
              delivers across the full technology stack — with no vendor bias and no
              unnecessary complexity.
            </p>
          </ScrollReveal>

          {/* Quick nav anchors */}
          <ScrollReveal delay={2}>
            <div className="mt-10 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm px-4 py-2 rounded-full border border-white/[0.12] text-white/60 hover:text-white hover:border-[#0099FF] transition-colors duration-200"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: service.bg }}
        >
          {idx % 2 === 0 && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 80% 50%, rgba(0,153,255,0.05) 0%, transparent 60%)',
              }}
            />
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading + description */}
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(0,153,255,0.1)] border border-[rgba(0,153,255,0.2)] flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-[#0099FF] text-xs font-semibold uppercase tracking-widest">
                      {service.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] text-white leading-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </ScrollReveal>

              {/* Right: bullet points */}
              <ScrollReveal delay={2}>
                <div
                  className="rounded-3xl p-8 border card-hover"
                  style={{
                    backgroundColor:
                      service.bg === '#020817'
                        ? 'rgba(15, 23, 42, 0.6)'
                        : 'rgba(2, 8, 23, 0.5)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <ul className="space-y-4">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[rgba(0,153,255,0.15)] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="#0099FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-white/80 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement Models */}
      <section className="py-24 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(0,153,255,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#0099FF] text-sm font-semibold uppercase tracking-widest mb-3">
                How We Work
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
                Engagement Models
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                We structure engagements to fit your situation — not the other way around.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, i) => (
              <ScrollReveal
                key={model.title}
                delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}
              >
                <div className="h-full bg-[#0F172A] border border-white/[0.08] rounded-3xl p-7 card-hover flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,153,255,0.1)] flex items-center justify-center mb-5">
                    {model.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-white mb-3">
                    {model.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {model.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[#0099FF] text-sm font-semibold uppercase tracking-widest mb-3">
                Technology Stack
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
                Tools We Work With
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                We select the right tool for each problem — not the one with the biggest marketing budget.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-[rgba(0,153,255,0.4)] transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020817] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,153,255,0.10) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] text-white mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              A free consultation costs nothing and leaves you with clarity. We will
              listen to your situation and tell you honestly what — if anything —
              we can help with.
            </p>
            <Link
              href="/contact"
              className="btn-warm inline-block text-white font-semibold text-lg px-8 py-4 rounded-full"
            >
              Schedule a Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
