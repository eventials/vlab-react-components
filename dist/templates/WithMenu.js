import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";
const { Footer, Sider, Content } = Layout;
const StyledLayout = styled(Layout) `
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
const WithMenu = ({ logoSrc, children, sections, onRouteClick }) => {
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
    const beforeClick = (route) => () => {
        onRouteClick && onRouteClick(route.path);
    };
    const isSelected = (path) => {
        if (!path)
            return;
        if (window.location.href.includes(path))
            return "ant-menu-item-selected";
        return "";
    };
    return (React.createElement(StyledLayout, null,
        React.createElement(Topbar, { logoSrc: logoSrc, hamburgerAction: toggleCollapsed, collapsed: collapsed && !!sections }),
        React.createElement(Layout, null,
            sections && (React.createElement(Sider, { className: "vlab-sider", trigger: null, width: 250, breakpoint: "md", collapsedWidth: "0", collapsible: true, collapsed: collapsed, style: {
                    backgroundColor: "white",
                    height: "100vh",
                    overflow: "hidden",
                    position: "fixed",
                    width: 250,
                    left: 0,
                    top: 56,
                } },
                React.createElement(Menu, { style: { height: "calc(100vh - 114px)", paddingTop: 24 }, theme: "light", mode: "inline" }, sections.map((section, sectionIndex) => {
                    return (React.createElement(React.Fragment, { key: sectionIndex }, section.routes
                        .filter((route) => route.show)
                        .map((route, index) => {
                        return (React.createElement(Menu.Item, { className: isSelected(route.path), onClick: beforeClick(route), key: String(sectionIndex) + "-" + String(index), icon: route.icon }, route.name));
                    })));
                })))),
            React.createElement(Content, { style: {
                    minHeight: "calc(100vh - 56px)",
                    marginTop: 56,
                    marginLeft: collapsed || !sections ? 0 : 250,
                    paddingBottom: 48,
                } }, children)),
        React.createElement(Footer, { style: { textAlign: "center" } },
            "V-Lab Telessa\u00FAde \u00A92022 ",
            React.createElement("small", null,
                "v.",
                process.env.APP_VERSION))));
};
export default WithMenu;
