import fetcher from '../fetcher';
import { SerializedLaunchData, LaunchData } from '../../interfaces';

const fetchUpcomingLaunches = async (): Promise<Array<LaunchData>> => {
  const response = await fetcher(`/launch/upcoming/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data.results.map((i: SerializedLaunchData): LaunchData => {
    return {
      id: i.id,
      name: i.name,
      image: i.image,
      provider: {
        id: i.launch_service_provider.id,
        name: i.launch_service_provider.name,
        slug: i.launch_service_provider.type,
      },
      vehicle: {
        id: i.rocket.configuration.id,
        name: i.rocket.configuration.name,
        company_id: i.launch_service_provider.id,
        slug: i.rocket.configuration.name,
      },
      pad: {
        id: i.pad.id,
        name: i.pad.name,
        location: {
          id: i.pad.location.id,
          name: i.pad.location.name,
          state: i.pad.location.country_code,
          statename: i.pad.location.name,
          country: i.pad.location.country_code,
          slug: i.pad.location.name,
        },
      },
      mission: {
        id: i?.mission?.id || 0,
        name: i?.mission?.name || '',
        description: i?.mission?.description || '',
      },
      mission_description: i?.mission?.description,
      win_open: i.window_start,
      t0: i.net,
      win_close: i.window_end,
      tags: [],
      weather_summary: null,
      weather_temp: null,
    };
  });
};

export default fetchUpcomingLaunches;
