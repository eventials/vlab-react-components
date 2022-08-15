import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import HamburgerIcon from "../icons/hamburger.svg";
import UserIcon from "../icons/user.svg";
import { Popover } from "antd";
import UserMenu from "./UserMenu";
const StyledTopbar = styled.header `
  display: flex;
  position: fixed;
  width: 100%;
  background-color: ${colors.white};
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ centralize }) => centralize ? "center" : "flex-start"};
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
const Topbar = ({ hamburgerAction, collapsed, hideHamburger, logoSrc }) => {
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
    return (React.createElement(StyledTopbar, { centralize: isMobile || collapsed },
        React.createElement("a", { href: "/" },
            React.createElement("img", { className: "logo", src: logoSrc })),
        isMobile && !hideHamburger && (React.createElement("img", { src: HamburgerIcon, onClick: hamburgerAction, className: "hamburger-icon" })),
        React.createElement(Popover, { placement: "bottom", content: React.createElement(UserMenu, { arrowLeftClick: handleClosePopover }), trigger: "click", visible: openPopover, onVisibleChange: (visible) => setOpenPopover(visible) },
            React.createElement("img", { src: UserIcon, onClick: handleOpenPopover, className: "user-icon" }))));
};
export default Topbar;
