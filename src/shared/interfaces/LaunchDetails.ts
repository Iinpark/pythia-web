import { LaunchData, SerializedLaunchData } from './index';

export interface Update {
  id: number;
  profileImage: string;
  comment: string;
  infoUrl: string;
  createdBy: string;
  createdBn: string;
}
export interface InfoURL {
  priority: number;
  title: string;
  description: string;
  featureImage: string;
  url: string;
}

export type VideoSource = 'youtube' | 'unknown';
export interface vidURL {
  priority: number;
  title: string;
  description: string;
  featureImage: string;
  url: string;
  source: VideoSource;
}
export interface MissionPatch {
  id: number;
  name: string;
  priority: number;
  imageUrl: string;
  agency: Agency;
}
export interface Agency {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface LaunchDetails extends LaunchData {
  flightclubUrl: string;
  spacexApiId: string;
  updates: Update[];
  infoURLs: InfoURL[];
  vidURLs: vidURL[];
  missionPatches: MissionPatch[];
}

export interface SerializedInfoURL {
  priority: number;
  title: string;
  description: string;
  feature_image: string;
  url: string;
}
export interface SerializedUpdate {
  id: number;
  profile_image: string;
  comment: string;
  infoUrl: string;
  created_by: string;
  created_on: string;
}
export interface SerializedVidURL {
  priority: number;
  title: string;
  description: string;
  feature_image: string;
  url: string;
}

export interface SerializedMissionPatch {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: Agency;
}
export interface SerializedLaunchDetails extends SerializedLaunchData {
  flightclub_url: string;
  r_spacex_api_id: string;
  updates: SerializedUpdate[];
  infoURLs: SerializedInfoURL[];
  vidURLs: SerializedVidURL[];
  mission_patches: SerializedMissionPatch[];
}
