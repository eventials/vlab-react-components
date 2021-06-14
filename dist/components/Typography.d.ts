/// <reference types="react" />
import { Colors } from "../theme/colors";
import { TypographyTypes } from "../theme/typography";
import "../theme/typography.css";
export interface ITypography {
    type?: TypographyTypes;
    className?: string;
    color?: Colors;
    children: any;
    weight?: number;
}
declare const Typography: ({ type, color, weight, children, className, }: ITypography) => JSX.Element;
export default Typography;
