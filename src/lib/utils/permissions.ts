import { PermissionsType } from "../types/permissions";
import { readCookie } from "./authStorage";

export const intersect = (a: any, b: any): Array<any> => {
  return a.filter(Set.prototype.has, new Set(b));
};

export const STORAGE_SESSION_KEY = "@VLAB_STORAGE_SESSION";

const FEATURE_FLAGS: PermissionsType[] = [
  "anamneseForm",
  "autoRecording",
  "autojoin",
  "cameraRequired",
  "chatEnabled",
  "commandCenter",
  "conferenceRoom",
  "downloadVideoReportEnabled",
  "jwtRequired",
  "manageOrganizations",
  "schedule",
  "sendAgreement",
  "shareLink",
  "videoReport",
  "waitingList",
];

const createTokenPermission = () => {
  const savedState = readCookie(STORAGE_SESSION_KEY);
  const permissions: PermissionsType[] = [];

  if (savedState) {
    const savedStateObject = JSON.parse(savedState || `{}`);

    if (savedStateObject.settings) {
      FEATURE_FLAGS.forEach((flag) => {
        if (savedStateObject.settings[flag] === "true") {
          permissions.push(flag);
        }
      });
    }
  }

  return permissions;
};

export const hasPermission = (
  permission: PermissionsType | Array<PermissionsType>
) => {
  const tokenPermissions: Array<PermissionsType> = createTokenPermission();

  if (typeof permission === "string") {
    return tokenPermissions.includes(permission);
  }

  return intersect(permission, tokenPermissions).length > 0;
};
