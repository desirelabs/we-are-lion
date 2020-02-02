import { Navigation, NavItem } from "./ui/Navigation";
import Link from "next/link";
import styled from "styled-components";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = ({ dark }: { dark?: boolean }) => (
  <Navigation dark>
    <Link href="/">
      <NavItem>Accueil</NavItem>
    </Link>
    <Link href="/about">
      <NavItem>A propos</NavItem>
    </Link>
    <Link href="/blog">
      <NavItem>Blog</NavItem>
    </Link>
    <Link href="/portfolio">
      <NavItem>Portfolio</NavItem>
    </Link>
    <Link href="/contact">
      <NavItem>Contact</NavItem>
    </Link>
  </Navigation>
);
