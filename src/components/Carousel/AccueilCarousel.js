import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from "./Carousel"
import styled from "styled-components"
import colors from "../colors"

const CarouselWrapper = styled.div`
  position: relative;
  height: auto;
  li {
    margin-bottom: 0px !important;
  }
  h1 {
    position: absolute;
    top: 10%;
    width: max-content;
    max-width: 100vw;

    box-sizing: border-box;

    padding: 20px;
    padding-left: 10vw;

    background-color: ${colors.beigeLowOpacity};
    text-align: right;
    font-weight: bolder;
    z-index: 98;
    @media screen AND (max-width: 700px) {
      padding-left: initial;
      width: 100vw;
      text-align: center;
      top: 0;
    }
  }
`
const StyledImg = styled(Img)`
  max-width: 1920px;
  width: 110vw;
  height: auto;
  max-height: 700px;
  position: relative;
  @media screen AND (max-width: 800px) {
    position: initial;
  }
`

const EvenementsCarousel = () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          sort: { fields: name, order: ASC }
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Accueil/carrousel" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <CarouselWrapper>
      <SlideShow
        images={allFile.mainImages.edges.map((image, index) => (
          <StyledImg key={index} fluid={image.node.childImageSharp.fluid} />
        ))}
        noArrows
      />
    </CarouselWrapper>
  )
}

export default EvenementsCarousel
