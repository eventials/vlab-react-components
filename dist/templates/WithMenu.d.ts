export interface IRoute {
    name: any;
    icon?: any;
    path?: string;
}
export interface IProducts {
    title: any;
    routes: Array<IRoute>;
}
export interface IWithMenu {
    sections?: Array<IProducts>;
    onRouteClick?: (path?: string) => void;
    children?: any;
}
declare const WithMenu: ({ children, sections, onRouteClick }: IWithMenu) => JSX.Element;
export default WithMenu;
