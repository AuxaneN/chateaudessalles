import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Accueil3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Accueil/accueil3.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Un bassin artificiel prend toute la largeur. L'eau est calme. Juste derrière se trouve des arbres."/>
}

export default Accueil3
