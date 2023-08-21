import React from 'react';
import LaunchesGallery from '@widgets/LaunchesGallery/Index.tsx';
import './page.scss';
import type { Metadata } from 'next';
import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches.ts';

export const metadata: Metadata = {
  title: 'Pythia | Schedule of rocket launches ',
  description:
    'Pythia is a schedule of rocket launches. Here you can find information about upcoming launches, as well as about some past ones.',
};
async function App() {
  const launches = await fetchUpcomingLaunches();
  return (
    <main className='upcoming-launches'>
      <h1 className='page-header'>Upcoming Launches</h1>
      <LaunchesGallery launches={launches} />
    </main>
  );
}

export default App;
