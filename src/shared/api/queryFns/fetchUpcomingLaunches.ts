import fetcher from '../fetcher';
import { SerializedLaunchData, LaunchData } from '../../interfaces';
import { LaunchDataAdapter } from '../adapters/index.ts';

const fetchUpcomingLaunches = async (): Promise<Array<LaunchData>> => {
  const response = await fetcher(`/launch/upcoming/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data.results.map((i: SerializedLaunchData): LaunchData => {
    return LaunchDataAdapter(i);
  });
};

export default fetchUpcomingLaunches;
