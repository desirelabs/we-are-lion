import * as React from "react";
import { MenuWrapper, NavItem } from "./ui/MenuWrapper";
import { Link as GatsbyLink } from "gatsby";
import styled, { css } from "styled-components";
import { useEffect, useReducer } from "react";
import { Icon } from "./ui/Icon";
import { Animate } from "react-move";
import { Surface } from "./ui-utils/Surface";
import { interpolate } from "flubber";
import { easeQuadOut } from "d3-ease";

export const Link = styled(GatsbyLink)`
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
const ANIMATION_DURATION = 300;

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

const SvgWrapper = styled.div`
  position: fixed;
  z-index: -1;
  @media (min-width: 768px) {
    display: none;
  }
`;

const startPath =
  "M413.5,0 C413.180328,0 413,0.297449832 413,0.5 C413,0.702550168 413.167386,1 413.5,1 C413.832614,1 414,0.700958882 414,0.5 C414,0.299041118 413.819672,0 413.5,0 Z";
const endPath =
  "M207,-51 C-112.032787,-51 -292,245.854932 -292,448 C-292,650.145068 -124.948653,947 207,947 C538.948653,947 706,648.556964 706,448 C706,247.443036 526.032787,-51 207,-51 Z";

const initialState = {
  toggle: false,
  path: [endPath, startPath]
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        toggle: true,
        path: [startPath, endPath]
      };
    case "close":
      return {
        toggle: false,
        path: [endPath, startPath]
      };
    default:
      return initialState;
  }
}

export const Menu = ({ isClear }: { isClear?: boolean }) => {
  const [{ toggle, path }, dispatch] = useReducer(reducer, initialState);

  /**
   * Escape keyboard press
   * @param e
   */
  function handleEscape(e) {
    if (e.code === "Escape" && toggle) {
      dispatch({ type: "close" });
    }
  }

  /**
   * Menu toggle handler
   * @param e
   */
  function handleToggle(e) {
    if (e.keyCode === 32 || e.keyCode === 13 || e.type === "click") {
      toggle ? dispatch({ type: "close" }) : dispatch({ type: "open" });
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keyup", e => handleEscape(e));
      return () => document.removeEventListener("keyup", e => handleEscape(e));
    }
  }, [handleEscape]);

  /**
   * Svg path interpolation
   */
  const interpolator = interpolate(path[0], path[1]);

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
      <MenuWrapper isClear={isClear} toggle={toggle}>
        <Link to="/" onClick={e => handleToggle(e)}>
          <NavItem>Accueil</NavItem>
        </Link>
        {/* <Link to="/about" onClick={e => handleToggle(e)}>
          <NavItem>A propos</NavItem>
        </Link>
        <Link to="/blog" onClick={e => handleToggle(e)}>
          <NavItem>Blog</NavItem>
        </Link> */}
        <Link to="/contact" onClick={e => handleToggle(e)}>
          <NavItem>Contact</NavItem>
        </Link>
      </MenuWrapper>
      <SvgWrapper>
        <Surface view={[415, 1200]} trbl={[0, 0, 0, 0]}>
          <Animate
            start={{
              opacity: 0,
              d: interpolator(1)
            }}
            enter={[
              {
                opacity: [1],
                timing: { duration: ANIMATION_DURATION }
              }
            ]}
            update={{
              d: interpolator,
              timing: { duration: ANIMATION_DURATION, ease: easeQuadOut }
            }}
          >
            {state => (
              <g>
                <path fill="#ff2e64" {...state} />
              </g>
            )}
          </Animate>
        </Surface>
      </SvgWrapper>
    </>
  );
};
