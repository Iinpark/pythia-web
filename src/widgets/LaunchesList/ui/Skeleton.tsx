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
      width={300}
      height={100}
    />
  );
};

export default Skeleton;
