import React, {useState} from 'react';
import Container from '@mui/material/Container';
import List from '@widgets/LaunchesList/Index';
import DetailView from '@widgets/DetailView/Index';
import Grid from '@mui/material/Grid';

function App() {
  const [selectedLaunch, setSelectedLaunch] = useState({});
  return (
    <Container maxWidth={false} sx={{minWidth: 950}} >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <List setSelectedLaunch={setSelectedLaunch} />
        </Grid>
        <Grid item xs={8}>
          <DetailView selectedLaunch={selectedLaunch}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
