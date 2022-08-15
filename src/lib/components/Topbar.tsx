import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import VlabLogo from "./VlabLogo";
import HamburgerIcon from "../icons/hamburger.svg";
import UserIcon from "../icons/user.svg";
import { Popover } from "antd";
import UserMenu from "./UserMenu";

interface StyledTopbarProps {
  centralize?: boolean;
}

const StyledTopbar = styled.header<StyledTopbarProps>`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: ${colors.white};
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ centralize }) =>
    centralize ? "center" : "flex-start"};
  padding: 0px 30px;
  z-index: 999;
  border-bottom: 1px solid ${colors.lightGray};

  .hamburger-icon {
    position: absolute;
    left: 30px;
    top: 10px;
    width: 32px;

    color: ${colors.darkGray};
  }

  .user-icon {
    position: absolute;
    right: 30px;
    top: 10px;
    width: 32px;

    color: ${colors.secondary};
  }
`;

interface ITopbar {
  hamburgerAction?: any;
  collapsed?: boolean;
  hideHamburger?: boolean;
  logoSrc: string;
}

const Topbar = ({ hamburgerAction, collapsed, hideHamburger, logoSrc }: ITopbar) => {
  const [isMobile, setIsMobile] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleCentralize);
    handleCentralize();
    return () => window.removeEventListener("resize", handleCentralize);
  }, []);

  const handleCentralize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
  };

  return (
    <StyledTopbar centralize={isMobile || collapsed}>
      <a href={"/"}>
        <img className="logo" src={logoSrc} />
      </a>
      {isMobile && !hideHamburger && (
        <img
          src={HamburgerIcon}
          onClick={hamburgerAction}
          className="hamburger-icon"
        />
      )}
      <Popover
        placement="bottom"
        content={<UserMenu arrowLeftClick={handleClosePopover} />}
        trigger="click"
        visible={openPopover}
        onVisibleChange={(visible) => setOpenPopover(visible)}
      >
        <img src={UserIcon} onClick={handleOpenPopover} className="user-icon" />
      </Popover>
    </StyledTopbar>
  );
};

export default Topbar;
