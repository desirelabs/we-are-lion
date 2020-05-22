import * as React from "react";
import * as Section from "../components/ui/Section";
import { Layout } from "../components/ui/Layout";
import { ContactForm } from "../components/ui/ContactForm";
import { Slide, Left, Right } from "../components/Slide";
import styled, { ThemeProps } from "styled-components";

const Phone = styled.a`
  color: ${props => props.theme.atoms.colors.primary};
  text-decoration: none;
  font-weight: bold;
`;

export default () => (
  <Layout isClear={false}>
    <Slide>
      <Left align="center">
        <Section.Title>Contact</Section.Title>
        <Section.Intro>
          Le plus court chemin vers la réalisation de vos objectifs passe par
          ici&nbsp;!
        </Section.Intro>
        <Section.Content>
          Vous avez un projet, nous avons les moyens de le réaliser. Utilsez le
          formulaire ci-après, ou bien téléphonez-nous pour en parler
          directement.
          <br />
          <Phone href="tel:0695681604">06 95 68 16 04</Phone>
        </Section.Content>
      </Left>
      <Right>
        <ContactForm />
      </Right>
    </Slide>
  </Layout>
);
