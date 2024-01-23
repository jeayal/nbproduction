/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

import { siteConfig } from '@/constant/config';

export default function NavBar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'Accueil', path: siteConfig.url },
    { title: 'Join the Club', path: '/#join-the-club' },
    { title: 'Services', path: '/#services' },
    { title: 'Portfolio', path: '/#portfolio' },
    { title: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <div className='fixed top-0 z-50 m-auto w-full overflow-hidden drop-shadow-lg '>
        <nav
          className={` bg-neutral-100  md:static md:border-none md:text-sm dark:bg-neutral-900 ${
            state ? 'rounded-b-xl shadow-lg md:shadow-none' : ''
          }`}
        >
          <div className='layout mx-auto items-center justify-between gap-x-14 md:flex '>
            <div className='flex items-center justify-between py-6  md:block md:py-5'>
              {/* LOGO */}
              <a href={siteConfig.url} aria-label="Accéder à l'accueil du site">
                <svg
                  id='LOGO'
                  data-name='Nicolas Blanc Production Logo'
                  fill='currentColor'
                  width='60'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 325.78 146.96'
                >
                  <path
                    className='cls-2'
                    d='M132.26,83.75c7.54,7.03,14.3,13.34,21.28,19.84-20.63,20.29-41.67,39.06-71.57,42.71C40.1,151.4,8.83,126.54,1.56,90.1-6.38,50.37,16.69,12.26,55.65,2.47c23.24-5.84,44.71-1.12,64.44,12.23,12,8.12,22.61,17.82,33.13,28.32-6.59,7-13.07,13.89-19.81,21.06-2.96-2.84-5.71-5.52-8.5-8.16-10.08-9.51-20.63-18.24-33.9-23.17-16.52-6.15-36.1-1.75-47.71,11.07-12.39,13.69-15.05,33.62-7.43,49.78,9.89,20.99,33.94,28.48,56.51,19.73,14.84-5.75,26.55-15.93,37.77-26.79,1.06-1.03,1.81-2.38,2.11-2.77v-.02Z'
                  />
                  <path
                    className='cls-1'
                    d='M172.25,103.51c7.35-7.07,14.01-13.47,20.67-19.88,6.6,5.9,13.13,12.13,20.07,17.85,10.02,8.25,21.17,14.32,34.43,15.52,30.94,2.82,54.09-26.21,45.54-57.11-5.89-21.29-26.5-33.53-49.22-29.23-14.4,2.73-26.15,10.5-37.03,19.78-4.74,4.05-9.25,8.4-13.74,12.49-6.56-6.45-13.05-12.84-19.71-19.38,3.46-3.48,6.75-7.03,10.29-10.31,12.98-11.98,26.76-23.04,43.87-28.37,28.57-8.89,55.39-6.36,77.93,15.32,12.93,12.43,19.17,28.22,20.2,46.06.79,13.83-.41,27.37-7.23,39.8-14.04,25.61-35.51,39.22-64.9,40.51-22.39.98-40.57-8.58-57.28-21.91-8.1-6.46-15.57-13.71-23.91-21.13h0Z'
                  />
                </svg>
              </a>
              {/* END LOGO */}
              <div className='md:hidden'>
                <button
                  className='text-neutral-900-500 transition hover:text-blue-500'
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={` mt-8 flex  pb-3 md:mt-0 md:block md:pb-0 ${
                state ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center space-y-12 md:flex md:space-x-6 md:space-y-0'>
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        href={item.path}
                        className='flex text-lg uppercase tracking-widest text-black hover:text-blue-500 md:text-xs dark:text-white dark:hover:text-blue-500'
                        onClick={() => setState(false)}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a
                    href='/#contact'
                    onClick={() => setState(false)}
                    className=' mb-6 flex w-full rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 px-8 py-2 text-center text-sm font-medium uppercase tracking-widest text-white shadow  transition hover:scale-105 hover:to-blue-700 active:bg-blue-700 active:shadow-none md:mb-0 md:inline'
                  >
                    Faire un devis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {state ? (
        <div
          className='fixed top-0 z-20 h-screen w-screen bg-black/20 backdrop-blur-sm transition md:hidden'
          onClick={() => setState(false)}
        ></div>
      ) : (
        ''
      )}
    </>
  );
}
