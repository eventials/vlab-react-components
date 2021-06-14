export const intersect = (a, b) => {
    return a.filter(Set.prototype.has, new Set(b));
};
export const hasPermission = (permission) => {
    const tokenPermissions = ['access_control', 'manage_profile'];
    if (typeof permission === "string") {
        return tokenPermissions.includes(permission);
    }
    return intersect(permission, tokenPermissions).length > 0;
};
