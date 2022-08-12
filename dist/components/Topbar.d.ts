interface ITopbar {
    hamburgerAction?: any;
    collapsed?: boolean;
    hideHamburger?: boolean;
}
declare const Topbar: ({ hamburgerAction, collapsed, hideHamburger }: ITopbar) => JSX.Element;
export default Topbar;
