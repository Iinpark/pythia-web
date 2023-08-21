// 'use client';
import React from 'react';
import List from '@widgets/LaunchesList/ui/List';
import Drawer from '@widgets/LaunchesList/ui/Drawer';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container spacing={0}>
      <Grid item md={3} xs={0}>
        <Hidden mdDown>
          <List />
        </Hidden>
        <Hidden mdUp>
          <Drawer />
        </Hidden>
      </Grid>
      <Grid item md={8} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default layout;
