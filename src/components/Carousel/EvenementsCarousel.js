import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from './Carousel'
import styled from 'styled-components'
import colors from "../colors";

const CarouselWrapper = styled.div`
position:relative;

  h1{
    position:absolute;
    top: 10%;
    width:max-content;


    padding:20px;
    padding-left:10vw;

    background-color: ${colors.beigeLowOpacity};
    text-align:right;
    font-weight:bolder;
    z-index:98;
  }
`

const EvenementsCarousel= () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          sort:{fields: name, order:ASC }
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Evenements/Carrousel" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality:90, maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        thumbnailImages: allFile(
          sort:{fields: name, order:ASC }
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Evenements/Carrousel" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 200) {
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
      <h1>
        Vivez vos plus beaux moments <br/> au château des Salles
      </h1>
      <SlideShow images={allFile.mainImages.edges.map((image, index) => (
            <Img
            style={{maxWidth:'1940px', width:'110vw', height:'auto', maxHeight:'700px'}}
            key={index}
              fluid={image.node.childImageSharp.fluid}
            />
        ))}  thumbnails={allFile.thumbnailImages.edges.map((image, index) => (
          <Img
          style={{maxWidth:'100px',width:'100px', height:'75px', maxHeight:'100px'}}
          key={index}
            fluid={image.node.childImageSharp.fluid}
          />
      ))}
      />
    </CarouselWrapper>
  );

  
}

export default EvenementsCarousel;