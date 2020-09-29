import React from 'react';
import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';
import colors from '../theme/colors';
import { SelectProps } from 'antd/lib/select';

const StyledSelect = styled(AntdSelect)`

    .ant-select-selector{
        background-color: ${colors.transparent} !important; 
        border: none !important;
        border-bottom: 1px solid ${colors.lightGray} !important;
    }

`;

const Select = (props: SelectProps<any>) => <StyledSelect {...props} />

export default Select;