interface ITopbar {
    hamburgerAction?: any;
    collapsed?: boolean;
    hideHamburger?: boolean;
    logoSrc: string;
}
declare const Topbar: ({ hamburgerAction, collapsed, hideHamburger, logoSrc }: ITopbar) => JSX.Element;
export default Topbar;
