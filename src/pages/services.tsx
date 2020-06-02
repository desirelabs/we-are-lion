import React from "react";
import { Layout } from "../components/ui/Layout";
import { Slide, Left, Right } from "../components/Slide";
import { PageTitle } from "../components/ui/Title";
import * as Section from "../components/ui/Section";
import { Text } from "../components/ui/Text";
import { Illustration } from "../components/ui/Illustration";
import { Fullpage } from "../components/Fullpage";

export default () => {
  return (
    <Layout isClear={true}>
      <Fullpage>
        <Slide autoHeight>
          <Left>
            <PageTitle>Nos services</PageTitle>
            <Section.Title>Boutiques en ligne</Section.Title>
            <Text>
              Augmentez votre visibilité et vos ventes en ajoutant un nouveau
              canal de distribution via internet. Touchez un public cible grâce
              à un référencement optimisé. Fidélisez vos clients en menant des
              campagnes d’e-mail et sur les réseaux sociaux. Suivez l’évolution
              de vos ventes en temps réel et perfectionnez votre point de vente
              en ligne jour après jour.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/ecommerce.svg"
              width="100%"
              alt="Page de site e-commerce"
            />
          </Right>
        </Slide>

        <Slide autoHeight>
          <Left>
            <Section.Title>Applications web</Section.Title>
            <Text>
              Un projet application ? Nous avons les atouts pour le rendre réel.
              Nous proposons tous les outils pour créer des applications fiables
              et performantes, et qui répondent aux problématiques métiers qui
              sont les vôtres. De la gestion d’un intranet, en passant par la
              création d’un back office ainsi que de l’interface cliente, notre
              réactivité et nos savoir-faire en la matière sauront vous
              convaincre.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/webapp.svg"
              width="100%"
              alt="Page d’application web"
            />
          </Right>
        </Slide>

        <Slide autoHeight>
          <Left>
            <Section.Title>Sites vitrine</Section.Title>
            <Text>
              Une bonne vi­trine est une vi­trine at­trac­tive et qui offre une
              ex­pé­rience d’uti­li­sa­tion op­ti­male. Nous met­tons en œuvre
              nos sen­si­bi­li­tés gra­phiques et nos com­pé­tences en matière
              d’ex­pé­rience uti­li­sa­teur au ser­vice de votre mes­sage. Nous
              vous ai­dons à struc­tu­rer votre conte­nu en vue à le rendre le
              plus ac­ces­sible pos­sible mais aus­si le plus adé­quat avec les
              re­com­man­da­tions des mo­teurs de re­cherche.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/website.svg"
              width="100%"
              alt="Page de site internet"
            />
          </Right>
        </Slide>

        <Slide autoHeight>
          <Left>
            <Section.Title>Ateliers et sessions de formation</Section.Title>
            <Text>
              En tant que professionnels du web, nous vous accompagnons dans la
              prise en main de votre outil. Nous concevons les documents
              nécessaires afin de vous proposer un support utile lorsque vous
              devrez utiliser votre outil par vous-même. Nous animons également
              des ateliers interactifs afin de pouvoir répondre à toutes les
              questions que vous serez amené à poser sur l’usage de votre outil.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/formation.svg"
              width="100%"
              alt="Atelier de formation"
            />
          </Right>
        </Slide>

        <Slide autoHeight>
          <Left>
            <PageTitle>Inclus dans nos prestations</PageTitle>
            <Section.Title>Des solutions clés en main</Section.Title>
            <Text>
              De la conception à la mise en ligne, puis en suivi post démarrage,
              nous assurons toutes les étapes clés de la mise sur les rails de
              votre solution en ligne. Que ce soit l’hébergement, le nom de
              domaine, la conception et l’intégration graphique, la
              configuration de votre système d’informations ou encore la
              création de vos campagnes de Mailing, nous offrons un pa­nel de
              solutions structurées et éprouvées.
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/clearmind.svg"
              width="100%"
              alt="Liberté d’esprit"
            />
          </Right>
        </Slide>

        <Slide autoHeight>
          <Left>
            <Section.Title>
              Une offre structurée et tarif sur mesure
            </Section.Title>
            <Text>
              Chaque professionnel est unique et possède ses propres
              problématiques. Nous vous écoutons et détaillons avec vous ces
              dernières afin de vous faire une offre pertinente et adaptée à vos
              besoins et votre budget. Tout dans nos devis est calibré au plus
              juste pour ne jamais vous faire payer plus, tout en vous offrant
              le maximum. Nous vous proposerons toujours les solutions les plus
              pertinentes en termes de correspondance à vos besoins et de tarif.
              Chez Lion, pas de mauvaise surprise !
            </Text>
          </Left>
          <Right>
            <Illustration
              src="/img/devis.svg"
              width="100%"
              alt="Serrage de mains"
            />
          </Right>
        </Slide>
      </Fullpage>
    </Layout>
  );
};
