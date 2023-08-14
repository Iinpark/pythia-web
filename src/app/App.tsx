import React, { useState } from 'react';
import Container from '@mui/material/Container';
import List from '@widgets/LaunchesList/ui/List';
import Drawer from '@widgets/LaunchesList/ui/Drawer';
import DetailView from '@widgets/DetailView/Index';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

function App() {
  const [selectedLaunch, setSelectedLaunch] = useState({});

  return (
    <Container maxWidth={false} sx={{ overflow: 'hidden' }}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={0}>
          <Hidden mdDown>
            <List />
          </Hidden>
          <Hidden mdUp>
            <Drawer />
          </Hidden>
        </Grid>
        <Grid item md={9} xs={12}>
          <DetailView selectedLaunch={selectedLaunch} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
