/// <reference types="react" />
export interface IUserMenu {
    arrowLeftClick: any;
    permissions?: Array<string>;
}
export declare const UserMenu: ({ arrowLeftClick, permissions }: IUserMenu) => JSX.Element;
export default UserMenu;
