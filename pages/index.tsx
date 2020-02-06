import { Layout } from "../components/ui/Layout";
import { Title } from "../components/ui/Title";
import { Text } from "../components/ui/Text";
import { TextBlock } from "../components/ui/TextBlock";
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero";
import { SocialBar } from "../components/ui/SocialBar";
import { Project, Description, Content } from "../components/ui/Project";
import { Fullpage } from "../components/Fullpage";
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
    <Fullpage>
      <Hero image="/img/hero.jpg">
        <HeroText>Plush</HeroText>
        <HeroSubText>Agence créative</HeroSubText>
        <SocialBar />
      </Hero>
      <Grid>
        <GridItem1>
          <GridBG colored="LIGHT">
            <TextBlock text="About us" colored={true} />
          </GridBG>
        </GridItem1>
        <GridItem2>
          <GridBG colored="WHITE">
            <Text decorated={true}>
              Cortenza is a global brand and design agency with offices in the
              creative hubs of London and San Francisco. In today’s net-savvy
              world it has become common for any business to have a website
              which they use mostly for advertising their products and services.
              With the advent of search engines it has become even easier for
              the customers to search for the stuff online. For a website to be
              successful its link should land in the first three pages.
            </Text>
          </GridBG>
        </GridItem2>
        <GridItem3>
          <GridBG colored="LIGHT" />
        </GridItem3>
        <GridItem4>
          <GridBG colored="COLORED">
            <Title>
              we use the best
              <br />
              web tools
            </Title>
          </GridBG>
        </GridItem4>
        <GridItem5>
          <GridBG colored="WHITE">
            <Text decorated={true}>
              Studios were either boutique and beautiful, but only managing to
              work on a few projects or of a massive scale and relationships. In
              today’s net-savvy world it has become common for any business to
              have a website which they use mostly for advertising their
              products and services. With the advent of search engines it has
              become even easier for the customers to search for the stuff
              online.
            </Text>
          </GridBG>
        </GridItem5>
        <GridItem6>
          <GridBG colored="DARK">
            <TextBlock text="What we do" colored={false} />
          </GridBG>
        </GridItem6>
        <GridItem7>
          {" "}
          <GridBG colored="WHITE">
            <Text decorated={true}>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque. Suspendisse in orci enim.
            </Text>
          </GridBG>
        </GridItem7>
      </Grid>
      <Hero>
        <HeroText>Plush</HeroText>
        <HeroSubText>Une agence pas comme les autres</HeroSubText>
      </Hero>

      <Grid>
        <GridItem1>
          <GridBG colored="LIGHT">
            <TextBlock text="Nos projets" colored={true} />
          </GridBG>
        </GridItem1>
        <GridItem2>
          <Project>
            <Description>
              <Content>Du texte</Content>{" "}
            </Description>
          </Project>
        </GridItem2>
        <GridItem3>
          <Project>
            <Description>
              <Content>Du texte</Content>{" "}
            </Description>
          </Project>
        </GridItem3>
        <GridItem4>
          <Project>
            <Description>
              <Content>Du texte</Content>
            </Description>
          </Project>
        </GridItem4>
        <GridItem5>
          <Project>
            <Description>
              <Content>Du texte</Content>
            </Description>
          </Project>
        </GridItem5>
      </Grid>
    </Fullpage>
  </Layout>
);
