import React from "react";
import styled from "styled-components";
import colorsList, { Colors } from "../theme/colors";
import typographyList, { TypographyTypes } from "../theme/typography";
import "../theme/typography.css";

const StyledTypography = styled.span``;

export interface ITypography {
  type?: TypographyTypes;
  className?: string;
  color?: Colors;
  children: any;
}

const DEFAULT_TYPOGRAPHY = "body1";
const DEFAULT_COLOR = "darkGray";

const getTypographyType = (type: TypographyTypes | undefined) => {
  if (!type || !typographyList[type]) return typographyList[DEFAULT_TYPOGRAPHY];

  // if(!typographyList[type]){
  //     throw new Error(`Invalid typography type: ${type}!`);
  // }
  return typographyList[type];
};

const getColor = (color: Colors | undefined) => {
  if (!color || !colorsList[color]) return colorsList[DEFAULT_COLOR];

  // if(!colorsList[color]){
  //     throw new Error(`Invalid color type: ${color}!`);
  // }
  return colorsList[color];
};

const Typography = ({ type, color, children, className }: ITypography) => (
  <StyledTypography
    className={`vlab-typography ${className}`}
    style={{ ...getTypographyType(type), color: getColor(color) }}
  >
    {children}
  </StyledTypography>
);

export default Typography;
