import { Header } from "../components/ui/Header";
import { Menu } from "../components/Menu";
import { Logo } from "../components/ui/Logo";
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero";
import { SocialBar } from "../components/ui/SocialBar";

export default () => (
  <>
    <Header>
      <Logo src="/img/logo@2x.png" />
      <Menu dark />
    </Header>
    <Hero image="/img/hero.jpg">
      <HeroText>Plush</HeroText>
      <HeroSubText>Agence créative</HeroSubText>
      <SocialBar />
    </Hero>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloribus
      expedita harum illum recusandae veniam minus mollitia eligendi corrupti
      corporis, pariatur nesciunt enim asperiores ex natus voluptas quae,
      aliquam animi.
    </p>
  </>
);
