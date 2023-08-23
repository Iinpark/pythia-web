import { MetadataRoute } from 'next';
import fetchUpcomingLaunches from '@shared/api/queryFns/fetchUpcomingLaunches.ts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const launches = await fetchUpcomingLaunches();
  const host = process.env.APP_HOST;
  const launchRoutes = launches.map((launch) => ({
    url: `${host}/launch/${launch.id}`,
    lastModified: new Date(launch.updated),
  }));

  return [
    {
      url: `${host}/`,
      lastModified: new Date(),
    },
    ...launchRoutes,
  ];
}
