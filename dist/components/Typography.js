import React from "react";
import styled from "styled-components";
import colorsList from "../theme/colors";
import typographyList from "../theme/typography";
import "../theme/typography.css";
const StyledTypography = styled.span ``;
const DEFAULT_TYPOGRAPHY = "body1";
const DEFAULT_COLOR = "darkGray";
const getTypographyType = (type, weight) => {
    let selectedTypography = typographyList[DEFAULT_TYPOGRAPHY];
    if (type && typographyList[type]) {
        selectedTypography = typographyList[type];
    }
    if (weight) {
        selectedTypography.fontWeight = weight;
    }
    // if(!typographyList[type]){
    //     throw new Error(`Invalid typography type: ${type}!`);
    // }
    return selectedTypography;
};
const getColor = (color) => {
    if (!color || !colorsList[color])
        return colorsList[DEFAULT_COLOR];
    // if(!colorsList[color]){
    //     throw new Error(`Invalid color type: ${color}!`);
    // }
    return colorsList[color];
};
const Typography = ({ type, color, weight, children, className, }) => (React.createElement(StyledTypography, { className: `vlab-typography ${className}`, style: {
        ...getTypographyType(type, weight),
        color: getColor(color),
    } }, children));
export default Typography;
