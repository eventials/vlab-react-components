import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import colors from '../theme/colors';
import VlabLogo from './VlabLogo';

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
    z-index: 9999;

    .hamburger{
        position: absolute;
        left: 30px;
        top: 20px;

        color: ${colors.white};
        font-size: 14pt;
    }
`;;

interface ITopbar {
    hamburgerAction?: any;
    collapsed?: boolean;
}

const Topbar = ({ hamburgerAction, collapsed }: ITopbar) => {
    const [centralize, setCentralize] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', handleCentralize);
        handleCentralize();
        return () => window.removeEventListener('resize', handleCentralize);
    }, []);

    const handleCentralize = () => {
        setCentralize(window.innerWidth < 768);
    }

    return (
        <StyledTopbar centralize={centralize || collapsed}>
            <VlabLogo size="small" />
            {centralize && (
                <MenuOutlined onClick={hamburgerAction} className="hamburger" />
            )}
        </StyledTopbar>
    );
};

export default Topbar;
