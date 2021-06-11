import {
  ArrowLeftOutlined,
  LogoutOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ConditionalRender from "./ConditionalRender";
import colors from "../theme/colors";
import Typography from "./Typography";
import authStorage, { readCookie } from "../utils/authStorage";

const StyledUserMenu = styled.div`
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

const UserMenuTopbar = styled.div`
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

const StyledList = styled.div`
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

export interface IUserMenu {
  arrowLeftClick: any;
  permissions?: Array<string>;
}

export const UserMenu = ({ arrowLeftClick, permissions }: IUserMenu) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleCentralize);
    handleCentralize();

    return () => window.removeEventListener("resize", handleCentralize);
  }, []);

  const handleCentralize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const goToIAM = (path: string) => `/#/${path}`;

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

  const content = (
    <StyledList>
      <div className="user">
        <Avatar
          size={64}
          src={profile?.me.profile_image || null}
          icon={profile?.me.profile_image ? null : <UserOutlined />}
        />
        <div>
          <Typography type="subtitle1" color="primary">
            {profile?.me.name}
          </Typography>
          <Typography type="caption" color="regentGray">
            {profile?.parsedToken?.user?.role}
          </Typography>
        </div>
      </div>

      <section>
        <a className="divider" href={goToIAM("profile")}>
          <Typography type="subtitle2" color="regentGray">
            Alterar dados
          </Typography>
          <RightOutlined />
        </a>
        <a className="divider" href={goToIAM("change-password")}>
          <Typography type="subtitle2" color="regentGray">
            Alterar senha
          </Typography>
          <RightOutlined />
        </a>
      </section>

      <ConditionalRender permission={["access_control", "manage_profile"]}>
        <section>
          <Typography type="overline2" color="primary">
            CONFIGURAÇÕES
          </Typography>
          <ConditionalRender permission="access_control">
            <a className="divider" href={goToIAM("policies")}>
              <Typography type="subtitle2" color="regentGray">
                Politicas de acesso
              </Typography>
              <RightOutlined />
            </a>
          </ConditionalRender>
          <ConditionalRender permission="access_control">
            <a className="divider" href={goToIAM("roles")}>
              <Typography type="subtitle2" color="regentGray">
                Funções
              </Typography>
              <RightOutlined />
            </a>
          </ConditionalRender>
          <ConditionalRender permission="manage_profile">
            <a className="divider" href={goToIAM("users")}>
              <Typography type="subtitle2" color="regentGray">
                Gerenciar usuários
              </Typography>
              <RightOutlined />
            </a>
          </ConditionalRender>
          <ConditionalRender permission="manage_profile">
            <a className="divider" href={goToIAM("organization")}>
              <Typography type="subtitle2" color="regentGray">
                Gerenciar organização
              </Typography>
              <RightOutlined />
            </a>
          </ConditionalRender>
          <ConditionalRender permission="manage_profile">
            <a className="divider" href={goToIAM("anamnese-form")}>
              <Typography type="subtitle2" color="regentGray">
                Gerenciar anamnese
              </Typography>
              <RightOutlined />
            </a>
          </ConditionalRender>
        </section>
      </ConditionalRender>

      <section>
        <a onClick={() => logout()}>
          <Typography type="subtitle2" color="primary">
            Sair <LogoutOutlined />
          </Typography>
        </a>
      </section>
    </StyledList>
  );

  return (
    <StyledUserMenu>
      {isMobile && (
        <UserMenuTopbar>
          <Typography type="subtitle2" color="white">
            Perfil
          </Typography>
          <ArrowLeftOutlined
            onClick={arrowLeftClick}
            style={{ fontSize: 16, color: colors.white }}
          />
        </UserMenuTopbar>
      )}
      {content}
    </StyledUserMenu>
  );
};

export default UserMenu;
