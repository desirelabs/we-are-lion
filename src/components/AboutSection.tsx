import { GridBG } from "./ui/Grid"
import { TextBlock } from "./ui/TextBlock"
import { Text } from "./ui/Text"
import { SectionTitle, Title } from "./ui/Title"
import * as React from "react"
import { Col, Container, Row } from "./ui/Layout"

export const AboutSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col col={4}>
          <GridBG colored="LIGHT">
            <TextBlock text="Notre philosophie" colored={true} />
          </GridBG>
        </Col>
        <Col col={8}>
          <Row>
            <Col col={6}>
              <GridBG colored="WHITE">
                <Text decorated={true}>
                  <blockquote>
                    "Chaque profession possède ses propres problématiques.
                    Produire une application ne doit pas en être une
                    supplémentaire."
                  </blockquote>
                </Text>
              </GridBG>
            </Col>
            <Col col={6}>
              <GridBG colored="LIGHT" />
            </Col>
          </Row>
          <Row>
            <Col col={6}>
              <GridBG colored="COLORED">
                <Title>
                  we use the best
                  <br />
                  web tools
                </Title>
              </GridBG>
            </Col>
            <Col col={6}>
              <GridBG colored="WHITE">
                <Text decorated={true}>
                  <blockquote>
                    "Nous sommes convaincus qu’une expérience visuelle vaut plus
                    que mille mots. Nous plaçons la création visuelle et
                    l’expérience utilisateur au premier plan de nos
                    réalisations. La technique sert de fondations à celle-ci."
                  </blockquote>
                </Text>
              </GridBG>
            </Col>
          </Row>
        </Col>
      </Row>
      {/*<Row>*/}
      {/*  <Col col={4}>*/}
      {/*    <GridBG colored="DARK">*/}
      {/*      <TextBlock text="What we do" colored={false} />*/}
      {/*    </GridBG>*/}
      {/*  </Col>*/}
      {/*  <Col col={8}>*/}
      {/*    <GridBG colored="WHITE">*/}
      {/*      <Text decorated={true}>*/}
      {/*        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,*/}
      {/*        lorem quis bibendum auctor, nisi elit consequat ipsum, nec*/}
      {/*        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate*/}
      {/*        cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec*/}
      {/*        tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae*/}
      {/*        erat consequat auctor eu in elit. Class aptent taciti sociosqu ad*/}
      {/*        litora torquent per conubia nostra, per inceptos himenaeos. Mauris*/}
      {/*        in erat justo. Nullam ac urna eu felis dapibus condimentum sit*/}
      {/*        amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin*/}
      {/*        condimentum fermentum nunc. Etiam pharetra, erat sed fermentum*/}
      {/*        feugiat, velit mauris egestas quam, ut aliquam massa nisl quis*/}
      {/*        neque. Suspendisse in orci enim.*/}
      {/*      </Text>*/}
      {/*    </GridBG>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </Container>
  )
}
