import React from 'react';
import MSkeleton from '@mui/material/Skeleton';

const Skeleton = () => {
  return (
    <MSkeleton
      sx={{
        bgcolor: 'grey.900',
        marginBottom: 1,
        display: 'block',
        opacity: 0.5,
      }}
      variant='rectangular'
      animation='wave'
      width={'100%'}
      height={100}
    />
  );
};

export default Skeleton;
