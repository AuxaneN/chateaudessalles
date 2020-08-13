import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Agri3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Agriculture/agriculture_3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Un chemin encadré d'arbres mène a travers l'oliverae"/>
}

export default Agri3
