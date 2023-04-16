import { SerializedLaunchDetails, LaunchDetails } from '../../interfaces';
import {
  SerializedUpdate,
  Update,
  SerializedInfoURL,
  InfoURL,
  SerializedVidURL,
  vidURL,
  MissionPatch,
  SerializedMissionPatch,
} from '../../interfaces/LaunchDetails';
import { LaunchDataAdapter } from './index.js';

export function UpdateAdapter(serializedUpdate: SerializedUpdate): Update {
  return {
    id: serializedUpdate.id,
    profileImage: serializedUpdate.profile_image,
    comment: serializedUpdate.comment,
    infoUrl: serializedUpdate.infoUrl,
    createdBy: serializedUpdate.created_by,
    createdBn: serializedUpdate.created_on,
  };
}

export function InfoURLAdapter(serializedInfoURL: SerializedInfoURL): InfoURL {
  return {
    priority: serializedInfoURL.priority,
    title: serializedInfoURL.title,
    description: serializedInfoURL.description,
    featureImage: serializedInfoURL.feature_image,
    url: serializedInfoURL.url,
  };
}

export function vidURLAdapter(serializedVidURL: SerializedVidURL): vidURL {
  return {
    priority: serializedVidURL.priority,
    title: serializedVidURL.title,
    description: serializedVidURL.description,
    featureImage: serializedVidURL.feature_image,
    url: serializedVidURL.url,
  };
}

export function MissionPatchAdapter(
  serializedMissionPatch: SerializedMissionPatch
): MissionPatch {
  return {
    id: serializedMissionPatch.id,
    name: serializedMissionPatch.name,
    priority: serializedMissionPatch.priority,
    imageUrl: serializedMissionPatch.image_url,
    agency: serializedMissionPatch.agency,
  };
}

function LaunchDetailsAdapter(
  serializedDetails: SerializedLaunchDetails
): LaunchDetails {
  const LaunchData = LaunchDataAdapter(serializedDetails);

  return {
    ...LaunchData,
    flightclubUrl: serializedDetails.flightclub_url,
    spacexApiId: serializedDetails.r_spacex_api_id,
    updates: serializedDetails.updates.map(UpdateAdapter),
    infoURLs: serializedDetails.infoURLs.map(InfoURLAdapter),
    vidURLs: serializedDetails.vidURLs.map(vidURLAdapter),
    missionPatches: serializedDetails.mission_patches.map(MissionPatchAdapter),
  };
}

export default LaunchDetailsAdapter;
