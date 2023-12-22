import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import NavBar from '@/app/components/navbar';
import Provider from '@/app/components/provider';
import ScrollTheme from '@/app/scrollTheme';
import { siteConfig } from '@/constant/config';

// Changer les meta dans /constant/config/ts - Shortly Agency 2023
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  // Changer ici Favicon - Shortly Agency 2023
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>
        <Provider>
          <ScrollTheme />
          <NavBar />
          <main className='flex w-full flex-1 flex-col'>{children}</main>
        </Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}
