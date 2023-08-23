import './index.scss';
import LaunchCard from '@shared/ui/LaunchCard/Index.tsx';

import { LaunchData } from '@shared/interfaces';

const LaunchesGallery = ({ launches }: { launches: LaunchData[] }) => {
  const list = launches?.map((i) => (
    <li key={i.id}>
      <LaunchCard launchData={i} />
    </li>
  ));
  return (
    <section>
      <nav>
        <ul className='launch-gallery'>{list}</ul>
      </nav>
    </section>
  );
};

export default LaunchesGallery;
