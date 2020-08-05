import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from './CarouselMedium'

const PartiesCommunesCarousel = () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Hebergement/XIX/Parties_communes" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality:90, maxWidth: 1400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        thumbnailImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Hebergement/XIX/Parties_communes" }
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
            style={{ maxWidth: '1400px',width:'1400px', height:'auto'}}
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

export default PartiesCommunesCarousel;