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
const StyledIcon = styled(Icon) `
    padding: 8px;
    border-radius: 50%;
    transition: .5s;
    

    ${({ onClick }) => onClick && `
        cursor: pointer;
        
        &:hover{
            opacity: .7;
        }
    `}
`;
const CustomIcon = ({ size, customSize, style, ...props }) => {
    const getFontSize = ({ size, customSize }) => {
        switch (size) {
            case "small":
                return '24px';
            case "medium":
                return '32px';
            case "large":
                return '64px';
            case "custom":
                if (customSize)
                    return `${customSize}px`;
                throw new Error("Custom size icon must have a customSize param");
            default:
                return '24px';
        }
    };
    const mergedStyles = { color: colors.secondary, fontSize: getFontSize({ size, customSize }), ...style };
    return (React.createElement(StyledIcon, Object.assign({}, props, { style: mergedStyles })));
};
export const CameraIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: CameraSVG }));
export const CommandCenterIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: CommandCenterSVG }));
export const FilterIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: FilterSVG }));
export const HamburgerIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: HamburgerSVG }));
export const UltrasoundIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: UltrasoundSVG }));
export const UserIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: UserSVG }));
export const VideoReportIcon = (props) => React.createElement(CustomIcon, Object.assign({}, props, { component: VideoReportSVG }));
