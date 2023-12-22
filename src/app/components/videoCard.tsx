import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function VideoCard(this: any, { src, title, txt, alt }: any) {
  return (
    <a href={src}>
      <div className='flex flex-col overflow-hidden rounded-xl drop-shadow-xl transition hover:scale-105'>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={240}
          className='object-fill'
        />
        <div className='flex flex-col bg-slate-100 p-8 dark:bg-neutral-800'>
          <h4 className='mb-2 text-left'>{title}</h4>
          <p className='line-clamp-3 text-left text-gray-400	'>{txt}</p>
        </div>
      </div>
    </a>
  );
}
