'use client';

import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='h-10 w-10 text-yellow-600 '
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='h-10 w-10 text-white '
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
