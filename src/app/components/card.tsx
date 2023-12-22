import Image from 'next/image';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function CardRow({
  title,
  innerText,
  imgSrc,
  imgAlt,
  rowInverse,
  bgColor,
  videoSrc,
  btn1Title,
  btn2Title,
  btn1Src,
  btn2Src,
}: any) {
  return (
    <div
      className={`layout relative  flex flex-col overflow-hidden rounded-xl ${
        bgColor ? bgColor : 'bg-white dark:bg-neutral-800'
      } drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 ${
        rowInverse ? 'md:flex-row' : 'md:flex-row-reverse'
      } `}
    >
      <div id='txt' className='flex flex-col justify-evenly p-10 md:w-2/3'>
        <div className='flex flex-col justify-between text-left'>
          <h1 className='text-l mb-6'>{title}</h1>
          <p className='mb-6'>{innerText}</p>
        </div>
        <div className='flex flex-col gap-4 p-6 text-center md:flex-row '>
          <ButtonLink
            className='justify-center px-10 uppercase'
            href={btn1Src ? btn1Src : '/contact'}
            variant='outline'
          >
            {btn1Title ? btn1Title : 'Contactez-moi'}
          </ButtonLink>
          <ButtonLink
            className=' justify-center px-10 uppercase'
            href={btn2Src ? btn2Src : '/contact'}
            variant='primary'
          >
            {btn2Title ? btn2Title : 'Faire un devis'}
          </ButtonLink>
        </div>
      </div>
      <div className='flex md:w-1/3'>
        {videoSrc ? (
          <video loop muted autoPlay className='object-cover'>
            <source src={videoSrc} type='video/mp4' />
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
  );
}
