import React from 'react';
import LaunchesGallery from '@widgets/LaunchesGallery/Index.tsx';
import './page.scss';
import Head from 'next/head';
import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches.ts';

async function App() {
  const launches = await fetchUpcomingLaunches();
  return (
    <main className='upcoming-launches'>
      <Head>
        <title>Pythia | Schedule of rocket launches </title>

        <meta
          name='description'
          content='Pythia is a schedule of rocket launches. Here you can find information about upcoming launches, as well as about some past ones.'
          key='desc'
        />
      </Head>

      <h1 className='page-header'>Upcoming Launches</h1>
      <LaunchesGallery launches={launches} />
    </main>
  );
}

export default App;
