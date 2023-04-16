import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { LaunchData } from '@shared/interfaces';
import { queryLaunchDetails } from '@shared/api/index';
import './index.scss';

type DetailViewProps = { selectedLaunch: LaunchData | {} };

const DetailView = ({ selectedLaunch }: DetailViewProps) => {
  if (!selectedLaunch.name) return <div></div>;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    setIsImageLoaded(false);
  }, [selectedLaunch]);

  const { data, status, error } = queryLaunchDetails(selectedLaunch.id);
  const launchDetails = data! || {};

  return (
    <div className='detail-view'>
      {status === 'loading' && <Typography variant='h1'>Loading...</Typography>}
      {error! && <Typography variant='h1'>Error</Typography>}
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
    </div>
  );
};

export default DetailView;
