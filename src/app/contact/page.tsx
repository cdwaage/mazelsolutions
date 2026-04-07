'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

// metadata is exported from a separate generateMetadata or in layout
// 'use client' pages cannot export metadata

// ──────────────────────────────────────────────────────────
// Web3Forms access key — get yours free at https://web3forms.com
// Enter info@mazelsolutions.com, check your inbox, paste the key below.
// ──────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Contact Form Submission from ${formData.get('name')}`,
      from_name: 'Mazel Solutions Contact Form',
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || 'Not provided',
      service: formData.get('service') || 'Not specified',
      budget: formData.get('budget') || 'Not specified',
      message: formData.get('message') || 'No message',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again, or email us at info@mazelsolutions.com.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    'w-full rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0099FF]/60 focus:border-[#0099FF]/60 border';

  const inputStyle = {
    background: '#020817',
    borderColor: 'rgba(255,255,255,0.08)',
  };

  return (
    <div className="min-h-screen" style={{ background: '#020817' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,153,255,0.12) 0%, transparent 70%)',
          }}
        />
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0099FF] mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build{' '}
            <span className="gradient-text">Something Great</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to transform your IT infrastructure? Tell us about your project
            and we&apos;ll be in touch within one business day.
          </p>
        </ScrollReveal>
      </section>

      {/* Split Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Form ── */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={1}>
              <div
                className="glass rounded-2xl p-8 md:p-10"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                      style={{ background: 'rgba(0,153,255,0.15)' }}
                    >
                      ✓
                    </div>
                    <h2 className="font-display text-3xl font-bold text-white">
                      Message Received!
                    </h2>
                    <p className="text-white/70 max-w-md">
                      Thanks for reaching out. We&apos;ll review your inquiry and
                      get back to you within one business day to schedule your
                      free consultation.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-[#0099FF] text-sm underline underline-offset-4 hover:text-[#00B4D8] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-display text-2xl font-bold text-white mb-2">
                      Tell Us About Your Project
                    </h2>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Name <span className="text-[#F58220]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Jane Smith"
                          className={inputClasses}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Email <span className="text-[#F58220]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="jane@company.com"
                          className={inputClasses}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        className={inputClasses}
                        style={inputStyle}
                      />
                    </div>

                    {/* Service Interest + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          className={inputClasses}
                          style={inputStyle}
                        >
                          <option value="">Select a service…</option>
                          <option value="it-consulting">IT Consulting</option>
                          <option value="app-development">
                            Application Development
                          </option>
                          <option value="network-architecture">
                            Network Architecture
                          </option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="hipaa-compliance">
                            HIPAA &amp; Compliance
                          </option>
                          <option value="vendor-evaluation">
                            Vendor Evaluation
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          className={inputClasses}
                          style={inputStyle}
                        >
                          <option value="">Select a range…</option>
                          <option value="under-10k">Under $10K</option>
                          <option value="10k-25k">$10K–$25K</option>
                          <option value="25k-50k">$25K–$50K</option>
                          <option value="50k-100k">$50K–$100K</option>
                          <option value="100k-plus">$100K+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Describe your project, goals, or challenges…"
                        className={inputClasses}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <div
                        className="rounded-xl px-4 py-3 text-sm text-red-300 border border-red-500/30"
                        style={{ background: 'rgba(239,68,68,0.08)' }}
                        role="alert"
                      >
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-warm w-full py-4 rounded-xl font-display font-semibold text-white text-base tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Sending...' : 'Schedule a Free 30-Minute Consultation'}
                    </button>

                    <p className="text-white/40 text-xs text-center">
                      No obligation. No spam. We respond within one business day.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Info Panel ── */}
          <div className="flex flex-col gap-6">
            {/* Contact Details */}
            <ScrollReveal delay={2}>
              <div
                className="glass rounded-2xl p-7"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div
                      className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-[#0099FF]"
                      style={{ background: 'rgba(0,153,255,0.12)' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@mazelsolutions.com"
                        className="text-white hover:text-[#0099FF] transition-colors text-sm font-medium"
                      >
                        info@mazelsolutions.com
                      </a>
                    </div>
                  </li>

                  {/* Location */}
                  <li className="flex items-start gap-4">
                    <div
                      className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-[#F58220]"
                      style={{ background: 'rgba(245,130,32,0.12)' }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                        Location
                      </p>
                      <p className="text-white text-sm font-medium">
                        Placer County, CA
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        Serving California &amp; all 50 states
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Free Consultation Callout */}
            <ScrollReveal delay={3}>
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,153,255,0.15) 0%, rgba(0,180,216,0.10) 50%, rgba(245,130,32,0.10) 100%)',
                  border: '1px solid rgba(0,153,255,0.25)',
                }}
              >
                {/* Decorative glow */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)',
                  }}
                />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#00B4D8] mb-3">
                    No Commitment Required
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">
                    Free 30-Minute Consultation
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    In our first call, we&apos;ll review your current environment,
                    identify quick wins, and outline a roadmap — no sales pressure,
                    just honest advice.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Honest assessment of your situation',
                      'No vendor kickbacks or bias',
                      'Clear, jargon-free recommendations',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <span className="text-[#0099FF] shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Response time badge */}
            <ScrollReveal delay={4}>
              <div
                className="glass rounded-xl px-5 py-4 flex items-center gap-4"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                  style={{ background: '#00B4D8' }}
                />
                <p className="text-white/70 text-sm">
                  Typical response time:{' '}
                  <span className="text-white font-semibold">
                    within 1 business day
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
