import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches';
import DetailView from '@widgets/DetailView/Index';
import fetchLaunchDetails from '@shared/api/queryFns/fetchLaunchDetails';
import LoadingState from '@widgets/DetailView/ui/LoadingState';
import { stringAssembler } from '@shared/utils';

type routeParams = {
  params: { launchid: string };
};
export async function generateMetadata({
  params,
}: routeParams): Promise<Metadata> {
  const data = await await fetchLaunchDetails(params.launchid);
  const tokens = {
    name: data.vehicle.name,
    rocketName: data.vehicle.name,
    providerName: data.provider.name,
    t0: new Date(data.t0).toLocaleString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  };
  return {
    title: stringAssembler('{name} Launch Live Stream – {t0}', tokens),
    description: stringAssembler(
      `Live stream of the {providerName} {rocketName} rocket launch. Watch online on {t0}.`,
      tokens
    ),

    openGraph: {
      images: [data.image],
      description: stringAssembler(
        'Watch the live stream of the {providerName} {rocketName} rocket launch on {t0}.',
        tokens
      ),
    },
  };
}
export async function generateStaticParams() {
  const launches = await fetchUpcomingLaunches();

  return launches.map((launch) => ({ launchid: launch.id }));
}

const Page = async ({ params }: routeParams) => {
  // const { data, status, error } = queryLaunchDetails(params.launchid);
  // const launchDetails = data! || {};
  const data = await fetchLaunchDetails(params.launchid);

  if (!Object.keys(data).length) return <LoadingState />;
  return <DetailView selectedLaunch={data} />;
};

export default Page;
