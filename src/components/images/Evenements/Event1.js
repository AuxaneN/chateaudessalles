import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Event1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Evenements/Grande_salle/event_grandesalle_1.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Une grande salle aux murs blancs avec un sol en pierre carrelée et plusieurs lustres. Des invités sont assis autour d'une table longue."/>
}

export default Event1
