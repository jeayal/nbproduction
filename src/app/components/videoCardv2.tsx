/* eslint-disable @typescript-eslint/no-explicit-any */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import React from 'react';

export default function VideoCard({ src, title, txt, alt, url }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <a
        onClick={handleOpen}
        className='hover:drop-shadow-glow group cursor-pointer'
      >
        <div className='flex flex-col overflow-hidden rounded-xl drop-shadow-xl transition hover:scale-105'>
          <div className='relative'>
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
          <div className='flex flex-col bg-slate-100 from-blue-500 to-sky-400 p-8 group-hover:bg-gradient-to-r dark:bg-neutral-800'>
            <h4 className='mb-2 text-left text-xl group-hover:text-white'>
              {title}
            </h4>
            <p className='line-clamp-3 text-left text-gray-400 group-hover:text-white'>
              {txt}
            </p>
          </div>
        </div>
      </a>

      <Modal
        aria-labelledby={title}
        aria-describedby={txt}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {/* h-[50%] w-full md:h-[75%] */}
          <div className='flex flex-col'>
            <div className='layout relative z-20 mx-auto flex flex-row justify-between py-3 md:-mb-32 md:py-8'>
              <div>
                <h1 className='text-sm md:text-2xl'>{title}</h1>
                <p className='w-3/4 text-xs'>{txt}</p>
              </div>
              <button
                onClick={handleClose}
                className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-600 opacity-70 drop-shadow-xl hover:bg-neutral-400 hover:opacity-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
            <Box className='layout absolute left-1/2 top-1/2  flex aspect-video w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg drop-shadow-xl md:mx-auto '>
              <iframe
                src={url}
                className='w-full'
                allow='autoplay; fullscreen'
              ></iframe>
            </Box>
          </div>
          {/* <Box className='layout absolute left-1/2 top-1/2 mx-auto flex aspect-video w-full -translate-x-1/2 -translate-y-1/2 '>
            <div className='layout flex aspect-video w-full  flex-col rounded-xl bg-neutral-800 p-8 drop-shadow-lg'>
              <div className='mb-6 flex flex-row justify-between '>
                <div>
                  <h1 className='text-2xl'>{title}</h1>
                  <p>{txt}</p>
                </div>
                <button onClick={handleClose}>Close</button>
            </div>
            <div className='layout flex aspect-video h-full w-full overflow-hidden rounded-lg bg-black'>
              <iframe
                src={url}
                className='w-full'
                allow='autoplay; fullscreen'
              ></iframe>
            </div>
            </div>
          </Box> */}
        </Fade>
      </Modal>
      {open ? (
        <div
          className='fixed left-0 top-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-sm transition '
          onClick={() => setOpen(false)}
        ></div>
      ) : (
        ''
      )}
    </>
  );
}
