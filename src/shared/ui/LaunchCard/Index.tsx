import React from 'react';
import './index.scss';
import { LaunchData } from '@shared/interfaces';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { toDisplayableDate } from '@shared/utils';

export const LaunchCard = ({ launchData }: { launchData: LaunchData }) => {
  const date = toDisplayableDate(launchData.t0);

  return (
    <article className='launch-card'>
      {launchData.image && (
        <Image
          fill
          style={{
            objectFit: 'cover',
          }}
          className='launch-card_image'
          src={launchData.image}
          alt={launchData.name}
        />
      )}
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
