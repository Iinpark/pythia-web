import { useQuery } from '@tanstack/react-query';
import fetchUpcomingLaunches from '../queryFns/fetchUpcomingLaunches';

const queryUpcomingLaunches = () => {
  const result = useQuery({
    queryKey: ['upcoming'],
    queryFn: fetchUpcomingLaunches,
    staleTime: 1000 * 60 * 5,
  });

  return result;
};

export default queryUpcomingLaunches;
