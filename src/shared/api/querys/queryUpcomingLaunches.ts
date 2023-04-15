import { useQuery } from '@tanstack/react-query';
import fetchUpcomingLaunches from '../queryFns/fetchUpcomingLaunches';

const queryUpcomingLaunches = () => {
  const result = useQuery({
    queryKey: ['upcoming'],
    queryFn: fetchUpcomingLaunches,
  });

  return result;
};

export default queryUpcomingLaunches;
