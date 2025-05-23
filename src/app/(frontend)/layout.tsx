import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import WhatsAppButton from '@/components/ui-element/whatsapp-button';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ghost Pisos Industriais | Pisos Premium para Instalações Industriais',
  description:
    'Especialistas em soluções de piso industrial incluindo piso epóxi, concreto polido e reparos de piso para manufatura, armazenagem e instalações industriais.',
  keywords:
    'piso industrial, piso epóxi, concreto polido, revestimento industrial, reparo de piso, piso de alta resistência, piso antiderrapante, revestimento epóxi',
  authors: [{ name: 'Ghost Pisos Industriais' }],
  creator: 'Ghost Pisos Industriais',
  publisher: 'Ghost Pisos Industriais',
  metadataBase: new URL('https://ghostpisosindustriais.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    title: 'Ghost Pisos Industriais | Pisos Premium para Instalações Industriais',
    description:
      'Especialistas em soluções de piso industrial incluindo piso epóxi, concreto polido e reparos de piso para manufatura, armazenagem e instalações industriais.',
    url: 'https://ghostpisosindustriais.com',
    siteName: 'Ghost Pisos Industriais',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghost Pisos Industriais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghost Pisos Industriais | Pisos industriais',
    description:
      'Especialistas em soluções de piso industrial incluindo piso epóxi, concreto polido e reparos de piso.',
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-icon.png'],
    shortcut: ['/shortcut-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
