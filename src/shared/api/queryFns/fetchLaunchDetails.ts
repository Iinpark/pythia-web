import fetcher from '../fetcher';
import { LaunchDetails } from '../../interfaces/index';

const fetchLaunchDetails = async (id: number): Promise<LaunchDetails> => {
  const response = await fetcher(`/launch/${id}/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data;
};

export default fetchLaunchDetails;
