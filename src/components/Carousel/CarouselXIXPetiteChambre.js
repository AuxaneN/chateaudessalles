import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from './CarouselSmall'
import TarifsNuit from '../Tarifs/TarifsNuit'

const PetiteChambreCarousel= () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Hebergement/XIX/Petite_chambre" }
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
            relativeDirectory: { eq: "Hebergement/XIX/Petite_chambre" }
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
    <div className="carrousel">
      <h4>Petite Chambre - Lits Jumeaux</h4>
      <SlideShow images={allFile.mainImages.edges.map((image, index) => (
            <Img
            style={{maxWidth:'1900px', width:'800px', height:'auto'}}
            key={index}
              fluid={image.node.childImageSharp.fluid}
            />
        ))}  thumbnails={allFile.thumbnailImages.edges.map((image, index) => (
          <Img
          style={{maxWidth:'50px',width:'50px', height:'50px', maxHeight:'50px'}}
          key={index}
            fluid={image.node.childImageSharp.fluid}
          />
      ))}
      />
      <TarifsNuit prix="110€"/>
  </div>
  );

  
}

export default PetiteChambreCarousel;