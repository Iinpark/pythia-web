import React from 'react';
import LaunchesGallery from '@widgets/LaunchesGallery/Index.tsx';
import './page.scss';
function App() {
  return (
    <main className='upcoming-launches'>
      <h1 className='page-header'>Upcoming Launches</h1>
      <LaunchesGallery />
    </main>
  );
}

export default App;
