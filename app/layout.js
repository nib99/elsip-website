import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'ELSIP Digital Transformation Ecosystem',
    template: '%s | Ministry of Labor and Skills'
  },
  description: 'AI-powered skills matching, blockchain credentials, mobile inspections. 70% efficiency increase, 95% faster processing.',
  keywords: 'Ethiopia labor, skills training, job matching, blockchain, VR training, Ministry of Labor',
  openGraph: {
    title: 'ELSIP - Ethiopia Labor Skills Innovation Platform',
    description: 'Revolutionizing labor market services with 6 integrated AI pillars',
    url: 'https://elsip.et',
    siteName: 'ELSIP',
    images: [
      {
        url: 'https://elsip.et/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ET',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELSIP Digital Ecosystem',
    description: 'Transforming Ethiopia\'s labor market with AI, blockchain & VR',
    images: ['https://elsip.et/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

