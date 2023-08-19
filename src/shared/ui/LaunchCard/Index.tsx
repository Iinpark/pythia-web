import React from 'react';
import './index.scss';
import { LaunchData } from '@shared/interfaces';
import { Typography } from '@mui/material';
import Link from 'next/link';

export const LaunchCard = ({ launchData }: { launchData: LaunchData }) => {
  const date = new Date(launchData.t0).toDateString();

  return (
    <article
      className='launch-card'
      style={{ backgroundImage: `url(${launchData.image})` }}>
      <Link href={`/launch/${launchData.id}`}>
        <Typography className='launch-card_title' variant='h1'>
          {launchData.name}
        </Typography>
      </Link>
      <Typography className='launch-card_subtitle' variant='h4'>
        {date}
      </Typography>
    </article>
  );
};

export default LaunchCard;
