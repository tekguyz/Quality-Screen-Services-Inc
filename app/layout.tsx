import type {Metadata} from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css'; // Global styles

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
  description: 'Premium pool enclosures, patio screens, and repair services in Deerfield Beach, FL. 35 years of trusted, licensed, and insured experience.',
  openGraph: {
    title: 'Quality Screen Services Inc | Deerfield Beach Re-Screening',
    description: 'Premium pool enclosures, patio screens, and repair services in Deerfield Beach, FL. 35 years of trusted, licensed, and insured experience.',
    url: 'https://qualityscreenservice.com',
    siteName: 'Quality Screen Services Inc',
    images: [
      {
        url: 'https://picsum.photos/seed/poolscreen/1200/630',
        width: 1200,
        height: 630,
        alt: 'Quality Screen Services Inc Pool Enclosure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
