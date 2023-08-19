'use client';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YTIframe from '@shared/ui/Media/YTIframe';
import { LaunchDetails } from '@shared/interfaces';
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
  return (
    <section className='detail-view'>
      {launchDetails.image && (
        <img
          onLoad={() => setIsImageLoaded(true)}
          className={
            isImageLoaded
              ? 'detail-view__background-image loaded'
              : 'detail-view__background-image'
          }
          src={launchDetails.image}
          alt=''
          width='100%'
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
              Подробнее
              <OpenInNewIcon />
            </a>
          </Typography>
        )}
      </Typography>
      <Typography variant='h5'>{launchDetails.mission_description}</Typography>

      {launchDetails.vidURLs[0] &&
        launchDetails.vidURLs[0].source === 'youtube' && (
          <YTIframe src={launchDetails.vidURLs[0]?.url} />
        )}
    </section>
  );
};

export default DetailView;
