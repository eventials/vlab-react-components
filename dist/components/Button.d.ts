/// <reference types="react" />
import { TooltipProps } from "antd/lib/tooltip";
declare type ButtonType = "primary" | "secondary" | "terciary" | "error" | "success" | "lightGray";
declare type ButtonVariant = "contained" | "outlined" | "text";
declare type ButtonSize = "small" | "medium" | "large";
export interface IButtonProps {
    type?: ButtonType;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onlyIcon?: boolean;
    leftIcon?: any;
    rightIcon?: any;
    tooltipProps?: TooltipProps;
    onClick?: any;
    children?: any;
}
declare const Button: ({ children, tooltipProps, leftIcon, rightIcon, onlyIcon, ...props }: IButtonProps) => JSX.Element;
export default Button;
