import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../components/ui/Layout";
import { Slide, Center, Right } from "../components/Slide";
import { Text } from "../components/ui/Text";
import { H1, H2 } from "../components/ui/Headings";

export default ({ data }) => {
  const {
    htmlTitle,
    description
  } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      <Helmet>
        <title>
          {data.site.siteMetadata.title} - {htmlTitle}
        </title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Layout isClear={true}>
        <Slide>
          <Center>
            <H1>Informations légales</H1>
            <H2>1. Présentation du site.</H2>
            <Text>
              En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
              la confiance dans l’économie numérique, il est précisé aux
              utilisateurs du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>{" "}
              l’identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi :
            </Text>
            <Text>
              <strong>Propriétaire</strong> : Franck LEBAS – Individuel
              510919970 – 5 boulevard Baptistin Cayol, l’escale Bat A<br />
              <strong>Créateur</strong> :{" "}
              <a href="Franck LEBAS">Franck LEBAS</a>
              <br />
              <strong>Responsable publication</strong> : Franck LEBAS –
              francklebas@protonmail.ch
              <br />
              Le responsable de la publication est une personne physique ou une
              personne morale.
              <br />
              <strong>Webmaster</strong> : Franck LEBAS –
              francklebas@protonmail.ch
              <br />
              <strong>Hébergeur</strong> : Netlify – 2325 3rd St #215, San
              Francisco, CA 94107, États-Unis
              <br />
            </Text>
            <H2>
              2. Conditions générales d’utilisation du site et des services
              proposés.
            </H2>
            <Text>
              L’utilisation du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>{" "}
              implique l’acceptation pleine et entière des conditions générales
              d’utilisation ci-après décrites. Ces conditions d’utilisation sont
              susceptibles d’être modifiées ou complétées à tout moment, les
              utilisateurs du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> sont
              donc invités à les consulter de manière régulière.
            </Text>
            <Text>
              Ce site est normalement accessible à tout moment aux utilisateurs.
              Une interruption pour raison de maintenance technique peut être
              toutefois décidée par Franck LEBAS, qui s’efforcera alors de
              communiquer préalablement aux utilisateurs les dates et heures de
              l’intervention.
            </Text>
            <Text>
              Le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> est
              mis à jour régulièrement par Franck LEBAS. De la même façon, les
              mentions légales peuvent être modifiées à tout moment : elles
              s’imposent néanmoins à l’utilisateur qui est invité à s’y référer
              le plus souvent possible afin d’en prendre connaissance.
            </Text>
            <H2>3. Description des services fournis.</H2>
            <Text>
              Le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> a pour
              objet de fournir une information concernant l’ensemble des
              activités de la société.
            </Text>
            <Text>
              Franck LEBAS s’efforce de fournir sur le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> des
              informations aussi précises que possible. Toutefois, il ne pourra
              être tenu responsable des omissions, des inexactitudes et des
              carences dans la mise à jour, qu’elles soient de son fait ou du
              fait des tiers partenaires qui lui fournissent ces informations.
            </Text>
            <Text>
              Toutes les informations indiquées sur le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> sont
              données à titre indicatif, et sont susceptibles d’évoluer. Par
              ailleurs, les renseignements figurant sur le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> ne
              sont pas exhaustifs. Ils sont donnés sous réserve de modifications
              ayant été apportées depuis leur mise en ligne.
            </Text>
            <H2>4. Limitations contractuelles sur les données techniques.</H2>
            <Text>Le site utilise la technologie JavaScript.</Text>
            <Text>
              Le site Internet ne pourra être tenu responsable de dommages
              matériels liés à l’utilisation du site. De plus, l’utilisateur du
              site s’engage à accéder au site en utilisant un matériel récent,
              ne contenant pas de virus et avec un navigateur de dernière
              génération mis-à-jour
            </Text>
            <H2>5. Propriété intellectuelle et contrefaçons.</H2>
            <Text>
              Franck LEBAS est propriétaire des droits de propriété
              intellectuelle ou détient les droits d’usage sur tous les éléments
              accessibles sur le site, notamment les textes, images, graphismes,
              logo, icônes, sons, logiciels.
            </Text>
            <Text>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de : Franck LEBAS.
            </Text>
            <Text>
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </Text>
            <H2>6. Limitations de responsabilité.</H2>
            <Text>
              Franck LEBAS ne pourra être tenue responsable des dommages directs
              et indirects causés au matériel de l’utilisateur, lors de l’accès
              au site www.we-are-lion.fr, et résultant soit de l’utilisation
              d’un matériel ne répondant pas aux spécifications indiquées au
              point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
            </Text>
            <Text>
              Franck LEBAS ne pourra également être tenue responsable des
              dommages indirects (tels par exemple qu’une perte de marché ou
              perte d’une chance) consécutifs à l’utilisation du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>.
            </Text>
            <Text>
              Des espaces interactifs (possibilité de poser des questions dans
              l’espace contact) sont à la disposition des utilisateurs. Franck
              LEBAS se réserve le droit de supprimer, sans mise en demeure
              préalable, tout contenu déposé dans cet espace qui contreviendrait
              à la législation applicable en France, en particulier aux
              dispositions relatives à la protection des données. Le cas
              échéant, Franck LEBAS se réserve également la possibilité de
              mettre en cause la responsabilité civile et/ou pénale de
              l’utilisateur, notamment en cas de message à caractère raciste,
              injurieux, diffamant, ou pornographique, quel que soit le support
              utilisé (texte, photographie…).
            </Text>
            <H2>7. Gestion des données personnelles.</H2>
            <Text>
              En France, les données personnelles sont notamment protégées par
              la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
              2004, l’article L. 226-13 du Code pénal et la Directive Européenne
              du 24 octobre 1995.
            </Text>
            <Text>
              À l’occasion de l’utilisation du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>,
              peuvent être recueillies : l’URL des liens par l’intermédiaire
              desquels l’utilisateur a accédé au site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>, le
              fournisseur d’accès de l’utilisateur, l’adresse de protocole
              Internet (IP) de l’utilisateur.
            </Text>
            <Text>
              {" "}
              En tout état de cause Franck LEBAS ne collecte des informations
              personnelles relatives à l’utilisateur que pour le besoin de
              certains services proposés par le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>.
              L’utilisateur fournit ces informations en toute connaissance de
              cause, notamment lorsqu’il procède par lui-même à leur saisie. Il
              est alors précisé à l’utilisateur du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>{" "}
              l’obligation ou non de fournir ces informations.
            </Text>
            <Text>
              Conformément aux dispositions des articles 38 et suivants de la
              loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
              fichiers et aux libertés, tout utilisateur dispose d’un droit
              d’accès, de rectification et d’opposition aux données personnelles
              le concernant, en effectuant sa demande écrite et signée,
              accompagnée d’une copie du titre d’identité avec signature du
              titulaire de la pièce, en précisant l’adresse à laquelle la
              réponse doit être envoyée.
            </Text>
            <Text>
              Aucune information personnelle de l’utilisateur du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> n’est
              publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou
              vendue sur un support quelconque à des tiers. Seule l’hypothèse du
              rachat de Franck LEBAS et de ses droits permettrait la
              transmission des dites informations à l’éventuel acquéreur qui
              serait à son tour tenu de la même obligation de conservation et de
              modification des données vis-à-vis de l’utilisateur du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>.
            </Text>
            <Text>
              Les bases de données sont protégées par les dispositions de la loi
              du 1ᵉʳ juillet 1998 transposant la directive 96/9 du 11 mars 1996
              relative à la protection juridique des bases de données.
            </Text>
            <H2>8. Liens hypertextes et cookies.</H2>
            <Text>
              Le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a>{" "}
              contient un certain nombre de liens hypertextes vers d’autres
              sites, mis en place avec l’autorisation de Franck LEBAS.
              Cependant, Franck LEBAS n’a pas la possibilité de vérifier le
              contenu des sites ainsi visités, et n’assumera en conséquence
              aucune responsabilité de ce fait.
            </Text>
            <Text>
              La navigation sur le site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> est
              susceptible de provoquer l’installation de cookie(s) sur
              l’ordinateur de l’utilisateur. Un cookie est un fichier de petite
              taille, qui ne permet pas l’identification de l’utilisateur, mais
              qui enregistre des informations relatives à la navigation d’un
              ordinateur sur un site. Les données ainsi obtenues visent à
              faciliter la navigation ultérieure sur le site, et ont également
              vocation à permettre diverses mesures de fréquentation.
            </Text>
            <Text>
              Le refus d’installation d’un cookie peut entraîner l’impossibilité
              d’accéder à certains services. L’utilisateur peut toutefois
              configurer son ordinateur de la manière suivante, pour refuser
              l’installation des cookies :
            </Text>
            <Text>
              Sous Internet Explorer : onglet outil (pictogramme en forme de
              rouage en haut a droite) / options internet. Cliquez sur
              Confidentialité et choisissez Bloquer tous les cookies. Validez
              sur Ok.
            </Text>
            <Text>
              Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le
              bouton Firefox, puis aller dans l’onglet Options. Cliquer sur
              l’onglet Vie privée. Paramétrez les Règles de conservation sur :
              utiliser les paramètres personnalisés pour l’historique. Enfin
              décochez-la pour désactiver les cookies.
            </Text>
            <Text>
              Sous Safari : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par un rouage). Sélectionnez
              Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section &laquo;Confidentialité&raquo;, cliquez sur Paramètres de
              contenu. Dans la section &laquo;Cookies&raquo;, vous pouvez
              bloquer les cookies.
            </Text>
            <Text>
              Sous Chrome : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par trois lignes horizontales).
              Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
              avancés. Dans la section &laquo;Confidentialité&raquo;, cliquez
              sur préférences. Dans l’onglet &laquo;Confidentialité&raquo;, vous
              pouvez bloquer les cookies.
            </Text>
            <H2>9. Droit applicable et attribution de juridiction.</H2>
            <Text>
              Tout litige en relation avec l’utilisation du site{" "}
              <a href="http://www.we-are-lion.fr/">www.we-are-lion.fr</a> est
              soumis au droit français. Il est fait attribution exclusive de
              juridiction aux tribunaux compétents de Paris.
            </Text>
            <H2>10. Les principales lois concernées.</H2>
            <Text>
              Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
              2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et
              aux libertés.
            </Text>
            <Text>
              {" "}
              Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie
              numérique.
            </Text>
            <H2>11. Lexique.</H2>
            <Text>
              Utilisateur : Internaute se connectant, utilisant le site
              susnommé.
            </Text>
            <Text>
              Informations personnelles : « les informations qui permettent,
              sous quelque forme que ce soit, directement ou non,
              l’identification des personnes physiques auxquelles elles
              s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </Text>
          </Center>
          <Right />
        </Slide>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { categories: { eq: "page" }, slug: { eq: "legal" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            htmlTitle
            description
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;
