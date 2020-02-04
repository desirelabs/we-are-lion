import { Layout } from "../components/ui/Layout";
import { TextBlock } from "../components/ui/TextBlock";
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero";
import { SocialBar } from "../components/ui/SocialBar";
import {
  Grid,
  GridBG,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7
} from "../components/ui/Grid";

export default () => (
  <Layout>
    <Hero image="/img/hero.jpg">
      <HeroText>Plush</HeroText>
      <HeroSubText>Agence créative</HeroSubText>
      <SocialBar />
    </Hero>
    <Grid>
      <GridItem1>
        <TextBlock text="About us" colored={true} />
      </GridItem1>
      <GridItem2>2</GridItem2>
      <GridItem3>3</GridItem3>
      <GridItem4>4</GridItem4>
      <GridItem5>5</GridItem5>
      <GridItem6>
        <GridBG style="DARK">
          <TextBlock text="What we do" colored={false} />
        </GridBG>
      </GridItem6>
      <GridItem7>7</GridItem7>
    </Grid>
  </Layout>
);
