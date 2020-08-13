import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hist0 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Histoire/histoire_0.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Une carte ancienne centrée sur Draguignan. Le centre de la ville est marqué en rouge."/>
}

export default Hist0
