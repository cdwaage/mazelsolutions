import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world results from Mazel Solutions — from state government security operations to enterprise data center standardization and high-availability migrations.',
};

const caseStudies = [
  {
    id: 1,
    title: 'State Government Network Security Overhaul',
    category: 'Network Security',
    gradientFrom: '#0099FF',
    gradientTo: '#00B4D8',
    accentColor: '#0099FF',
    icon: '🛡️',
    challenge:
      'A state government network needed comprehensive security modernization to defend critical infrastructure. The existing IPS platform was aging, no dedicated Network Protection Team existed to handle escalating threats, and DDoS attacks against public-facing services were increasing in both frequency and sophistication.',
    approach:
      'Deployed and managed Palo Alto Next-Generation Firewalls with full Threat Prevention, App-ID, URL Filtering, and WildFire sandboxing across the enterprise. Operationalized a new Network Protection Team from the ground up, building out processes, escalation paths, and monitoring workflows. Developed custom Splunk queries for real-time security event correlation and configured DoS protection profiles to defend against volumetric and application-layer attacks.',
    results: [
      { stat: '4+ Years', label: 'Continuous Security Operations' },
      { stat: 'Level 3', label: 'Critical Incident Response' },
      { stat: 'Zero', label: 'Successful DDoS Attacks' },
    ],
    technologies: ['Palo Alto NGFW', 'Tipping Point IPS', 'Splunk', 'WildFire'],
  },
  {
    id: 2,
    title: 'Enterprise Data Center Standardization',
    category: 'Data Center Infrastructure',
    gradientFrom: '#00B4D8',
    gradientTo: '#F58220',
    accentColor: '#00B4D8',
    icon: '🏗️',
    challenge:
      'A major healthcare organization operating 7 national data centers faced inconsistent documentation, non-standardized workflows, and fragmented operational practices across sites. The network needed to meet Medical Grade Network reliability standards — any disruption could directly impact patient care systems.',
    approach:
      'Initiated and led a cross-site standardization effort, collaborating with data center leads at all 7 facilities to align documentation, change management, and operational procedures. Managed a large-scale infrastructure footprint including approximately 40 Nexus 7K/5K/2K switches, around 100 Cisco 6509 chassis with 10-Gigabit interconnections, and roughly 50 ASA and Palo Alto firewalls — all supporting an ecosystem of over 10,000 systems.',
    results: [
      { stat: '7', label: 'Data Centers Standardized' },
      { stat: '10,000+', label: 'Systems Supported' },
      { stat: 'Zero', label: 'Impact to Medical Grade Networks' },
    ],
    technologies: ['Cisco Nexus', 'Cisco 6509', 'ASA', 'Palo Alto', 'Medical Grade Networks'],
  },
  {
    id: 3,
    title: 'High-Availability Data Center Migration',
    category: 'Data Center Migration',
    gradientFrom: '#F58220',
    gradientTo: '#0099FF',
    accentColor: '#F58220',
    icon: '🔄',
    challenge:
      'A telecommunications provider needed to migrate its entire high-availability network to a new data center environment while maintaining uninterrupted service continuity. The migration demanded a modern software-defined architecture capable of supporting cloud workloads at scale.',
    approach:
      'Served as the principal engineer responsible for planning, designing, configuring, deploying, and supervising the full data center migration end-to-end. Designed a Cisco ACI software-defined network architecture to support OpenStack cloud infrastructure. Deployed Cisco Firepower security architecture to provide next-generation threat protection across the new environment while maintaining 3rd-level on-call support throughout the transition.',
    results: [
      { stat: 'Zero', label: 'Downtime During Migration' },
      { stat: 'SDN', label: 'Architecture Deployed (Cisco ACI)' },
      { stat: '3rd Level', label: 'On-Call Support Maintained' },
    ],
    technologies: ['Cisco ACI', 'OpenStack', 'Cisco Firepower', 'SDN'],
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
              From state government security operations to enterprise data center standardization,
              every engagement is built on enterprise-grade expertise and a commitment to measurable outcomes.
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
