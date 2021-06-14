import React from 'react';
import { PageHeader as AntdPageHeader } from 'antd';
import colorsList from '../theme/colors';
import styled from 'styled-components';
import Typography from './Typography';
const StyledPageHeader = styled(AntdPageHeader) `
    width: 100%;
    &.vlab-page-header-main{
        background-color: ${colorsList.extraLightBackground};
        padding: 44px 60px;
    }
`;
const PageHeader = (props) => {
    const handleBack = () => {
        window.history.back();
    };
    return (React.createElement(StyledPageHeader, { className: `vlab-page-header ${props.main ? "vlab-page-header-main" : ""}`, title: props.main ? React.createElement(Typography, { type: "heading2", color: "primary" }, props.title) : props.title, subTitle: props.main ? React.createElement(Typography, { type: "caption", color: "darkGray" }, props.subTitle) : props.subTitle, onBack: props.onBack || handleBack, extra: props.extra, footer: props.footer }, props.children));
};
export default PageHeader;
