import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from './Carousel'

const AccueilCarousel= () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
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
                fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        thumbnailImages: allFile(
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
                fluid(maxWidth: 100) {
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
      <SlideShow images={allFile.mainImages.edges.map((image, index) => (
            <Img
            style={{maxWidth:'1900px', width:'100vw', height:'auto', maxHeight:'637px'}}
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
  );

  
}

export default AccueilCarousel;