import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quality Screen Services Inc | Deerfield Beach Re-Screening',
  description: '35+ years of expert pool and patio re-screening in Deerfield Beach and Boca Raton. Fast response, licensed, and insured Florida specialists.',
  metadataBase: new URL('https://qualityscreenservice.netlify.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quality Screen Services Inc | Your Patio, Perfected.',
    description: 'Premium pool and patio re-screening with a 35-year legacy of quality in Florida. Fast response and free on-site estimates.',
    url: './',
    siteName: 'Quality Screen Services Inc',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1656443876192-22c578744a04?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Quality Screen Services Inc - Premium Pool Enclosure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Screen Services Inc',
    description: 'Florida-Grade Re-Screening & Enclosure Repairs.',
    images: ['https://images.unsplash.com/photo-1656443876192-22c578744a04?q=80&w=1200&auto=format&fit=crop'],
  },
  // No icons object needed here—app/icon.tsx handles it automatically!
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body 
        className="font-sans antialiased bg-pale-yellow text-legacy-black selection:bg-brand-blue selection:text-white" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}