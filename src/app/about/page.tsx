import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Cameron Waage — 27-year network engineering and cybersecurity veteran, founder of Mazel Solutions. From Verizon carrier-grade networks to Kaiser Permanente data centers to California state government security — vendor-agnostic consulting built on hands-on experience.',
};

const timeline = [
  {
    year: '2019 – Present',
    role: 'Founder & Principal Consultant',
    company: 'Mazel Solutions',
    desc: 'Vendor-agnostic IT consulting, network architecture, cybersecurity, and custom development for businesses of every size. Founded to provide honest, outcome-driven guidance with no vendor quotas or reseller agreements.',
    current: true,
  },
  {
    year: '2024',
    role: 'Network Security Consultant',
    company: 'CA Governor\'s Office of Emergency Services (OES)',
    desc: 'Full network discovery, strategic architecture drawings, Data Center documentation, and comprehensive security assessment for one of California\'s critical emergency response agencies.',
    current: false,
  },
  {
    year: '2019 – 2023',
    role: 'Network Security Consultant',
    company: 'California Department of Technology (CDT)',
    desc: 'Deployed and managed Palo Alto next-generation firewalls and Tipping Point IPS across state infrastructure. Operationalized the Network Protection Team, led DDoS response, built Splunk dashboards, and provided L3 security support.',
    current: false,
  },
  {
    year: '2017 – 2019',
    role: 'Network Architect',
    company: 'ClearCaptions',
    desc: 'Led a full data center migration and designed Cisco ACI software-defined network fabrics from scratch. Architected Firepower security infrastructure and high-availability network design for a nationwide telecommunications provider.',
    current: false,
  },
  {
    year: '2009 – 2014',
    role: 'Data Center Network Engineer',
    company: 'Kaiser Permanente',
    desc: 'Led network standardization across 7 national data centers — approximately 40 Nexus 7K/5K/2K switches, 100 Cisco 6509s, and 50 ASA and Palo Alto firewalls. Designed and maintained Medical Grade Networks under strict HIPAA requirements.',
    current: false,
  },
  {
    year: '2000 – 2009',
    role: 'Senior Network Engineer',
    company: 'Verizon Business',
    desc: 'Nearly a decade in a $100K/day SLA penalty environment. Maintained 99.95% uptime over 5 consecutive years. Conducted security audits and engineered multi-state WAN infrastructure at carrier scale.',
    current: false,
  },
];

