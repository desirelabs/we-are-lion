import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/ui/Layout";
import * as Section from "../components/ui/Section";
import { Slide, Left, Right } from "../components/Slide";
import { Illustration } from "../components/ui/Illustration";
import { Button } from "../components/ui/Button";

export default () => {
  const [isClear, setClear] = useState(false);

  return (
    <Layout isClear={isClear}>
      <Slide>
        <Left align="center">
          <Section.HeroTitle>Lion</Section.HeroTitle>
          <Section.HeroTitle2>une agence web</Section.HeroTitle2>
          <Section.HeroTitle3>une expertise totale</Section.HeroTitle3>
          <Button>Contactez-nous</Button>
        </Left>
        <Right>
          <Illustration src="/img/start-up.svg" width="100%" />
        </Right>
      </Slide>
      <Slide>
        <Left>
          <Section.Title>Design</Section.Title>
          <Section.Intro>
            On n’a souvent qu’une chance de faire bonne impression.
          </Section.Intro>
          <Section.Content>
            Nous aimons les visiteurs et c’est la raison pour laquelle nous
            travaillons à créer les expériences les plus agréables et
            accessibles possibles afin que vos visiteurs reviennent et parlent
            de vous.
          </Section.Content>
        </Left>
        <Right>
          <Illustration src="/img/strategy.svg" width="100%" />
        </Right>
      </Slide>
      <Slide>
        <Left>
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
        </Left>
        <Right>
          <Illustration src="/img/programming.svg" width="100%" />
        </Right>
      </Slide>
      <Slide>
        <Left>
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
        </Left>
        <Right>
          <Illustration src="/img/seo-optimization.svg" width="100%" />
        </Right>
      </Slide>
      <Slide>
        <Left>
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
        </Left>
        <Right>
          <Illustration src="/img/consulting.svg" width="100%" />
        </Right>
      </Slide>
    </Layout>
  );
};
