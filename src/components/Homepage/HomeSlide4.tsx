import * as React from "react";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Grid } from "@material-ui/core";
import { SlideWrapper } from "./SlideWrapper";

export const HomeSlide4 = () => (
  <SlideWrapper>
    <Grid container spacing={10} alignItems="center" justify="center">
      <Grid item md={6} xs={12}>
        <Section.Wrapper>
          <Section.Title>Search Engine Optimization (SEO)</Section.Title>
          <Section.Intro>
            Être trouvé sur les moteurs de recherche est un enjeu primordial
            pour générer trafic et ROI*.
          </Section.Intro>
          <Section.Content>
            Nous mettons en oeuvre nos savoir-faire pour amener vos prospects à
            vous trouver sur les principaux moteurs de recherche. Nous
            optimisons les tunnels de conversion et vous donnons les outils
            permettant d’identifier les attentes de votre audience.
          </Section.Content>
        </Section.Wrapper>
      </Grid>
      <Grid item xs={6}>
        <Section.Wrapper>
          <Illustration src="/img/seo-optimization.svg" width="100%" />
        </Section.Wrapper>
      </Grid>
    </Grid>
  </SlideWrapper>
);
