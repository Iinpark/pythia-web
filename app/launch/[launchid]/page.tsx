import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches';
import DetailView from '@widgets/DetailView/Index';
import fetchLaunchDetails from '@shared/api/queryFns/fetchLaunchDetails';

type routeParams = {
  params: { launchid: string };
};

export async function generateStaticParams() {
  const launches = await fetchUpcomingLaunches();

  return launches.map((launch) => ({ launchid: launch.id }));
}

const Page = async ({ params }: routeParams) => {
  // const { data, status, error } = queryLaunchDetails(params.launchid);
  // const launchDetails = data! || {};
  const data = await fetchLaunchDetails(params.launchid);

  if (!Object.keys(data).length) return <div>Loading...</div>;
  return <DetailView selectedLaunch={data} />;
};

export default Page;
