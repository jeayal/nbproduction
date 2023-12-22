/* eslint-disable no-console */
'use client';

import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

import IconButtonMenu from '@/app/components/mainNavigation';
import { siteConfig } from '@/constant/config';

export default function NavBar() {
  return (
    <nav className='rounded-bl-large rounded-br-large mb sticky top-0 z-30 -mb-16 w-full overflow-hidden bg-neutral-100 py-6 drop-shadow-xl dark:bg-neutral-900'>
      <div className='layout relative flex flex-row justify-between px-6 md:px-0'>
        <Image
          src='/images/logo-nbp.png'
          width={80}
          height={56}
          alt='Logo NBProductions'
          className='flex w-[4em] object-contain dark:hidden '
        />
        <Image
          src='/images/logo-nbp-dark.png'
          width={80}
          height={56}
          alt='Logo NBProductions'
          className='hidden w-[4em] object-contain dark:flex'
        />
        <div className='m-0 hidden items-center  justify-center gap-9 align-middle text-xs uppercase tracking-widest lg:flex'>
          {/* // Changer l'url racine dans constant/config -> siteConfig.url */}
          <UnderlineLink
            href={siteConfig.url}
            className='m-auto text-left text-xs uppercase tracking-widest'
          >
            Accueil
          </UnderlineLink>
          <UnderlineLink
            href='#join-the-club'
            className='m-auto text-left text-xs uppercase tracking-widest'
          >
            Join the club
          </UnderlineLink>
          <UnderlineLink
            href='#services'
            className='m-auto text-left text-xs uppercase tracking-widest'
          >
            Mes services
          </UnderlineLink>
          <UnderlineLink
            href='#portfolio'
            className='m-auto text-left text-xs uppercase tracking-widest'
          >
            Portfolio
          </UnderlineLink>
          <ButtonLink
            className='items-center justify-center px-10 text-center align-middle text-xs tracking-normal'
            href='#contact'
            variant='primary'
          >
            Faire un devis
          </ButtonLink>
        </div>
        <div className='flex lg:hidden'>
          <IconButtonMenu />
        </div>
      </div>
    </nav>
  );
}
