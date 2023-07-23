import fetcher from '../fetcher';
import { LaunchDetails } from '../../interfaces/index';
import { LaunchDetailsAdapter } from '../adapters/index';

const fetchLaunchDetails = async (id: string): Promise<LaunchDetails> => {
  const response = await fetcher(`/launch/${id}/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return LaunchDetailsAdapter(data);
};

export default fetchLaunchDetails;