import { SerializedLaunchData, LaunchData } from '../interfaces';

const baseUrl = import.meta.env.MODE === 'development' ? 'https://lldev.thespacedevs.com' : 'https://ll.thespacedevs.com' ;

/**
 * @typedef {Object} LaunchData
 * @property {number} id - The ID of the launch
 * @property {string} name - The name of the launch
 * @property {string} image - The image of the rocket going to be launched
 * @property {Object} provider - The provider of the launch
 * @property {number} provider.id - The ID of the provider
 * @property {string} provider.name - The name of the provider
 * @property {string} provider.slug - The slug of the provider
 * @property {Object} vehicle - The vehicle used for the launch
 * @property {number} vehicle.id - The ID of the vehicle
 * @property {string} vehicle.name - The name of the vehicle
 * @property {number} vehicle.company_id - The ID of the company that owns the vehicle
 * @property {string} vehicle.slug - The slug of the vehicle
 * @property {Object} pad - The launch pad used for the launch
 * @property {number} pad.id - The ID of the launch pad
 * @property {string} pad.name - The name of the launch pad
 * @property {Object} pad.location - The location of the launch pad
 * @property {number} pad.location.id - The ID of the location of the launch pad
 * @property {string} pad.location.name - The name of the location of the launch pad
 * @property {string} pad.location.state - The state of the location of the launch pad
 * @property {string} pad.location.statename - The name of the state of the location of the launch pad
 * @property {string} pad.location.country - The country of the location of the launch pad
 * @property {string} pad.location.slug - The slug of the location of the launch pad
 * @property {Array<Object>} mission - The missions of the launch
 * @property {number} mission.id - The ID of the mission
 * @property {string} mission.name - The name of the mission
 * @property {string} mission.description - The description of the mission
 * @property {string} mission_description - The description of the launch mission
 * @property {string} launch_description - The description of the launch
 * @property {string|null} win_open - The opening window of the launch
 * @property {string} t0 - The launch date and time in ISO format
 * @property {string|null} win_close - The closing window of the launch
 * @property {number} tags.id - The ID of the tag
 * @property {string} tags.text - The text of the tag
 * @property {string|null} weather_summary - The summary of the launch weather
 * @property {number|null} weather_temp - The temperature of the launch weather
 */



const fetchUpcomingLaunches = async () : Promise<Array<LaunchData>> => {
  const response = await fetch(`${baseUrl}/2.2.0/launch/upcoming/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

 return data.results.map((i:SerializedLaunchData):LaunchData =>  {
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
    mission:{
      id: i.mission.id,
      name: i.mission.name,
      description: i.mission.description,
    },
    mission_description: i.mission.description,
    launch_description: i.mission.description,
    win_open: i.window_start,
    t0: i.net,
    win_close: i.window_end,
    tags: [],
    weather_summary: null,
    weather_temp: null,
  }
 });
}

export default fetchUpcomingLaunches;
