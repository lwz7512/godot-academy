/**
 * dynamic game list based on reactjs/relfexjs components
 * @2020/10/22
 */
import React, { useEffect } from "react"
import { Layout, Icon, } from "@reflexjs/gatsby-theme-core"
import { Image } from "@reflexjs/gatsby-plugin-image"

import { 
  Button, Container, Grid, Section,
  H1, H2, P, Strong, Div, Span, 
} from "@reflexjs/components"

import DS from "../../content/data/games.yaml"


const Tag = ({name}) => (
  <Span bg="#1d953f" px="8px" py="2px" borderRadius="15px" color="#FFF" mr="10px" >
    {name}
  </Span>
)

const Card = ({ image, title, description, link, tags, ...props }) => (
  <Div {...props}>
    <Image src={image} height="200px" />
    <Div py="4|6|8">
      <H2 m="0" fontSize="2xl" style={{height: 30}} >
        {title}
      </H2>
      <P fontSize="14px" >
        {
          tags.map((t,i) => (<Tag name={t} key={i} />))
        }
      </P>
      <P fontSize="lg" style={{height: 80}} >{description}</P>
      <Button as="a" href={link} variant="primary">
        Source Code <Icon name="arrow-down" ml="2" />
      </Button>
    </Div>
  </Div>
)

const GamesPage = () => {

  useEffect(() => {
    console.log(">>>>>>> this is games page ...")
    // console.log(YAMLGames)
  }, [])

  return (
    <Layout>
      <Section py="4|8|12|20">
          <Container>
            {/* headline */}
            <Div textAlign="center|left" maxW="850px">
              <H1
                m="0"
                fontWeight="extrabold"
                fontSize="2.4rem|4.2rem|6rem"
                lineHeight="1"
              >
                <Span color="primary">Curated</Span> list of Games
              </H1>
              <P fontSize="lg|2xl" maxW="500px" >
                A collection of <Strong>interesting</Strong> and{" "}
                <Strong>opensource</Strong> games to help you go further.
              </P>
            </Div>
            {/* Game Gallery */}
            <Grid col="1|2|3" gap="6|8|10">
              {
                DS.games.map((item, idx) => (
                  <Card
                    key={idx}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    tags={item.tags}
                  />
                ))
              }
            </Grid>
          </Container>
      </Section>
    </Layout>
  )

}

export default GamesPage