'use client';

import * as React from 'react';
import ScrollToTop from 'react-scroll-to-top';

import '@/styles/globals.css';

import ThemeSwitcher from '@/app/components/themeSwitcher';

export default function ScrollTheme() {
  return (
    <div className='fixed bottom-10 right-10 z-50 flex flex-col gap-6 rounded-full bg-neutral-950 p-4 drop-shadow-xl dark:bg-gray-200'>
      <ThemeSwitcher />
      <ScrollToTop smooth />
    </div>
  );
}
