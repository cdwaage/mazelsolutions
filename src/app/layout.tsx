import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mazel Solutions | IT Consulting, Development & Security',
    template: '%s | Mazel Solutions',
  },
  description: 'Enterprise-grade IT consulting, custom development, and cybersecurity — without the enterprise price tag or vendor bias. Based in Placer County, CA. Serving all 50 states.',
  keywords: ['IT consulting', 'cybersecurity', 'custom development', 'HIPAA compliance', 'network architecture', 'Placer County', 'California'],
  authors: [{ name: 'Cameron Waage' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mazelsolutions.com',
    siteName: 'Mazel Solutions',
    title: 'Mazel Solutions | IT Consulting, Development & Security',
    description: 'Enterprise-grade IT consulting, custom development, and cybersecurity — without the enterprise price tag or vendor bias.',
    images: [
      {
        url: 'https://mazelsolutions.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mazel Solutions - IT Consulting, Development & Security - Placer County, CA',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazel Solutions | IT Consulting, Development & Security',
    description: 'Enterprise-grade IT consulting, custom development, and cybersecurity.',
    images: ['https://mazelsolutions.com/og-image.svg'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Mazel Solutions, LLC',
  description: 'Enterprise-grade IT consulting, custom development, and cybersecurity services.',
  url: 'https://mazelsolutions.com',
  email: 'info@mazelsolutions.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Placer County',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'California' },
    { '@type': 'Country', name: 'United States' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Cameron Waage',
  },
  serviceType: [
    'IT Consulting',
    'Application Development',
    'Cybersecurity',
    'Network Architecture',
    'HIPAA Compliance',
    'Vendor Evaluation',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-dark text-text-primary font-[family-name:var(--font-body)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
