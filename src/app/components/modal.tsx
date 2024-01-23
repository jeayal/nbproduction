'use client';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TransitionsModal({ url, title }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
          <Box className='layout absolute left-1/2 top-1/2 flex h-[75%] w-full -translate-x-1/2 -translate-y-1/2'>
            <div className='layout relative mx-auto flex flex-col rounded-xl bg-neutral-800 p-8 drop-shadow-lg'>
              <div className='mb-6 flex flex-row justify-between '>
                <h1 className='text-2xl'>{title}</h1>
                <button onClick={handleClose}>Fermer</button>
              </div>
              <div className='layout relative flex h-full w-full overflow-hidden rounded-lg object-fill'>
                <iframe
                  src={url}
                  className=' h-full w-full '
                  allow='autoplay; fullscreen; picture-in-picture'
                ></iframe>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
