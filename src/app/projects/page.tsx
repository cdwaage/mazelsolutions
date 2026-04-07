import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Projects & Lab',
  description: 'A look inside the Mazel Solutions R&D lab — internal projects that showcase our capabilities in full-stack development, security architecture, AI orchestration, and infrastructure automation.',
};

const projects = [
  {
    title: 'Shopping Intelligence Platform',
    category: 'Full-Stack Development',
    gradientFrom: '#0099FF',
    gradientTo: '#00B4D8',
    accentColor: '#0099FF',
    description:
      'A custom-built web application that aggregates real-time pricing data across major retailers, delivering instant product comparisons and market intelligence. The platform combines a high-performance API backend with an automated web scraping engine capable of extracting live pricing from dynamic, JavaScript-rendered storefronts — and a responsive frontend that surfaces actionable insights in seconds.',
    capabilities: [
      'Real-time price comparison across multiple retailers',
      'Automated data extraction from dynamic web pages',
      'Structured API layer with intelligent caching and rate limiting',
      'Interactive frontend with live search and filtering',
    ],
    technologies: ['Fastify', 'Playwright', 'SurrealDB', 'React', 'Node.js'],
    demonstrates: ['Full-Stack App Development', 'API Design', 'Real-Time Data Processing'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security Architecture',
    category: 'Network Security',
    gradientFrom: '#00B4D8',
    gradientTo: '#06D6A0',
    accentColor: '#00B4D8',
    description:
      'A novel network security architecture that combines Palo Alto next-generation firewalls with open-source threat detection platforms to deliver enterprise-grade visibility at a fraction of traditional cost. The design leverages hardware TLS decryption and application identification paired with Suricata and Zeek for deep packet inspection and behavioral analysis — a hybrid approach with no published implementation guides at the time of design.',
    capabilities: [
      'Full TLS decryption with hardware-accelerated inspection',
      'Application-level identification and policy enforcement',
      'Open-source IDS/IPS integration for advanced threat detection',
      'High-availability failover with redundant firewall pairs',
    ],
    technologies: ['Palo Alto NGFW', 'SecurityOnion', 'Suricata', 'Zeek', 'MikroTik'],
    demonstrates: ['Security Architecture', 'Cost Optimization', 'Vendor-Agnostic Design'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI Agent Orchestration Platform',
    category: 'AI / ML',
    gradientFrom: '#F58220',
    gradientTo: '#FF6B6B',
    accentColor: '#F58220',
    description:
      'A multi-model AI agent system that autonomously triages, routes, and executes tasks across distributed compute nodes. An intelligent gating pipeline filters and escalates work based on complexity — routing simple tasks to lightweight models and reserving high-capability models for problems that demand deeper reasoning. The result is an autonomous operations layer that runs 24/7 with minimal human oversight.',
    capabilities: [
      'Multi-model routing with complexity-based escalation',
      'Autonomous task execution across distributed nodes',
      'Quota management and intelligent resource allocation',
      'Real-time relay messaging between agents and operators',
    ],
    technologies: ['Claude API', 'Ollama', 'SurrealDB', 'TypeScript', 'systemd'],
    demonstrates: ['AI/ML Integration', 'Automation', 'Distributed Systems'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure Monitoring & Automation',
    category: 'DevOps',
    gradientFrom: '#06D6A0',
    gradientTo: '#0099FF',
    accentColor: '#06D6A0',
    description:
      'A distributed monitoring and automation platform that maintains continuous visibility across multiple compute nodes, databases, and services. Automated health checks, database replication, backup pipelines, and service watchdogs ensure uptime and data integrity without manual intervention — with anomaly detection that escalates issues before they become outages.',
    capabilities: [
      'Multi-node health monitoring with automated alerting',
      'Database replication and bidirectional sync across sites',
      'Scheduled backup pipelines with retention management',
      'Service watchdogs with automatic restart and escalation',
    ],
    technologies: ['Bash', 'systemd', 'SurrealDB', 'cron', 'Tailscale'],
    demonstrates: ['DevOps', 'Infrastructure as Code', 'Reliability Engineering'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06D6A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 10l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Knowledge Management System',
    category: 'Data Architecture',
    gradientFrom: '#9B5DE5',
    gradientTo: '#0099FF',
    accentColor: '#9B5DE5',
    description:
      'A graph-based knowledge management platform that captures, connects, and retrieves institutional knowledge across sessions and contexts. The system models observations, claims, and procedures as a structured knowledge graph — with built-in coherence checking, claim maturity tracking, and automated procedure extraction that turns operational experience into reusable intelligence.',
    capabilities: [
      'Graph-based knowledge modeling with typed relationships',
      'Automated coherence checking and conflict detection',
      'Claim lifecycle management with evidence linking',
      'Procedural memory extraction from operational patterns',
    ],
    technologies: ['SurrealDB', 'TypeScript', 'MCP Protocol', 'Graph Queries'],
    demonstrates: ['Database Architecture', 'Data Modeling', 'Intelligent Systems'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9B5DE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <line x1="10" y1="10" x2="6.5" y2="7.5" />
        <line x1="14" y1="10" x2="17.5" y2="7.5" />
        <line x1="10" y1="14" x2="6.5" y2="16.5" />
        <line x1="14" y1="14" x2="17.5" y2="16.5" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020817' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #F58220 0%, #0099FF 50%, transparent 70%)' }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{
                color: '#F58220',
                backgroundColor: 'rgba(245, 130, 32, 0.1)',
                border: '1px solid rgba(245, 130, 32, 0.25)',
              }}
            >
              R&D Lab
            </span>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 mb-6">
              What We&apos;re{' '}
              <span className="gradient-text">Building</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Internal R&D projects that push the boundaries of what we deliver for clients.
              Every system here was designed, built, and operated by our team — and reflects
              the same engineering rigor we bring to every engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article
                className="card-hover rounded-2xl overflow-hidden h-full flex flex-col"
                style={{
                  backgroundColor: '#0F172A',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Card Header */}
                <div
                  className="relative px-7 py-8 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}18 0%, ${project.gradientTo}10 50%, transparent 100%)`,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.gradientFrom}30, ${project.gradientTo}20)`,
                        border: `1px solid ${project.gradientFrom}40`,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <span
                        className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2"
                        style={{
                          color: project.accentColor,
                          backgroundColor: `${project.accentColor}15`,
                          border: `1px solid ${project.accentColor}30`,
                        }}
                      >
                        {project.category}
                      </span>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-7 py-6 flex flex-col flex-1">
                  <p className="text-white/65 text-[14px] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mb-5">
                    <h3
                      className="font-display text-[10px] font-bold tracking-widest uppercase mb-3"
                      style={{ color: project.accentColor }}
                    >
                      Key Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {project.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.accentColor }} />
                          <span className="text-white/60 text-[13px] leading-relaxed">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demonstrates Badges */}
                  <div className="mb-5">
                    <h3
                      className="font-display text-[10px] font-bold tracking-widest uppercase mb-3"
                      style={{ color: project.accentColor }}
                    >
                      Demonstrates
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.demonstrates.map((d) => (
                        <span
                          key={d}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `linear-gradient(135deg, ${project.gradientFrom}15, ${project.gradientTo}10)`,
                            border: `1px solid ${project.gradientFrom}30`,
                            color: project.accentColor,
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags — pushed to bottom */}
                  <div className="mt-auto pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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

      {/* Philosophy Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-10 md:p-14"
              style={{
                backgroundColor: '#0F172A',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Why We Build{' '}
                  <span className="gradient-text">Internally</span>
                </h2>
                <div className="space-y-4 text-white/65 text-[16px] leading-relaxed">
                  <p>
                    Every platform listed here started as a real problem we needed to solve. Instead
                    of buying off-the-shelf tools that almost fit, we built systems tailored to the
                    exact requirements — and learned things in the process that directly benefit our
                    client work.
                  </p>
                  <p>
                    Internal R&D keeps our team sharp on the technologies that matter: modern API
                    design, distributed systems, AI orchestration, and security architecture. When a
                    client engagement requires these capabilities, we are not learning on their dime
                    — we have already built it, broken it, and rebuilt it.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={1}>
            <div
              className="glass rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(245,130,32,0.08), rgba(0,153,255,0.05))',
              }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in what we&apos;re building?{' '}
                <span className="gradient-text">Let&apos;s talk.</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Whether you need a platform built from scratch, an architecture designed for
                scale, or a team that has already solved problems like yours — we are ready.
              </p>
              <Link
                href="/contact"
                className="btn-warm inline-block px-8 py-4 rounded-xl font-display font-semibold text-white text-base"
              >
                Start the Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
