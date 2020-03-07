import * as React from "react";
import { Layout } from "../components/ui/Layout";
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero";
import { SocialBar } from "../components/ui/SocialBar";
import { AboutSection } from "../components/AboutSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { SectionTitle } from "../components/ui/Title";
import ReactFullpage from "../libraries/ReactScrollPage";
import { useState } from "react";

export default () => {
  const [index, setIndex] = useState(0);
  const [isClear, setClear] = useState(true);
  const handleUpdateIndex = (i: any) => {
    setIndex(index);
    setClear(i === 0);
  };

  return (
    <Layout isClear={isClear}>
      <ReactFullpage handleUpdateIndex={handleUpdateIndex} scroll={true}>
        <div className="section">
          <Hero video="/videos/particles.mp4">
            <HeroText>We are Lion</HeroText>
            <HeroSubText>Agence créative</HeroSubText>
            <SocialBar />
          </Hero>
        </div>
        <div className="section">
          <SectionTitle>Notre philosophie</SectionTitle>
          <AboutSection />
        </div>
        <div className="section">
          <SectionTitle>Au service de votre réussite</SectionTitle>
        </div>
        <div className="section">
          <SectionTitle>Notre expertise technique</SectionTitle>
        </div>
        <div className="section">
          <SectionTitle>Des résultats meusurables</SectionTitle>
        </div>
        <div className="section">
          <SectionTitle>Des partenaires satisfaits</SectionTitle>
          <PortfolioSection />
        </div>
        <div className="section">
          <SectionTitle>
            Une agence locale à dimension internationale
          </SectionTitle>
        </div>
      </ReactFullpage>
    </Layout>
  );
};
