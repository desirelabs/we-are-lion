import * as React from "react";
import { Navigation, NavItem } from "./ui/Navigation";
import { Link as GLink } from "gatsby";
import styled from "styled-components";

const Link = styled(GLink)`
  text-decoration: none;
`;

export const Menu = ({ isClear }: { isClear?: boolean }) => (
  <Navigation isClear={isClear}>
    <Link to="/">
      <NavItem>Accueil</NavItem>
    </Link>
    <Link to="/about">
      <NavItem>A propos</NavItem>
    </Link>
    <Link to="/blog">
      <NavItem>Blog</NavItem>
    </Link>
    <Link to="/contact">
      <NavItem>Contact</NavItem>
    </Link>
  </Navigation>
);
