import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hist1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Histoire/histoire_1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth:1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Une vue plongeante sur le château des Salles : bâtisses, champs et chemins sont visibles."/>
}

export default Hist1
