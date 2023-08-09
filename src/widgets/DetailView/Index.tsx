'use client';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
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
      <Typography variant='h1'>{launchDetails.name}</Typography>
      <Typography variant='h5'>{launchDetails.mission_description}</Typography>

      {launchDetails.vidURLs[0] &&
        launchDetails.vidURLs[0].source === 'youtube' && (
          <YTIframe src={launchDetails.vidURLs[0]?.url} />
        )}
    </section>
  );
};

export default DetailView;
