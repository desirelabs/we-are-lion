import * as React from "react"
import { Layout } from "../components/ui/Layout"
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero"
import { SocialBar } from "../components/ui/SocialBar"
import { AboutSection } from "../components/AboutSection"
import { PortfolioSection } from "../components/PortfolioSection"
import { SectionTitle } from "../components/ui/Title"

export default () => {
  return (
    <Layout isClear={true}>
      <Hero image="/img/hero.jpg">
        <HeroText>We are Lion</HeroText>
        <HeroSubText>Agence créative</HeroSubText>
        <SocialBar />
      </Hero>
      <SectionTitle>Notre philosophie</SectionTitle>
      <AboutSection />
      <SectionTitle>Au service de votre réussite</SectionTitle>
      <SectionTitle>Notre expertise technique</SectionTitle>
      <SectionTitle>Des résultats meusurables</SectionTitle>
      <SectionTitle>Des partenaires satisfaits</SectionTitle>
      <PortfolioSection />
      <SectionTitle>Une agence locale à dimension internationale</SectionTitle>
    </Layout>
  )
}
