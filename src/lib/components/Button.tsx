import React from 'react';
import styled from 'styled-components';
import { Typography } from '..';
import colorsList, { Colors } from '../theme/colors';

interface StyledButtonProps{
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonType = 'primary' | 'secondary' | 'terciary' | 'error' | 'success';
type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

export interface IButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;

  onClick?: any;

  children?: any;
}

const getBackgroundColor = ({type, variant}: StyledButtonProps): string => {
  if(variant === "outlined" || variant === "text") return colorsList.transparent;
  
  if(!type) return colorsList.primary;

  return colorsList[type];
}

const getBorderColor = ({type, variant}: StyledButtonProps): string => {
  if(variant === "outlined" && type) return colorsList[type];
  
  if(variant === "outlined" && !type) return colorsList.primary;

  return colorsList.transparent;
}

const getHoverBackgroundColor = ({type, variant}: StyledButtonProps): string => {
  if(variant === 'outlined' || variant === 'text') return colorsList.lightBlue;

  switch(type){
    case 'primary': return colorsList.secondary;
    case 'secondary': return colorsList.terciary;
    default: return colorsList.terciary;
  }
}

const getColor = ({type, variant}: StyledButtonProps): Colors => {
  if((variant === "outlined" || variant === "text") && type) return type;

  return 'white';
}

const getSize = ({size}: StyledButtonProps) => {
  const SMALL_SIZE = '6px 20px';
  const MEDIUM_SIZE = '12px 40px';
  const LARGE_SIZE = '16px 50px';

  switch(size){
    case 'small':return SMALL_SIZE;
    case 'medium': return MEDIUM_SIZE;
    case 'large': return LARGE_SIZE;
    default: return MEDIUM_SIZE;
  }
}

const StyledButton = styled.span<StyledButtonProps>`
  text-align: center;
  padding: ${getSize};
  margin: 5px;

  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
  border-radius: 5px; 
  transition: .5s;
  cursor: pointer;

  text-decoration: none;

  ${({variant}) => {
    switch(variant){
      case 'text':
        return`
          border: none;
        `;
    }
  }}

  &:hover{
    background-color: ${getHoverBackgroundColor};
  }
`;

const Button = ({ children, ...props }: IButtonProps) => {

  return (
    <StyledButton {...props}><Typography type="button" color={getColor(props)}>{children}</Typography></StyledButton>
  )
};

export default Button;