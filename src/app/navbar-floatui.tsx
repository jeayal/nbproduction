/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

const dropdownNavs = [
  {
    label: 'Vidéo',
    navs: [
      {
        title: 'Mariage',
        desc: "Pour immortaliser le moment d'une vie",
        path: 'javascript:void(0)',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
            />
          </svg>
        ),
      },

      {
        title: 'Concert',
        desc: 'Pour avoir des souvenirs mémorables',
        path: 'javascript:void(0)',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z' />
          </svg>
        ),
      },
      {
        title: 'Publicité',
        desc: 'Pour intéragir avec votre audience',
        path: 'javascript:void(0)',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z' />
          </svg>
        ),
      },
      {
        title: 'Sport',
        desc: 'Pour faire rayonner votre évènement',
        path: 'javascript:void(0)',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z' />
          </svg>
        ),
      },
      {
        title: 'Entreprise',
        desc: 'Pour faire grandir votre marque',
        path: 'javascript:void(0)',
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z' />
          </svg>
        ),
      },
    ],
  },
]; // ! Dropdown cassé ne pas utiliser

export default function NavBarDropdown() {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    {
      title: 'Accueil',
      path: '/#',
      isDrapdown: false,
      navs: dropdownNavs,
    },
    { title: 'Join the Club', path: '/#join-the-club', isDrapdown: false },
    { title: 'Services', path: '/#services', isDrapdown: false },
    { title: 'Contact', path: '/#contact', isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target: any = e.target;
      if (!target.closest('.nav-menu'))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);
  // const constItem = { item: null }; // ! {item}... is possibly 'undefined' workaround mais ça marche pas.
  return (
    <>
      <div className='fixed top-0 z-50 m-auto w-full overflow-hidden drop-shadow-lg '>
        <nav
          className={`z-20 w-full bg-neutral-100  dark:bg-neutral-900 md:static md:border-none md:text-sm ${
            state ? 'rounded-b-xl shadow-lg md:shadow-none' : ''
          }`}
        >
          <div className='mx-auto max-w-screen-xl items-center gap-x-14 px-8 md:flex md:px-10'>
            <div className='flex items-center justify-between py-3  md:block md:py-5'>
              {/* LOGO */}
              <a href='/#'>
                <svg
                  id='LOGO'
                  data-name='Nicolas Blanc Production Logo'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  width='120'
                  height='60'
                  viewBox='0 0 443.65 146.81'
                  className=' transition hover:text-blue-500'
                >
                  <path
                    d='M105.9,79.65c5.63,0,10.35,4.53,10.31,11.4,0,6.92-4.72,11.4-10.31,11.4h-11.18v12.89h-4.84v-35.7h16.02ZM111.17,91.03c.03-4.75-2.5-7.31-5.27-7.31h-11.18v14.66h11.18c2.75,0,5.27-2.53,5.27-7.35h0Z'
                    fill='currentColor'
                  />
                  <path
                    d='M129.4,101.12v14.23h-4.84v-35.7h15.51c5.62,0,10.34,4.26,10.3,10.73,0,5.13-2.92,8.83-6.9,10.18l8.68,14.78h-5.75l-7.78-14.23h-9.22ZM140.07,97.04c2.89,0,5.27-2.38,5.27-6.68.03-4.24-2.35-6.64-5.27-6.64h-10.67v13.32h10.67Z'
                    fill='currentColor'
                  />
                  <path
                    d='M192.94,97.5c0,10.27-6.89,18.56-17.51,18.56s-17.51-8.3-17.51-18.56,6.96-18.56,17.51-18.56,17.51,8.3,17.51,18.56ZM162.96,97.5c0,8.05,5.06,13.96,12.47,13.96s12.47-5.89,12.47-13.96-5-13.96-12.5-13.96-12.43,5.83-12.43,13.96Z'
                    fill='currentColor'
                  />
                  <path
                    d='M214.57,79.65c10.62,0,17.61,7.58,17.61,17.85s-6.99,17.85-17.61,17.85h-12.29v-35.7h12.29ZM214.57,111.27c7.68,0,12.57-5.43,12.57-13.78s-4.89-13.77-12.57-13.77h-7.45v27.55h7.45Z'
                    fill='currentColor'
                  />
                  <path
                    d='M270.58,103.26c0,7.08-5.72,12.79-14.54,12.79s-14.54-5.72-14.54-12.79v-23.61h4.84v23.61c0,5.04,3.71,8.53,9.7,8.53s9.7-3.48,9.7-8.53v-23.61h4.84v23.61Z'
                    fill='currentColor'
                  />
                  <path
                    d='M310.91,83.95l-1.33,3.67c-3.97-2.69-8.46-4.08-12.47-4.08-7.38-.05-12.41,5.83-12.41,13.96s5.05,14,12.44,14c3.98,0,8.47-1.44,12.44-4.11l1.33,3.66c-4.26,3.29-9.34,5.01-13.77,5.01-10.53,0-17.48-8.3-17.48-18.56s6.95-18.63,17.48-18.56c4.47,0,9.5,1.71,13.77,5.01Z'
                    fill='currentColor'
                  />
                  <path
                    d='M332.67,83.72v31.62h-4.89v-31.62h-11.66v-4.07h28.22v4.07h-11.66Z'
                    fill='currentColor'
                  />
                  <path
                    d='M351.1,115.35v-35.7h4.84v35.7h-4.84Z'
                    fill='currentColor'
                  />
                  <path
                    d='M400.25,97.5c0,10.27-6.89,18.56-17.51,18.56s-17.51-8.3-17.51-18.56,6.96-18.56,17.51-18.56,17.51,8.3,17.51,18.56ZM370.28,97.5c0,8.05,5.06,13.96,12.47,13.96s12.47-5.89,12.47-13.96-5-13.96-12.5-13.96-12.43,5.83-12.43,13.96Z'
                    fill='currentColor'
                  />
                  <path
                    d='M438.76,115.35h-4.27l-20.32-26.86v26.86h-4.84v-35.7h4.27l20.32,26.86v-26.86h4.84v35.7Z'
                    fill='currentColor'
                  />

                  <path
                    d='M81.72,21.53v92.67c0,.63-.51,1.15-1.15,1.15h-19.22c-.37,0-.72-.18-.93-.48l-32.22-45.13c-.65-.91-2.09-.45-2.08.68l.44,43.77c0,.64-.51,1.16-1.15,1.16H4.54c-.63,0-1.15-.51-1.15-1.15V21.53c0-.63.51-1.15,1.15-1.15h19.05c.38,0,.74.19.95.51l32.34,48.61c.63.95,2.11.5,2.1-.65l-.44-47.31c0-.64.51-1.16,1.15-1.16h20.88c.63,0,1.15.51,1.15,1.15Z'
                    fill='currentColor'
                  />

                  <path
                    d='M125.08,54.22c0,4.3-1.69,8.39-4.42,10.69-4.5,3.86-7.84,4.22-15.58,4.22h-15.09c-.34,0-.62-.28-.62-.62V20.94c0-.33.27-.6.6-.6h16.96c5.1,0,9.52,1.2,12.14,3.31h0s0,0,0,0c2.8,2.13,4.28,5.44,4.28,9.56,0,3.4-1.82,6.72-4.98,9.12-.35.27-.3.81.1,1,4.37,2.07,6.59,5.73,6.59,10.88ZM113.32,53.48c0-1.8-.83-3.02-2.47-3.64-1.27-.5-2.87-.5-3.82-.5h-5.37c-.33,0-.6.27-.6.6v7.5c0,.34.27.61.61.61h5.36c.76,0,2.35,0,3.67-.55,1.71-.69,2.62-2.08,2.62-4.01ZM101.11,39.25c0,.33.27.6.6.6h3.85c.76,0,2.35,0,3.66-.53,1.72-.67,2.63-2,2.63-3.87,0-1.74-.84-2.92-2.48-3.51-1.27-.48-2.86-.48-3.81-.48h-3.84c-.34,0-.61.27-.61.61v7.18Z'
                    fill='currentColor'
                  />
                  <path
                    d='M139.23,21.01v47.39c0,.33-.26.59-.59.59h-10.91c-.33,0-.59-.26-.59-.59V21.01c0-.33.26-.59.59-.59h10.91c.33,0,.59.26.59.59Z'
                    fill='currentColor'
                  />
                  <path
                    d='M182.44,32.63v35.76c0,.33-.26.59-.59.59h-10.32c-.33,0-.59-.26-.59-.59v-.54c0-.23-.24-.37-.44-.25-2.96,1.67-6.3,2.55-9.73,2.55-10.81,0-19.61-8.68-19.61-19.34s8.8-19.34,19.61-19.34c3.43,0,6.77.88,9.73,2.55.2.11.44-.03.44-.25v-1.13c0-.33.26-.59.59-.59h10.32c.33,0,.59.26.59.59ZM170.93,50.8c0-4.89-3.44-8.87-8.41-8.87s-9,3.98-9,8.87,4.04,8.87,9,8.87,8.41-3.98,8.41-8.87Z'
                    fill='currentColor'
                  />
                  <path
                    d='M219.37,47.62v20.79c0,.33-.26.59-.59.59h-11.02c-.33,0-.59-.26-.59-.59v-20.21c0-1.37-.08-2.94-.65-4.21-.26-.54-.61-.98-1.04-1.31-.69-.54-1.58-.8-2.73-.8-2.13,0-3.77.73-4.29,1.91-.6,1.28-.6,3.02-.6,4.42v20.21c0,.33-.27.59-.59.59h-11.02c-.33,0-.59-.26-.59-.59v-35.76c0-.33.26-.59.59-.59h10.32c.33,0,.59.26.59.59v1c0,.24.27.38.46.24,8.32-5.73,16.42.63,16.5.7.29.23.58.48.83.73h0c3.77,3.79,4.4,6.86,4.4,12.3Z'
                    fill='currentColor'
                  />
                  <path
                    d='M257.13,60.96c-.29.46-.71,1.09-.94,1.39,0,0,0,.01-.01.02-.36.48-.75.94-1.16,1.38,0,.01-.02.02-.03.03-.16.18-.44.46-.61.63-.03.03-.06.06-.09.09-.17.17-.35.34-.53.5-.11.09-.21.19-.32.28-.08.06-.15.13-.23.19-2.83,2.39-6.32,3.96-10.05,4.47-.12.02-.25.03-.37.05-.15.02-.31.04-.46.05-.24.02-.48.04-.72.05-.09,0-.17,0-.26.01-.29.01-.58.02-.88.02-10.81,0-19.61-8.68-19.61-19.34s8.8-19.34,19.61-19.34c.29,0,.58,0,.88.02.09,0,.17,0,.26.01.24.01.48.03.72.05.15.01.31.03.46.05.12.01.25.03.37.05,3.73.51,7.22,2.08,10.05,4.47.07.06.15.13.22.19.11.09.21.19.32.28.18.16.36.33.53.5.03.03.06.07.1.1.18.19.37.37.54.56.03.03.06.07.09.1.41.44.79.9,1.15,1.38,0,0,0,.01.01.02.37.49.71.99,1.04,1.51h0c.13.22.06.51-.16.64l-5.24,3.02-3.03,1.75c-.27.16-.61.08-.78-.18-1.72-2.61-4.11-4.05-6.96-4.05s-5.25,1.24-6.9,3.18c-1.39,1.5-2.24,3.5-2.24,5.69s.85,4.19,2.24,5.69c1.65,1.95,4.13,3.18,6.9,3.18s5.24-1.44,6.96-4.05c.17-.26.51-.33.78-.18l8.13,4.69c.29.17.38.55.2.83Z'
                    fill='currentColor'
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
              className={`nav-menu mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
                state ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center space-y-12  md:flex md:space-x-6 md:space-y-0'>
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx}>
                      {item.isDrapdown ? (
                        <button
                          className='flex w-full items-center justify-between text-black hover:text-blue-500 dark:text-white'
                          onClick={() =>
                            setDrapdownState({
                              idx: null,
                              isActive: !drapdownState.isActive,
                            })
                          }
                        >
                          {item.title}
                          {drapdownState.idx == idx &&
                          drapdownState.isActive ? (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              className='h-5 w-5'
                            >
                              <path
                                fillRule='evenodd'
                                d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
                                clipRule='evenodd'
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              className='h-5 w-5'
                            >
                              <path
                                fillRule='evenodd'
                                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                                clipRule='evenodd'
                              />
                            </svg>
                          )}
                        </button>
                      ) : (
                        <a
                          href={item.path}
                          className='block text-lg uppercase tracking-widest text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500 md:text-xs'
                          onClick={() => setState(false)}
                        >
                          {item.title}
                        </a>
                      )}
                      {/* {item.isDrapdown &&
                      drapdownState.idx == idx &&
                      drapdownState.isActive ? (
                        <div className='inset-x-0 top-20 ml-3 mt-6 w-full  md:absolute md:mt-0 md:border-y md:shadow-md'>
                          <ul className='mx-auto grid max-w-screen-xl items-center gap-6 md:grid-cols-2 md:p-8 lg:grid-cols-3'>
                            {constItem?.navs.map((dropdownItem, idx) => (
                              <li key={idx}>
                                <p className='text-sm text-blue-600'>
                                  {dropdownItem.label}
                                </p>
                                <ul className='mt-5 space-y-6'>
                                  {dropdownItem.navs.map((navItem, idx) => (
                                    <li key={idx} className='group'>
                                      <a
                                        href={navItem.path}
                                        className='flex items-center gap-3'
                                      >
                                        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-blue-500 duration-150 group-hover:bg-blue-600 group-hover:text-white md:h-14 md:w-14'>
                                          {navItem.icon}
                                        </div>
                                        <div>
                                          <span className='text-sm font-medium text-gray-800 duration-200 group-hover:text-blue-600 md:text-base'>
                                            {navItem.title}
                                          </span>
                                          <p className='mt-1 text-sm text-gray-600 group-hover:text-gray-800'>
                                            {navItem.desc}
                                          </p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        ''
                      )} */}
                    </li>
                  );
                })}
                <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                  {/* DEUXIEME BOUTON MD:ON
                  <li>
                    <a
                      href='javascript:void(0)'
                      className='block rounded-lg border py-3 text-center text-gray-700 hover:text-indigo-600 md:border-none'
                    >
                      Log in
                    </a>
                  </li> */}
                  <li>
                    <a
                      href='/#contact'
                      className='mb-6 block rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-center text-sm font-medium uppercase tracking-widest text-white shadow  transition hover:scale-105 hover:to-blue-700 active:bg-blue-700 active:shadow-none md:mb-0 md:inline'
                    >
                      Faire un devis
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* BLUR QUAND MOBILE STATE IS ACTIVE */}
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
