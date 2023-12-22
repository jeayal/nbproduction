import MoreVert from '@mui/icons-material/MoreVert';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';

export default function IconButtonMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu>
        <MenuItem>Accueil</MenuItem>
        <MenuItem>Join the Club</MenuItem>
        <MenuItem>Mes services</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Dropdown>
  );
}
