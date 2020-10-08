import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Topbar from '../components/Topbar';
import { FireOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from '../theme/colors';
import typography from '../theme/typography';

const { Footer, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
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

export interface IRoute {
    name: any;
    icon?: any;
    path?: string;
}

export interface IProducts {
    title: any;
    routes: Array<IRoute>;
}

export interface IWithMenu {
    sections?: Array<IProducts>,
    onRouteClick?: (path?: string) => void;

    children?: any;
}

const WithMenu = ({ children, sections, onRouteClick }: IWithMenu) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', handleCentralize);
        handleCentralize();
        return () => window.removeEventListener('resize', handleCentralize);
    }, []);

    const handleCentralize = () => {
        setCollapsed(window.innerWidth < 768);
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const beforeClick = (route: IRoute) => () => {
        onRouteClick && onRouteClick(route.path);
    }

    return (
        <StyledLayout>
            <Topbar hamburgerAction={toggleCollapsed} collapsed={collapsed && !!sections} />
            <Layout>
                {
                    sections &&
                    <Sider
                        className="vlab-sider"
                        trigger={null}
                        width={250}
                        breakpoint="md"
                        collapsedWidth="0"
                        collapsible
                        collapsed={collapsed}
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                        style={{
                            backgroundColor: 'white',
                            height: '100vh',
                            overflow: 'auto',
                            position: 'fixed',
                            left: 0,
                            top: 56,
                        }}
                    >
                        <Menu style={{ height: '100vh' }} theme="light" defaultSelectedKeys={[]}>
                            {
                                sections.map((section, sectionIndex) => {

                                    return (
                                        <>
                                            <Menu.Item key={sectionIndex}>
                                                <span className="menu-title">{section.title}</span>
                                            </Menu.Item>
                                            {
                                                section.routes.map((route: IRoute, index: number) => {
                                                    return (
                                                        <Menu.Item onClick={beforeClick(route)} key={String(sectionIndex) + String(index)} icon={route.icon}>
                                                            {route.name}
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })

                            }
                        </Menu>
                    </Sider>
                }
                <Layout style={{ marginLeft: collapsed || !sections ? 0 : 250, marginTop: 56 }}>
                    <Content style={{ minHeight: 'calc(100vh - 56px)' }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>VLab ©2020</Footer>
                </Layout>
            </Layout>
        </StyledLayout>
    )
};

export default WithMenu;