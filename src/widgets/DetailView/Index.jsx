import React from 'react';
import Typography from '@mui/material/Typography';


const DetailView = ({selectedLaunch}) => {
  if (!selectedLaunch.name) return <div></div>

  return (
    <div>
      <Typography variant='h1' >
        {selectedLaunch.name}
      </Typography>
      <Typography variant='h5' >
        {selectedLaunch.launch_description}
      </Typography>
    </div>
  );
}


export default DetailView;
