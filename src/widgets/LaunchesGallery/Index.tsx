'use client';
import './index.scss';
import LaunchCard from '@shared/ui/LaunchCard/Index.tsx';
import { queryUpcomingLaunches } from '@shared/api/index';

const LaunchesGallery = () => {
  const { data } = queryUpcomingLaunches();

  const launches = data?.map((i) => <LaunchCard key={i.id} launchData={i} />);
  return <section className='launch-gallery'>{launches}</section>;
};

export default LaunchesGallery;
