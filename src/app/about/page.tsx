import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Cameron Waage — Lead Data Center Network Engineer at Kaiser Permanente, founder of Mazel Solutions, and 20-year veteran of enterprise network architecture and cybersecurity.',
};

const timeline = [
  {
    year: 'Present',
    role: 'Founder & Principal Consultant',
    company: 'Mazel Solutions',
    desc: 'Vendor-agnostic IT consulting, network architecture, cybersecurity, and custom development for businesses of every size.',
    current: true,
  },
  {
    year: '2021 – Present',
    role: 'Lead Data Center Network Engineer',
    company: 'Kaiser Permanente',
    desc: 'Architect and maintain multi-site data center fabric for one of the largest not-for-profit health plans in the United States — handling strict HIPAA compliance, high-availability requirements, and petabyte-scale traffic.',
    current: false,
  },
  {
    year: '2018 – 2021',
    role: 'Network Architect',
    company: 'ClearCaptions',
    desc: 'Designed the core network infrastructure for a nationwide telecommunications provider, building SD-WAN overlays and zero-trust segmentation from the ground up.',
    current: false,
  },
  {
    year: '2014 – 2018',
    role: 'Senior Network Engineer',
    company: 'Verizon Business',
    desc: 'Engineered carrier-grade MPLS backbones and managed complex enterprise customer deployments across the US. Developed deep expertise in BGP policy, QoS, and network automation.',
    current: false,
  },
];

const certifications = [
  {
    abbr: 'CCNP',
    full: 'Cisco Certified Network Professional',
    domain: 'Enterprise Networking',
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
    abbr: 'CISSP',
    full: 'Certified Information Systems Security Professional',
    domain: 'Cybersecurity',
    color: '#00B4D8',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 9v9c0 7.5 12 11 12 11s12-3.5 12-11V9L16 3z" stroke="#00B4D8" strokeWidth="1.5" fill="none" />
        <path d="M11 16l3.5 3.5L21 13" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    abbr: 'AWS SA',
    full: 'AWS Certified Solutions Architect',
    domain: 'Cloud Architecture',
    color: '#F58220',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 20c-2.5 0-4-1.5-4-3.5 0-1.8 1.3-3.2 3-3.5a5 5 0 019.6-2A4 4 0 0124 15c2 .5 3.5 2 3.5 4S25.5 23 23 23H8z" stroke="#F58220" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M16 23v5M12 25l4 3 4-3" stroke="#F58220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    abbr: 'Security+',
    full: 'CompTIA Security+',
    domain: 'Security Fundamentals',
    color: '#A855F7',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="#A855F7" strokeWidth="1.5" fill="none" />
        <path d="M11 12h10M11 16h10M11 20h6" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="22" r="5" fill="#020817" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M21 22h4M23 20v4" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
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
    desc: 'I am not a slide-deck consultant. I build. I have designed data center fabrics from scratch, written the automation scripts, deployed the firewalls, and gone on-call at 2 AM when something broke. That hands-on experience shapes every recommendation I make.',
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
      {/* ── Hero ──────────────────────────────────────────── */}
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
              Two decades of enterprise networking, security, and infrastructure — built into one independent consultancy with no vendor agenda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Story + Headshot ─────────────────────────────── */}
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
                I have spent more than twenty years building networks for organizations that cannot afford for them to go down. Right now that means serving as Lead Data Center Network Engineer at Kaiser Permanente, where I design and maintain multi-site fabric for one of the largest health plans in the country. Before that, I was a Network Architect at ClearCaptions and a Senior Network Engineer at Verizon Business. I have worked at carrier scale, healthcare scale, and startup scale. The problems look different; the discipline required to solve them does not.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-white/70 text-lg leading-relaxed">
                I started Mazel Solutions because I saw a gap. Small and mid-sized businesses were getting advice from consultants who were really salespeople in disguise — people with quota targets, vendor certifications that came with strings attached, and a financial incentive to recommend the most expensive solution rather than the right one. I knew I could do better, and I knew the organizations that needed it most were the ones who could not afford to be misled.
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
                Every engagement at Mazel Solutions starts with listening — to your business goals, your constraints, and your team&apos;s capabilities. Technology is a means, not an end. My job is to make sure the technology you buy and build actually serves the outcome you need, and that your team can own it long after I am gone.
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

      {/* ── Career Timeline ───────────────────────────────── */}
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

      {/* ── Philosophy ────────────────────────────────────── */}
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

      {/* ── Certifications ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020817]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 font-semibold">Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Certifications</h2>
            <p className="text-white/60 text-lg max-w-2xl mb-16 leading-relaxed">
              Industry-recognized certifications that back every recommendation with verified expertise.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.abbr} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="card-hover h-full glass rounded-3xl p-7 group relative overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(ellipse at top left, ${cert.color}10 0%, transparent 70%)` }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-5">{cert.icon}</div>
                    <p
                      className="text-2xl font-bold font-display mb-1"
                      style={{ color: cert.color }}
                    >
                      {cert.abbr}
                    </p>
                    <p className="text-white font-semibold text-sm mb-1">{cert.full}</p>
                    <p className="text-white/40 text-xs mt-auto pt-3 uppercase tracking-wider font-medium">
                      {cert.domain}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
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
