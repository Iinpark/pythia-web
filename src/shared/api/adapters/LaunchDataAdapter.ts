import { SerializedLaunchData, LaunchData } from '../../interfaces';

function LaunchDataAdapter(
  serializedLaunchData: SerializedLaunchData
): LaunchData {
  return {
    id: serializedLaunchData.id,
    name: serializedLaunchData.name,
    image: serializedLaunchData.image,
    updated: serializedLaunchData.last_updated,
    provider: {
      id: serializedLaunchData.launch_service_provider.id,
      name: serializedLaunchData.launch_service_provider.name,
      slug: serializedLaunchData.launch_service_provider.type,
    },
    vehicle: {
      id: serializedLaunchData.rocket.configuration.id,
      name: serializedLaunchData.rocket.configuration.name,
      company_id: serializedLaunchData.launch_service_provider.id,
      slug: serializedLaunchData.rocket.configuration.name,
    },
    pad: {
      id: serializedLaunchData.pad.id,
      name: serializedLaunchData.pad.name,
      location: {
        id: serializedLaunchData.pad.location.id,
        name: serializedLaunchData.pad.location.name,
        state: serializedLaunchData.pad.location.country_code,
        statename: serializedLaunchData.pad.location.name,
        country: serializedLaunchData.pad.location.country_code,
        slug: serializedLaunchData.pad.location.name,
      },
    },
    mission: {
      id: serializedLaunchData?.mission?.id || 0,
      name: serializedLaunchData?.mission?.name || '',
      description: serializedLaunchData?.mission?.description || '',
    },
    mission_description: serializedLaunchData?.mission?.description,
    win_open: serializedLaunchData.window_start,
    t0: serializedLaunchData.net,
    win_close: serializedLaunchData.window_end,
    tags: [],
    weather_summary: null,
    weather_temp: null,
  };
}

export default LaunchDataAdapter;
