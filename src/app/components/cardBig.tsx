import Image from 'next/image';
import * as React from 'react';

import styles from '../contactForm.module.css';

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
            <div className=' max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl'>
              <p className='text-balance text-3xl  font-semibold sm:text-4xl'>
                {title}
              </p>
              <p className='mt-3 text-balance'>{innerText}</p>

              <div className='flex flex-col gap-4 pt-6 text-center md:flex-row '>
                <a
                  href={btn1Src ? btn1Src : `${buttonUrl.primary}`}
                  aria-label={button.primary}
                  className=' block rounded-lg border-2 border-solid border-blue-400 px-6 py-3 text-center text-lg font-medium uppercase tracking-widest shadow transition hover:scale-105 hover:border-blue-500
                   hover:text-blue-500 active:shadow-none md:mb-0 md:inline md:text-sm'
                >
                  {btn1Title ? btn1Title : `${button.primary}`}{' '}
                </a>
                <a
                  href={btn2Src ? btn2Src : `${buttonUrl.secondary}`}
                  aria-label={button.secondary}
                  className='block rounded-lg border-2 border-blue-400 bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-center text-lg font-medium uppercase tracking-widest text-white shadow transition hover:scale-105 hover:to-blue-700 active:bg-blue-700 active:shadow-none md:mb-0 md:inline md:text-sm'
                >
                  {btn2Title ? btn2Title : `${button.secondary}`}
                </a>
              </div>
            </div>
          </div>
        </div>

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
              {/* <source src={videoSrcMp4} type='video/mp4' /> */}
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
