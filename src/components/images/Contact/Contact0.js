import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Contact0 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Contact/contact_2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Baptiste et Julia sourient tout en regardant l'objectif."/>
}

export default Contact0
