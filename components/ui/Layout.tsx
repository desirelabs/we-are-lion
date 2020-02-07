import { Header, Navigation } from "./Header";
import { Logo } from "./Logo";
import { Menu } from "../Menu";

export const Layout = ({ children, isClear }) => (
  <>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: Montserrat;
        }
      `}
    </style>
    <Header isClear={isClear}>
      <Navigation>
        <Logo src="/img/logo@2x.png" />
        <Menu dark />
      </Navigation>
    </Header>
    {children}
  </>
);
