import * as React from "react"
import { Header, Navigation } from "./Header"
import { Logo } from "./Logo"
import { Menu } from "../Menu"

export const Layout = ({ children, isClear }) => (
  <>
    <Header isClear={isClear}>
      <Navigation>
        <Logo src="/img/logo@2x.png" />
        <Menu dark />
      </Navigation>
    </Header>
    {children}
  </>
)
