import { Header } from "./Header";
import { Logo } from "./Logo";
import { Menu } from "../Menu";

export const Layout = ({ children }) => (
  <>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: Montserrat;
        }
      `}
    </style>
    <Header>
      <Logo src="/img/logo@2x.png" />
      <Menu dark />
    </Header>
    {children}
  </>
);
