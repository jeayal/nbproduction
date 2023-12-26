'use client'; // Error components must be Client Components

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import TextButton from '@/components/buttons/TextButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

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

        <TextButton
          variant='basic'
          onClick={reset}
          aria-label='Réessayer'
          className='mt-10 rounded-xl bg-blue-500 px-8 py-4 text-xl text-white drop-shadow-xl hover:bg-blue-400'
        >
          Réessayer
        </TextButton>
      </div>
    </main>
  );
}
