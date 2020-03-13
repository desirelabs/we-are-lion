import * as React from "react";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Grid } from "@material-ui/core";
import { SlideWrapper } from "./SlideWrapper";

export const HomeSlide3 = () => (
  <SlideWrapper>
    <Grid container spacing={10} alignItems="center" justify="center">
      <Grid item md={6} xs={12}>
        <Section.Wrapper>
          <Section.Title>Développement</Section.Title>
          <Section.Intro>
            Un beau design sans fondations techniques n’est que pure décoration.
          </Section.Intro>
          <Section.Content>
            Relever les défis posés par les problématiques métiers ne peut pas
            se faire sans de solides fondations techniques. C’est pourquoi, nous
            travaillons avec des outils modernes et adaptés aux problématiques
            actuelles de maintenance et de “scalabilité”.
          </Section.Content>
          <Section.Content>
            Chez Lion, nous aimons les outils open source ❤️
          </Section.Content>
        </Section.Wrapper>
      </Grid>
      <Grid item xs={6}>
        <Section.Wrapper>
          <Illustration src="/img/programming.svg" width="100%" />
        </Section.Wrapper>
      </Grid>
    </Grid>
  </SlideWrapper>
);
