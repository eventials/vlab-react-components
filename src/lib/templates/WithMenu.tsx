import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Topbar from '../components/Topbar';
import { ExceptionOutlined, FireOutlined, FolderViewOutlined, TableOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from '../theme/colors';
import typography from '../theme/typography';

const { Footer, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
    min-height: 100vh;

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
`;

export interface IRoute {
    name: String;
    icon?: any;
    path: string;
}

export interface IWithMenu {
    routes: Array<IRoute>

    children?: any;
}

const WithMenu = ({ children, routes }: any) => {
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
        window.location.hash = `#${route.name}`;
    }

    return (
        <StyledLayout>
            <Topbar hamburgerAction={toggleCollapsed} collapsed={collapsed} />
            <Layout>
                <Sider
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
                    <Menu style={{ height: '100vh' }} theme="light" defaultSelectedKeys={['0']}>
                        {routes.map((route: IRoute, index: number) => {

                            return (
                                <Menu.Item onClick={beforeClick(route)} key={String(index)} icon={<FireOutlined />}>
                                    {route.name}
                                </Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: collapsed ? 0 : 250, marginTop: 56 }}>
                    <Content>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>VLab Components ©2020 Created by VLab Team</Footer>
                </Layout>
            </Layout>
        </StyledLayout>
    )
};

export default WithMenu;