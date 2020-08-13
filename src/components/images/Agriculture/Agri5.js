import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Agri5 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Agriculture/agriculture_5.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Une poule fixe la caméra. Au fond se distinguent 3 autres poules."/>
}

export default Agri5
