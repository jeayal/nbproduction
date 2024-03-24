/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

// ! OBSOLETE voir v2
export default function VideoCard({ src, title, txt, alt }: any) {
  return (
    // <a onClick={handleOpen}>
    <div className='flex flex-col overflow-hidden rounded-xl drop-shadow-xl transition hover:scale-105'>
      <div className='relative '>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 drop-shadow-xl transition hover:scale-110 hover:fill-black'>
          <svg
            width='36'
            height='41'
            viewBox='0 0 78 83'
            fill='white'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 75.4544V7.95444C0.666667 6.12111 0.457778 2.95412 5 0.954951C7.68077 -0.224934 11.6667 -0.212223 13 0.454443L74.5 34.9544C75.1667 35.7878 77.5 36.9538 77.5 41.4541C77.5 45.9544 74.1667 47.4544 73 48.4544L14 81.9541C13.1667 82.2874 10 82.7541 6 81.9541C2 81.1541 0.166667 77.1211 0 75.4544Z'
              fill='white'
            />
          </svg>
        </div>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={340}
          className='object-fill'
        />
      </div>
      <div className='flex flex-col bg-slate-100 p-8 dark:bg-neutral-800'>
        <h4 className='mb-2 text-left text-xl'>{title}</h4>
        <p className='line-clamp-3 text-left text-gray-400	'>{txt}</p>
      </div>
    </div>
    // </a>
  );
}
