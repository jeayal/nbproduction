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
}: any) {
  if (rowInverse) {
    return (
      <div className='layout ${bgColor} relative flex flex-col overflow-hidden rounded-xl drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 md:flex-row'>
        <div className='flex flex-col justify-between md:w-2/3'>
          <div className='p-6 text-left '>
            <h1 className='text-l mb-2'>{title}</h1>
            <p>{innerText}</p>
          </div>
          <div className='mb-6 flex flex-col gap-4 p-6 text-center md:flex-row '>
            <ButtonLink
              className='justify-center px-10 uppercase'
              href='/components'
              variant='outline'
            >
              Contactez-moi
            </ButtonLink>
            <ButtonLink
              className=' justify-center px-10 uppercase'
              href='/components'
              variant='primary'
            >
              Faire un devis
            </ButtonLink>
          </div>
        </div>
        <div className='flex md:w-1/3'>
          <Image
            src={imgSrc}
            width={750}
            height={750}
            alt={imgAlt}
            className='object-cover'
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='layout relative flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 md:flex-row-reverse'>
        <div className='flex flex-col justify-between md:w-2/3'>
          <div className='p-6 text-left '>
            <h1 className='text-l mb-2'>{title}</h1>
            <p>{innerText}</p>
          </div>
          <div className='mb-6 flex flex-col gap-4 p-6 text-center md:flex-row '>
            <ButtonLink
              className='justify-center px-10 uppercase'
              href='/components'
              variant='outline'
            >
              Contactez-moi
            </ButtonLink>
            <ButtonLink
              className=' justify-center px-10 uppercase'
              href='/components'
              variant='primary'
            >
              Faire un devis
            </ButtonLink>
          </div>
        </div>
        <div className='flex md:w-1/3'>
          <Image
            src={imgSrc}
            width={750}
            height={750}
            alt={imgAlt}
            className='object-cover'
          />
        </div>
      </div>
    );
  }
}
