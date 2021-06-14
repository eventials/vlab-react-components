import { PermissionsType } from "../types/permissions";
export declare const intersect: (a: any, b: any) => any[];
export declare const hasPermission: (permission: "access_control" | "manage_profile" | PermissionsType[]) => boolean;
