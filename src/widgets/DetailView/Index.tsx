'use client';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YTIframe from '@shared/ui/Media/YTIframe';
import { LaunchDetails } from '@shared/interfaces';
import { isYoutubeUrl } from '@shared/utils';
import './index.scss';

type DetailViewProps = { selectedLaunch: LaunchDetails | {} };

const DetailView = ({ selectedLaunch }: DetailViewProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    setIsImageLoaded(false);
  }, [selectedLaunch]);
  useEffect(() => {
    setIsImageLoaded(true);
  }, []);
  const launchDetails = selectedLaunch as LaunchDetails;
  const isYoutubeVideo = isYoutubeUrl(launchDetails.vidURLs[0]?.url);
  return (
    <section className='detail-view'>
      {launchDetails.image && (
        <Image
          onLoad={() => setIsImageLoaded(true)}
          className={
            isImageLoaded
              ? 'detail-view__background-image loaded'
              : 'detail-view__background-image'
          }
          src={launchDetails.image}
          alt=''
          fill
        />
      )}
      <Typography variant='h1' sx={{ marginBottom: '32px' }}>
        {launchDetails.name}
        {launchDetails.infoURLs[0] && (
          <Typography variant='h6' component={'span'}>
            <a
              className='learn-more-link'
              target='_blank'
              href={launchDetails.infoURLs[0].url}>
              Learn more
              <OpenInNewIcon />
            </a>
          </Typography>
        )}
      </Typography>
      <Typography variant='h5'>{launchDetails.mission_description}</Typography>

      {isYoutubeVideo && <YTIframe src={launchDetails.vidURLs[0].url} />}
    </section>
  );
};

export default DetailView;
