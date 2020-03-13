import * as React from "react";
import { Navigation, NavItem } from "./ui/Navigation";
import { Link } from "gatsby";

export const FooterMenu = ({ isClear, column }) => (
  <Navigation isClear={isClear} column={column}>
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
