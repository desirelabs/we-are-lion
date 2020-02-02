import { Navigation, NavItem } from "./ui/Navigation";
import Link from "next/link";

export const Menu = () => (
  <Navigation>
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
