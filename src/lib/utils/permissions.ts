import { PermissionsType } from "../types/permissions";

export const intersect = (a: any, b: any): Array<any> => {
    return a.filter(Set.prototype.has, new Set(b));
}

export const hasPermission = (permission: PermissionsType | Array<PermissionsType>) => {
    const tokenPermissions: Array<PermissionsType> = ['access_control', 'manage_profile'];

    if(typeof permission === "string"){
        return tokenPermissions.includes(permission);
    }

    return intersect(permission, tokenPermissions).length > 0;
}