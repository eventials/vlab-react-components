import React from 'react';
import Icon from '@ant-design/icons';

import { ReactComponent as CameraSVG } from './camera.svg';
import { ReactComponent as CommandCenterSVG } from './command-center.svg';
import { ReactComponent as FilterSVG } from './filter.svg';
import { ReactComponent as HamburgerSVG } from './hamburger.svg';
import { ReactComponent as UltrasoundSVG } from './ultrassom.svg';
import { ReactComponent as UserSVG } from './user.svg';
import { ReactComponent as VideoReportSVG } from './video-report.svg';
import styled from 'styled-components';
import colors from '../theme/colors';

type CustomIconSize = "small" | "medium" | "large" | "custom";

export interface ICustomIcon {
    size?: CustomIconSize;
    customSize?: number;
    style?: any;
    className?: string;
    onClick?: Function;
}

const StyledIcon = styled(Icon)<ICustomIcon>`
    padding: 8px;
    border-radius: 50%;
    transition: .5s;
    

    ${({onClick}) => onClick && `
        cursor: pointer;
        
        &:hover{
            opacity: .7;
        }
    `}
`;

const CustomIcon = ({ size, customSize, style, ...props }: ICustomIcon) => {

    const getFontSize = ({ size, customSize }: ICustomIcon) => {
        switch (size) {
            case "small":
                return '24px';
            case "medium":
                return '32px';
            case "large":
                return '64px';
            case "custom":
                if (customSize) return `${customSize}px`;
                throw new Error("Custom size icon must have a customSize param");
            default:
                return '24px';
        }
    }

    const mergedStyles = { color: colors.secondary, fontSize: getFontSize({ size, customSize }), ...style };

    return (<StyledIcon {...props as any} style={mergedStyles} />)
};



export const CameraIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={CameraSVG} />

export const CommandCenterIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={CommandCenterSVG} />

export const FilterIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={FilterSVG} />

export const HamburgerIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={HamburgerSVG} />

export const UltrasoundIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={UltrasoundSVG} />

export const UserIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={UserSVG} />

export const VideoReportIcon = (props: ICustomIcon) => <CustomIcon {...props as any} component={VideoReportSVG} />