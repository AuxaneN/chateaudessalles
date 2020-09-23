import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hist3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Histoire/histoire_4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Vue de l'intérieur de la chapelle. Au premier plan : deux bancs en bois. Au fond: un autel comportant une statue, un vase ainsi qu'un bougeoir."
    />
  )
}

export default Hist3
