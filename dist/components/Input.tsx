import React from 'react';
import { Input as AntdInput } from 'antd';
import styled from 'styled-components';
import colors from '../theme/colors';
import { InputProps, PasswordProps } from 'antd/lib/input';


const { Password: AntdPassword } = AntdInput;

const StyledInput = styled(AntdInput)`
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
    background-color: ${colors.transparent};

    .ant-input{
        background-color: ${colors.transparent}; 
    }

    ::placeholder{
        color: ${colors.regentGray} !important;
    }
`;

const StyledPassword = styled(AntdPassword)`
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
    background-color: ${colors.transparent};

    .ant-input{
        background-color: ${colors.transparent}; 
    }

    input::placeholder{
        color: ${colors.regentGray} !important;
    }
`;


const Input = (props: InputProps) => <StyledInput {...props} />;
const Password = (props: PasswordProps) => <StyledPassword {...props} />;

export default Input;
export { Input, Password };