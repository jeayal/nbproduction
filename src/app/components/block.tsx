import * as React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function BlockHomepage({
  title,
  subTitle,
  innerComponent,
  isBig,
  bgColor,
}: any) {
  if (isBig) {
    return (
      <div className={`m-0 flex w-full flex-col ${bgColor} py-16`}>
        <div className='mb-10'>
          <h1 className='layout flex items-center justify-center text-left text-4xl md:text-6xl'>
            {title}
          </h1>
          <p className=' layout mt-2 flex justify-center text-sm md:text-xl'>
            {subTitle}
          </p>
        </div>
        <div className='flex justify-center'>{innerComponent}</div>
      </div>
    );
  } else {
    return (
      <div
        className={`layout relative flex flex-col overflow-hidden rounded-xl drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 md:flex-row `}
      >
        <div id='txt' className='flex flex-col justify-evenly p-10 md:w-2/3'>
          <div className='flex flex-col justify-between text-left'>
            <h1 className='text-l mb-6'>{title}</h1>
            <p className='mb-6'>{subTitle}</p>
          </div>
          <div className='flex flex-col gap-4 text-center md:flex-row'>
            {innerComponent}
          </div>
        </div>
      </div>
    );
  }
}
