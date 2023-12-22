import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Cette page est perdue :(
          </h1>
          <a href={siteConfig.url}>Retour</a>
        </div>
      </section>
    </main>
  );
}
