import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlideShow from "./CarouselMediumSquare"

const GiteCarousel = () => {
  const allFile = useStaticQuery(
    graphql`
      query {
        mainImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Evenements/Cuve" }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        thumbnailImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Evenements/Cuve" }
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
    <div style={{ width: "max-content", margin: "40px auto" }}>
      <SlideShow
        images={allFile.mainImages.edges.map((image, index) => (
          <Img
            style={{ maxWidth: "1100px", width: "110vw", height: "auto" }}
            key={index}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
        thumbnails={allFile.thumbnailImages.edges.map((image, index) => (
          <Img
            style={{
              maxWidth: "150px",
              width: "150px",
              height: "150px",
              maxHeight: "150px",
            }}
            key={index}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      />
    </div>
  )
}

export default GiteCarousel
