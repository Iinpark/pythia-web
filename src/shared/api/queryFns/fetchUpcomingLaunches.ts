import fetcher from '../fetcher';
import { SerializedLaunchData, LaunchData } from '../../interfaces';
import { LaunchDataAdapter } from '../adapters/index.ts';

const fetchUpcomingLaunches = async (): Promise<Array<LaunchData>> => {
  const response = await fetcher(`/launch/upcoming?limit=10`, {
    // revalidate every hour
    next: { revalidate: 60 * 60 },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data.results.map((i: SerializedLaunchData): LaunchData => {
    return LaunchDataAdapter(i);
  });
};

export default fetchUpcomingLaunches;
