import * as React from "react";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Button } from "../ui/Button";
import { Grid } from "@material-ui/core";
import { SlideWrapper } from "./SlideWrapper";

export const HomeSlide1 = () => (
  <SlideWrapper>
    <Grid container spacing={10} alignItems="center" justify="center">
      <Grid item md={6} xs={12}>
        <Section.Wrapper>
          <Section.HeroTitle>Lion</Section.HeroTitle>
          <Section.HeroTitle2>une agence web</Section.HeroTitle2>
          <Section.HeroTitle3>une expertise totale</Section.HeroTitle3>
          <Button>Contactez-nous</Button>
        </Section.Wrapper>
      </Grid>
      <Grid item xs={6}>
        <Section.Wrapper>
          <Illustration src="/img/start-up.svg" width="100%" />
        </Section.Wrapper>
      </Grid>
    </Grid>
  </SlideWrapper>
);
