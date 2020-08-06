import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from './CarouselMedium'

const XXPartiesCommunesCarousel = () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          sort:{fields: name, order:ASC }
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Hebergement/XX/Parties_communes" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality:100, maxWidth: 1500) {
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
            relativeDirectory: { eq: "Hebergement/XX/Parties_communes" }
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
    <div style={{width:'max-content', margin:'40px auto'}}>
    <h4>Les parties communes</h4>
      <SlideShow images={allFile.mainImages.edges.map((image, index) => (
            <Img
            style={{ maxWidth:'1500px', width:'110vw', height:'auto'}}
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
      </div>
  );

  
}

export default XXPartiesCommunesCarousel;