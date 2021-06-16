import { PermissionsType } from "../types/permissions";
export declare const intersect: (a: any, b: any) => any[];
export declare const STORAGE_SESSION_KEY = "@VLAB_STORAGE_SESSION";
export declare const hasPermission: (permission: "anamneseForm" | "autoRecording" | "autojoin" | "cameraRequired" | "chatEnabled" | "commandCenter" | "conferenceRoom" | "downloadVideoReportEnabled" | "jwtRequired" | "manageOrganizations" | "schedule" | "sendAgreement" | "shareLink" | "videoReport" | "waitingList" | PermissionsType[]) => boolean;
