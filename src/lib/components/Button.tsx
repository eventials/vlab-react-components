import { Spin } from "antd";
import { TooltipProps } from "antd/lib/tooltip";
import React from "react";
import styled from "styled-components";
import { Tooltip, Typography } from "..";
import colorsList, { Colors } from "../theme/colors";
import { LoadingOutlined } from "@ant-design/icons";

interface StyledButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  onlyIcon?: boolean;
}

type ButtonType =
  | "primary"
  | "secondary"
  | "terciary"
  | "error"
  | "success"
  | "lightGray";

type ButtonVariant = "contained" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";

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

const getBackgroundColor = ({
  type,
  variant,
  disabled,
}: StyledButtonProps): string => {
  if (disabled) return colorsList.lightGray;

  if (variant === "outlined" || variant === "text")
    return colorsList.transparent;

  if (!type) return colorsList.primary;

  return colorsList[type];
};

const getBorderColor = ({
  type,
  variant,
  disabled,
}: StyledButtonProps): string => {
  if (disabled) return colorsList.lightGray;

  if (variant === "outlined" && type) return colorsList[type];

  if (variant === "outlined" && !type) return colorsList.primary;

  return colorsList.transparent;
};

const getHoverBackgroundColor = ({
  type,
  variant,
  disabled,
}: StyledButtonProps): string => {
  if (disabled) return colorsList.lightGray;

  if (variant === "outlined" || variant === "text") return colorsList.lightBlue;

  switch (type) {
    case "primary":
      return colorsList.secondary;
    case "secondary":
      return colorsList.terciary;
    default:
      return colorsList.terciary;
  }
};

const getColor = ({ type, variant, disabled }: StyledButtonProps): Colors => {
  if (disabled || type === "lightGray") return colorsList.regentGray;
  if ((variant === "outlined" || variant === "text") && type) return type;

  return "white";
};

const getSize = ({ size }: StyledButtonProps) => {
  const SMALL_SIZE = `6px 20px`;
  const MEDIUM_SIZE = `12px 40px`;
  const LARGE_SIZE = `16px 50px`;

  switch (size) {
    case "small":
      return SMALL_SIZE;
    case "medium":
      return MEDIUM_SIZE;
    case "large":
      return LARGE_SIZE;
    default:
      return MEDIUM_SIZE;
  }
};

const StyledButton = styled.span<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${getSize};
  margin: 5px;

  ${({ onlyIcon }) => (onlyIcon ? "padding-right: 0; padding-left: 0;" : "")};

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;

  text-decoration: none;

  ${({ variant }) => {
    switch (variant) {
      case "text":
        return `
          border: none;
        `;
    }
  }}

  .left-icon {
    margin-right: 16px;
  }

  .right-icon {
    margin-left: 16px;
  }

  .ant-spin {
    color: ${getColor};
    margin-right: 16px;
  }

  &:hover {
    background-color: ${getHoverBackgroundColor};
  }
`;

const Button = ({
  children,
  tooltipProps,
  leftIcon,
  rightIcon,
  onlyIcon,
  ...props
}: IButtonProps) => {
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 24, color: colorsList[getColor(props)] }}
      spin
    />
  );

  return (
    <Tooltip
      {...(tooltipProps as TooltipProps)}
      color={tooltipProps?.color ? colorsList[tooltipProps.color] : null}
    >
      <StyledButton
        {...props}
        onlyIcon={onlyIcon}
        onClick={props.disabled || props.loading ? () => {} : props.onClick}
      >
        {!props.loading && <div className="left-icon">{leftIcon}</div>}
        <Typography type="button" color={getColor(props)}>
          {props.loading && (
            <Spin
              wrapperClassName="loading"
              spinning={props.loading}
              indicator={antIcon}
              delay={500}
            ></Spin>
          )}
          {children}
        </Typography>
        {!props.loading && <div className="right-icon">{rightIcon}</div>}
      </StyledButton>
    </Tooltip>
  );
};

export default Button;
