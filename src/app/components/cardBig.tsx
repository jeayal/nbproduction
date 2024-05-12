import Image from 'next/image';
import * as React from 'react';

import styles from '../contactForm.module.css';

import Button from '@/app/components/button';

/* eslint-disable @typescript-eslint/no-explicit-any */

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
        } drop-shadow-xl transition ease-in-out sm:flex-col  ${
          rowInverse ? 'md:flex-row' : 'md:flex-row-reverse'
        } `}
      >
        <div className='relative flex flex-col justify-center gap-6 p-8 text-left md:w-full md:p-12'>
          <h1 id='title' className='text-5xl'>
            {title}
          </h1>
          <p id='text' className='text-balance'>
            {innerText}
          </p>

          <div className='flex w-full flex-col gap-6 md:flex-row'>
            <Button
              url='/contact'
              txt='Je fais un devis'
              aria='Faire un devis'
              primary={true}
            />
          </div>
        </div>

        <div className='flex size-full items-center justify-end'>
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
              width={650}
              height={650}
              alt={imgAlt}
              className='object-cover'
            />
          )}
        </div>
      </div>
    </div>
  );
}
