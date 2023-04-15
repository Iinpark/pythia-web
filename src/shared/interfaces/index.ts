import { LaunchDetails } from './LaunchDetails';

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

export interface LaunchData {
  id: string;
  name: string;
  image: string;
  provider: {
    id: number;
    name: string;
    slug: string;
  };
  vehicle: {
    id: number;
    name: string;
    company_id: number;
    slug: string;
  };
  pad: {
    id: number;
    name: string;
    location: {
      id: number;
      name: string;
      state: string;
      statename: string;
      country: string;
      slug: string;
    };
  };
  mission: {
    id: number;
    name: string;
    description: string;
  };
  mission_description: string;
  win_open: string | null;
  t0: string;
  win_close: string | null;
  tags: {
    id: number;
    text: string;
  }[];
  weather_summary: string | null;
  weather_temp: number | null;
}

export interface SerializedLaunchData {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  probability: null;
  holdreason: string;
  failreason: string;
  hashtag: null;
  launch_service_provider: {
    id: number;
    url: string;
    name: string;
    type: string;
  };
  rocket: {
    id: number;
    configuration: {
      id: number;
      url: string;
      name: string;
      family: string;
      full_name: string;
      variant: string;
    };
  };
  mission: {
    id: number;
    name: string;
    description: string;
    launch_designator: null;
    type: string;
    orbit: {
      id: number;
      name: string;
      abbrev: string;
    };
  };
  pad: {
    id: number;
    url: string;
    agency_id: null;
    name: string;
    info_url: null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
      id: number;
      url: string;
      name: string;
      country_code: string;
      map_image: string;
      timezone_name: string;
      total_launch_count: number;
      total_landing_count: number;
    };
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
  };
  webcast_live: boolean;
  image: string;
  infographic: null;
  program: [];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
}

export type { LaunchDetails };
