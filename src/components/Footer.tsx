'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                ['IT Consulting & Strategy', '/services#consulting'],
                ['Application Development', '/services#development'],
                ['Network Architecture', '/services#network'],
                ['Cybersecurity', '/services#security'],
                ['HIPAA & Compliance', '/services#compliance'],
                ['Vendor Evaluation', '/services#evaluation'],
              ].map(([name, href]) => (
                <li key={name}><Link href={href} className="text-sm text-white/50 hover:text-white transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                ['About', '/about'],
                ['Case Studies', '/case-studies'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
              ].map(([name, href]) => (
                <li key={name}><Link href={href} className="text-sm text-white/50 hover:text-white transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                ['Industries', '/industries'],
                ['Services Overview', '/services'],
                ['Free Consultation', '/contact'],
              ].map(([name, href]) => (
                <li key={name}><Link href={href} className="text-sm text-white/50 hover:text-white transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/50">Placer County, CA</li>
              <li className="text-sm text-white/50">Serving all 50 states</li>
              <li><a href="mailto:info@mazelsolutions.com" className="text-sm text-white/50 hover:text-white transition-colors">info@mazelsolutions.com</a></li>
              <li className="pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" stroke="#0099FF" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="3" fill="#0099FF" />
            </svg>
            <span className="text-sm font-bold tracking-wide font-display">MAZEL</span>
          </div>
          <p className="text-xs text-white/40">&copy; 2026 Mazel Solutions, LLC. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1" aria-label="Back to top">
            Back to top
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 11V3M3 6l4-4 4 4" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
