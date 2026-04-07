'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  { name: 'IT Consulting & Strategy', href: '/services#consulting', desc: 'Fractional CTO, roadmaps, cloud strategy' },
  { name: 'Application Development', href: '/services#development', desc: 'Web, mobile, API, AI/ML solutions' },
  { name: 'Network Architecture', href: '/services#network', desc: 'Enterprise design, SD-WAN, optimization' },
  { name: 'Cybersecurity', href: '/services#security', desc: 'Audits, pen testing, Zero Trust, SIEM' },
  { name: 'HIPAA & Compliance', href: '/services#compliance', desc: 'HIPAA, PCI-DSS, SOC 2 readiness' },
  { name: 'Vendor-Agnostic Evaluation', href: '/services#evaluation', desc: 'RFP development, unbiased recommendations' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 header-shrink ${
          scrolled
            ? 'py-3 bg-[#020817]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" stroke="#0099FF" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="3" fill="#0099FF" />
              <circle cx="8" cy="12" r="1.5" fill="#0099FF" opacity="0.6" />
              <circle cx="24" cy="12" r="1.5" fill="#0099FF" opacity="0.6" />
              <circle cx="8" cy="20" r="1.5" fill="#0099FF" opacity="0.6" />
              <circle cx="24" cy="20" r="1.5" fill="#0099FF" opacity="0.6" />
              <line x1="16" y1="16" x2="8" y2="12" stroke="#0099FF" strokeWidth="0.8" opacity="0.4" />
              <line x1="16" y1="16" x2="24" y2="12" stroke="#0099FF" strokeWidth="0.8" opacity="0.4" />
              <line x1="16" y1="16" x2="8" y2="20" stroke="#0099FF" strokeWidth="0.8" opacity="0.4" />
              <line x1="16" y1="16" x2="24" y2="20" stroke="#0099FF" strokeWidth="0.8" opacity="0.4" />
            </svg>
            <span className="text-xl font-bold tracking-wide font-display">MAZEL</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</Link>
            <div className="relative" onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
              <Link href="/services" className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`}>
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </Link>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${megaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="glass rounded-2xl p-6 w-[560px] grid grid-cols-2 gap-3">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href} className="group/item p-3 rounded-xl hover:bg-white/[0.04] transition-colors" onClick={() => setMegaOpen(false)}>
                      <div className="text-sm font-semibold text-white group-hover/item:text-[#0099FF] transition-colors">{s.name}</div>
                      <div className="text-xs text-white/50 mt-0.5">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/industries" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Industries</Link>
            <Link href="/case-studies" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Case Studies</Link>
            <Link href="/projects" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Projects</Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:inline-flex btn-warm text-white text-sm font-semibold px-5 py-2.5 rounded-3xl">
              Get Started
            </Link>
            <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#020817]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Industries', href: '/industries' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Projects', href: '/projects' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="text-2xl font-semibold text-white/80 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-warm text-white font-semibold px-8 py-3 rounded-3xl mt-4" onClick={() => setMobileOpen(false)}>
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}
