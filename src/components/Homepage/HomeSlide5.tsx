import * as React from "react";
import { Col, Container, Row } from "../ui/Layout";
import * as Section from "../ui/Section";
import { Illustration } from "../ui/Illustration";
import { Grid } from "@material-ui/core";

export const HomeSlide5 = () => (
  <Grid container spacing={10} alignItems="center">
    <Grid item md={6} xs={12}>
      <Section.Wrapper>
        <Section.Title>Conseil et accompagnement</Section.Title>
        <Section.Intro>
          La création d’une application mobile ou web ne doit pas devenir une
          problématique supplémentaire.
        </Section.Intro>
        <Section.Content>
          En tant qu’interlocuteur exclusif, il est de notre devoir de vous
          donner toutes les clés pour comprendre et réussir votre projet web.
          Nous dispensons notamment des formations dont le but est de vous
          sensibiliser ou de vous rendre autonome avec l’outil de publication
          que nous mettons à votre disposition.
        </Section.Content>
      </Section.Wrapper>
    </Grid>
    <Grid item xs={6}>
      <Section.Wrapper>
        <Illustration src="/img/consulting.svg" width="100%" />
      </Section.Wrapper>
    </Grid>
  </Grid>
);
