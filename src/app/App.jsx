import * as React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ImagePlaceholder from '@shared/ui/ImagePlaceholder.jsx'


function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
              <ImagePlaceholder size="100" />
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Container>
  )
}

export default App
