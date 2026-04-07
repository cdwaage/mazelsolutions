'use client';

import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const numericPart = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (isNaN(numericPart)) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(numericPart / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, numericPart]);

  const displayValue = isNaN(numericPart) ? value : `${count}${suffix}`;

  return (
    <div ref={ref} className="text-center px-6 py-6">
      <div className="text-4xl sm:text-5xl font-bold font-display text-white">{displayValue}</div>
      <div className="text-xs sm:text-sm text-white/50 mt-1.5 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const stats: StatProps[] = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Networks Designed' },
    { value: '100%', label: 'Vendor Independent' },
    { value: '24/7', label: 'Incident Response' },
  ];

  return (
    <div className="glass rounded-2xl max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
