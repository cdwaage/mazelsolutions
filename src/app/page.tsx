import ScrollReveal from '@/components/ScrollReveal';
import StatsCounter from '@/components/StatsCounter';
import Link from 'next/link';

const serviceCards = [
  {
    title: 'IT Consulting & Strategy',
    desc: 'Fractional CTO, digital transformation roadmaps, and cloud strategy to align technology with business goals.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <path d="M18 24l4 4 8-8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 38h8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wide: true,
  },
  {
    title: 'Application Development',
    desc: 'Custom web and mobile apps, API integrations, and AI/ML solutions built for scale.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M16 14l-8 10 8 10" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M32 14l8 10-8 10" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M28 10L20 38" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wide: true,
  },
  {
    title: 'Network Architecture',
    desc: 'Enterprise network design, SD-WAN, and performance optimization.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="12" r="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <circle cx="12" cy="36" r="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <circle cx="36" cy="36" r="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <path d="M24 16v8M16 33l5-9M32 33l-5-9" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="28" r="3" fill="#0099FF" opacity="0.3" />
      </svg>
    ),
    wide: false,
  },
  {
    title: 'Cybersecurity',
    desc: 'Security audits, Zero Trust, incident response, and threat modeling.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L8 14v12c0 10 16 16 16 16s16-6 16-16V14L24 6z" stroke="#0099FF" strokeWidth="2" fill="none" />
        <path d="M18 24l4 4 8-8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    wide: false,
  },
  {
    title: 'HIPAA & Compliance',
    desc: 'HIPAA, PCI-DSS, and SOC 2 audits, risk analysis, and policy development.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="#0099FF" strokeWidth="2" fill="none" />
        <path d="M18 18h12M18 24h12M18 30h8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="34" r="8" fill="#020817" stroke="#0099FF" strokeWidth="2" />
        <path d="M31 34l2 2 4-4" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    wide: false,
  },
  {
    title: 'Vendor-Agnostic Evaluation',
    desc: 'Unbiased technology assessments and RFP development — no vendor partnerships or kickbacks.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8v32" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20l12-8 12 8" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="28" r="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <circle cx="36" cy="28" r="4" stroke="#0099FF" strokeWidth="2" fill="none" />
        <path d="M16 28h16" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wide: false,
  },
];

const whyMazel = [
  {
    title: 'Vendor-Agnostic',
    desc: 'Recommendations serve you, not a reseller agreement.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M6 14l8-6 8 6" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="6" cy="18" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="18" r="3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M9 18h10" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Pedigree',
    desc: 'Kaiser. Verizon. ClearCaptions. Fortune 500 expertise, startup agility.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="14" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M10 10V7a4 4 0 018 0v3" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <rect x="8" y="14" width="12" height="6" rx="1" stroke="#0099FF" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Full Stack Partner',
    desc: 'Strategy to code to security. One relationship.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="4" width="16" height="6" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <rect x="6" y="12" width="16" height="6" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <rect x="6" y="20" width="16" height="6" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Compliance-First',
    desc: 'HIPAA, PCI-DSS, SOC 2. Built into every engagement.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 8v8c0 7 10 11 10 11s10-4 10-11V8L14 3z" stroke="#0099FF" strokeWidth="1.5" fill="none" />
        <path d="M10 14l3 3 5-5" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const techLogos = [
  'Cisco', 'Palo Alto', 'AWS', 'Azure', 'React', 'Python', 'Docker', 'Kubernetes',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#020817]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,153,255,0.15)_0%,transparent_70%)]" />
        </div>
        {/* Mesh SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] mesh-animate" viewBox="0 0 800 600" fill="none">
          <circle cx="100" cy="100" r="3" fill="#0099FF" />
          <circle cx="250" cy="180" r="2" fill="#0099FF" />
          <circle cx="400" cy="80" r="3" fill="#0099FF" />
          <circle cx="550" cy="200" r="2" fill="#0099FF" />
          <circle cx="700" cy="120" r="3" fill="#0099FF" />
          <circle cx="150" cy="350" r="2" fill="#0099FF" />
          <circle cx="350" cy="300" r="3" fill="#0099FF" />
          <circle cx="500" cy="400" r="2" fill="#0099FF" />
          <circle cx="650" cy="350" r="3" fill="#0099FF" />
          <circle cx="200" cy="500" r="2" fill="#0099FF" />
          <circle cx="450" cy="520" r="3" fill="#0099FF" />
          <circle cx="650" cy="480" r="2" fill="#0099FF" />
          <line x1="100" y1="100" x2="250" y2="180" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="250" y1="180" x2="400" y2="80" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="400" y1="80" x2="550" y2="200" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="550" y1="200" x2="700" y2="120" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="150" y1="350" x2="350" y2="300" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="350" y1="300" x2="500" y2="400" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="500" y1="400" x2="650" y2="350" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="200" y1="500" x2="450" y2="520" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="450" y1="520" x2="650" y2="480" stroke="#0099FF" strokeWidth="0.5" />
          <line x1="100" y1="100" x2="150" y2="350" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="400" y1="80" x2="350" y2="300" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="700" y1="120" x2="650" y2="350" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="250" y1="180" x2="350" y2="300" stroke="#0099FF" strokeWidth="0.3" />
          <line x1="550" y1="200" x2="500" y2="400" stroke="#0099FF" strokeWidth="0.3" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-[-0.5px]">
              We Build. We Secure.{' '}
              <br className="hidden sm:block" />
              We Consult.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade IT consulting, custom development, and cybersecurity — without the enterprise price tag or vendor bias.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-warm inline-flex items-center text-white text-base font-semibold px-8 py-4 rounded-3xl"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-12 px-4">
        <ScrollReveal>
          <StatsCounter />
        </ScrollReveal>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-semibold font-display text-center mb-16">What We Do</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <Link
                  href="/services"
                  className={`card-hover block bg-[#0F172A] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 h-full relative overflow-hidden group ${
                    card.wide ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,153,255,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-5">{card.icon}</div>
                    <h3 className="text-xl font-semibold font-display mb-2">{card.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mazel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold font-display leading-tight">
                Why choose{' '}
                <span className="gradient-text">Mazel</span>?
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                We bring Fortune 500 engineering rigor to every engagement — from startups to hospitals — with zero vendor agenda. Your success is our only metric.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {whyMazel.map((item, i) => (
              <ScrollReveal key={item.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="card-hover flex items-start gap-4 bg-[#020817] border border-[rgba(255,255,255,0.08)] rounded-2xl p-5">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold font-display text-lg">{item.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Logos */}
      <section className="py-16 px-4 bg-[#020817] overflow-hidden">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-widest text-white/30 mb-8">Technologies We Work With</p>
        </ScrollReveal>
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div className="flex gap-16 logo-scroll" style={{ width: 'max-content' }}>
            {[...techLogos, ...techLogos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-white/30 text-lg font-semibold font-display whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020817]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,153,255,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-semibold font-display">
              Ready to modernize your infrastructure?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-warm inline-flex items-center text-white font-semibold px-8 py-4 rounded-3xl"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-white/70 hover:text-white font-semibold px-8 py-4 rounded-3xl border border-white/[0.12] hover:border-white/[0.25] transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
