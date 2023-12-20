import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function NavBar() {
  return (
    <nav className='rou rounded-bl-large rounded-br-large mb sticky top-0 z-30 -mb-16 w-full overflow-hidden bg-neutral-100 py-6 drop-shadow-xl dark:bg-neutral-900'>
      <div className='layout relative flex flex-row justify-between'>
        <Image
          src='/images/logo-nbp.png'
          width={80}
          height={56}
          alt='Logo NBProductions'
          className='object-contain'
        />

        <div className='m-0 flex items-center justify-center gap-9 align-middle text-xs uppercase tracking-widest'>
          <a href='/'>
            <p>Accueil</p>
          </a>
          <a href='#join-the-club'>
            <p>Join the club</p>
          </a>
          <a href='#portfolio'>
            <p>Portfolio</p>
          </a>
          <a href='#contact'>
            <p>Contact</p>
          </a>
          <ButtonLink
            className='items-center justify-center px-10 text-center align-middle tracking-normal'
            href='/components'
            variant='primary'
          >
            Faire un devis
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}
