declare type CustomIconSize = "small" | "medium" | "large" | "custom";
export interface ICustomIcon {
    size?: CustomIconSize;
    customSize?: number;
    style?: any;
    className?: string;
    onClick?: Function;
}
export declare const CameraIcon: (props: ICustomIcon) => JSX.Element;
export declare const CommandCenterIcon: (props: ICustomIcon) => JSX.Element;
export declare const FilterIcon: (props: ICustomIcon) => JSX.Element;
export declare const HamburgerIcon: (props: ICustomIcon) => JSX.Element;
export declare const UltrasoundIcon: (props: ICustomIcon) => JSX.Element;
export declare const UserIcon: (props: ICustomIcon) => JSX.Element;
export declare const VideoReportIcon: (props: ICustomIcon) => JSX.Element;
export {};
