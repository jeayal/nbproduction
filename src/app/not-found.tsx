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
      <div className='layout flex min-h-[75vh] flex-col items-center justify-center text-center'>
        <RiAlarmWarningFill
          size={60}
          className='drop-shadow-glow animate-flicker text-red-500'
        />
        <h1 className=' mt-10 text-4xl md:text-6xl'>
          Cette page est introuvable :(
        </h1>
        <button
          id='back'
          name='Retour'
          ariia-label="Retourner a l'accueil"
          className='mt-10 rounded-xl bg-blue-500 px-8 py-4 text-xl text-white drop-shadow-xl hover:bg-blue-400'
        >
          <a href={siteConfig.url}>Retour</a>
        </button>
      </div>
    </main>
  );
}
