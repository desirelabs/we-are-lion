import React, { useState, useEffect } from "react";
import { MenuWrapper, NavItem } from "./ui/MenuWrapper";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { Icon } from "./ui/Icon";


export const MenuLink = styled.span`
  text-decoration: none;
  @media (max-width: 767px) {
    padding: 30px;
  }
`;

const MenuToggleCloseIcon = styled(Icon).attrs({
  src: "/img/menu-toggler-closed.svg"
})``;

const MenuToggleOpenIcon = styled(Icon).attrs({
  src: "/img/menu-toggler-opened.svg"
})``;

const TRANSITION_DELAY = 0.15;

const visibleIcon = css`
  opacity: 1;
  transition: opacity ${TRANSITION_DELAY}s ease-in-out;
  transition-delay: ${TRANSITION_DELAY}s;
`;

const hiddenIcon = css`
  opacity: 0;
  transition: opacity ${TRANSITION_DELAY}s ease-in-out;
`;

const MenuToggle = styled.a.attrs({
  tabIndex: 0
})<{ toggle: boolean }>`
  display: none;
  position: relative;
  width: 42px;
  height: 42px;
  z-index: 1;
  ${MenuToggleCloseIcon}, ${MenuToggleOpenIcon} {
    position: absolute;
    top: 0;
    left: 0;
  }
  ${MenuToggleCloseIcon} {
    ${({ toggle }) => (!toggle ? visibleIcon : hiddenIcon)}
  }
  ${MenuToggleOpenIcon} {
    ${({ toggle }) => (toggle ? visibleIcon : hiddenIcon)}
  }
  @media (max-width: 767px) {
    display: inline-block;
  }
`;

export const Menu = ({ isClear }: { isClear?: boolean }) => {
  const [toggle, setToggle] = useState(false);

  /**
   * Escape keyboard press
   * @param e
   */
  function handleEscape(e) {
    if (e.code === "Escape" && toggle) {
      setToggle(false);
    }
  }

  /**
   * Menu toggle handler
   * @param e
   */
  function handleToggle(e) {
    if (e.keyCode === 32 || e.keyCode === 13 || e.type === "click") {
      toggle ? setToggle(false) : setToggle(true);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", e => handleEscape(e));
      return () => document.removeEventListener("keyup", e => handleEscape(e));
    }
  }, [handleEscape]);

  return (
    <>
      <MenuToggle
        toggle={toggle}
        onClick={e => handleToggle(e)}
        onKeyUp={e => handleToggle(e)}
      >
        <MenuToggleCloseIcon />
        <MenuToggleOpenIcon />
      </MenuToggle>
      <MenuWrapper isClear={isClear} toggle={toggle} className="menu-wrapper">
        <Link to="/" onClick={e => handleToggle(e)}>
          <NavItem>Accueil</NavItem>
        </Link>
        <Link to="/contact" onClick={e => handleToggle(e)}>
          <NavItem>Contact</NavItem>
        </Link>
      </MenuWrapper>
    </>
  );
};
