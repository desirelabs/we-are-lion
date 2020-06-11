import React from "react";
import { Layout } from "../components/ui/Layout";
import { ContactForm } from "../components/ContactForm";
import { Slide, Left, Right } from "../components/Slide";
import styled from "styled-components";
import { H1, H3Light } from "../components/ui/Headings";
import { Text } from "../components/ui/Text";

const Phone = styled.a`
  color: ${props => props.theme.atoms.colors.primary};
  text-decoration: none;
  font-weight: bold;
`;

export default () => (
  <Layout isClear={false}>
    <Slide>
      <Left align="center">
        <H1>Contact</H1>
        <H3Light>
          Le plus court chemin vers la réalisation de vos objectifs passe par
          ici&nbsp;!
        </H3Light>
        <Text>
          Vous avez un projet, nous avons les moyens de le réaliser. Utilisez le
          formulaire ci-après, ou bien téléphonez-nous pour en parler
          directement.
          <br />
          <Phone href="tel:0695681604">06 95 68 16 04</Phone>
        </Text>
      </Left>
      <Right>
        <ContactForm />
      </Right>
    </Slide>
  </Layout>
);
