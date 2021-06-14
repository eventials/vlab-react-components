declare const authStorage: {
    has: () => boolean;
    store: (token: string) => void;
    get: () => string | null;
    getParsed: () => any;
    clear: () => void;
};
export declare const readCookie: (name: string) => string | null;
export declare const writeCookie: (name: string, value: string, days: number) => void;
export declare const deleteCookie: (name: string) => void;
export declare const parseJwt: (token: string | null) => any;
export default authStorage;
