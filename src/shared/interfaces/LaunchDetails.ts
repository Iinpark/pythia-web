import { LaunchData } from './index';

interface Update {
  id: number;
  profile_image: string;
  comment: string;
  info_url: string;
  created_by: string;
  created_on: string;
}
interface InfoURl {
  priority: number;
  title: string;
  description: string;
  feature_image: string;
  url: string;
}
interface vidURl {
  priority: number;
  title: string;
  description: string;
  feature_image: string;
  url: string;
}
interface MissionPatch {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: Agency;
}
interface Agency {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface LaunchDetails extends LaunchData {
  flightclub_url: string;
  r_spacex_api_id: string;
  updates: Update[];
  infoURLs: InfoURl[];
  vidURLs: vidURl[];
  mission_patches: MissionPatch[];
}
