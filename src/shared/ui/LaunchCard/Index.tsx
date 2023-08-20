import React from 'react';
import './index.scss';
import { LaunchData } from '@shared/interfaces';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export const LaunchCard = ({ launchData }: { launchData: LaunchData }) => {
  const date = new Date(launchData.t0).toLocaleString('ru');

  return (
    <article className='launch-card'>
      <Image
        className='launch-card_image'
        fill
        src={launchData.image}
        alt={launchData.name}
      />
      <div className='launch-card_content'>
        <Link href={`/launch/${launchData.id}`}>
          <Typography className='launch-card_title' variant='h1'>
            {launchData.name}
          </Typography>
        </Link>
        <Typography className='launch-card_subtitle' variant='h4'>
          {date}
        </Typography>
      </div>
    </article>
  );
};

export default LaunchCard;
