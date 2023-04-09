import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import List from '@widgets/LaunchesList/Index.jsx';


function App() {

  return (
    <Container maxWidth="sm">
      <List />
    </Container>
  );
}

export default App;
