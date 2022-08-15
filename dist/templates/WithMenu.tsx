import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Topbar from "../components/Topbar";
import { FireOutlined, ApiOutlined } from "@ant-design/icons";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

const { Footer, Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;

  .ant-layout {
    background-color: ${colors.extraLightBackground} !important;
  }

  .user-icon,
  .i18n-icon {
    cursor: pointer;
  }

  .vlab-sider {
    .ant-menu-item {
      color: ${colors.primary};
      font-weight: ${typography.body1.fontWeight};
      font-size: ${typography.body1.fontSize}px;
      letter-spacing: ${typography.body1.letterSpacing}px;
    }

    .ant-menu-item-selected {
      background-color: ${colors.extraLightBackground} !important;
      font-weight: 700;
    }
  }
`;

export interface IRoute {
  name: any;
  icon?: any;
  path?: string;
  show?: boolean;
}

export interface IProducts {
  title: any;
  routes: Array<IRoute>;
}

export interface IWithMenu {
  sections?: Array<IProducts>;
  onRouteClick?: (path?: string) => void;
  logoSrc?: string;

  children?: any;
}

const WithMenu = ({ logoSrc, children, sections, onRouteClick }: IWithMenu) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleCentralize);
    handleCentralize();
    return () => window.removeEventListener("resize", handleCentralize);
  }, []);

  const handleCentralize = () => {
    setCollapsed(window.innerWidth < 768);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const beforeClick = (route: IRoute) => () => {
    onRouteClick && onRouteClick(route.path);
  };

  const isSelected = (path: string | undefined) => {
    if (!path) return;
    if (window.location.href.includes(path)) return "ant-menu-item-selected";
    return "";
  };

  return (
    <StyledLayout>
      <Topbar
        logoSrc={logoSrc}
        hamburgerAction={toggleCollapsed}
        collapsed={collapsed && !!sections}
      />
      <Layout>
        {sections && (
          <Sider
            className="vlab-sider"
            trigger={null}
            width={250}
            breakpoint="md"
            collapsedWidth="0"
            collapsible
            collapsed={collapsed}
            style={{
              backgroundColor: "white",
              height: "100vh",
              overflow: "hidden",
              position: "fixed",
              width: 250,
              left: 0,
              top: 56,
            }}
          >
            <Menu
              style={{ height: "calc(100vh - 114px)", paddingTop: 24 }}
              theme="light"
              mode="inline"
            >
              {sections.map((section, sectionIndex) => {
                return (
                  <React.Fragment key={sectionIndex}>
                    {section.routes
                      .filter((route) => route.show)
                      .map((route: IRoute, index: number) => {
                        return (
                          <Menu.Item
                            className={isSelected(route.path)}
                            onClick={beforeClick(route)}
                            key={String(sectionIndex) + "-" + String(index)}
                            icon={route.icon}
                          >
                            {route.name}
                          </Menu.Item>
                        );
                      })}
                  </React.Fragment>
                );
              })}
            </Menu>
          </Sider>
        )}
        <Content
          style={{
            minHeight: "calc(100vh - 56px)",
            marginTop: 56,
            marginLeft: collapsed || !sections ? 0 : 250,
            paddingBottom: 48,
          }}
        >
          {children}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        V-Lab Telessaúde ©2022 <small>v.{process.env.APP_VERSION}</small>
      </Footer>
    </StyledLayout>
  );
};

export default WithMenu;
