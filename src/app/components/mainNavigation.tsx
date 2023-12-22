import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';

export default function IconButtonMenu() {
  return (
    <Dropdown className='h-[1vh]'>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { color: 'white' } }}
        className='flex rounded-full  p-4 hover:bg-neutral-600'
      >
        <MoreVert />
      </MenuButton>
      <Menu className='flex h-[1OOvw] w-full flex-col  bg-neutral-100 px-6 py-3 transition duration-300 dark:bg-neutral-900'>
        <MenuItem className=' rounded-md py-6 text-center text-2xl uppercase tracking-widest text-black dark:text-white'>
          Accueil
        </MenuItem>
        <MenuItem className='rounded-md py-6 text-center text-2xl uppercase tracking-widest text-black dark:text-white'>
          Join the Club
        </MenuItem>
        <MenuItem className='rounded-md py-6 text-center text-2xl uppercase tracking-widest text-black dark:text-white'>
          Mes services
        </MenuItem>
        <MenuItem className='rounded-md py-6 text-center text-2xl uppercase tracking-widest text-black dark:text-white'>
          Portfolio
        </MenuItem>
        <MenuItem className='rounded-md py-6 text-center text-2xl uppercase tracking-widest text-black dark:text-white'>
          Contact
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
