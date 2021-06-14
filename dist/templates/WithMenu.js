import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Topbar from '../components/Topbar';
import styled from 'styled-components';
import colors from '../theme/colors';
import typography from '../theme/typography';
const { Footer, Sider, Content } = Layout;
const StyledLayout = styled(Layout) `
    min-height: 100vh;

    .vlab-sider{

        .ant-menu-item{
            color: ${colors.primary};
            font-weight: ${typography.body1.fontWeight};
            font-size: ${typography.body1.fontSize}px;
            letter-spacing: ${typography.body1.letterSpacing}px;
        }

        .ant-menu-item-selected{
            background-color: ${colors.extraLightBackground} !important;
            font-weight: 700;
        }
    }
`;
const WithMenu = ({ children, sections, onRouteClick }) => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', handleCentralize);
        handleCentralize();
        return () => window.removeEventListener('resize', handleCentralize);
    }, []);
    const handleCentralize = () => {
        setCollapsed(window.innerWidth < 768);
    };
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const beforeClick = (route) => () => {
        onRouteClick && onRouteClick(route.path);
    };
    return (React.createElement(StyledLayout, null,
        React.createElement(Topbar, { hamburgerAction: toggleCollapsed, collapsed: collapsed && !!sections, hideHamburger: !sections }),
        React.createElement(Layout, null,
            sections &&
                React.createElement(Sider, { className: "vlab-sider", trigger: null, width: 250, breakpoint: "md", collapsedWidth: "0", collapsible: true, collapsed: collapsed, onBreakpoint: broken => {
                        console.log(broken);
                    }, onCollapse: (collapsed, type) => {
                        console.log(collapsed, type);
                    }, style: {
                        backgroundColor: 'white',
                        height: '100vh',
                        overflow: 'auto',
                        position: 'fixed',
                        left: 0,
                        top: 56,
                    } },
                    React.createElement(Menu, { style: { height: '100vh' }, theme: "light", defaultSelectedKeys: [] }, sections.map((section, sectionIndex) => {
                        return (React.createElement(React.Fragment, null,
                            React.createElement(Menu.Item, { key: sectionIndex },
                                React.createElement("span", { className: "menu-title" }, section.title)),
                            section.routes.map((route, index) => {
                                return (React.createElement(Menu.Item, { onClick: beforeClick(route), key: String(sectionIndex) + String(index), icon: route.icon }, route.name));
                            })));
                    }))),
            React.createElement(Layout, { style: { marginLeft: collapsed || !sections ? 0 : 250, marginTop: 56 } },
                React.createElement(Content, { style: { minHeight: 'calc(100vh - 56px)' } }, children),
                React.createElement(Footer, { style: { textAlign: 'center' } }, "VLab \u00A92020")))));
};
export default WithMenu;
