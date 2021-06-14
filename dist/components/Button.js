import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { Tooltip, Typography } from "..";
import colorsList from "../theme/colors";
import { LoadingOutlined } from "@ant-design/icons";
const getBackgroundColor = ({ type, variant, disabled, }) => {
    if (disabled)
        return colorsList.lightGray;
    if (variant === "outlined" || variant === "text")
        return colorsList.transparent;
    if (!type)
        return colorsList.primary;
    return colorsList[type];
};
const getBorderColor = ({ type, variant, disabled, }) => {
    if (disabled)
        return colorsList.lightGray;
    if (variant === "outlined" && type)
        return colorsList[type];
    if (variant === "outlined" && !type)
        return colorsList.primary;
    return colorsList.transparent;
};
const getHoverBackgroundColor = ({ type, variant, disabled, }) => {
    if (disabled)
        return colorsList.lightGray;
    if (variant === "outlined" || variant === "text")
        return colorsList.lightBlue;
    switch (type) {
        case "primary":
            return colorsList.secondary;
        case "secondary":
            return colorsList.terciary;
        default:
            return colorsList.terciary;
    }
};
const getColor = ({ type, variant, disabled }) => {
    if (disabled || type === "lightGray")
        return colorsList.regentGray;
    if ((variant === "outlined" || variant === "text") && type)
        return type;
    return "white";
};
const getSize = ({ size }) => {
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
const StyledButton = styled.span `
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
const Button = ({ children, tooltipProps, leftIcon, rightIcon, onlyIcon, ...props }) => {
    const antIcon = (React.createElement(LoadingOutlined, { style: { fontSize: 24, color: colorsList[getColor(props)] }, spin: true }));
    return (React.createElement(Tooltip, Object.assign({}, tooltipProps, { color: tooltipProps?.color ? colorsList[tooltipProps.color] : null }),
        React.createElement(StyledButton, Object.assign({}, props, { onlyIcon: onlyIcon, onClick: props.disabled || props.loading ? () => { } : props.onClick }),
            !props.loading && React.createElement("div", { className: "left-icon" }, leftIcon),
            React.createElement(Typography, { type: "button", color: getColor(props) },
                props.loading && (React.createElement(Spin, { wrapperClassName: "loading", spinning: props.loading, indicator: antIcon, delay: 500 })),
                children),
            !props.loading && React.createElement("div", { className: "right-icon" }, rightIcon))));
};
export default Button;
