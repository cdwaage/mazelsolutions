import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world results from Mazel Solutions — from healthcare network modernization to post-breach security overhauls and SaaS platform launches.',
};

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare Network Redesign',
    category: 'Network Infrastructure',
    gradientFrom: '#0099FF',
    gradientTo: '#00B4D8',
    accentColor: '#0099FF',
    icon: '🏥',
    challenge:
      '500-bed hospital with aging network infrastructure needed HIPAA-compliant modernization with zero patient care disruption. Legacy systems were creating security vulnerabilities and performance bottlenecks across critical care units.',
    approach:
      'Designed a phased migration strategy with redundant pathways to ensure continuous operation throughout the transition. Conducted a comprehensive security audit and implemented Zero Trust network segmentation across all clinical and administrative zones.',
    results: [
      { stat: '99.99%', label: 'Uptime During Migration' },
      { stat: 'Zero', label: 'HIPAA Violations' },
      { stat: '40%', label: 'Reduction in Network Incidents' },
    ],
    technologies: ['Cisco', 'Palo Alto', 'SD-WAN', 'Zero Trust Architecture'],
  },
  {
    id: 2,
    title: 'SaaS MVP to Launch',
    category: 'Software Development',
    gradientFrom: '#00B4D8',
    gradientTo: '#F58220',
    accentColor: '#00B4D8',
    icon: '🚀',
    challenge:
      'Early-stage startup needed to go from concept to production-ready SaaS platform with limited runway. Founders required a scalable cloud-native architecture capable of handling rapid user growth from day one.',
    approach:
      'Executed agile development with 2-week sprints, maintaining rapid iteration without sacrificing quality. Built a cloud-native architecture on AWS with CI/CD pipelines established from day one to enable continuous deployment and fast feedback loops.',
    results: [
      { stat: '12 Weeks', label: 'Concept to Launch' },
      { stat: '50K+', label: 'Users in First Month' },
      { stat: '99.9%', label: 'Platform Uptime' },
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    id: 3,
    title: 'Post-Breach Security Overhaul',
    category: 'Cybersecurity',
    gradientFrom: '#F58220',
    gradientTo: '#0099FF',
    accentColor: '#F58220',
    icon: '🔐',
    challenge:
      'Mid-market company suffered a ransomware attack that exposed critical vulnerabilities across their entire infrastructure. The organization needed a complete security posture rebuild — fast — to prevent recurrence and achieve compliance.',
    approach:
      'Initiated immediate incident response and forensic analysis to understand the attack vector and full scope of compromise. Implemented Zero Trust architecture organization-wide and delivered comprehensive security awareness training across all 200+ employees.',
    results: [
      { stat: '0 Incidents', label: 'Post-Deployment' },
      { stat: '100%', label: 'Employee Security Training' },
      { stat: 'SOC 2', label: 'Type II Certified' },
    ],
    technologies: ['CrowdStrike', 'Palo Alto', 'SIEM', 'Zero Trust', 'MFA'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020817' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #0099FF 0%, #00B4D8 50%, transparent 70%)' }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{
                color: '#0099FF',
                backgroundColor: 'rgba(0, 153, 255, 0.1)',
                border: '1px solid rgba(0, 153, 255, 0.25)',
              }}
            >
              Proven Results
            </span>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 mb-6">
              Real Problems.{' '}
              <span className="gradient-text">Real Solutions.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              From healthcare compliance to post-breach recovery, every engagement is built on
              enterprise-grade expertise and a commitment to measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map((cs, index) => (
            <ScrollReveal key={cs.id} delay={(index + 1) as 1 | 2 | 3}>
              <article
                className="card-hover rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#0F172A',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Visual Header */}
                <div
                  className="relative px-8 py-10 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${cs.gradientFrom}18 0%, ${cs.gradientTo}10 50%, transparent 100%)`,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Large background number */}
                  <span
                    className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-black text-[120px] leading-none select-none pointer-events-none"
                    style={{ color: `${cs.gradientFrom}12` }}
                  >
                    0{cs.id}
                  </span>

                  <div className="relative flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${cs.gradientFrom}30, ${cs.gradientTo}20)`,
                        border: `1px solid ${cs.gradientFrom}40`,
                      }}
                    >
                      {cs.icon}
                    </div>
                    <div>
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: cs.accentColor }}
                      >
                        {cs.category}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-0.5">
                        {cs.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Challenge */}
                    <div>
                      <h3
                        className="font-display text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: cs.accentColor }}
                      >
                        The Challenge
                      </h3>
                      <p className="text-white/70 leading-relaxed text-[15px]">{cs.challenge}</p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h3
                        className="font-display text-xs font-bold tracking-widest uppercase mb-3"
                        style={{ color: cs.accentColor }}
                      >
                        Our Approach
                      </h3>
                      <p className="text-white/70 leading-relaxed text-[15px]">{cs.approach}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div
                    className="rounded-xl p-6 mb-8"
                    style={{
                      background: `linear-gradient(135deg, ${cs.gradientFrom}0A, ${cs.gradientTo}06)`,
                      border: `1px solid ${cs.gradientFrom}20`,
                    }}
                  >
                    <h3
                      className="font-display text-xs font-bold tracking-widest uppercase mb-6"
                      style={{ color: cs.accentColor }}
                    >
                      Results
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {cs.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div
                            className="font-display font-black leading-none mb-2"
                            style={{
                              fontSize: 'clamp(2rem, 4vw, 3rem)',
                              background: `linear-gradient(135deg, ${cs.gradientFrom}, ${cs.gradientTo})`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {result.stat}
                          </div>
                          <div className="text-white/50 text-xs font-medium leading-tight">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div>
                    <h3
                      className="font-display text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: cs.accentColor }}
                    >
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cs.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: 'rgba(255,255,255,0.75)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={1}>
            <div
              className="glass rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,153,255,0.08), rgba(0,180,216,0.05))',
              }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to write your{' '}
                <span className="gradient-text">success story?</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Every one of these outcomes started with a single conversation. Let&apos;s talk
                about what&apos;s possible for your organization.
              </p>
              <a
                href="/contact"
                className="btn-warm inline-block px-8 py-4 rounded-xl font-display font-semibold text-white text-base"
              >
                Start the Conversation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
