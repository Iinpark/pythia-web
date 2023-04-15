import React from 'react';
import Typography from '@mui/material/Typography';
import { LaunchData } from '@shared/interfaces';

type DetailViewProps = { selectedLaunch: LaunchData };

const DetailView = ({ selectedLaunch }: DetailViewProps) => {
  if (!selectedLaunch.name) return <div></div>;

  return (
    <div>
      <Typography variant='h1'>{selectedLaunch.name}</Typography>
      <Typography variant='h5'>{selectedLaunch.mission_description}</Typography>
    </div>
  );
};

export default DetailView;
