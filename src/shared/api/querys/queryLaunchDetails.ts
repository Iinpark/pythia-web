import { useQuery } from '@tanstack/react-query';
import fetchLaunchDetails from '../queryFns/fetchLaunchDetails';

const queryLaunchDetails = (launchId: string) => {
  const result = useQuery({
    queryKey: ['launchDetails', launchId],
    queryFn: () => fetchLaunchDetails(launchId),
    staleTime: 1000 * 60 * 5,
  });

  return result;
};

export default queryLaunchDetails;
