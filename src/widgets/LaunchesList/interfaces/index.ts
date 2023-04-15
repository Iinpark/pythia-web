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
	launch_description: string;
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
