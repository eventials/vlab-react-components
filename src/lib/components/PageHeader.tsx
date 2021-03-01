import React from 'react';
import { PageHeader as AntdPageHeader } from 'antd';
import { PageHeaderProps } from 'antd/lib/page-header';
import colorsList from '../theme/colors';
import styled from 'styled-components';
import Typography from './Typography';

interface IPageHeader extends PageHeaderProps {
    children?: any
    main?: boolean;
}

const StyledPageHeader = styled(AntdPageHeader)`
    width: 100%;
    &.vlab-page-header-main{
        background-color: ${colorsList.extraLightBackground};
        padding: 44px 60px;
    }
`;

const PageHeader = (props: IPageHeader) => {

    const handleBack = () => {
        window.history.back()
    }

    return (
        <StyledPageHeader
            className={`vlab-page-header ${props.main ? "vlab-page-header-main" : ""}`}
            title={props.main ? <Typography type="heading2" color="primary">{props.title}</Typography> : props.title}
            subTitle={props.main ? <Typography type="caption" color="darkGray">{props.subTitle}</Typography> : props.subTitle}
            onBack={props.onBack || handleBack}
            extra={props.extra}
            footer={props.footer}
        >
            {props.children}
        </StyledPageHeader>
    )
};

export default PageHeader;
