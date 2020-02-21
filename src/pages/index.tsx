import * as React from "react"
import { ThemeProvider } from "@material-ui/core"
import theme from "../components/theme"
import { Layout } from "../components/ui/Layout"
import { Title } from "../components/ui/Title"
import { Text } from "../components/ui/Text"
import { TextBlock } from "../components/ui/TextBlock"
import { Hero, HeroText, HeroSubText } from "../components/ui/Hero"
import { SocialBar } from "../components/ui/SocialBar"
import * as Project from "../components/ui/Project"
// import { Fullpage } from "../components/Fullpage"
import {
  Grid,
  GridBG,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7,
} from "../components/ui/Grid"
import {
  Portfolio,
  PortfolioItem1,
  PortfolioItem2,
  PortfolioItem3,
  PortfolioItem4,
  PortfolioItem5,
  PortfolioItem6,
  PortfolioItem7,
  PortfolioItem8,
  PortfolioItem9,
} from "../components/ui/Portfolio"
import { useState } from "react"

export default () => {
  const [navIndex, setNavIndex] = useState(0)

  const handleUpdateIndex = (index: number) => setNavIndex(index)

  return (
    <ThemeProvider theme={theme}>
      <Layout isClear={navIndex !== 0}>
        {/* <Fullpage handleUpdateIndex={handleUpdateIndex}> */}
        <Hero image="/img/hero.jpg">
          <HeroText>We are Lion</HeroText>
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
                which they use mostly for advertising their products and
                services. With the advent of search engines it has become even
                easier for the customers to search for the stuff online. For a
                website to be successful its link should land in the first three
                pages.
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
                work on a few projects or of a massive scale and relationships.
                In today’s net-savvy world it has become common for any business
                to have a website which they use mostly for advertising their
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
            <GridBG colored="WHITE">
              <Text decorated={true}>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque. Suspendisse in orci enim.
              </Text>
            </GridBG>
          </GridItem7>
        </Grid>
        <Hero>
          <HeroText>We are Lion</HeroText>
          <HeroSubText>Une agence pas comme les autres</HeroSubText>
        </Hero>

        <Portfolio>
          <PortfolioItem1>
            <GridBG colored="WHITE">
              <TextBlock text="Nos projets" colored={true} />
            </GridBG>
          </PortfolioItem1>
          <PortfolioItem2>
            <Project.PortfolioProject
              title="Geoffrey Couët"
              description="Geoffrey Couët est une étoile montante du cinéma français. En 2014 un virage est amorcé dans sa carrière et il décide de me confier la création de son site personnel."
              figure="/img/portfolio/gcouet/gcouet-homepage.png"
              passThrough={true}
            />
          </PortfolioItem2>
          <PortfolioItem3>
            <Project.PortfolioProject
              figure="/img/portfolio/gcouet/gcouet-parcours.png"
              passThrough={false}
            />
          </PortfolioItem3>
          <PortfolioItem4>
            <Project.PortfolioProject
              figure="/img/portfolio/gcouet/gcouet-portfolio.png"
              passThrough={false}
            />
          </PortfolioItem4>
          <PortfolioItem5>
            <Project.PortfolioProject
              figure="/img/portfolio/gcouet/gcouet-portfolio-detail.png"
              passThrough={false}
            />
          </PortfolioItem5>
          <PortfolioItem6>
            <Project.PortfolioProject
              figure="/img/portfolio/gcouet/gcouet-portfolio-filtre.png"
              passThrough={false}
            />
          </PortfolioItem6>
          <PortfolioItem7>
            <Project.PortfolioProject
              figure="/img/portfolio/atsouhaits/ats-portfolio.png"
              passThrough={false}
            />
          </PortfolioItem7>
          <PortfolioItem8>
            <Project.PortfolioProject
              figure="/img/portfolio/atsouhaits/ats-homepage-full.png"
              passThrough={false}
            />
          </PortfolioItem8>
          <PortfolioItem9>
            <Project.PortfolioProject
              title="ATSouhaits"
              description="Aude Touati est décoratrice événementielle. Après plusieurs années d'exercice elle fait appel à mes services pour la refonte complète de son site. Un vent de fraicheur dans un style classy est adopté, le succès est au rendez-vous."
              figure="/img/portfolio/atsouhaits/ats-presentation.png"
              passThrough={true}
            />
          </PortfolioItem9>
        </Portfolio>
        {/* </Fullpage> */}
      </Layout>
    </ThemeProvider>
  )
}
