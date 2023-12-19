import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function NavBar() {
  return (
    <nav className='rou rounded-bl-large rounded-br-large mb sticky top-0 z-30 -mb-16 w-full overflow-hidden bg-white py-6 drop-shadow-xl'>
      <div className='layout relative flex flex-row justify-between'>
        <Image
          src='/images/logo-nbp.png'
          width={80}
          height={56}
          alt='Logo NBProductions'
          className='object-contain'
        />
        <div className=' m-0 flex items-center justify-center gap-9 align-middle uppercase tracking-widest'>
          <p>Accueil</p>
          <p>Join the club</p>
          <p>Portfolio</p>
          <p>Contact</p>
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
