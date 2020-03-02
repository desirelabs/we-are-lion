import * as React from "react"
import { Navigation, NavItem } from "./ui/Navigation"
import { Link as GLink } from "gatsby"
import styled from "styled-components"

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Link = styled(GLink)`
  text-decoration: none;
`

export const Menu = ({
  dark,
  orientation,
}: {
  dark?: boolean
  orientation?: "vertical" | "horizontal"
}) => (
  <Navigation dark orientation={orientation || "horizontal"}>
    <Link to="/">
      <NavItem>Accueil</NavItem>
    </Link>
    <Link to="/about">
      <NavItem>A propos</NavItem>
    </Link>
    <Link to="/blog">
      <NavItem>Blog</NavItem>
    </Link>
    {/*<Link to="/portfolio">*/}
    {/*  <NavItem>Portfolio</NavItem>*/}
    {/*</Link>*/}
    <Link to="/contact">
      <NavItem>Contact</NavItem>
    </Link>
  </Navigation>
)
