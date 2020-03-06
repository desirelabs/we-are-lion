import * as React from "react"
import { Layout } from "../components/ui/Layout"
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero"
import { SocialBar } from "../components/ui/SocialBar"
import { AboutSection } from "../components/AboutSection"
import { PortfolioSection } from "../components/PortfolioSection"
import { SectionTitle } from "../components/ui/Title"
import { Fullpage } from "../components/Fullpage"

export default () => {
  const handleUpdateIndex = (index: any) => console.log(index)
  return (
    <Layout isClear={true}>
      <Fullpage handleUpdateIndex={handleUpdateIndex}>
        <div className="custom-section">
          <Hero video="/videos/particles.mp4">
            <HeroText>We are Lion</HeroText>
            <HeroSubText>Agence créative</HeroSubText>
            <SocialBar />
          </Hero>
        </div>
        <div className="custom-section">
          <SectionTitle>Notre philosophie</SectionTitle>
          <AboutSection />
        </div>
        {/*<SectionTitle>Au service de votre réussite</SectionTitle>*/}
        {/*<SectionTitle>Notre expertise technique</SectionTitle>*/}
        {/*<SectionTitle>Des résultats meusurables</SectionTitle>*/}
        <div className="custom-section">
          <SectionTitle>Des partenaires satisfaits</SectionTitle>
          <PortfolioSection />
        </div>
        {/*<SectionTitle>*/}
        {/*  Une agence locale à dimension internationale*/}
        {/*</SectionTitle>*/}
      </Fullpage>
    </Layout>
  )
}
