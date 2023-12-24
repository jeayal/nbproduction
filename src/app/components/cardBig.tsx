import Image from 'next/image';
import * as React from 'react';

import styles from '../contactForm.module.css';

import ButtonLink from '@/components/links/ButtonLink';

/* eslint-disable @typescript-eslint/no-explicit-any */
const button = { primary: 'Contactez-moi', secondary: 'Faire un devis' };
const buttonUrl = { primary: '/#contact', secondary: '/#contact' };

export default function CardRowBig({
  title,
  innerText,
  imgSrc,
  imgAlt,
  rowInverse,
  bgColor,
  videoSrcMp4,
  videoSrcWebm,
  stroke,
  btn1Title,
  btn2Title,
  btn1Src,
  btn2Src,
}: any) {
  return (
    <div
      className={`layout relative flex flex-col overflow-hidden rounded-xl ${
        stroke ? `${styles.formStroke}` : ''
      } my-10 drop-shadow-2xl`}
    >
      <div
        className={` relative flex flex-col overflow-hidden rounded-lg ${
          bgColor ? bgColor : 'bg-white dark:bg-neutral-800'
        } drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 ${
          rowInverse ? 'md:flex-row' : 'md:flex-row-reverse'
        } `}
      >
        <div className='mx-auto max-w-screen-xl px-4 py-8 md:px-8 md:py-16'>
          <div className='items-center gap-x-12 sm:px-4 md:px-0 lg:flex'>
            {/* <div className='flex-1 sm:hidden lg:block'></div> */}
            <div className=' max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl'>
              <p className='text-3xl font-semibold  sm:text-4xl'>{title}</p>
              <p className='mt-3 '>{innerText}</p>
              {/* EN SAVOIR PLUS BTN  */}
              {/* <a
                href='/#services'
                className='inline-flex items-center gap-x-1 font-medium text-blue-500 transition hover:text-blue-700 dark:hover:text-white'
              >
                En savoir plus
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                    clipRule='evenodd'
                  />
                </svg>
              </a> */}
              <div className='flex flex-col gap-4 pt-6 text-center md:flex-row '>
                <ButtonLink
                  className='justify-center py-4 uppercase md:px-10 md:py-2'
                  href={btn1Src ? btn1Src : `${buttonUrl.primary}`}
                  variant='outline'
                  aria-label={button.primary}
                >
                  {btn1Title ? btn1Title : `${button.primary}`}
                </ButtonLink>
                <ButtonLink
                  className=' justify-center py-4 uppercase md:px-10 md:py-2'
                  href={btn2Src ? btn2Src : `${buttonUrl.secondary}`}
                  variant='primary'
                  aria-label={button.secondary}
                >
                  {btn2Title ? btn2Title : `${button.secondary}`}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          id='txt'
          className='flex flex-col justify-evenly px-6 py-8 md:w-2/3 md:p-10'
        >
          <div className='flex flex-col justify-between text-left'>
            <h1 className='mb-6 text-2xl'>{title}</h1>
            <p className='mb-6'>{innerText}</p>
          </div>
          <div className='mb-4 flex flex-col gap-4 text-center md:mb-0 md:flex-row md:p-6 '>
            <ButtonLink
              className='justify-center uppercase md:px-10'
              href={btn1Src ? btn1Src : `${buttonUrl.primary}`}
              variant='outline'
              aria-label={button.primary}
            >
              {btn1Title ? btn1Title : `${button.primary}`}
            </ButtonLink>
            <ButtonLink
              className=' justify-center uppercase md:px-10'
              href={btn2Src ? btn2Src : `${buttonUrl.secondary}`}
              variant='primary'
              aria-label={button.secondary}
            >
              {btn2Title ? btn2Title : `${button.secondary}`}
            </ButtonLink>
          </div>
        </div> */}
        <div className='flex md:w-1/3'>
          {videoSrcMp4 || videoSrcWebm ? (
            <video
              loop
              muted
              autoPlay
              playsInline
              webkit-playsinline='true'
              className='object-cover'
            >
              <source src={videoSrcWebm} type='video/webm' />
              <source src={videoSrcMp4} type='video/mp4' />
            </video>
          ) : (
            <Image
              src={imgSrc}
              width={750}
              height={750}
              alt={imgAlt}
              className='object-cover'
              layout='responsive'
            />
          )}
        </div>
      </div>
    </div>
  );
}