const coreTechnologies = [
  {
    name: 'Cisco ACI / Nexus',
    domain: 'Data Center Fabric',
    color: '#0099FF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="8" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <circle cx="7" cy="24" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="24" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M16 11v6M11 21l3-4M21 21l-3-4" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="17" r="2" fill="#0099FF" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'Palo Alto NGFW',
    domain: 'Next-Gen Security',
    color: '#00B4D8',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 9v9c0 7.5 12 11 12 11s12-3.5 12-11V9L16 3z" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        <path d="M11 16l3.5 3.5L21 13" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'VMware NSX / ESX',
    domain: 'Virtualization & Micro-Seg',
    color: '#7C3AED',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
        <path d="M4 14h24" stroke="#7C3AED" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M16 6v16" stroke="#7C3AED" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M12 26h8" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22v4" stroke="#7C3AED" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Splunk',
    domain: 'SIEM & Analytics',
    color: '#F58220',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24l7-8 5 4 7-10 5 6" stroke="#F58220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="11" cy="16" r="2" fill="#F58220" fillOpacity="0.3" />
        <circle cx="16" cy="20" r="2" fill="#F58220" fillOpacity="0.3" />
        <circle cx="23" cy="10" r="2" fill="#F58220" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'Cisco Firepower',
    domain: 'Threat Defense',
    color: '#EF4444',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4c0 0-4 4-4 10s4 10 4 10" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        <path d="M16 4c0 0 4 4 4 10s-4 10-4 10" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        <path d="M6 14h20M6 18h20" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
        <circle cx="16" cy="16" r="10" stroke="#EF4444" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'F5 / Aruba / Juniper',
    domain: 'Load Balancing & Access',
    color: '#10B981',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="6" stroke="#10B981" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2" fill="#10B981" fillOpacity="0.4" />
        <path d="M8 8l2.5 2.5M21.5 21.5L24 24M8 24l2.5-2.5M21.5 10.5L24 8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Python',
    domain: 'Automation & Scripting',
    color: '#3B82F6',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M12 4h8a4 4 0 014 4v4h-8a4 4 0 00-4 4v4h-4a4 4 0 01-4-4V8a4 4 0 014-4z" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <path d="M20 28h-8a4 4 0 01-4-4v-4h8a4 4 0 004-4v-4h4a4 4 0 014 4v8a4 4 0 01-4 4z" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="8" r="1.5" fill="#3B82F6" fillOpacity="0.5" />
        <circle cx="18" cy="24" r="1.5" fill="#3B82F6" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'Juniper SRX',
    domain: 'Perimeter Security',
    color: '#A855F7',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="3" stroke="#A855F7" strokeWidth="1.5" fill="none" />
        <path d="M10 16h12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="#A855F7" fillOpacity="0.4" />
        <circle cx="20" cy="12" r="1.5" fill="#A855F7" fillOpacity="0.4" />
        <path d="M12 20h8" stroke="#A855F7" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const philosophy = [
  {
    title: 'Vendor-Agnostic by Principle',
    desc: 'Mazel Solutions has no reseller agreements, no vendor quotas, and no referral kickbacks. Every recommendation is chosen because it is the right fit for you — full stop. When I walk into an engagement, my only agenda is your outcome.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6v28M10 20l10-8 10 8" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="26" r="4" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <circle cx="30" cy="26" r="4" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M14 26h12" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Builder Mentality',
    desc: 'I am not a slide-deck consultant. I build. I have designed data center fabrics from scratch, configured Palo Alto firewalls at the policy level, standardized Nexus switching across seven national data centers, and gone on-call at 2 AM when something broke. That hands-on experience shapes every recommendation I make.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="14" width="24" height="16" rx="3" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        <path d="M14 14V10a6 6 0 0112 0v4" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="22" r="3" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        <path d="M20 25v3" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Complexity Is Not a Strategy',
    desc: 'Overly complex architectures are often a symptom of unclear thinking — or a way to justify larger invoices. I default to simple, maintainable solutions, and only add complexity when the problem genuinely requires it. Your team should be able to own what we build together.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M15 20l3.5 3.5L25 16" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* -- Hero ------------------------------------------------ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#020817] py-32 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,153,255,0.12)_0%,transparent_65%)]" />
        {/* Subtle network mesh */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 900 500"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="80" cy="80" r="3" fill="#0099FF" />
          <circle cx="300" cy="140" r="2" fill="#0099FF" />
          <circle cx="520" cy="60" r="3" fill="#0099FF" />
          <circle cx="750" cy="160" r="2" fill="#0099FF" />
          <circle cx="200" cy="380" r="3" fill="#0099FF" />
          <circle cx="600" cy="340" r="2" fill="#0099FF" />
          <circle cx="840" cy="300" r="3" fill="#0099FF" />
          <line x1="80" y1="80" x2="300" y2="140" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="300" y1="140" x2="520" y2="60" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="520" y1="60" x2="750" y2="160" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="200" y1="380" x2="600" y2="340" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="600" y1="340" x2="840" y2="300" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="300" y1="140" x2="200" y2="380" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="750" y1="160" x2="840" y2="300" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="520" y1="60" x2="600" y2="340" stroke="#0099FF" strokeWidth="0.3" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6 font-semibold">
              Mazel Solutions · Founder Story
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-[-0.5px]">
              The Person Behind{' '}
              <span className="gradient-text">the Practice</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              27 years of enterprise networking, security, and infrastructure — from carrier-grade WANs to state government cybersecurity — built into one independent consultancy with no vendor agenda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Story + Headshot ----------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-16 items-start">
          {/* Story copy */}
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight">
                Hi, I&apos;m Cameron Waage.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-white/70 text-lg leading-relaxed">
                I have spent 27 years building networks for organizations that cannot afford for them to go down. I started in 1997 as a network specialist, learned the craft from the ground up, and spent the next decade at Verizon Business engineering multi-state WANs in a $100K/day SLA penalty environment — the kind of place where you either develop real discipline or you do not last. From there I moved to Kaiser Permanente, where I led network standardization across seven national data centers, managing roughly 40 Nexus switches, 100 Cisco 6509s, and 50 firewalls under strict HIPAA requirements.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-white/70 text-lg leading-relaxed">
                I went on to design Cisco ACI fabrics from scratch at ClearCaptions, then spent four years as a network security consultant for the California Department of Technology — deploying Palo Alto firewalls, operationalizing their Network Protection Team, and running DDoS response across state infrastructure. Most recently I completed a security assessment for the Governor&apos;s Office of Emergency Services. I am not just a consultant who draws diagrams. I have configured the firewalls, written the automation scripts, migrated the data centers, and taken the 2 AM calls.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <blockquote className="relative border-l-2 border-[#0099FF] pl-6 py-2">
                <p className="text-white text-xl font-medium font-display leading-snug italic">
                  &ldquo;I started Mazel Solutions because I saw too many businesses getting sold solutions they didn&apos;t need by consultants who had vendor quotas to meet.&rdquo;
                </p>
                <footer className="mt-4 text-white/40 text-sm not-italic">— Cameron Waage, Founder</footer>
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <p className="text-white/70 text-lg leading-relaxed">
                I founded Mazel Solutions in 2019, carrying forward the vendor-agnostic philosophy I learned at Shandam Consulting — where I spent three years doing HIPAA assessments and network security work for California state agencies including DSH, DWR, CEC, and the CA ISO. Every engagement starts with listening — to your business goals, your constraints, and your team&apos;s capabilities. Technology is a means, not an end. My job is to make sure the technology you buy and build actually serves the outcome you need, and that your team can own it long after I am gone.
              </p>
            </ScrollReveal>
          </div>

          {/* Headshot placeholder */}
          <ScrollReveal delay={2} className="lg:sticky lg:top-28">
            <div className="relative mx-auto lg:mx-0 w-64 lg:w-full max-w-[360px]">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#0099FF] to-[#00B4D8] opacity-30 blur-xl" />
              {/* Avatar card */}
              <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.10)] bg-gradient-to-br from-[#0F172A] to-[#020817] aspect-[4/5] flex flex-col items-center justify-center gap-4">
                {/* Initials circle */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold font-display text-white select-none"
                  style={{ background: 'linear-gradient(135deg, #0099FF 0%, #00B4D8 100%)' }}
                  aria-label="Cameron Waage"
                >
                  CW
                </div>
                <div className="text-center px-6">
                  <p className="font-semibold font-display text-lg text-white">Cameron Waage</p>
                  <p className="text-white/50 text-sm mt-1">Founder, Mazel Solutions</p>
                  <p className="text-white/40 text-xs mt-1">Placer County, CA</p>
                </div>
                {/* Decorative dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] opacity-60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] opacity-60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] opacity-60" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- Career Timeline ------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020817]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-semibold">Career Path</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-16">
              Where the experience comes from
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0099FF] via-[rgba(0,153,255,0.3)] to-transparent" aria-hidden="true" />

            <ol className="space-y-10 list-none">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.company} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                  <li className="relative pl-14">
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        item.current
                          ? 'border-[#0099FF] bg-[#0099FF]/20 shadow-[0_0_16px_rgba(0,153,255,0.4)]'
                          : 'border-[rgba(255,255,255,0.15)] bg-[#0F172A]'
                      }`}
                      aria-hidden="true"
                    >
                      {item.current ? (
                        <span className="w-3 h-3 rounded-full bg-[#0099FF]" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      )}
                    </div>

                    <div className="card-hover bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,153,255,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="text-xs font-semibold text-[#0099FF] uppercase tracking-widest">
                            {item.year}
                          </span>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 text-xs text-[#0099FF] bg-[#0099FF]/10 border border-[#0099FF]/20 rounded-full px-2.5 py-0.5 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold font-display text-white">{item.role}</h3>
                        <p className="text-sm text-white/50 mb-3">{item.company}</p>
                        <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* -- Philosophy ------------------------------------------ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-semibold">How I Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Philosophy</h2>
            <p className="text-white/60 text-lg max-w-2xl mb-16 leading-relaxed">
              The principles that drive every engagement — from a single-day audit to a multi-year infrastructure partnership.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.title} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <div className="card-hover h-full bg-[#020817] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,153,255,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-5">{item.icon}</div>
                    <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- Core Technologies ----------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020817]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-semibold">Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Core Technologies</h2>
            <p className="text-white/60 text-lg max-w-2xl mb-16 leading-relaxed">
              Platforms and tools I have deployed, configured, and operated hands-on in production environments — not just studied for an exam.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreTechnologies.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="card-hover h-full glass rounded-3xl p-7 group relative overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(ellipse at top left, ${tech.color}10 0%, transparent 70%)` }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">{tech.icon}</div>
                    <p
                      className="text-lg font-bold font-display mb-1"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </p>
                    <p className="text-white/40 text-xs mt-auto pt-3 uppercase tracking-wider font-medium">
                      {tech.domain}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------------- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,153,255,0.08)_0%,transparent_65%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight">
              Ready to work with someone who gives you a{' '}
              <span className="gradient-text">straight answer</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
              Schedule a free 30-minute consultation. No sales pitch — just an honest conversation about where you are and what it would take to get where you want to be.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-warm inline-flex items-center text-white font-semibold px-8 py-4 rounded-3xl"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center text-white/70 hover:text-white font-semibold px-8 py-4 rounded-3xl border border-white/[0.12] hover:border-white/[0.25] transition-colors"
              >
                View Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
