'use client';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Fab } from '@mui/material';
import List from './List';

const SDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Fab
        sx={{
          zIndex: 10000,
          position: 'fixed',
          bottom: 16,
          right: 16,
          opacity: isDrawerOpen ? 0.5 : 1,
        }}
        variant={'circular'}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <MenuIcon />
      </Fab>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: 'transparent' },
          className: 'launches-list',
        }}
        open={isDrawerOpen}
        onClick={() => setIsDrawerOpen(false)}>
        <List />
      </Drawer>
    </React.Fragment>
  );
};

export default SDrawer;
