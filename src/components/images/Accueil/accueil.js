import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AccueilImages = () => {
  const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(jpeg)/" }
            relativeDirectory: { eq: "Accueil" }
          }
        ) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
  `)

return (
  <div>
    {data.allFile.edges.map((image, index) => (
      <Img
      key={index}
        fluid={image.node.childImageSharp.fluid}
        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
      />
    ))}
  </div>
)
}

export default AccueilImages
