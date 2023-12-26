'use client';

// Scroll to Top + Theme Mode switcher - Shortly Agency v1.5 2023
import * as React from 'react';

import '@/styles/globals.css';

import ThemeSwitcher from '@/app/components/themeSwitcher';

import ScrollToTop from './components/scrollToTop';

export default function ScrollTheme() {
  return (
    <div className='animate-fade-up fixed bottom-5 right-5 z-50 flex flex-col rounded-full bg-neutral-900 p-4 drop-shadow-xl md:bottom-10 md:right-10 dark:bg-neutral-500'>
      <ThemeSwitcher />
      <ScrollToTop />
    </div>
  );
}
