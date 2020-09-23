import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import VlabLogo from './VlabLogo';
import { HamburgerIcon, UserIcon } from '../icons';
import { Popover } from 'antd';
import UserMenu from './UserMenu';

interface StyledTopbarProps {
    centralize?: boolean;
}

const StyledTopbar = styled.header<StyledTopbarProps>`
    display: flex;
    position: fixed;
    width: 100%;
    background-color: ${colors.darkBackground};
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ centralize }) => centralize ? 'center' : 'flex-start'};
    padding: 0px 30px;
    z-index: 999;

    .hamburger-icon{
        position: absolute;
        left: 30px;
        top: 10px;

        color: ${colors.white};
    }

    .user-icon{
        position: absolute;
        right: 30px;
        top: 10px;

        color: ${colors.secondary};
    }
`;

interface ITopbar {
    hamburgerAction?: any;
    collapsed?: boolean;
}

const Topbar = ({ hamburgerAction, collapsed }: ITopbar) => {
    const [isMobile, setIsMobile] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', handleCentralize);
        handleCentralize();
        return () => window.removeEventListener('resize', handleCentralize);
    }, []);

    const handleCentralize = () => {
        setIsMobile(window.innerWidth < 768);
    }

    const handleOpenPopover = () => {
        setOpenPopover(true);
    }

    const handleClosePopover = () => {
        setOpenPopover(false);
    }

    return (
        <StyledTopbar centralize={isMobile || collapsed}>
            <VlabLogo size="small" />
            {isMobile && (
                <HamburgerIcon size="small" onClick={hamburgerAction} className="hamburger-icon" />
            )}
            <Popover
                placement="bottom"
                content={
                    <UserMenu
                        arrowLeftClick={handleClosePopover}
                    />}
                trigger="click"
                visible={openPopover}
                onVisibleChange={(visible) => setOpenPopover(visible)}
            >
                <UserIcon size="small" className="user-icon" onClick={handleOpenPopover} />
            </Popover>
        </StyledTopbar>
    );
};

export default Topbar;
