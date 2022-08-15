export interface IRoute {
    name: any;
    icon?: any;
    path?: string;
    show?: boolean;
}
export interface IProducts {
    title: any;
    routes: Array<IRoute>;
}
export interface IWithMenu {
    sections?: Array<IProducts>;
    onRouteClick?: (path?: string) => void;
    logoSrc?: string;
    children?: any;
}
declare const WithMenu: ({ logoSrc, children, sections, onRouteClick }: IWithMenu) => JSX.Element;
export default WithMenu;
