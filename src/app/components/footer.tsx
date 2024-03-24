import React from 'react';

import Socials from '@/app/components/socials';

export default function Footer() {
  return (
    <div className='bg-neutral-100 dark:bg-neutral-950'>
      <div className='layout relative flex flex-col justify-between pt-10 md:flex-row md:py-32'>
        <div id='gauche' className='relative flex flex-col md:mr-0'>
          <div className=' relative mx-auto flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 object-contain p-4 align-middle text-white drop-shadow-lg md:p-8 dark:bg-neutral-200 dark:text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='100'
              fill='currentColor'
              viewBox='0 0 295.9 249.49'
              className='h-[70px] w-[70px] md:h-[100px] md:w-[100px]'
            >
              <path d='M29.67,184.53c10.04,0,18.46,8.09,18.4,20.34,0,12.34-8.42,20.35-18.4,20.35H9.73v23H1.08v-63.69h28.59ZM39.08,204.83c.05-8.48-4.47-13.04-9.41-13.04H9.72v26.16h19.95c4.9,0,9.41-4.51,9.41-13.12h0Z' />
              <path d='M85.24,222.83v25.39h-8.64v-63.69h27.68c10.03,0,18.45,7.61,18.38,19.15,0,9.15-5.22,15.76-12.3,18.16l15.49,26.38h-10.27l-13.88-25.39h-16.45ZM104.27,215.57c5.16,0,9.4-4.25,9.4-11.93.04-7.56-4.2-11.85-9.4-11.84h-19.03v23.77h19.03Z' />
              <path d='M212.24,216.37c0,18.32-12.29,33.12-31.24,33.12s-31.24-14.8-31.24-33.12,12.42-33.12,31.24-33.12,31.24,14.8,31.24,33.12ZM158.76,216.37c0,14.37,9.02,24.9,22.25,24.9s22.24-10.51,22.24-24.9-8.92-24.9-22.3-24.9-22.19,10.41-22.19,24.9Z' />
              <path d='M264.48,184.53c18.94,0,31.42,13.53,31.42,31.84s-12.48,31.85-31.42,31.85h-21.94v-63.69h21.93ZM264.48,240.95c13.7,0,22.43-9.69,22.43-24.58s-8.73-24.58-22.43-24.58h-13.29v49.16h13.29Z' />

              <path d='M139.73,2.04v165.32c0,1.13-.91,2.05-2.05,2.05h-34.29c-.66,0-1.28-.32-1.67-.86l-57.47-80.51c-1.16-1.63-3.73-.79-3.71,1.21l.79,78.09c0,1.14-.91,2.07-2.05,2.07H2.05c-1.13,0-2.05-.92-2.05-2.05V2.04C0,.92.92,0,2.05,0h33.98c.68,0,1.32.34,1.7.91l57.7,86.71c1.13,1.7,3.77.89,3.75-1.15l-.79-84.41c-.01-1.14.91-2.07,2.05-2.07h37.25c1.13,0,2.04.92,2.04,2.04Z' />
              <path d='M294.81,106.23c0,37.03-30.55,67.15-68.09,67.15-11.91,0-23.52-3.05-33.79-8.86-.69-.39-1.54.09-1.54.88v1.89c0,1.13-.91,2.05-2.05,2.05h-35.84c-1.13,0-2.05-.92-2.05-2.05V2.75c0-1.13.92-2.05,2.05-2.05h35.84c1.13,0,2.05.91,2.05,2.05v44.3c0,.79.85,1.27,1.54.88,10.28-5.8,21.88-8.86,33.79-8.86,37.54,0,68.09,30.12,68.09,67.15ZM251.8,106.23c0-16.98-14.01-30.8-31.23-30.8s-29.18,13.81-29.18,30.8,11.96,30.8,29.18,30.8,31.23-13.81,31.23-30.8Z' />
            </svg>
          </div>
        </div>
        <div
          id='centre'
          className='mx-auto my-10 flex flex-col items-center justify-evenly align-middle md:my-0'
        >
          <form className='mb-10 flex w-full flex-col md:mb-0'>
            <label
              htmlFor='subscribe'
              className='mb-2 pb-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-500 md:text-sm dark:text-gray-400'
            >
              Abonnez-vous à ma
              <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
                &nbsp;newsletter&nbsp;
              </span>
              :
            </label>

            <div className='flex flex-row gap-4'>
              <input
                className='flex w-full rounded-lg bg-neutral-200 dark:bg-neutral-700'
                placeholder='Entrez votre adresse email'
              ></input>
              <button
                type='submit'
                aria-label="S'abonner à la newsletter"
                className='flex w-fit items-center rounded-md bg-neutral-400 px-2 py-2 text-lg font-light text-gray-50 hover:bg-blue-400 dark:bg-neutral-700 dark:hover:bg-blue-500'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='text-white'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </div>
          </form>
          <Socials ig fb vi size='16px' faded />
        </div>
        <div className=' flex flex-row flex-wrap justify-center gap-2 pb-10 text-center text-neutral-500 md:flex-col md:items-end md:justify-end md:pb-0'>
          <p>Mentions légales.</p>
          <p>Politique de confidentialité</p>
          <p className='md:mt-10'>© 2023 - Tous droits réservés.</p>
          <p>
            Design by{' '}
            <a
              href='https://shortlyagency.com'
              className=' transition hover:text-orange-500'
            >
              Shortly Agency.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
