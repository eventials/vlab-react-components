const STORAGE_NAME = '@VLAB_AUTH_TOKEN';
const DOMAIN = 'domain=.vlab.live'
const TOKEN_TIME_TO_EXPIRE = 1/4;

const authStorage = {

    has: () => !!authStorage.get(),

    store: (token: string) => {
        writeCookie(STORAGE_NAME, token, TOKEN_TIME_TO_EXPIRE);
    },

    get: () => readCookie(STORAGE_NAME),

    getParsed: () => {
        const token = authStorage.get();
        return parseJwt(token);
    },

    clear: () => {
        deleteCookie(STORAGE_NAME)
    }
};

export const readCookie = (name: string) => {
    let result = null;
    const myCookie = document.cookie + ";";
    const searchName = name + "=";
    let start = myCookie.indexOf(searchName);
    let end;

    if (start != -1) {
        start += searchName.length;
        end = myCookie.indexOf(";", start);
        result = myCookie.substring(start, end);
    }
    console.log("readCookie", {name, result});
    return result;
};

export const writeCookie = (name: string, value: string, days: number) => {
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + (days * 24 * 60 * 60) );
    document.cookie = `${name}=${value}; expires=${expDate.toUTCString()}; ${DOMAIN}`;
}

export const deleteCookie = (name: string) => {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

export const parseJwt = (token: string | null): any => {
    if (!token) return;

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export default authStorage;