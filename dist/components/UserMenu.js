import { ArrowLeftOutlined, LogoutOutlined, RightOutlined, UserOutlined, } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ConditionalRender from "./ConditionalRender";
import colors from "../theme/colors";
import Typography from "./Typography";
import authStorage, { readCookie } from "../utils/authStorage";
const StyledUserMenu = styled.div `
  @media only screen and (max-width: 768px) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: ${colors.white};
  }
`;
const UserMenuTopbar = styled.div `
  display: flex;
  position: fixed;
  width: 100%;
  background-color: ${colors.darkBackground};
  height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;

  .anticon {
    position: absolute;
    left: 16px;
    top: 20px;
  }
`;
const StyledList = styled.div `
  display: flex;
  flex-direction: column;

  .user {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    padding: 16px;

    div {
      display: flex;
      flex-direction: column;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 56px;
    }
  }

  .vlab-typography {
    padding: 0px 16px;
  }

  section {
    margin-bottom: 32px;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0px;
      text-decoration: none;

      .anticon {
        margin-right: 16px;
      }

      &:hover {
        background-color: ${colors.extraLightBackground};
      }
    }

    a.divider {
      border-bottom: 1px solid ${colors.lightGray};
    }
  }
`;
export const UserMenu = ({ arrowLeftClick, permissions }) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", handleCentralize);
        handleCentralize();
        return () => window.removeEventListener("resize", handleCentralize);
    }, []);
    const handleCentralize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    const goToIAM = (path) => `/#/${path}`;
    const logout = () => {
        authStorage.clear();
        window.location.href = "/#/login";
    };
    const loadSession = () => {
        const session = readCookie("@VLAB_STORAGE_SESSION");
        if (session) {
            return JSON.parse(session);
        }
        return { me: { name: "Sua sessão expirou" } };
    };
    const profile = loadSession();
    const content = (React.createElement(StyledList, null,
        React.createElement("div", { className: "user" },
            React.createElement(Avatar, { size: 64, src: profile?.me.profile_image || null, icon: profile?.me.profile_image ? null : React.createElement(UserOutlined, null) }),
            React.createElement("div", null,
                React.createElement(Typography, { type: "subtitle1", color: "primary" }, profile?.me.name),
                React.createElement(Typography, { type: "caption", color: "regentGray" }, profile?.parsedToken?.user?.role))),
        React.createElement("section", null,
            React.createElement("a", { className: "divider", href: goToIAM("profile") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Alterar dados"),
                React.createElement(RightOutlined, null)),
            React.createElement("a", { className: "divider", href: goToIAM("change-password") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Alterar senha"),
                React.createElement(RightOutlined, null))),
        React.createElement("section", null,
            React.createElement(Typography, { type: "overline2", color: "primary" }, "CONFIGURA\u00C7\u00D5ES"),
            React.createElement("a", { className: "divider", href: goToIAM("policies") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Politicas de acesso"),
                React.createElement(RightOutlined, null)),
            React.createElement("a", { className: "divider", href: goToIAM("roles") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Fun\u00E7\u00F5es"),
                React.createElement(RightOutlined, null)),
            React.createElement("a", { className: "divider", href: goToIAM("users") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Gerenciar usu\u00E1rios"),
                React.createElement(RightOutlined, null)),
            React.createElement("a", { className: "divider", href: goToIAM("organization") },
                React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Gerenciar organiza\u00E7\u00E3o"),
                React.createElement(RightOutlined, null)),
            React.createElement(ConditionalRender, { permission: "anamneseForm" },
                React.createElement("a", { className: "divider", href: goToIAM("anamnese-form") },
                    React.createElement(Typography, { type: "subtitle2", color: "regentGray" }, "Gerenciar anamnese"),
                    React.createElement(RightOutlined, null)))),
        React.createElement("section", null,
            React.createElement("a", { onClick: () => logout() },
                React.createElement(Typography, { type: "subtitle2", color: "primary" },
                    "Sair ",
                    React.createElement(LogoutOutlined, null))))));
    return (React.createElement(StyledUserMenu, null,
        isMobile && (React.createElement(UserMenuTopbar, null,
            React.createElement(Typography, { type: "subtitle2", color: "white" }, "Perfil"),
            React.createElement(ArrowLeftOutlined, { onClick: arrowLeftClick, style: { fontSize: 16, color: colors.white } }))),
        content));
};
export default UserMenu;
