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
  videoSrcMp4,
  videoSrcWebm,
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
      <div
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
            href={btn1Src ? btn1Src : '/#contact'}
            variant='outline'
          >
            {btn1Title ? btn1Title : 'Contactez-moi'}
          </ButtonLink>
          <ButtonLink
            className=' justify-center uppercase md:px-10'
            href={btn2Src ? btn2Src : '/#contact'}
            variant='primary'
          >
            {btn2Title ? btn2Title : 'Faire un devis'}
          </ButtonLink>
        </div>
      </div>
      <div className='flex md:w-1/3'>
        {videoSrcMp4 || videoSrcWebm ? (
          <video
            loop
            muted
            autoPlay
            playsInline
            webkit-playsinline
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
  );
}
