import * as React from "react";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Grid } from "@material-ui/core";

export const HomeSlide2 = () => (
  <Grid container spacing={10} alignItems="center">
    <Grid item md={6} xs={12}>
      <Section.Wrapper>
        <Section.Title>Design</Section.Title>
        <Section.Intro>
          On n’a souvent qu’une chance de faire bonne impression.
        </Section.Intro>
        <Section.Content>
          Nous aimons les visiteurs et c’est la raison pour laquelle nous
          travaillons à créer les expériences les plus agréables et accessibles
          possibles afin que vos visiteurs reviennent et parlent de vous.
        </Section.Content>
      </Section.Wrapper>
    </Grid>
    <Grid item xs={6}>
      <Section.Wrapper>
        <Illustration src="/img/strategy.svg" width="100%" />
      </Section.Wrapper>
    </Grid>
  </Grid>
);
